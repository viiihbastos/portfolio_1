#!/usr/bin/env python3
"""
Pipeline Orchestrator

This script coordinates the execution of all components in the test data integration pipeline.
It handles:
1. Generating mock test data
2. Processing data with PySpark
3. Loading data to PostgreSQL
4. Starting the metrics exporter

For production use, these steps would typically be triggered by a scheduler or CI/CD system.
"""

import os
import sys
import subprocess
import argparse
import time
import logging

# Configure logging
logging.basicConfig(
    level=logging.INFO,
    format='%(asctime)s - %(name)s - %(levelname)s - %(message)s'
)
logger = logging.getLogger(__name__)

# Get the absolute path to the project root
PROJECT_ROOT = os.path.dirname(os.path.abspath(__file__))

def run_command(command, cwd=PROJECT_ROOT):
    """Run a shell command and log output"""
    logger.info(f"Running command: {command}")
    process = subprocess.Popen(
        command,
        shell=True,
        cwd=cwd,
        stdout=subprocess.PIPE,
        stderr=subprocess.PIPE,
        universal_newlines=True
    )
    stdout, stderr = process.communicate()
    
    if process.returncode != 0:
        logger.error(f"Command failed with exit code {process.returncode}")
        logger.error(f"Error output: {stderr}")
        return False
    
    logger.info(f"Command output: {stdout}")
    return True

def generate_mock_data(num_runs=20, environment="staging"):
    """Generate mock test data"""
    logger.info(f"Generating {num_runs} mock test runs for {environment} environment")
    script_path = os.path.join(PROJECT_ROOT, "scripts", "extract", "generate_mock_data.py")
    
    command = f"python {script_path} --count {num_runs} --environment {environment}"
    return run_command(command)

def process_data_with_spark():
    """Process data with PySpark"""
    logger.info("Processing test data with PySpark")
    script_path = os.path.join(PROJECT_ROOT, "scripts", "transform", "process_test_data.py")
    
    command = f"python {script_path}"
    return run_command(command)

def load_data_to_postgres():
    """Load processed data to PostgreSQL"""
    logger.info("Loading processed data to PostgreSQL")
    script_path = os.path.join(PROJECT_ROOT, "scripts", "load", "load_to_postgres.py")
    
    command = f"python {script_path}"
    return run_command(command)

def start_metrics_exporter():
    """Start the metrics exporter"""
    logger.info("Starting metrics exporter")
    script_path = os.path.join(PROJECT_ROOT, "scripts", "metrics_exporter.py")
    
    command = f"python {script_path} --host 0.0.0.0 --port 9090"
    return run_command(command)

def main():
    """Main entry point"""
    parser = argparse.ArgumentParser(description='Run the test data integration pipeline')
    parser.add_argument('--generate-data', action='store_true', help='Generate mock test data')
    parser.add_argument('--process-data', action='store_true', help='Process data with PySpark')
    parser.add_argument('--load-data', action='store_true', help='Load data to PostgreSQL')
    parser.add_argument('--start-exporter', action='store_true', help='Start metrics exporter')
    parser.add_argument('--run-all', action='store_true', help='Run all steps')
    parser.add_argument('--num-runs', type=int, default=20, help='Number of test runs to generate')
    parser.add_argument('--environment', default='staging', 
                       choices=['dev', 'staging', 'prod'], help='Test environment')
    
    args = parser.parse_args()
    
    # Run all steps if specified, otherwise run only the specified steps
    if args.run_all or args.generate_data:
        if not generate_mock_data(args.num_runs, args.environment):
            logger.error("Failed to generate mock data")
            return 1
    
    if args.run_all or args.process_data:
        if not process_data_with_spark():
            logger.error("Failed to process data with Spark")
            return 1
    
    if args.run_all or args.load_data:
        if not load_data_to_postgres():
            logger.error("Failed to load data to PostgreSQL")
            return 1
    
    if args.run_all or args.start_exporter:
        # This will block until terminated
        if not start_metrics_exporter():
            logger.error("Failed to start metrics exporter")
            return 1
    
    return 0

if __name__ == "__main__":
    sys.exit(main())
