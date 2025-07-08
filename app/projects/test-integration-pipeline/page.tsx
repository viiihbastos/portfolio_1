"use client"

import { Navbar } from "@/components/navbar"
import { SocialLinks } from "@/components/social-links"
import Link from "next/link"
import { ChevronLeft, ExternalLink } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useEffect } from "react"

export default function TestIntegrationPipelinePage() {
  // Configuration for smooth scrolling when the page loads
  useEffect(() => {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (this: HTMLAnchorElement, e) {
        e.preventDefault();
        const targetId = this.getAttribute('href')?.substring(1);
        if (targetId) {
          const targetElement = document.getElementById(targetId);
          if (targetElement) {
            targetElement.scrollIntoView({
              behavior: 'smooth'
            });
          }
        }
      });
    });
  }, []);

  return (
    <main className="min-h-screen bg-black text-white">
      <Navbar />
      
      <article className="py-20 container mx-auto px-4 max-w-4xl">
        <div className="mb-8">
          <Link href="/projects" className="inline-flex items-center text-blue-400 hover:text-blue-300 transition-colors">
            <ChevronLeft className="h-5 w-5 mr-1" />
            Back to Projects
          </Link>
        </div>
        
        <header className="mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-green-500">
            Test Integration Pipeline
          </h1>
          
          <div className="relative h-80 rounded-xl overflow-hidden mb-8">
            <img 
              src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&h=600&q=80" 
              alt="Test Integration Pipeline" 
              className="object-cover w-full h-full"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-70"></div>
          </div>
          
          <div className="flex flex-wrap gap-3 mb-8">
            <span className="bg-blue-900/30 text-blue-300 px-3 py-1 rounded-full text-sm">Python</span>
            <span className="bg-blue-900/30 text-blue-300 px-3 py-1 rounded-full text-sm">PostgreSQL</span>
            <span className="bg-blue-900/30 text-blue-300 px-3 py-1 rounded-full text-sm">Docker</span>
            <span className="bg-blue-900/30 text-blue-300 px-3 py-1 rounded-full text-sm">Prometheus</span>
            <span className="bg-blue-900/30 text-blue-300 px-3 py-1 rounded-full text-sm">Grafana</span>
            <span className="bg-blue-900/30 text-blue-300 px-3 py-1 rounded-full text-sm">Data Pipeline</span>
          </div>
          
          <div className="prose prose-invert max-w-none">
            <p className="text-xl text-gray-300 leading-relaxed text-justify">
              A data integration pipeline for collecting, transforming, and storing automated test results, 
              providing real-time visibility for QA teams through interactive Grafana dashboards and Prometheus alerts.
            </p>
          </div>
          
          <div className="mt-8 flex flex-wrap gap-4">
            <Button asChild className="bg-blue-600 hover:bg-blue-700 transition-all duration-300 shadow-md hover:shadow-lg">
              <a href="#project-overview">Overview</a>
            </Button>
            <Button asChild className="bg-green-600 hover:bg-green-700 transition-all duration-300 shadow-md hover:shadow-lg">
              <a href="#architecture">Architecture</a>
            </Button>
            <Button asChild className="bg-purple-600 hover:bg-purple-700 transition-all duration-300 shadow-md hover:shadow-lg">
              <a href="#implementation">Implementation</a>
            </Button>
          </div>
        </header>
        
        <div className="space-y-16 text-gray-300">
          <section>
            <h2 id="project-overview" className="text-3xl font-bold mb-6 text-blue-400">Project Overview</h2>
            <div className="prose prose-invert max-w-none">
              <h3 className="text-2xl font-bold mb-4 text-blue-300">Context and Challenge</h3>
              <p className="text-justify">
                In modern software development environments, real-time visibility into automated test results 
                is essential to ensure product quality and quickly identify issues. This project was developed to 
                provide a comprehensive solution for collecting, processing, and visualizing automated test data, enabling 
                QA and development teams to monitor test status and identify trends and problems.
              </p>
              
              <h3 className="text-2xl font-bold mb-4 mt-8 text-blue-300">Solution</h3>
              <p className="text-justify">
                I created an end-to-end data integration pipeline that collects test results, processes them using Python scripts, 
                stores them in a PostgreSQL database, and makes them available for visualization in real-time Grafana dashboards. 
                The system also implements monitoring with Prometheus to track the health of the pipeline and generate alerts when 
                certain thresholds are reached, such as test failure rates exceeding predefined limits.
              </p>
            </div>
          </section>
          
          <section>
            <h2 id="architecture" className="text-3xl font-bold mb-6 text-blue-400">Architecture</h2>
            <div className="prose prose-invert max-w-none">
              <p className="text-justify">
                The system is built with a modern architecture based on Docker containers, which facilitates deployment and scalability. 
                The architecture is divided into clearly defined components:
              </p>
              
              <h3 className="text-2xl font-bold mb-4 mt-8 text-blue-300">Main Components</h3>
              
              <ol>
                <li><strong>Data Extraction:</strong> Python scripts to extract test data (simulating Kneat Gx logs) and scheduled 
                processing using cron jobs.</li>
                <li><strong>Data Processing:</strong> Transformation scripts to convert raw data into structured formats.</li>
                <li><strong>Data Storage:</strong> PostgreSQL database to store structured test data, with tables 
                for Test_Runs and Test_Steps.</li>
                <li><strong>Data Visualization:</strong> Grafana dashboards for real-time monitoring, Prometheus for metric 
                collection and alerts for failure rates that exceed thresholds.</li>
              </ol>
              
              <h3 className="text-2xl font-bold mb-4 mt-8 text-blue-300">Data Flow</h3>
              <p className="text-justify">
                The data flow through the system follows these steps:
              </p>
              <ol>
                <li>Test logs are generated and stored as raw JSON/CSV files in the <code>data/raw/</code> folder.</li>
                <li>Transformation scripts process the raw data, extracting relevant information and calculating metrics.</li>
                <li>Processed data is loaded into the PostgreSQL database using specialized Python scripts.</li>
                <li>The metrics exporter collects statistics from the database and exposes them to Prometheus.</li>
                <li>Prometheus collects these metrics at regular intervals for monitoring and alerts.</li>
                <li>Grafana dashboards visualize the collected data, providing insights into trends and issues.</li>
              </ol>
            </div>
          </section>
          
          <section>
            <h2 id="implementation" className="text-3xl font-bold mb-6 text-blue-400">Implementation</h2>
            <div className="prose prose-invert max-w-none">
              <h3 className="text-2xl font-bold mb-4 text-blue-300">Technologies Used</h3>
              
              <ul>
                <li><strong>Python:</strong> For data extraction, transformation, and loading scripts.</li>
                <li><strong>PostgreSQL:</strong> For structured data storage.</li>
                <li><strong>Docker:</strong> For containerization and orchestration of all components.</li>
                <li><strong>Docker Compose:</strong> For simplified multi-container environment management.</li>
                <li><strong>Prometheus:</strong> For metrics collection and alert generation.</li>
                <li><strong>Grafana:</strong> For creating interactive dashboards.</li>
                <li><strong>AlertManager:</strong> For alert management and routing.</li>
              </ul>
              
              <h3 className="text-2xl font-bold mb-4 mt-8 text-blue-300">Directory Structure</h3>
              <p>The project is structured as follows:</p>
              <pre>
                {`test-integration-pipeline/
├── data/                # Raw and processed data storage
│   ├── raw/             # Raw test logs (JSON/CSV)
│   └── processed/       # Processed files
├── scripts/             # Python scripts
│   ├── extract/         # Data extraction scripts
│   ├── transform/       # Transformation scripts
│   └── load/            # Database loading scripts
├── docker/              # Docker configurations for services
│   ├── postgres/        # PostgreSQL configuration
│   ├── grafana/         # Grafana configuration
│   ├── prometheus/      # Prometheus configuration
│   └── metrics-exporter/ # Custom metrics exporter
├── dashboards/          # Grafana dashboard JSON definitions
└── docker-compose.yml   # Docker Compose orchestration`}
              </pre>
              
              <h3 className="text-2xl font-bold mb-4 mt-8 text-blue-300">Dashboards and Monitoring</h3>
              <p className="text-justify">
                The Grafana dashboards provide detailed visualizations of test results, including:
              </p>
              <ul>
                <li>Success/failure rate of tests per run</li>
                <li>Average test execution time</li>
                <li>Most frequently failed tests</li>
                <li>Performance trends over time</li>
                <li>Details of specific failures to facilitate debugging</li>
              </ul>
              
              <p className="text-justify">
                The Prometheus alert system is configured to notify teams when:
              </p>
              <ul>
                <li>The test failure rate exceeds a configurable threshold</li>
                <li>Test execution time increases significantly</li>
                <li>Failures occur in critical pipeline components</li>
              </ul>
            </div>
          </section>
          
          <section>
            <h2 id="benefits" className="text-3xl font-bold mb-6 text-blue-400">Benefits and Impact</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-gray-800/60 border border-gray-700 rounded-lg p-6">
                <h3 className="text-xl font-semibold mb-3 text-green-400">Rapid Issue Detection</h3>
                <p>Real-time visualization of test results allowing teams to identify and resolve issues more quickly.</p>
              </div>
              <div className="bg-gray-800/60 border border-gray-700 rounded-lg p-6">
                <h3 className="text-xl font-semibold mb-3 text-green-400">Data-Driven Insights</h3>
                <p>Detailed analysis reveals patterns and trends in test results, helping teams prioritize improvements.</p>
              </div>
              <div className="bg-gray-800/60 border border-gray-700 rounded-lg p-6">
                <h3 className="text-xl font-semibold mb-3 text-green-400">Proactive Alerts</h3>
                <p>Automatic notifications when critical metrics exceed predefined thresholds, enabling immediate action.</p>
              </div>
              <div className="bg-gray-800/60 border border-gray-700 rounded-lg p-6">
                <h3 className="text-xl font-semibold mb-3 text-green-400">Improved Collaboration</h3>
                <p>Shared dashboards facilitate communication between development, QA, and operations teams.</p>
              </div>
            </div>
          </section>
          
          <section className="mt-16">
            <h2 className="text-3xl font-bold mb-6 text-blue-400">Conclusion</h2>
            <p className="text-justify text-lg">
              This test integration pipeline demonstrates how modern data and visualization tools can be combined 
              to create a comprehensive quality monitoring system. The solution not only provides real-time visibility 
              into the state of automated tests but also establishes a solid foundation for continuous data-driven 
              quality assurance practices.
            </p>
            
            <div className="mt-12 flex justify-center">
              <Button asChild className="bg-gradient-to-r from-blue-600 to-green-500 hover:from-blue-700 hover:to-green-600 text-white transition-all duration-300 shadow-lg hover:shadow-xl">
                <Link href="/projects" className="flex items-center px-6 py-3">
                  <ChevronLeft className="mr-2 h-5 w-5" />
                  View Other Projects
                </Link>
              </Button>
            </div>
          </section>
        </div>
      </article>
      
      <SocialLinks />
    </main>
  )
}
