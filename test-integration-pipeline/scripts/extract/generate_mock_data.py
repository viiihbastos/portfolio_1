#!/usr/bin/env python3
"""
Mock Test Data Generator

This script generates mock test data to simulate Kneat Gx test logs.
It creates JSON files with test run and test step information.
"""

import json
import random
import uuid
from datetime import datetime, timedelta
import os
import argparse

def generate_test_step(test_run_id, step_number):
    """Generate a mock test step"""
    status = random.choices(["PASS", "FAIL", "SKIP"], weights=[0.80, 0.15, 0.05])[0]
    
    start_time = datetime.now() - timedelta(minutes=random.randint(5, 60))
    duration = random.randint(1, 300)  # Duration in seconds
    end_time = start_time + timedelta(seconds=duration)
    
    step_data = {
        "step_id": str(uuid.uuid4()),
        "test_run_id": test_run_id,
        "step_number": step_number,
        "description": f"Test Step {step_number}",
        "status": status,
        "start_time": start_time.isoformat(),
        "end_time": end_time.isoformat(),
        "duration_seconds": duration,
        "error_message": None if status != "FAIL" else "Assertion error: Expected value not found",
        "screenshot": f"screenshot_{step_number}.png" if random.random() < 0.3 else None
    }
    
    return step_data

def generate_test_run(environment="staging"):
    """Generate a mock test run with steps"""
    test_run_id = str(uuid.uuid4())
    current_time = datetime.now()
    sprint = f"Sprint {random.randint(10, 20)}"
    
    # Generate between 5 and 20 steps per test run
    num_steps = random.randint(5, 20)
    steps = [generate_test_step(test_run_id, i+1) for i in range(num_steps)]
    
    # Determine overall status based on steps
    if any(step["status"] == "FAIL" for step in steps):
        status = "FAIL"
    elif all(step["status"] == "SKIP" for step in steps):
        status = "SKIP"
    else:
        status = "PASS"
    
    # Calculate total duration
    total_duration = sum(step["duration_seconds"] for step in steps)
    
    test_run = {
        "test_run_id": test_run_id,
        "test_suite": random.choice(["Login", "User Management", "Reports", "Data Import", "Audit Trail"]),
        "environment": environment,
        "sprint": sprint,
        "status": status,
        "start_time": (current_time - timedelta(seconds=total_duration)).isoformat(),
        "end_time": current_time.isoformat(),
        "duration_seconds": total_duration,
        "executed_by": random.choice(["automation", "jenkins", "github-actions"]),
        "total_steps": num_steps,
        "passed_steps": sum(1 for step in steps if step["status"] == "PASS"),
        "failed_steps": sum(1 for step in steps if step["status"] == "FAIL"),
        "skipped_steps": sum(1 for step in steps if step["status"] == "SKIP"),
        "steps": steps
    }
    
    return test_run

def main():
    parser = argparse.ArgumentParser(description='Generate mock test data')
    parser.add_argument('--count', type=int, default=10, help='Number of test runs to generate')
    parser.add_argument('--output', type=str, default='../data/raw', help='Output directory')
    parser.add_argument('--environment', type=str, default='staging', 
                        choices=['dev', 'staging', 'prod'], help='Test environment')
    
    args = parser.parse_args()
    
    # Create output directory if it doesn't exist
    output_dir = os.path.join(os.path.dirname(os.path.abspath(__file__)), '..', '..', 'data', 'raw')
    os.makedirs(output_dir, exist_ok=True)
    
    # Generate test runs
    for i in range(args.count):
        test_run = generate_test_run(args.environment)
        
        # Save test run to file
        filename = f"test_run_{test_run['test_run_id']}.json"
        filepath = os.path.join(output_dir, filename)
        
        with open(filepath, 'w') as f:
            json.dump(test_run, f, indent=2)
        
        print(f"Generated test run: {filename}")
    
    print(f"Generated {args.count} test runs in {output_dir}")

if __name__ == "__main__":
    main()
