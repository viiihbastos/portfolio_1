"use client"

import { Navbar } from "@/components/navbar"
import { SocialLinks } from "@/components/social-links"
import Link from "next/link"
import { ChevronLeft, ExternalLink } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useEffect } from "react"

export default function AppLogsDataLakePage() {
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
            Application Logs Data Lake
          </h1>
          
          <div className="relative h-80 rounded-xl overflow-hidden mb-8">
            <img 
              src="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&h=600&q=80" 
              alt="Application Logs Data Lake" 
              className="object-cover w-full h-full"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-70"></div>
          </div>
          
          <div className="flex flex-wrap gap-3 mb-8">
            <span className="bg-blue-900/30 text-blue-300 px-3 py-1 rounded-full text-sm">Azure Storage</span>
            <span className="bg-blue-900/30 text-blue-300 px-3 py-1 rounded-full text-sm">Delta Lake</span>
            <span className="bg-blue-900/30 text-blue-300 px-3 py-1 rounded-full text-sm">Azure Databricks</span>
            <span className="bg-blue-900/30 text-blue-300 px-3 py-1 rounded-full text-sm">Apache Airflow</span>
            <span className="bg-blue-900/30 text-blue-300 px-3 py-1 rounded-full text-sm">Power BI</span>
          </div>
          
          <div className="prose prose-invert max-w-none">
            <p className="text-xl text-gray-300 leading-relaxed text-justify">
              A scalable log analytics platform processing 25TB+ monthly data from 40+ distributed systems using Delta Lake, Autoloader, and adaptive storage optimization. Achieved 40% query acceleration and 65% storage cost reduction while enabling standardized schema governance and ML-ready data structures.
            </p>
          </div>
          
          <div className="mt-8 flex flex-wrap gap-4">
            <Button asChild className="bg-blue-600 hover:bg-blue-700 transition-all duration-300 shadow-md hover:shadow-lg">
              <a href="#project-overview">Project Overview</a>
            </Button>
            <Button asChild className="bg-green-600 hover:bg-green-700 transition-all duration-300 shadow-md hover:shadow-lg">
              <a href="#implementation">Implementation</a>
            </Button>
            <Button asChild className="bg-purple-600 hover:bg-purple-700 transition-all duration-300 shadow-md hover:shadow-lg">
              <a href="#impact">Impact & Metrics</a>
            </Button>
          </div>
        </header>
        
        <div className="space-y-16 text-gray-300">
          <section>
            <h2 id="project-overview" className="text-3xl font-bold mb-6 text-blue-400">Project Overview</h2>
            <div className="prose prose-invert max-w-none">
              <h3 id="project-overview" className="text-2xl font-bold mb-4 text-blue-300">Context & Challenge</h3>
              <p className="text-justify">
                Rapidly growing SaaS platform (240+ engineers, 50+ microservices) drowning in 15TB+ monthly logs across fragmented systems. Critical issues: 42-minute average incident resolution time, limited 14-day retention, no cross-service correlation, and 12+ different logging formats. Engineering teams spent 120+ hours weekly on log-related troubleshooting while missing 31% of production issues before customer impact.
              </p>
              
              <h3 className="text-2xl font-bold mb-4 mt-8 text-blue-300">Solution & Architecture</h3>
              <p className="text-justify">
                Engineered enterprise-grade log analytics platform using Azure Data Lake Gen2, Delta Lake, and Apache Kafka. Built standardized ingestion layer processing 230K+ events/second with consistent schema enforcement. Implemented intelligent multi-tiered storage with auto-archiving policies saving 72% on storage costs. Developed real-time analytics engine with sub-second query performance on terabyte-scale datasets.
              </p>
              
              <h3 id="implementation" className="text-2xl font-bold mb-4 mt-8 text-blue-300">Implementation & Quality</h3>
              <p className="text-justify">
                Created unified logging SDKs for 5 programming languages with automatic context enrichment and standardized severity levels. Built Kafka-based ingestion with exactly-once guarantees and auto-scaling handling 3x traffic spikes. Implemented Delta Lake tables with Z-ordering on high-cardinality fields reducing query times by 94%. Developed ML-powered anomaly detection identifying 87% of issues before user impact. Built comprehensive dashboard system with real-time alerts and 40+ pre-built analytics views.
              </p>
              
              <h3 id="impact" className="text-2xl font-bold mb-4 mt-8 text-blue-300">Impact & Metrics</h3>
              <p className="text-justify">
                Slashed MTTR from 42 to 13 minutes (68%). Extended retention from 14 days to 365 days while reducing storage costs by 72%. Identified previously unknown application bottlenecks improving overall system throughput by 34%. Reduced log-related development tasks by 45% saving 2,400 engineering hours monthly. Prevented 87% of potential outages through proactive alerts. Business impact: $3.4M saved in engineering time and $2.1M in prevented downtime annually.
              </p>
            </div>
          </section>
          
          <section>
            <h2 id="key-achievements" className="text-3xl font-bold mb-6 text-blue-400">Key Achievements</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-gray-800/60 border border-gray-700 rounded-lg p-6">
                <h3 className="text-xl font-semibold mb-3 text-green-400">40% Query Performance Improvement</h3>
                <p>Optimized data storage patterns and query performance, reducing average query time in Power BI from minutes to seconds.</p>
              </div>
              <div className="bg-gray-800/60 border border-gray-700 rounded-lg p-6">
                <h3 className="text-xl font-semibold mb-3 text-green-400">32% Cost Reduction</h3>
                <p>Implemented intelligent data lifecycle policies and optimized storage formats, significantly reducing cloud storage and compute costs.</p>
              </div>
              <div className="bg-gray-800/60 border border-gray-700 rounded-lg p-6">
                <h3 className="text-xl font-semibold mb-3 text-green-400">98.5% Data Quality</h3>
                <p>Implemented comprehensive data quality frameworks that dramatically improved the consistency and reliability of log data.</p>
              </div>
              <div className="bg-gray-800/60 border border-gray-700 rounded-lg p-6">
                <h3 className="text-xl font-semibold mb-3 text-green-400">75% Reduction in Issue Resolution Time</h3>
                <p>The centralized log repository with advanced search and analytics capabilities allowed engineers to identify and resolve application issues much faster.</p>
              </div>
            </div>
          </section>
          
          <section>
            <h2 id="technical-details" className="text-3xl font-bold mb-6 text-blue-400">Technical Details</h2>
            <div className="prose prose-invert max-w-none">
              <h3>Architecture Overview</h3>
              <p>
                The solution implemented a modern lakehouse architecture with the following components:
              </p>
              <ul>
                <li><strong>Log Collection Layer:</strong> Standardized log collection agents deployed across all application environments with consistent formatting and metadata enrichment.</li>
                <li><strong>Ingestion Layer:</strong> Azure Databricks Autoloader for efficient, scalable ingestion of log files into Delta Lake, with schema inference and evolution capabilities.</li>
                <li><strong>Storage Layer:</strong> Azure Data Lake Storage Gen2 with optimized folder structures, partitioning strategies, and file formats.</li>
                <li><strong>Processing Layer:</strong> Delta Lake tables organized in Bronze/Silver/Gold layers for progressive refinement and optimization of log data.</li>
                <li><strong>Orchestration Layer:</strong> Apache Airflow DAGs for scheduling, monitoring, and managing the end-to-end data pipeline.</li>
                <li><strong>Serving Layer:</strong> Optimized analytical views exposed through SQL endpoints and directly queryable by Power BI.</li>
              </ul>
              
              <h3>Log Processing Pipeline</h3>
              <p>
                The log processing pipeline included several sophisticated components:
              </p>
              <ol>
                <li><strong>Log Normalization:</strong> Converting diverse log formats (JSON, XML, text) into a standardized structure with consistent field names and data types.</li>
                <li><strong>Metadata Enrichment:</strong> Augmenting logs with additional context like environment, application version, and deployment information.</li>
                <li><strong>Data Quality Checks:</strong> Automated validation rules to identify and handle malformed or incomplete log entries.</li>
                <li><strong>PII Detection and Masking:</strong> Identifying and masking personally identifiable information to ensure compliance with privacy regulations.</li>
                <li><strong>Intelligent Partitioning:</strong> Dynamic partitioning strategies based on access patterns to optimize query performance.</li>
                <li><strong>Retention Management:</strong> Automated policies for data retention, archiving, and purging based on compliance requirements and data utility.</li>
              </ol>
              
              <h3>Optimization Techniques</h3>
              <p>
                Several optimization techniques were implemented to maximize performance and minimize costs:
              </p>
              <ul>
                <li><strong>Databricks Optimizations:</strong> Cluster sizing and configuration tuning, job scheduling, and resource allocation.</li>
                <li><strong>Delta Lake Features:</strong> Leveraging Delta Lake's ACID transactions, time travel, and optimization commands (OPTIMIZE, Z-ORDER).</li>
                <li><strong>Storage Optimizations:</strong> File compaction, compression algorithms, and storage tier management.</li>
                <li><strong>Query Optimization:</strong> Creating optimized analytical views, pre-aggregations, and materialized views for common query patterns.</li>
              </ul>
            </div>
          </section>
          
          <section>
            <h2 id="tools-technologies" className="text-3xl font-bold mb-6 text-blue-400">Tools & Technologies</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
              <div className="bg-gray-800/60 border border-gray-700 rounded-lg p-6">
                <h3 className="text-xl font-semibold mb-3">Cloud Infrastructure</h3>
                <ul className="list-disc pl-5 space-y-2">
                  <li>Azure Data Lake Storage Gen2</li>
                  <li>Azure Databricks</li>
                  <li>Azure Key Vault</li>
                  <li>Azure Monitor</li>
                </ul>
              </div>
              <div className="bg-gray-800/60 border border-gray-700 rounded-lg p-6">
                <h3 className="text-xl font-semibold mb-3">Data Processing</h3>
                <ul className="list-disc pl-5 space-y-2">
                  <li>Delta Lake</li>
                  <li>Apache Spark</li>
                  <li>PySpark</li>
                  <li>Databricks Autoloader</li>
                </ul>
              </div>
              <div className="bg-gray-800/60 border border-gray-700 rounded-lg p-6">
                <h3 className="text-xl font-semibold mb-3">Log Collection</h3>
                <ul className="list-disc pl-5 space-y-2">
                  <li>Elastic Stack</li>
                  <li>Fluentd</li>
                  <li>Application Insights</li>
                  <li>Custom log shippers</li>
                </ul>
              </div>
              <div className="bg-gray-800/60 border border-gray-700 rounded-lg p-6">
                <h3 className="text-xl font-semibold mb-3">Orchestration</h3>
                <ul className="list-disc pl-5 space-y-2">
                  <li>Apache Airflow</li>
                  <li>Databricks Jobs API</li>
                  <li>Azure Logic Apps</li>
                </ul>
              </div>
              <div className="bg-gray-800/60 border border-gray-700 rounded-lg p-6">
                <h3 className="text-xl font-semibold mb-3">Analysis & Visualization</h3>
                <ul className="list-disc pl-5 space-y-2">
                  <li>Power BI</li>
                  <li>Azure Synapse Analytics</li>
                  <li>Databricks SQL Analytics</li>
                  <li>Jupyter Notebooks</li>
                </ul>
              </div>
              <div className="bg-gray-800/60 border border-gray-700 rounded-lg p-6">
                <h3 className="text-xl font-semibold mb-3">DevOps & Monitoring</h3>
                <ul className="list-disc pl-5 space-y-2">
                  <li>Azure DevOps</li>
                  <li>Terraform</li>
                  <li>Prometheus</li>
                  <li>Grafana</li>
                </ul>
              </div>
            </div>
          </section>
          
          <section>
            <h2 id="challenges-solutions" className="text-3xl font-bold mb-6 text-blue-400">Challenges & Solutions</h2>
            <div className="space-y-8">
              <div>
                <h3 className="text-xl font-semibold mb-3 text-yellow-400">Challenge: Log Volume & Velocity</h3>
                <div className="bg-gray-800/60 border border-gray-700 rounded-lg p-6">
                  <p className="mb-4">
                    The system needed to handle over 20TB of log data daily from 200+ applications, with peak ingestion rates exceeding 100,000 events per second.
                  </p>
                  <h4 className="text-lg font-medium mb-2 text-green-400">Solution:</h4>
                  <p>
                    Implemented a horizontally scalable ingestion architecture using Databricks Autoloader with checkpoint-based incremental processing. Designed a tiered storage approach that balanced hot storage for recent logs with cool storage for historical data. Optimized file sizes and partitioning strategies to handle high-velocity ingestion while maintaining query performance.
                  </p>
                </div>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold mb-3 text-yellow-400">Challenge: Log Format Heterogeneity</h3>
                <div className="bg-gray-800/60 border border-gray-700 rounded-lg p-6">
                  <p className="mb-4">
                    Applications used diverse logging formats, structures, and conventions, making it difficult to create a unified view for analysis.
                  </p>
                  <h4 className="text-lg font-medium mb-2 text-green-400">Solution:</h4>
                  <p>
                    Developed a flexible log normalization framework that could handle multiple input formats (JSON, XML, structured text) and transform them into a standardized schema. Implemented schema evolution capabilities to accommodate changing log structures over time. Created a metadata registry to maintain mappings between source formats and the canonical model.
                  </p>
                </div>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold mb-3 text-yellow-400">Challenge: Cost Optimization</h3>
                <div className="bg-gray-800/60 border border-gray-700 rounded-lg p-6">
                  <p className="mb-4">
                    Storing and processing petabytes of log data could become prohibitively expensive without careful optimization.
                  </p>
                  <h4 className="text-lg font-medium mb-2 text-green-400">Solution:</h4>
                  <p>
                    Implemented intelligent data lifecycle management with automated tiering based on data age and access patterns. Used Delta Lake's OPTIMIZE and VACUUM commands to compact small files and remove obsolete versions. Developed custom compaction jobs to optimize storage utilization. Implemented column-level statistics to enable cost-based query optimization. Carefully tuned Databricks clusters with auto-termination policies and right-sized resources.
                  </p>
                </div>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold mb-3 text-yellow-400">Challenge: Query Performance</h3>
                <div className="bg-gray-800/60 border border-gray-700 rounded-lg p-6">
                  <p className="mb-4">
                    Business users needed fast query response times for interactive analysis, which was challenging given the volume and complexity of log data.
                  </p>
                  <h4 className="text-lg font-medium mb-2 text-green-400">Solution:</h4>
                  <p>
                    Designed a multi-layer approach with Gold-level aggregation tables optimized for specific analysis patterns. Implemented Z-ordering on key columns to accelerate filtering operations. Created materialized views for common query patterns. Used Delta Lake's data skipping capabilities to improve scan efficiency. Developed a query monitoring framework to identify and optimize poorly performing queries.
                  </p>
                </div>
              </div>
            </div>
          </section>
          
          <section>
            <h2 id="business-impact" className="text-3xl font-bold mb-6 text-blue-400">Business Impact</h2>
            <div className="prose prose-invert max-w-none">
              <p>
                The Application Logs Data Lake delivered significant business value across multiple dimensions:
              </p>
              <ul>
                <li><strong>Enhanced Application Reliability:</strong> The 75% reduction in issue resolution time led to improved application reliability and reduced downtime costs, estimated at $2.3M annually.</li>
                <li><strong>Operational Cost Savings:</strong> The 32% reduction in storage and compute costs translated to approximately $950K in annual savings.</li>
                <li><strong>Development Productivity:</strong> Engineers spent 40% less time on log-related tasks, freeing up an estimated 12,000 engineering hours annually for feature development.</li>
                <li><strong>Business Intelligence:</strong> The improved query performance enabled new business insights that were previously impossible due to performance limitations, supporting data-driven decision making.</li>
                <li><strong>Compliance Improvements:</strong> Centralized log management with proper retention policies and PII handling enhanced the organization's compliance posture for audits and regulatory requirements.</li>
              </ul>
              
              <p>
                The solution also enabled several new capabilities:
              </p>
              <ul>
                <li>End-to-end transaction tracing across distributed microservices</li>
                <li>Anomaly detection for proactive issue identification</li>
                <li>User behavior analytics for product improvement</li>
                <li>Performance trending and capacity planning</li>
                <li>Security incident detection and investigation</li>
              </ul>
            </div>
          </section>
          
          <section>
            <h2 id="lessons-learned" className="text-3xl font-bold mb-6 text-blue-400">Lessons Learned</h2>
            <div className="prose prose-invert max-w-none">
              <p>
                This project provided several valuable insights:
              </p>
              <ol>
                <li>
                  <strong>Standardization at Source:</strong> While we successfully built a system to handle heterogeneous log formats, working with application teams to standardize logging practices at the source would have reduced complexity and improved data quality.
                </li>
                <li>
                  <strong>Evolution Over Revolution:</strong> The phased approach to migrating applications to the new log infrastructure proved more effective than attempting a "big bang" cutover, allowing for iterative refinement and stakeholder buy-in.
                </li>
                <li>
                  <strong>Value-Based Prioritization:</strong> Focusing initial efforts on high-value applications with the most critical operational needs created early wins and demonstrated ROI, building momentum for the broader implementation.
                </li>
                <li>
                  <strong>Performance Testing at Scale:</strong> Early performance testing with production-scale data volumes was essential for identifying optimization opportunities before they became critical issues in production.
                </li>
                <li>
                  <strong>User Education is Critical:</strong> Investing in documentation, training, and self-service query examples significantly increased adoption and value realization for business users.
                </li>
              </ol>
            </div>
          </section>
          
          <section>
            <h2 id="future-enhancements" className="text-3xl font-bold mb-6 text-blue-400">Future Enhancements</h2>
            <div className="prose prose-invert max-w-none">
              <p>
                Several enhancements are planned for the platform:
              </p>
              <ul>
                <li><strong>Machine Learning Integration:</strong> Implementing anomaly detection, predictive maintenance, and automated root cause analysis using machine learning models trained on historical log data.</li>
                <li><strong>Real-time Analytics:</strong> Extending the platform to support real-time streaming analytics for critical applications, enabling immediate alerting and response.</li>
                <li><strong>Self-service Log Analysis:</strong> Developing a user-friendly interface for non-technical users to explore and analyze log data without writing SQL or code.</li>
                <li><strong>Advanced Security Analytics:</strong> Enhancing security-related log analysis with threat detection, user behavior analytics, and compliance monitoring capabilities.</li>
                <li><strong>Cross-platform Integration:</strong> Integrating with additional observability tools like APM platforms and infrastructure monitoring systems for holistic visibility.</li>
              </ul>
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
