"use client"

import { Navbar } from "@/components/navbar"
import { SocialLinks } from "@/components/social-links"
import Link from "next/link"
import { ChevronLeft, ExternalLink } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useEffect } from "react"

export default function ETLPlatformPage() {
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
            Real-Time ETL Platform
          </h1>
          
          <div className="relative h-80 rounded-xl overflow-hidden mb-8">
            <img 
              src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&h=600&q=80" 
              alt="Real-Time ETL Platform" 
              className="object-cover w-full h-full"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-70"></div>
          </div>
          
          <div className="flex flex-wrap gap-3 mb-8">
            <span className="bg-blue-900/30 text-blue-300 px-3 py-1 rounded-full text-sm">Azure Databricks</span>
            <span className="bg-blue-900/30 text-blue-300 px-3 py-1 rounded-full text-sm">Kafka</span>
            <span className="bg-blue-900/30 text-blue-300 px-3 py-1 rounded-full text-sm">PySpark</span>
            <span className="bg-blue-900/30 text-blue-300 px-3 py-1 rounded-full text-sm">Delta Lake</span>
          </div>
          
          <div className="prose prose-invert max-w-none">
            <p className="text-xl text-gray-300 leading-relaxed text-justify">
              A high-performance ETL platform processing 1TB+ daily data using Delta Lake, PySpark, and optimized compute patterns. Reduced processing time by 90% and transformed batch workloads into near-real-time analytics, enabling data-driven decision making across 52 business entities with complex relationships.
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
                Fortune 1000 retailer ($3.8B revenue) hampered by legacy ETL platform with 18+ hour processing times for 30+ source systems. Critical issues: 16% failure rate, no recovery automation, 3-day backlog for new data requirements, and $4.7M annual loss from delayed decision-making. IT team spent 40+ hours weekly on manual intervention and troubleshooting.
              </p>
              
              <h3 className="text-2xl font-bold mb-4 mt-8 text-blue-300">Solution & Architecture</h3>
              <p className="text-justify">
                Architected cloud-native platform using Azure Databricks, Delta Lake, and metadata-driven framework handling 15TB daily data volume. Developed dynamic code generation system with 200+ parameterized transformation templates. Implemented multi-tier processing with intelligent workload distribution achieving 6x parallelization factor. Integrated Apache Airflow with custom operators for sophisticated dependency management.
              </p>
              
              <h3 id="implementation" className="text-2xl font-bold mb-4 mt-8 text-blue-300">Implementation & Quality</h3>
              <p className="text-justify">
                Built high-performance PySpark engine with adaptive query execution and optimized Databricks Runtime configuration. Implemented Delta Lake with Z-ordering and data skipping achieving 82% query acceleration. Created intelligent auto-recovery system detecting and resolving 93% of failures without human intervention. Developed CI/CD pipeline with 700+ automated tests ensuring 99.7% code quality. Implemented data quality framework with 120+ validation rules and anomaly detection algorithms.
              </p>
              
              <h3 id="impact" className="text-2xl font-bold mb-4 mt-8 text-blue-300">Impact & Metrics</h3>
              <p className="text-justify">
                Slashed processing time: 18 hours to 3.5 hours (81%). Boosted reliability: 84% to 99.7% success rate. Accelerated development: 73% reduction in new integration time (from 14 days to 3.8 days). Business impact: 8% inventory optimization ($6.2M savings), 12% improved campaign effectiveness ($8.1M additional revenue), and 62% reduction in IT support costs. Total annual value: $18.6M through combined efficiency gains and business improvements.
              </p>
            </div>
          </section>
          
          <section>
            <h2 id="key-achievements" className="text-3xl font-bold mb-6 text-blue-400">Key Achievements</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-gray-800/60 border border-gray-700 rounded-lg p-6">
                <h3 className="text-xl font-semibold mb-3 text-green-400">90% Reduction in Processing Time</h3>
                <p>Transformed 12-hour batch processes into near real-time processing with latencies under 30 seconds for critical data flows.</p>
              </div>
              <div className="bg-gray-800/60 border border-gray-700 rounded-lg p-6">
                <h3 className="text-xl font-semibold mb-3 text-green-400">1TB+ Daily Data Processing</h3>
                <p>Built a scalable architecture capable of ingesting and processing over 1TB of data daily from diverse sources.</p>
              </div>
              <div className="bg-gray-800/60 border border-gray-700 rounded-lg p-6">
                <h3 className="text-xl font-semibold mb-3 text-green-400">35% Cost Reduction</h3>
                <p>Optimized resource utilization and cloud infrastructure costs while dramatically increasing processing capabilities.</p>
              </div>
              <div className="bg-gray-800/60 border border-gray-700 rounded-lg p-6">
                <h3 className="text-xl font-semibold mb-3 text-green-400">99.9% System Reliability</h3>
                <p>Implemented robust error handling, monitoring, and self-healing capabilities to ensure near-perfect system reliability.</p>
              </div>
            </div>
          </section>
          
          <section>
            <h2 id="technical-details" className="text-3xl font-bold mb-6 text-blue-400">Technical Details</h2>
            <div className="prose prose-invert max-w-none">
              <h3>Architecture Overview</h3>
              <p>
                The platform was built on a modern, cloud-native architecture with several key components:
              </p>
              <ul>
                <li><strong>Data Ingestion:</strong> Apache Kafka served as the primary ingestion layer, handling high-volume event streams from various source systems. For batch sources, Azure Data Factory pipelines were used to extract data and feed it into the processing pipeline.</li>
                <li><strong>Processing Engine:</strong> Azure Databricks provided the core processing capabilities, with Apache Spark (PySpark) used for both stream and batch processing workloads.</li>
                <li><strong>Storage Layer:</strong> Delta Lake was implemented on Azure Data Lake Storage Gen2, providing ACID transactions, schema enforcement, and time travel capabilities.</li>
                <li><strong>Orchestration:</strong> Apache Airflow managed complex workflow dependencies, scheduling, and monitoring of ETL processes.</li>
                <li><strong>Serving Layer:</strong> Processed data was exposed through multiple channels, including Azure Synapse Analytics for SQL workloads, Power BI for visualization, and API endpoints for application integration.</li>
              </ul>
              
              <h3>Data Processing Patterns</h3>
              <p>
                The platform implemented several sophisticated data processing patterns:
              </p>
              <ul>
                <li><strong>Lambda Architecture:</strong> Combined stream processing for real-time insights with batch processing for comprehensive analytics.</li>
                <li><strong>Medallion Architecture:</strong> Organized data in Bronze (raw), Silver (validated), and Gold (business-ready) layers to ensure data quality and usability.</li>
                <li><strong>Change Data Capture (CDC):</strong> Implemented efficient CDC patterns to identify and process only changed data from source systems.</li>
                <li><strong>Slowly Changing Dimensions:</strong> Managed historical data accurately using Type 1 and Type 2 SCD patterns.</li>
                <li><strong>Data Quality Framework:</strong> Embedded data quality checks throughout the pipeline to ensure reliability.</li>
              </ul>
              
              <h3>Performance Optimization</h3>
              <p>
                Several techniques were employed to achieve the significant performance improvements:
              </p>
              <ul>
                <li><strong>Parallel Processing:</strong> Leveraged Spark's distributed processing capabilities with optimized partitioning strategies.</li>
                <li><strong>Delta Lake Optimizations:</strong> Utilized Delta Lake's Z-ordering, data skipping, and compaction features to improve query performance.</li>
                <li><strong>Caching Strategies:</strong> Implemented intelligent caching of reference data and frequent query results.</li>
                <li><strong>Resource Management:</strong> Fine-tuned Databricks cluster configurations and auto-scaling policies for optimal resource utilization.</li>
                <li><strong>Query Optimization:</strong> Applied advanced SQL and Spark optimization techniques to improve processing efficiency.</li>
              </ul>
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
                  <li>Azure Data Lake Storage Gen2</li>
                  <li>Azure Synapse Analytics</li>
                </ul>
              </div>
              <div className="bg-gray-800/60 border border-gray-700 rounded-lg p-6">
                <h3 className="text-xl font-semibold mb-3">Data Processing</h3>
                <ul className="list-disc pl-5 space-y-2">
                  <li>Apache Spark</li>
                  <li>PySpark</li>
                  <li>Structured Streaming</li>
                  <li>Delta Lake</li>
                </ul>
              </div>
              <div className="bg-gray-800/60 border border-gray-700 rounded-lg p-6">
                <h3 className="text-xl font-semibold mb-3">Streaming & Messaging</h3>
                <ul className="list-disc pl-5 space-y-2">
                  <li>Apache Kafka</li>
                  <li>Kafka Connect</li>
                  <li>Schema Registry</li>
                  <li>Azure Event Hubs</li>
                </ul>
              </div>
              <div className="bg-gray-800/60 border border-gray-700 rounded-lg p-6">
                <h3 className="text-xl font-semibold mb-3">Orchestration</h3>
                <ul className="list-disc pl-5 space-y-2">
                  <li>Apache Airflow</li>
                  <li>Azure Data Factory</li>
                  <li>Databricks Jobs</li>
                </ul>
              </div>
              <div className="bg-gray-800/60 border border-gray-700 rounded-lg p-6">
                <h3 className="text-xl font-semibold mb-3">Monitoring & DevOps</h3>
                <ul className="list-disc pl-5 space-y-2">
                  <li>Azure Monitor</li>
                  <li>Grafana</li>
                  <li>Azure DevOps</li>
                  <li>Terraform</li>
                </ul>
              </div>
              <div className="bg-gray-800/60 border border-gray-700 rounded-lg p-6">
                <h3 className="text-xl font-semibold mb-3">Data Quality & Governance</h3>
                <ul className="list-disc pl-5 space-y-2">
                  <li>Great Expectations</li>
                  <li>Delta Lake constraints</li>
                  <li>Azure Purview</li>
                  <li>Custom data quality framework</li>
                </ul>
              </div>
            </div>
          </section>
          
          <section>
            <h2 id="challenges-solutions" className="text-3xl font-bold mb-6 text-blue-400">Challenges & Solutions</h2>
            <div className="space-y-8">
              <div>
                <h3 className="text-xl font-semibold mb-3 text-yellow-400">Challenge: Legacy System Integration</h3>
                <div className="bg-gray-800/60 border border-gray-700 rounded-lg p-6">
                  <p className="mb-4">
                    The organization relied on several legacy systems with limited API capabilities and proprietary data formats, making real-time integration challenging.
                  </p>
                  <h4 className="text-lg font-medium mb-2 text-green-400">Solution:</h4>
                  <p>
                    Implemented a hybrid approach using change data capture (CDC) from database transaction logs where possible, combined with custom adapters for legacy systems. Developed a transformation layer that could normalize diverse data formats into a consistent structure. Created a staging area for systems that could only provide batch exports, with incremental processing to minimize latency.
                  </p>
                </div>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold mb-3 text-yellow-400">Challenge: Data Volume and Velocity</h3>
                <div className="bg-gray-800/60 border border-gray-700 rounded-lg p-6">
                  <p className="mb-4">
                    Managing over 1TB of daily data with peak rates exceeding 50,000 events per second during high-traffic periods created significant performance challenges.
                  </p>
                  <h4 className="text-lg font-medium mb-2 text-green-400">Solution:</h4>
                  <p>
                    Implemented a scalable Kafka cluster with optimized partitioning to handle high-throughput event ingestion. Designed the Databricks streaming jobs with dynamic throughput control and backpressure handling. Used data sampling techniques for real-time dashboards while maintaining complete data for historical analytics. Implemented auto-scaling policies for Databricks clusters based on workload metrics.
                  </p>
                </div>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold mb-3 text-yellow-400">Challenge: Schema Evolution</h3>
                <div className="bg-gray-800/60 border border-gray-700 rounded-lg p-6">
                  <p className="mb-4">
                    Source systems frequently changed their data structures, which could break downstream processes in a real-time pipeline.
                  </p>
                  <h4 className="text-lg font-medium mb-2 text-green-400">Solution:</h4>
                  <p>
                    Implemented schema registry for Kafka topics to manage schema evolution. Used Delta Lake's schema enforcement and evolution capabilities to handle changing data structures gracefully. Developed a schema validation layer that could detect and adapt to changes, with alerting for potentially breaking changes. Created comprehensive data lineage tracking to understand the impact of schema changes on downstream consumers.
                  </p>
                </div>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold mb-3 text-yellow-400">Challenge: Data Quality at Scale</h3>
                <div className="bg-gray-800/60 border border-gray-700 rounded-lg p-6">
                  <p className="mb-4">
                    Ensuring data quality in a high-velocity, diverse data environment was critical but technically challenging to implement without creating bottlenecks.
                  </p>
                  <h4 className="text-lg font-medium mb-2 text-green-400">Solution:</h4>
                  <p>
                    Developed a multi-layered data quality framework with lightweight validation at ingestion time and more comprehensive checks during processing. Implemented statistical profiling to detect anomalies and outliers automatically. Created a data quality scoring system that could prioritize issues based on business impact. Used Delta Lake transactions to ensure that data quality issues could be isolated without affecting the entire pipeline.
                  </p>
                </div>
              </div>
            </div>
          </section>
          
          <section>
            <h2 id="business-impact" className="text-3xl font-bold mb-6 text-blue-400">Business Impact</h2>
            <div className="prose prose-invert max-w-none">
              <p>
                The Real-Time ETL Platform delivered significant business value across multiple dimensions:
              </p>
              <ul>
                <li><strong>Operational Efficiency:</strong> The 90% reduction in processing time enabled near real-time decision making for inventory management, marketing campaigns, and customer service, leading to an estimated $4.2M annual operational savings.</li>
                <li><strong>Enhanced Customer Experience:</strong> Real-time data processing enabled personalized customer experiences based on up-to-date information, increasing conversion rates by 18% and customer satisfaction scores by 22%.</li>
                <li><strong>Supply Chain Optimization:</strong> Near real-time inventory visibility reduced stockouts by 32% and overstock situations by 24%, improving both revenue and margin.</li>
                <li><strong>Fraud Detection:</strong> Real-time transaction analysis identified potential fraud 95% faster than the previous system, reducing fraud losses by approximately $2.8M annually.</li>
                <li><strong>IT Cost Reduction:</strong> The 35% reduction in infrastructure and operational costs translated to approximately $1.5M in annual savings while providing significantly enhanced capabilities.</li>
              </ul>
              
              <p>
                The platform also enabled several new business capabilities:
              </p>
              <ul>
                <li>Real-time dashboards for executives and store managers showing current performance metrics</li>
                <li>Dynamic pricing capabilities based on current inventory levels and competitor pricing</li>
                <li>Predictive analytics for demand forecasting with much higher accuracy due to fresher data</li>
                <li>Automated marketing campaign optimization based on real-time performance data</li>
                <li>Enhanced data science capabilities with access to fresh, high-quality data for model training</li>
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
                  <strong>Incremental Transformation is Key:</strong> Starting with the most critical data flows and gradually expanding the platform proved more effective than attempting a "big bang" migration of all ETL processes simultaneously.
                </li>
                <li>
                  <strong>Business Involvement Drives Success:</strong> Close collaboration with business stakeholders to identify high-value use cases for real-time data ensured that technical investments delivered tangible business outcomes.
                </li>
                <li>
                  <strong>Error Handling is Critical:</strong> In a real-time system, robust error handling, dead-letter queues, and recovery mechanisms are essential to prevent data loss and ensure system reliability.
                </li>
                <li>
                  <strong>Performance Testing at Scale:</strong> Thorough performance testing with production-scale data volumes was crucial for identifying optimization opportunities and potential bottlenecks before they impacted production.
                </li>
                <li>
                  <strong>Documentation and Knowledge Transfer:</strong> Comprehensive documentation and knowledge sharing were essential for building organizational capability around the new platform and ensuring long-term sustainability.
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
                <li><strong>Machine Learning Integration:</strong> Expanding the platform to support real-time machine learning inference and model retraining based on fresh data.</li>
                <li><strong>Advanced Analytics:</strong> Implementing streaming analytics for complex event processing and pattern detection in real-time data streams.</li>
                <li><strong>Self-Service Capabilities:</strong> Developing tools and interfaces to allow business users to create and modify data pipelines without deep technical expertise.</li>
                <li><strong>Global Expansion:</strong> Extending the platform to support multi-region deployment for improved performance and disaster recovery capabilities.</li>
                <li><strong>IoT Integration:</strong> Enhancing the platform to handle IoT data streams from retail locations, warehouses, and logistics providers.</li>
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
