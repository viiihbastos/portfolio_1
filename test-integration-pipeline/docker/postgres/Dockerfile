FROM postgres:14

ENV POSTGRES_DB=test_results
ENV POSTGRES_USER=postgres
ENV POSTGRES_PASSWORD=postgres

# Copy initialization scripts
COPY init.sql /docker-entrypoint-initdb.d/

# Expose the PostgreSQL port
EXPOSE 5432

# Add labels
LABEL maintainer="QA Test Data Integration Team"
LABEL description="PostgreSQL database for storing test results"
