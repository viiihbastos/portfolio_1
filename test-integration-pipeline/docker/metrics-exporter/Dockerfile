FROM python:3.9-slim

WORKDIR /app

# Install dependencies
COPY requirements.txt .
RUN pip install --no-cache-dir -r requirements.txt

# Copy metrics exporter script
COPY scripts/metrics_exporter.py .

# Expose port for Prometheus to scrape
EXPOSE 9090

# Run the exporter
CMD ["python", "metrics_exporter.py", "--host", "0.0.0.0", "--port", "9090"]
