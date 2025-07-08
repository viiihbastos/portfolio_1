#!/usr/bin/env python3
"""
Load Test Data to PostgreSQL

This script loads processed test data from Parquet files into PostgreSQL tables.
"""

import os
import sys
import pandas as pd
import psycopg2
from psycopg2.extensions import ISOLATION_LEVEL_AUTOCOMMIT
import argparse
import pyarrow.parquet as pq

def create_database_if_not_exists(dbname, user, password, host, port):
    """Create the database if it doesn't exist"""
    # Connect to PostgreSQL server
    conn = psycopg2.connect(
        user=user,
        password=password,
        host=host,
        port=port,
        database="postgres"
    )
    conn.set_isolation_level(ISOLATION_LEVEL_AUTOCOMMIT)
    
    # Create a cursor
    cursor = conn.cursor()
    
    # Check if database exists
    cursor.execute("SELECT 1 FROM pg_catalog.pg_database WHERE datname = %s", (dbname,))
    exists = cursor.fetchone()
    
    if not exists:
        cursor.execute(f"CREATE DATABASE {dbname}")
        print(f"Database {dbname} created")
    else:
        print(f"Database {dbname} already exists")
    
    # Close connection
    cursor.close()
    conn.close()

def create_tables(conn):
    """Create the necessary tables if they don't exist"""
    cursor = conn.cursor()
    
    # Create test_runs table
    cursor.execute("""
    CREATE TABLE IF NOT EXISTS test_runs (
        test_run_id VARCHAR(255) PRIMARY KEY,
        test_suite VARCHAR(255),
        environment VARCHAR(50),
        sprint VARCHAR(50),
        status VARCHAR(20),
        start_time TIMESTAMP,
        end_time TIMESTAMP,
        duration_seconds INTEGER,
        executed_by VARCHAR(100),
        total_steps INTEGER,
        passed_steps INTEGER,
        failed_steps INTEGER,
        skipped_steps INTEGER
    )
    """)
    
    # Create test_steps table
    cursor.execute("""
    CREATE TABLE IF NOT EXISTS test_steps (
        step_id VARCHAR(255) PRIMARY KEY,
        test_run_id VARCHAR(255) REFERENCES test_runs(test_run_id),
        step_number INTEGER,
        description TEXT,
        status VARCHAR(20),
        start_time TIMESTAMP,
        end_time TIMESTAMP,
        duration_seconds INTEGER,
        error_message TEXT,
        screenshot VARCHAR(255)
    )
    """)
    
    conn.commit()
    cursor.close()
    print("Tables created successfully")

def load_parquet_to_postgres(parquet_file, table_name, conn):
    """Load data from Parquet file to PostgreSQL table"""
    # Read Parquet file
    table = pq.read_table(parquet_file)
    df = table.to_pandas()
    
    # Generate column definition
    columns = ', '.join(df.columns)
    placeholders = ', '.join(['%s'] * len(df.columns))
    
    # Generate INSERT query
    query = f"INSERT INTO {table_name} ({columns}) VALUES ({placeholders}) ON CONFLICT DO NOTHING"
    
    # Execute query for each row
    cursor = conn.cursor()
    records = df.values.tolist()
    
    # Convert None to NULL for PostgreSQL
    for i, record in enumerate(records):
        records[i] = [None if pd.isna(val) else val for val in record]
    
    # Execute batch insert
    cursor.executemany(query, records)
    conn.commit()
    cursor.close()
    
    print(f"Loaded {len(records)} records into {table_name}")

def main():
    """Main entry point"""
    parser = argparse.ArgumentParser(description='Load test data to PostgreSQL')
    parser.add_argument('--host', default='localhost', help='PostgreSQL host')
    parser.add_argument('--port', default='5432', help='PostgreSQL port')
    parser.add_argument('--user', default='postgres', help='PostgreSQL user')
    parser.add_argument('--password', default='postgres', help='PostgreSQL password')
    parser.add_argument('--dbname', default='test_results', help='PostgreSQL database name')
    parser.add_argument('--input-dir', help='Directory containing processed Parquet files')
    
    args = parser.parse_args()
    
    # Use default input directory if not specified
    if not args.input_dir:
        script_dir = os.path.dirname(os.path.abspath(__file__))
        args.input_dir = os.path.join(script_dir, '..', '..', 'data', 'processed')
    
    # Create database if it doesn't exist
    create_database_if_not_exists(args.dbname, args.user, args.password, args.host, args.port)
    
    # Connect to the database
    conn = psycopg2.connect(
        dbname=args.dbname,
        user=args.user,
        password=args.password,
        host=args.host,
        port=args.port
    )
    
    try:
        # Create tables
        create_tables(conn)
        
        # Load test runs
        test_runs_parquet = os.path.join(args.input_dir, "test_runs")
        load_parquet_to_postgres(test_runs_parquet, "test_runs", conn)
        
        # Load test steps
        test_steps_parquet = os.path.join(args.input_dir, "test_steps")
        load_parquet_to_postgres(test_steps_parquet, "test_steps", conn)
        
    finally:
        conn.close()

if __name__ == "__main__":
    main()
