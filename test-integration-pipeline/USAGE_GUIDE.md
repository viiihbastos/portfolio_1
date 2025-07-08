# Test Integration Pipeline Usage Guide

This guide explains how to use the automated data integration testing pipeline for processing Kneat Gx test results.

## Overview

The pipeline provides an end-to-end solution for:
- Collecting test execution data
- Processing and transforming the data using Apache Spark
- Storing results in PostgreSQL
- Visualizing metrics with Grafana
- Setting up alerts for test quality issues

## Prerequisites

- Docker and Docker Compose
- Python 3.8 or higher
- PostgreSQL client (optional, for direct DB access)

## Quick Start

1. **Clone the repository**

2. **Install Python dependencies**
   ```bash
   pip install -r requirements.txt
   ```

3. **Generate mock test data**
   ```bash
   python scripts/extract/generate_mock_data.py --count 50 --environment staging
   ```

4. **Process the data using PySpark**
   ```bash
   python scripts/transform/process_test_data.py
   ```

5. **Load data into PostgreSQL**
   ```bash
   python scripts/load/load_to_postgres.py
   ```

6. **Start the metrics exporter**
   ```bash
   python scripts/metrics_exporter.py
   ```

7. **Launch the entire stack with Docker Compose**
   ```bash
   docker-compose up -d
   ```

## Docker Services

The Docker Compose stack includes:

- **PostgreSQL**: Database for storing test results
  - Port: 5432
  - Credentials: postgres/postgres

- **Apache Spark**: For data processing
  - Spark Master UI: http://localhost:8080
  - Spark Master: spark://localhost:7077

- **Prometheus**: For metrics collection and alerting
  - UI: http://localhost:9090

- **AlertManager**: For handling and routing alerts
  - UI: http://localhost:9093

- **Grafana**: For dashboards and visualization
  - UI: http://localhost:3000
  - Default credentials: admin/admin
  - Pre-configured dashboard: Test Metrics Dashboard

## Running the Full Pipeline

For convenience, a pipeline orchestrator script is provided:

```bash
# Run all steps sequentially
python run_pipeline.py --run-all

# Run individual steps
python run_pipeline.py --generate-data --num-runs 20 --environment staging
python run_pipeline.py --process-data
python run_pipeline.py --load-data
python run_pipeline.py --start-exporter
```

## Dashboards

The Grafana instance comes with a pre-configured dashboard:
- **Test Metrics Dashboard**: Shows test success rates, duration statistics, and failure counts by environment

## Alerts

The system is configured with the following alerts:
- **High Failure Rate**: Triggers when the test success rate in the staging environment falls below 95%
- **Long Test Execution**: Triggers when average test duration exceeds 300 seconds

Alerts are sent via email to `qa-team@example.com` (configurable in `docker/alertmanager/config.yml`).

## Data Schema

**Test Runs Table**:
```sql
CREATE TABLE test_runs (
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
);
```

**Test Steps Table**:
```sql
CREATE TABLE test_steps (
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
);
```

## Customizing the Pipeline

### Adding New Data Sources

To add a new data source:
1. Create a new script in `scripts/extract/`
2. Ensure it outputs JSON or CSV files to the `data/raw/` directory
3. Update the PySpark processing script if the schema changes

### Adding New Metrics

To add new metrics:
1. Modify `scripts/metrics_exporter.py` to include your new metrics
2. Update the Prometheus configuration if needed
3. Create or update Grafana dashboards to visualize the new metrics

### Modifying Alerts

To modify alerts:
1. Edit `docker/prometheus/alert_rules.yml` to change alert conditions
2. Edit `docker/alertmanager/config.yml` to change alert routing or notification methods
