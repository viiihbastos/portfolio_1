-- Initialize database schema for test results

-- Create test_runs table
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
);

-- Create test_steps table
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
);

-- Create indexes for performance
CREATE INDEX idx_test_runs_environment ON test_runs(environment);
CREATE INDEX idx_test_runs_sprint ON test_runs(sprint);
CREATE INDEX idx_test_runs_status ON test_runs(status);
CREATE INDEX idx_test_steps_test_run_id ON test_steps(test_run_id);
CREATE INDEX idx_test_steps_status ON test_steps(status);

-- Create view for test run success rates by environment and sprint
CREATE OR REPLACE VIEW test_run_success_rates AS
SELECT 
    environment,
    sprint,
    COUNT(*) AS total_runs,
    SUM(CASE WHEN status = 'PASS' THEN 1 ELSE 0 END) AS passed_runs,
    ROUND(SUM(CASE WHEN status = 'PASS' THEN 1 ELSE 0 END) * 100.0 / COUNT(*), 2) AS success_rate
FROM test_runs
GROUP BY environment, sprint;

-- Create view for average test durations
CREATE OR REPLACE VIEW test_run_avg_durations AS
SELECT
    environment,
    sprint,
    ROUND(AVG(duration_seconds), 2) AS avg_duration_seconds
FROM test_runs
GROUP BY environment, sprint;
