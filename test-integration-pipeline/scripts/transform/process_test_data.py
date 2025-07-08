#!/usr/bin/env python3
"""
Test Data Processor

This script uses PySpark to process raw test data JSON files,
transform them into structured Test_Runs and Test_Steps tables,
and save them as Parquet files.
"""

import os
import sys
from pyspark.sql import SparkSession
from pyspark.sql.functions import col, explode, from_json, lit
from pyspark.sql.types import StructType, StructField, StringType, IntegerType, TimestampType

def create_spark_session():
    """Create a Spark session"""
    return SparkSession.builder \
        .appName("Test Data Processor") \
        .config("spark.sql.execution.arrow.pyspark.enabled", "true") \
        .config("spark.driver.memory", "2g") \
        .master("local[*]") \
        .getOrCreate()

def process_test_runs(spark, input_path, output_path):
    """Process test run data and save as Parquet"""
    # Define schema for test runs
    test_run_schema = spark.read.json(input_path, multiLine=True).schema
    
    # Read all JSON files
    df = spark.read.schema(test_run_schema).json(input_path, multiLine=True)
    
    # Extract test runs (exclude steps array to avoid duplication)
    test_runs_df = df.drop("steps")
    
    # Write test runs to Parquet
    test_runs_output = os.path.join(output_path, "test_runs")
    test_runs_df.write.mode("overwrite").parquet(test_runs_output)
    
    print(f"Processed {test_runs_df.count()} test runs and saved to {test_runs_output}")
    
    # Extract test steps
    test_steps_df = df.select(
        col("test_run_id"),
        explode(col("steps")).alias("step")
    ).select(
        col("step.step_id"),
        col("test_run_id"),
        col("step.step_number"),
        col("step.description"),
        col("step.status"),
        col("step.start_time").cast("timestamp"),
        col("step.end_time").cast("timestamp"),
        col("step.duration_seconds"),
        col("step.error_message"),
        col("step.screenshot")
    )
    
    # Write test steps to Parquet
    test_steps_output = os.path.join(output_path, "test_steps")
    test_steps_df.write.mode("overwrite").parquet(test_steps_output)
    
    print(f"Processed {test_steps_df.count()} test steps and saved to {test_steps_output}")
    
    return test_runs_df, test_steps_df

def main():
    """Main entry point"""
    # Get paths from arguments or use defaults
    if len(sys.argv) > 1:
        input_path = sys.argv[1]
    else:
        # Default paths relative to script location
        script_dir = os.path.dirname(os.path.abspath(__file__))
        input_path = os.path.join(script_dir, '..', '..', 'data', 'raw', '*.json')
    
    if len(sys.argv) > 2:
        output_path = sys.argv[2]
    else:
        script_dir = os.path.dirname(os.path.abspath(__file__))
        output_path = os.path.join(script_dir, '..', '..', 'data', 'processed')
    
    # Create Spark session
    spark = create_spark_session()
    
    try:
        # Process test data
        process_test_runs(spark, input_path, output_path)
        
        # Show some statistics
        test_runs = spark.read.parquet(os.path.join(output_path, "test_runs"))
        test_steps = spark.read.parquet(os.path.join(output_path, "test_steps"))
        
        print("\nTest Run Statistics:")
        test_runs.groupBy("status").count().show()
        
        print("\nTest Step Statistics:")
        test_steps.groupBy("status").count().show()
        
    finally:
        # Stop Spark session
        spark.stop()

if __name__ == "__main__":
    main()
