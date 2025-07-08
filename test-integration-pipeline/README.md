# Data Integration Testing Pipeline

This project implements an end-to-end data pipeline for collecting, transforming, and storing test validation results automatically. It provides real-time visibility into test execution results for QA teams.

## Architecture

The pipeline consists of the following components:

1. **Data Extraction**
   - Python scripts to extract mock test data (simulating Kneat Gx logs)
   - Scheduled extraction using cron jobs

2. **Data Processing**
   - Apache Spark (PySpark) for data transformation
   - Conversion of raw data to structured Parquet format

3. **Data Storage**
   - PostgreSQL database for storing structured test data
   - Tables for Test_Runs and Test_Steps

4. **Data Visualization**
   - Grafana dashboards for real-time monitoring
   - Prometheus for metrics collection
   - Alerts for test failure rates exceeding thresholds

## Directory Structure

```
test-integration-pipeline/
├── data/                # Raw and processed data storage
│   ├── raw/             # Raw test logs (JSON/CSV)
│   └── processed/       # Processed Parquet files
├── scripts/             # Python and PySpark scripts
│   ├── extract/         # Data extraction scripts
│   ├── transform/       # PySpark transformation scripts
│   └── load/            # Database loading scripts
├── docker/              # Docker configurations for services
│   ├── postgres/        # PostgreSQL configuration
│   ├── spark/           # Spark configuration
│   ├── grafana/         # Grafana configuration
│   └── prometheus/      # Prometheus configuration
├── dashboards/          # Grafana dashboard JSON definitions
└── docker-compose.yml   # Docker Compose for orchestration
```

## Setup Instructions

See individual component README files for detailed setup instructions.

## Requirements

- Docker and Docker Compose
- Python 3.8+
- PostgreSQL
- Apache Spark
- Grafana
- Prometheus
