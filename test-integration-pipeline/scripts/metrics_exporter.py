#!/usr/bin/env python3
"""
Test Metrics Exporter

This script queries the PostgreSQL database for test metrics and exposes them
through a metrics endpoint for Prometheus to scrape.
"""

import time
import os
import psycopg2
import argparse
from flask import Flask, Response
import logging

# Configure logging
logging.basicConfig(
    level=logging.INFO,
    format='%(asctime)s - %(name)s - %(levelname)s - %(message)s'
)
logger = logging.getLogger(__name__)

# Initialize Flask app
app = Flask(__name__)

# Database connection parameters
DB_HOST = os.environ.get('DB_HOST', 'localhost')
DB_PORT = os.environ.get('DB_PORT', '5432')
DB_NAME = os.environ.get('DB_NAME', 'test_results')
DB_USER = os.environ.get('DB_USER', 'postgres')
DB_PASS = os.environ.get('DB_PASS', 'postgres')

def get_db_connection():
    """Get a connection to the PostgreSQL database"""
    return psycopg2.connect(
        host=DB_HOST,
        port=DB_PORT,
        database=DB_NAME,
        user=DB_USER,
        password=DB_PASS
    )

def query_test_metrics():
    """Query test metrics from the database"""
    metrics = {}
    conn = None
    try:
        conn = get_db_connection()
        cursor = conn.cursor()
        
        # Query success rate by environment and sprint
        cursor.execute("""
            SELECT environment, sprint, 
                   ROUND(SUM(CASE WHEN status = 'PASS' THEN 1 ELSE 0 END) * 100.0 / COUNT(*), 2) as success_rate
            FROM test_runs
            GROUP BY environment, sprint
            ORDER BY environment, sprint;
        """)
        success_rates = cursor.fetchall()
        
        # Query average test duration by environment and sprint
        cursor.execute("""
            SELECT environment, sprint, 
                   ROUND(AVG(duration_seconds), 2) as avg_duration
            FROM test_runs
            GROUP BY environment, sprint
            ORDER BY environment, sprint;
        """)
        avg_durations = cursor.fetchall()
        
        # Query failure counts by environment
        cursor.execute("""
            SELECT environment, COUNT(*) as failure_count
            FROM test_runs
            WHERE status = 'FAIL'
            GROUP BY environment;
        """)
        failure_counts = cursor.fetchall()
        
        # Store metrics
        metrics['success_rates'] = success_rates
        metrics['avg_durations'] = avg_durations
        metrics['failure_counts'] = failure_counts
        
        cursor.close()
    except Exception as e:
        logger.error(f"Database error: {e}")
        return {}
    finally:
        if conn:
            conn.close()
    
    return metrics

@app.route('/metrics')
def metrics():
    """Expose metrics for Prometheus"""
    try:
        metrics_data = query_test_metrics()
        
        # Build Prometheus metrics output
        output = []
        
        # Success rate metrics
        output.append('# HELP test_run_success_rate Success rate of test runs')
        output.append('# TYPE test_run_success_rate gauge')
        for env, sprint, rate in metrics_data.get('success_rates', []):
            output.append(f'test_run_success_rate{{environment="{env}",sprint="{sprint}"}} {rate}')
        
        # Average duration metrics
        output.append('# HELP test_run_avg_duration Average duration of test runs in seconds')
        output.append('# TYPE test_run_avg_duration gauge')
        for env, sprint, duration in metrics_data.get('avg_durations', []):
            output.append(f'test_run_avg_duration{{environment="{env}",sprint="{sprint}"}} {duration}')
        
        # Failure count metrics
        output.append('# HELP test_run_failure_count Count of failed test runs')
        output.append('# TYPE test_run_failure_count gauge')
        for env, count in metrics_data.get('failure_counts', []):
            output.append(f'test_run_failure_count{{environment="{env}"}} {count}')
        
        return Response('\n'.join(output), mimetype='text/plain')
    except Exception as e:
        logger.error(f"Error generating metrics: {e}")
        return Response("Error generating metrics", status=500)

def main():
    """Main entry point"""
    parser = argparse.ArgumentParser(description='Test Metrics Exporter')
    parser.add_argument('--host', default='0.0.0.0', help='Host to bind to')
    parser.add_argument('--port', default=9090, type=int, help='Port to bind to')
    parser.add_argument('--db-host', default='localhost', help='PostgreSQL host')
    parser.add_argument('--db-port', default='5432', help='PostgreSQL port')
    parser.add_argument('--db-name', default='test_results', help='PostgreSQL database name')
    parser.add_argument('--db-user', default='postgres', help='PostgreSQL user')
    parser.add_argument('--db-pass', default='postgres', help='PostgreSQL password')
    
    args = parser.parse_args()
    
    # Set environment variables for database connection
    os.environ['DB_HOST'] = args.db_host
    os.environ['DB_PORT'] = args.db_port
    os.environ['DB_NAME'] = args.db_name
    os.environ['DB_USER'] = args.db_user
    os.environ['DB_PASS'] = args.db_pass
    
    # Run the Flask app
    logger.info(f"Starting metrics exporter on {args.host}:{args.port}")
    app.run(host=args.host, port=args.port)

if __name__ == "__main__":
    main()
