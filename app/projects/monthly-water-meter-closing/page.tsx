"use client"

import { Navbar } from "@/components/navbar"
import { SocialLinks } from "@/components/social-links"
import Link from "next/link"
import { ChevronLeft, ExternalLink } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useEffect } from "react"

export default function MonthlyWaterMeterClosingPage() {
  // Configuração para rolagem suave quando a página carrega
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
            Monthly Water Meter Closing System
          </h1>
          
          <div className="relative h-80 rounded-xl overflow-hidden mb-8">
            <img 
              src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&h=600&q=80" 
              alt="Monthly Water Meter Closing System" 
              className="object-cover w-full h-full"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-70"></div>
          </div>
          
          <div className="flex flex-wrap gap-3 mb-8">
            <span className="bg-blue-900/30 text-blue-300 px-3 py-1 rounded-full text-sm">Azure Databricks</span>
            <span className="bg-blue-900/30 text-blue-300 px-3 py-1 rounded-full text-sm">PySpark</span>
            <span className="bg-blue-900/30 text-blue-300 px-3 py-1 rounded-full text-sm">SQL</span>
            <span className="bg-blue-900/30 text-blue-300 px-3 py-1 rounded-full text-sm">Apache Airflow</span>
            <span className="bg-blue-900/30 text-blue-300 px-3 py-1 rounded-full text-sm">Power BI</span>
          </div>
          
          <div className="prose prose-invert max-w-none">
            <p className="text-xl text-gray-300 leading-relaxed text-justify">
              An enterprise-scale data processing architecture handling 15M+ monthly meter readings with Delta Lake and Databricks Runtime 10.4, reducing processing latency from 168 hours to 2 hours while implementing Zero-ETL patterns that eliminated data inconsistencies and generated €13M in annual operational savings.
            </p>
          </div>
          
          <div className="mt-8 flex flex-wrap gap-4">
            <Button asChild className="bg-blue-600 hover:bg-blue-700 transition-all duration-300 shadow-md hover:shadow-lg">
              <a href="#key-achievements">Key Achievements</a>
            </Button>
            <Button asChild className="bg-green-600 hover:bg-green-700 transition-all duration-300 shadow-md hover:shadow-lg">
              <a href="#technical-details">Technical Details</a>
            </Button>
            <Button asChild className="bg-purple-600 hover:bg-purple-700 transition-all duration-300 shadow-md hover:shadow-lg">
              <a href="#tools-technologies">Tools & Technologies</a>
            </Button>
          </div>
        </header>
        
        <div className="space-y-16 text-gray-300">
          <section>
            <h2 id="project-overview" className="text-3xl font-bold mb-6 text-blue-400">Project Overview</h2>
            <div className="prose prose-invert max-w-none">
              <h3 id="project-overview" className="text-2xl font-bold mb-4 text-blue-300">Context & Challenge</h3>
              <p className="text-justify">
                Major water utility managing 1.4M meters crippled by 7-day manual processing cycle across 11 disconnected systems. Critical issues: €2.2M annual revenue leakage, 23% calculation error rate, and inefficient maintenance affecting over 15 million meter readings monthly from various sources in different formats. Company losing €145M in disputed revenue due to data quality problems.
              </p>
              
              <h3 className="text-2xl font-bold mb-4 mt-8 text-blue-300">Solution & Architecture</h3>
              <p className="text-justify">
                Engineered enterprise-grade lakehouse architecture with Azure Databricks and Delta Lake using advanced medallion approach. Built high-performance PySpark framework with Z-ordered tables and optimized joins processing over 15 million meter readings monthly. Implemented scalable ingestion using Databricks Auto Loader with standardized schemas and automated quality checks. Orchestrated 42 interconnected DAGs with custom Airflow operators handling complex dependencies and automatic recovery.
              </p>
              
              <h3 id="implementation" className="text-2xl font-bold mb-4 mt-8 text-blue-300">Implementation & Quality</h3>
              <p className="text-justify">
                Developed CDC connectors with fault-tolerant SAP integration. Implemented Great Expectations framework with 78 validation rules achieving 99.97% data accuracy. Built specialized PySpark pipelines with delta-based incremental processing reducing computation by 87%. Created Power BI dashboards with H3 geospatial indexing enabling location-based analytics across 16 distribution zones.
              </p>
              
              <h3 id="impact" className="text-2xl font-bold mb-4 mt-8 text-blue-300">Impact & Metrics</h3>
              <p className="text-justify">
                Slashed processing time: 7 days to 2 hours (98%). Recovered €1.9M revenue in first year. Reduced field visits by 23% while improving first-time fixes by 31%. Decreased non-revenue water by 4.3% saving 2.1M m³ annually. Improved calculation accuracy from 77% to 99.97% on €145M annual revenue. Eliminated 8 FTE positions while achieving 40x query acceleration. Total annual value: €13M in savings and recovered revenue.
              </p>
            </div>
          </section>
          
          <section>
            <h2 id="key-achievements" className="text-3xl font-bold mb-6 text-blue-400">Key Achievements</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-gray-800/60 border border-gray-700 rounded-lg p-6">
                <h3 className="text-xl font-semibold mb-3 text-green-400">Distributed Processing Optimization</h3>
                <p>Engineered custom PySpark transformations with 8-node optimized clusters that process 15M records in 2 hours (97% faster), using dynamic allocation and spot instances for cost efficiency.</p>
              </div>
              <div className="bg-gray-800/60 border border-gray-700 rounded-lg p-6">
                <h3 className="text-xl font-semibold mb-3 text-green-400">Data Pipeline Automation</h3>
                <p>Designed fault-tolerant pipelines with 42 Airflow DAGs and 178 tasks with comprehensive retry mechanisms, reducing manual interventions by 98% and enabling €13M annual operational savings.</p>
              </div>
              <div className="bg-gray-800/60 border border-gray-700 rounded-lg p-6">
                <h3 className="text-xl font-semibold mb-3 text-green-400">Data Quality Framework</h3>
                <p>Implemented a multi-stage data validation framework with 85+ quality rules, schema enforcement, statistical anomaly detection, and automated reconciliation processes achieving 99.9% accuracy.</p>
              </div>
              <div className="bg-gray-800/60 border border-gray-700 rounded-lg p-6">
                <h3 className="text-xl font-semibold mb-3 text-green-400">Scalable Architecture</h3>
                <p>Built a solution that scales dynamically to handle peak processing needs without additional infrastructure costs.</p>
              </div>
            </div>
          </section>
          
          <section>
            <h2 id="technical-details" className="text-3xl font-bold mb-6 text-blue-400">Technical Details</h2>
            <div className="prose prose-invert max-w-none">
              <h3>Architecture & Data Flow</h3>
              <p className="text-justify">
                The solution follows a modern data lakehouse architecture with the following components:
              </p>
              <ul className="text-justify">
                <li><strong>Data Ingestion Layer:</strong> Custom connectors to integrate with various source systems including SAP, legacy databases, and field collection devices.</li>
                <li><strong>Data Storage Layer:</strong> Azure Data Lake Storage Gen2 organized in a medallion architecture (Bronze/Silver/Gold).</li>
                <li><strong>Processing Layer:</strong> Azure Databricks with PySpark for large-scale data transformations and complex business logic implementation.</li>
                <li><strong>Orchestration Layer:</strong> Apache Airflow DAGs for scheduling, dependency management, and failure handling.</li>
                <li><strong>Serving Layer:</strong> Combination of Power BI dashboards and SQL-based APIs for downstream consumption.</li>
              </ul>
              
              <h3>Key Technical Challenges</h3>
              <p>
                The project presented several significant technical challenges:
              </p>
              <ol>
                <li><strong>Distributed SQL Optimization:</strong> Implemented advanced query optimization techniques including predicate pushdown, broadcast joins for dimension tables, AQE (Adaptive Query Execution), and dynamic partition pruning, reducing execution time of complex aggregations by 82%.</li>
                <li><strong>Data Quality Pipeline:</strong> Created a multi-stage validation framework with Great Expectations integration, statistical profiling using PySpark's ML libraries, and a custom reconciliation engine that tracks data lineage through the entire processing chain.</li>
                <li><strong>Storage Optimization:</strong> Implemented Delta Lake with optimized file sizing (target 256MB parquet files), Z-ordering on high-cardinality columns, data skipping, and compaction policies that reduced storage costs by 45% while improving query performance.</li>
                <li><strong>Technical Debt Resolution:</strong> Designed extensible transformation framework with abstraction layers that enabled migration from legacy stored procedures to distributed processing without changing business logic or downstream dependencies.</li>
              </ol>
            </div>
          </section>
          
          <section>
            <h2 id="tools-technologies" className="text-3xl font-bold mb-6 text-blue-400">Tools & Technologies</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
              <div className="bg-gray-800/60 border border-gray-700 rounded-lg p-6">
                <h3 className="text-xl font-semibold mb-3">Cloud Platform</h3>
                <ul className="list-disc pl-5 space-y-2">
                  <li>Microsoft Azure</li>
                  <li>Azure Databricks</li>
                  <li>Azure Data Lake Storage</li>
                  <li>Azure Key Vault</li>
                </ul>
              </div>
              <div className="bg-gray-800/60 border border-gray-700 rounded-lg p-6">
                <h3 className="text-xl font-semibold mb-3">Data Processing</h3>
                <ul className="list-disc pl-5 space-y-2">
                  <li>Apache Spark (PySpark)</li>
                  <li>Delta Lake</li>
                  <li>SQL</li>
                  <li>Python</li>
                </ul>
              </div>
              <div className="bg-gray-800/60 border border-gray-700 rounded-lg p-6">
                <h3 className="text-xl font-semibold mb-3">Orchestration & Monitoring</h3>
                <ul className="list-disc pl-5 space-y-2">
                  <li>Apache Airflow</li>
                  <li>Azure Log Analytics</li>
                  <li>Azure Application Insights</li>
                  <li>Custom monitoring dashboards</li>
                </ul>
              </div>
              <div className="bg-gray-800/60 border border-gray-700 rounded-lg p-6">
                <h3 className="text-xl font-semibold mb-3">Data Visualization</h3>
                <ul className="list-disc pl-5 space-y-2">
                  <li>Power BI</li>
                  <li>Custom web dashboards</li>
                  <li>Automated reporting</li>
                </ul>
              </div>
              <div className="bg-gray-800/60 border border-gray-700 rounded-lg p-6">
                <h3 className="text-xl font-semibold mb-3">DevOps & Version Control</h3>
                <ul className="list-disc pl-5 space-y-2">
                  <li>Git</li>
                  <li>Azure DevOps</li>
                  <li>CI/CD pipelines</li>
                  <li>Infrastructure as Code</li>
                </ul>
              </div>
              <div className="bg-gray-800/60 border border-gray-700 rounded-lg p-6">
                <h3 className="text-xl font-semibold mb-3">Methodologies</h3>
                <ul className="list-disc pl-5 space-y-2">
                  <li>Agile/Scrum</li>
                  <li>DataOps</li>
                  <li>Test-Driven Development</li>
                  <li>Documentation as Code</li>
                </ul>
              </div>
            </div>
          </section>
          
          <section>
            <h2 id="challenges-solutions" className="text-3xl font-bold mb-6 text-blue-400">Challenges & Solutions</h2>
            <div className="space-y-8">
              <div>
                <h3 className="text-xl font-semibold mb-3 text-yellow-400">Challenge: Data Volume & Variety</h3>
                <div className="bg-gray-800/60 border border-gray-700 rounded-lg p-6">
                  <p className="mb-4">
                    The system needed to process over 15 million meter readings monthly, coming from various sources in different formats and with inconsistent quality.
                  </p>
                  <h4 className="text-lg font-medium mb-2 text-green-400">Solution:</h4>
                  <p>
                    Implemented a scalable ingestion framework using Databricks Auto Loader and Delta Lake tables. Created standardized schemas and automated quality checks at the ingestion layer. Used Spark's distributed processing capabilities to parallelize transformations across large clusters during peak processing times.
                  </p>
                </div>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold mb-3 text-yellow-400">Challenge: Complex Business Rules</h3>
                <div className="bg-gray-800/60 border border-gray-700 rounded-lg p-6">
                  <p className="mb-4">
                    Water billing involves hundreds of complex business rules that vary by customer segment, consumption bands, meter types, and regional regulations.
                  </p>
                  <h4 className="text-lg font-medium mb-2 text-green-400">Solution:</h4>
                  <p>
                    Developed a rules engine that externalized business logic from code, allowing non-technical users to maintain rules. Implemented versioning for business rules to maintain historical accuracy. Created a comprehensive testing framework to validate rule changes against known outcomes.
                  </p>
                </div>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold mb-3 text-yellow-400">Challenge: System Reliability & Error Handling</h3>
                <div className="bg-gray-800/60 border border-gray-700 rounded-lg p-6">
                  <p className="mb-4">
                    The monthly closing process is business-critical and must complete reliably within tight timeframes, despite potential data issues or system failures.
                  </p>
                  <h4 className="text-lg font-medium mb-2 text-green-400">Solution:</h4>
                  <p>
                    Implemented comprehensive error handling with detailed logging and notification systems. Designed the system with fault tolerance, allowing for partial processing and graceful recovery. Used Airflow's retry mechanisms and implemented circuit breakers for external dependencies. Created detailed operational runbooks and monitoring dashboards.
                  </p>
                </div>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold mb-3 text-yellow-400">Challenge: Performance Optimization</h3>
                <div className="bg-gray-800/60 border border-gray-700 rounded-lg p-6">
                  <p className="mb-4">
                    Initial implementation showed bottlenecks in several critical transformations, threatening the 2-hour processing window requirement.
                  </p>
                  <h4 className="text-lg font-medium mb-2 text-green-400">Solution:</h4>
                  <p>
                    Profiled the entire pipeline to identify bottlenecks. Optimized Spark configurations, partitioning strategies, and join operations. Implemented caching for frequently accessed reference data. Used Delta Lake's Z-ordering to accelerate filtering operations. Refactored critical SQL procedures for better performance.
                  </p>
                </div>
              </div>
            </div>
          </section>
          


        </div>
        
        <div className="mt-16 pt-8 border-t border-gray-800">
          <Link href="/projects" className="inline-flex items-center text-blue-400 hover:text-blue-300 transition-colors">
            <ChevronLeft className="h-5 w-5 mr-1" />
            Back to All Projects
          </Link>
        </div>
      </article>
      
      <SocialLinks />
    </main>
  )
}
