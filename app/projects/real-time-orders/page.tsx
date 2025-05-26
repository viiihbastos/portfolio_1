"use client"

import { Navbar } from "@/components/navbar"
import { SocialLinks } from "@/components/social-links"
import Link from "next/link"
import { ChevronLeft, ExternalLink } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useEffect } from "react"

export default function RealTimeOrdersPage() {
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
            Real-Time Orders Data Platform
          </h1>
          
          <div className="relative h-80 rounded-xl overflow-hidden mb-8">
            <img 
              src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&h=600&q=80" 
              alt="Real-Time Orders Data Platform" 
              className="object-cover w-full h-full"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-70"></div>
          </div>
          
          <div className="flex flex-wrap gap-3 mb-8">
            <span className="bg-blue-900/30 text-blue-300 px-3 py-1 rounded-full text-sm">Apache Kafka</span>
            <span className="bg-blue-900/30 text-blue-300 px-3 py-1 rounded-full text-sm">Azure Databricks</span>
            <span className="bg-blue-900/30 text-blue-300 px-3 py-1 rounded-full text-sm">Delta Lake</span>
            <span className="bg-blue-900/30 text-blue-300 px-3 py-1 rounded-full text-sm">Apache Airflow</span>
            <span className="bg-blue-900/30 text-blue-300 px-3 py-1 rounded-full text-sm">Power BI</span>
          </div>
          
          <div className="prose prose-invert max-w-none">
            <p className="text-xl text-gray-300 leading-relaxed text-justify">
              A real-time streaming data platform processing 2.5M+ daily order events using Apache Kafka, Structured Streaming, and Delta Lake with Medallion Architecture. Reduced data latency from 24+ hours to under 60 seconds, enabling immediate business insights with 99.99% system reliability across 30+ integrated services.
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
                Major e-commerce platform ($840M annual revenue) crippled by 4-hour batch processing delays. Legacy SQL Server jobs caused database contention during peak loads (15,000+ orders/hour). Business impact: inventory discrepancies causing 12% fulfillment errors, delayed customer notifications reducing satisfaction scores by 23%, and operational blind spots costing $3.2M annually.
              </p>
              
              <h3 className="text-2xl font-bold mb-4 mt-8 text-blue-300">Solution & Architecture</h3>
              <p className="text-justify">
                Engineered event-driven system using Apache Kafka (24-node cluster), Azure Databricks Delta Lake, and custom CDC extractors. Implemented medallion architecture (bronze/silver/gold) with Avro schema evolution handling 38 distinct event types. Built high-throughput data pipeline processing 400+ events/second with exactly-once semantics and millisecond-level latency monitoring.
              </p>
              
              <h3 id="implementation" className="text-2xl font-bold mb-4 mt-8 text-blue-300">Implementation & Quality</h3>
              <p className="text-justify">
                Developed specialized Kafka Connect CDC connectors with zero-impact extraction patterns. Created PySpark Structured Streaming jobs with dynamic watermarking and optimized micro-batch sizing. Implemented circuit breakers with intelligent retry mechanisms and dead-letter handling. Optimized Delta Lake with Z-ordering and data skipping providing 87% query acceleration. Built auto-scaling framework dynamically allocating resources based on 8 performance metrics.
              </p>
              
              <h3 id="impact" className="text-2xl font-bold mb-4 mt-8 text-blue-300">Impact & Metrics</h3>
              <p className="text-justify">
                Slashed data latency from 4 hours to under 30 seconds (99.9%). Scaled to handle 25,000+ orders/hour (67% capacity increase). Improved fulfillment accuracy by 28%, reducing inventory discrepancies by $4.2M annually. Boosted customer satisfaction by 17% while reducing support tickets by 9%. Enabled real-time promotional adjustments increasing conversion rates by 14%. Total annual impact: $11.3M through combined operational improvements and revenue growth.
              </p>
            </div>
          </section>
          
          <section>
            <h2 id="key-achievements" className="text-3xl font-bold mb-6 text-blue-400">Key Achievements</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-gray-800/60 border border-gray-700 rounded-lg p-6">
                <h3 className="text-xl font-semibold mb-3 text-green-400">Stream Processing Architecture</h3>
                <p>Implemented Structured Streaming with dynamic resource allocation, parallel trigger execution, and optimized shuffle partitioning that achieved 8,000+ events/second throughput with 60-second end-to-end latency.</p>
              </div>
              <div className="bg-gray-800/60 border border-gray-700 rounded-lg p-6">
                <h3 className="text-xl font-semibold mb-3 text-green-400">State Management</h3>
                <p>Designed stateful stream processing using sliding windows and custom state stores with RocksDB backend, enabling complex fraud pattern detection across 22 different event types with 150ms p95 query latency.</p>
              </div>
              <div className="bg-gray-800/60 border border-gray-700 rounded-lg p-6">
                <h3 className="text-xl font-semibold mb-3 text-green-400">Delta Lake Optimization</h3>
                <p>Implemented optimized Delta Lake tables with auto-compaction, Z-ordering on high-cardinality columns, and data skipping techniques that reduced query latency by 68% while enabling ACID compliance for inventory data.</p>
              </div>
              <div className="bg-gray-800/60 border border-gray-700 rounded-lg p-6">
                <h3 className="text-xl font-semibold mb-3 text-green-400">Resilient Architecture</h3>
                <p>Built fault-tolerant system with dead-letter queues, checkpoint-based recovery, configurable retry policies, and automated failover mechanisms that achieved 99.99% uptime across 30+ integrated services.</p>
              </div>
            </div>
          </section>
          
          <section>
            <h2 id="technical-details" className="text-3xl font-bold mb-6 text-blue-400">Technical Details</h2>
            <div className="prose prose-invert max-w-none">
              <h3>Technical Architecture</h3>
              <p className="text-justify">
                Implemented a multi-layered data architecture with specific technical optimizations at each level:
              </p>
              <ul className="text-justify">
                <li><strong>Bronze Layer:</strong> Kafka Connect integration with custom SMTs (Single Message Transforms), schema-based partition strategies, and auto-discovery of new topics. Implemented with Delta Lake in append-only mode with merge-on-read optimizations for minimal write latency.</li>
                <li><strong>Silver Layer:</strong> Applied stream-stream joins with dynamic watermarking based on event arrival patterns, schema enforcement with evolution support, and deduplication through stateful operators with bloom filters for memory optimization.</li>
                <li><strong>Gold Layer:</strong> Implemented multi-dimensional aggregation engine with sliding windows and incremental materialization. Utilized Photon engine optimizations for vectorized processing and query optimization.</li>
              </ul>
              
              <h3>Advanced Kafka Implementation</h3>
              <p className="text-justify">
                Engineered a high-performance event streaming backbone with numerous technical optimizations:
              </p>
              <ul className="text-justify">
                <li><strong>Cluster Configuration:</strong> Custom-tuned Kafka cluster with optimized partition count (based on throughput analysis), replication factor 3, and producer-specific acknowledgment settings (acks=all for critical data).</li>
                <li><strong>Topic Design:</strong> Implemented topic naming conventions with environment isolation and data classification embedded in names. Configured topic-level settings including log compaction for reference data, retention policies based on data criticality, and min.insync.replicas settings.</li>
                <li><strong>Schema Management:</strong> Confluent Schema Registry integration with subject naming strategies and compatibility modes (BACKWARD for consumer resilience). Implemented Avro serialization with optimized field ordering for reduced storage footprint.</li>
                <li><strong>Consumer Architecture:</strong> Custom consumer group design with partition assignment strategies and offset management with external commit tracking in Delta tables for exactly-once semantics.</li>
              </ul>
              
              <h3>Processing with Azure Databricks</h3>
              <p>
                Databricks provides the core processing capabilities:
              </p>
              <ul>
                <li><strong>Structured Streaming:</strong> Continuous processing of Kafka topics with exactly-once semantics.</li>
                <li><strong>Delta Lake Integration:</strong> ACID transactions, time travel, and schema enforcement for reliable data storage.</li>
                <li><strong>Auto Loader:</strong> Efficient ingestion of file-based data for batch processes.</li>
                <li><strong>MLflow:</strong> Integration of machine learning models for real-time scoring and prediction.</li>
              </ul>
              
              <h3>Orchestration and Monitoring</h3>
              <p>
                The solution uses Apache Airflow for orchestration with:
              </p>
              <ul>
                <li>DAGs for dependency management between streaming and batch processes</li>
                <li>SLAs and alerting for critical processes</li>
                <li>Retry mechanisms and failure handling</li>
                <li>Integration with monitoring systems</li>
              </ul>
              
              <p>
                Comprehensive monitoring is implemented using:
              </p>
              <ul>
                <li>Azure Application Insights for application metrics</li>
                <li>Custom Grafana dashboards for operational visibility</li>
                <li>Data quality metrics and SLA tracking</li>
                <li>Alerting and on-call rotation for critical issues</li>
              </ul>
            </div>
          </section>
          
          <section>
            <h2 id="tools-technologies" className="text-3xl font-bold mb-6 text-blue-400">Tools & Technologies</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
              <div className="bg-gray-800/60 border border-gray-700 rounded-lg p-6">
                <h3 className="text-xl font-semibold mb-3">Event Streaming</h3>
                <ul className="list-disc pl-5 space-y-2">
                  <li>Apache Kafka</li>
                  <li>Kafka Connect</li>
                  <li>Schema Registry</li>
                  <li>Confluent Platform</li>
                </ul>
              </div>
              <div className="bg-gray-800/60 border border-gray-700 rounded-lg p-6">
                <h3 className="text-xl font-semibold mb-3">Data Processing</h3>
                <ul className="list-disc pl-5 space-y-2">
                  <li>Azure Databricks</li>
                  <li>Apache Spark</li>
                  <li>Structured Streaming</li>
                  <li>PySpark</li>
                </ul>
              </div>
              <div className="bg-gray-800/60 border border-gray-700 rounded-lg p-6">
                <h3 className="text-xl font-semibold mb-3">Storage</h3>
                <ul className="list-disc pl-5 space-y-2">
                  <li>Delta Lake</li>
                  <li>Azure Data Lake Storage</li>
                  <li>Azure Synapse Analytics</li>
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
                <h3 className="text-xl font-semibold mb-3">Visualization</h3>
                <ul className="list-disc pl-5 space-y-2">
                  <li>Power BI</li>
                  <li>Grafana</li>
                  <li>Custom dashboards</li>
                </ul>
              </div>
              <div className="bg-gray-800/60 border border-gray-700 rounded-lg p-6">
                <h3 className="text-xl font-semibold mb-3">DevOps & Monitoring</h3>
                <ul className="list-disc pl-5 space-y-2">
                  <li>Azure DevOps</li>
                  <li>Terraform</li>
                  <li>Application Insights</li>
                  <li>PagerDuty</li>
                </ul>
              </div>
            </div>
          </section>
          
          <section>
            <h2 id="challenges-solutions" className="text-3xl font-bold mb-6 text-blue-400">Challenges & Solutions</h2>
            <div className="space-y-8">
              <div>
                <h3 className="text-xl font-semibold mb-3 text-yellow-400">Challenge: Event Ordering & Consistency</h3>
                <div className="bg-gray-800/60 border border-gray-700 rounded-lg p-6">
                  <p className="mb-4">
                    Order events from different systems often arrived out of sequence, creating challenges in maintaining a consistent view of order status and history.
                  </p>
                  <h4 className="text-lg font-medium mb-2 text-green-400">Solution:</h4>
                  <p>
                    Implemented event versioning and timestamps to establish the correct sequence of events. Used watermarking and state management in Structured Streaming jobs to handle late-arriving data. Created a reconciliation process to detect and resolve inconsistencies across different event sources.
                  </p>
                </div>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold mb-3 text-yellow-400">Challenge: Schema Evolution</h3>
                <div className="bg-gray-800/60 border border-gray-700 rounded-lg p-6">
                  <p className="mb-4">
                    Source systems frequently updated their event schemas, requiring the platform to adapt without disruption to downstream processes.
                  </p>
                  <h4 className="text-lg font-medium mb-2 text-green-400">Solution:</h4>
                  <p>
                    Implemented schema registry for Kafka topics with schema evolution policies. Used Avro serialization to handle schema changes gracefully. Designed the Bronze layer to be schema-agnostic, storing raw events with metadata. Applied schema enforcement at the Silver layer with clear versioning and migration strategies for downstream consumers.
                  </p>
                </div>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold mb-3 text-yellow-400">Challenge: Scaling for Peak Loads</h3>
                <div className="bg-gray-800/60 border border-gray-700 rounded-lg p-6">
                  <p className="mb-4">
                    Order volumes could spike dramatically during sales events, with 20x normal traffic, creating potential bottlenecks and processing delays.
                  </p>
                  <h4 className="text-lg font-medium mb-2 text-green-400">Solution:</h4>
                  <p>
                    Implemented auto-scaling for Databricks clusters based on Kafka consumer lag metrics. Used backpressure handling and rate limiting in critical streaming jobs. Designed the architecture to gracefully degrade under extreme load, prioritizing essential processing. Created a traffic forecasting model to predict peak loads and pre-scale infrastructure.
                  </p>
                </div>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold mb-3 text-yellow-400">Challenge: Maintaining SLAs with Mixed Workloads</h3>
                <div className="bg-gray-800/60 border border-gray-700 rounded-lg p-6">
                  <p className="mb-4">
                    The platform needed to support both real-time streaming and batch processing workloads with different resource requirements and SLAs.
                  </p>
                  <h4 className="text-lg font-medium mb-2 text-green-400">Solution:</h4>
                  <p>
                    Implemented resource isolation through dedicated Databricks clusters for different workload types. Used Airflow for orchestration with clear SLAs and prioritization rules. Designed the data architecture to minimize contention between streaming and batch processes, using separate storage locations and optimized access patterns. Implemented comprehensive monitoring and alerting to quickly identify SLA violations.
                  </p>
                </div>
              </div>
            </div>
          </section>
          
          <section>
            <h2 id="business-impact" className="text-3xl font-bold mb-6 text-blue-400">Business Impact</h2>
            <div className="prose prose-invert max-w-none">
              <p>
                The Real-Time Orders Data Platform delivered significant business value:
              </p>
              <ul>
                <li><strong>Fraud Detection:</strong> 22% reduction in fraudulent transactions by identifying patterns in real-time, saving approximately $3.5M annually.</li>
                <li><strong>Inventory Optimization:</strong> 18% improvement in inventory management by providing real-time sales insights, reducing both stockouts and overstock situations.</li>
                <li><strong>Customer Experience:</strong> 27% reduction in order-related customer service contacts through proactive issue detection and resolution.</li>
                <li><strong>Operational Efficiency:</strong> 35% improvement in operational KPIs through real-time monitoring and alerting of order processing bottlenecks.</li>
                <li><strong>Business Agility:</strong> Enabled marketing and merchandising teams to adjust promotions and pricing in near real-time based on sales performance.</li>
              </ul>
              
              <p>
                The platform also created new business capabilities:
              </p>
              <ul>
                <li>Real-time personalization of customer recommendations based on recent purchases</li>
                <li>Dynamic pricing adjustments based on current demand and inventory levels</li>
                <li>Predictive delivery estimates with continuous updates based on order processing status</li>
                <li>Proactive customer communication about potential issues before they impact delivery</li>
              </ul>
            </div>
          </section>
          
          <section>
            <h2 id="lessons-learned" className="text-3xl font-bold mb-6 text-blue-400">Lessons Learned</h2>
            <div className="prose prose-invert max-w-none">
              <p>
                This project provided valuable insights and learning opportunities:
              </p>
              <ol>
                <li>
                  <strong>Start Simple, Then Evolve:</strong> Initial attempts to implement full real-time capabilities across all systems simultaneously created unnecessary complexity. A phased approach, starting with the highest-value use cases, proved more effective.
                </li>
                <li>
                  <strong>Data Quality Is Critical:</strong> Real-time systems amplify data quality issues. Implementing robust validation at the ingestion layer with clear error handling and recovery mechanisms was essential.
                </li>
                <li>
                  <strong>Business Involvement Is Key:</strong> Close collaboration with business stakeholders throughout the project ensured that technical decisions aligned with business priorities and use cases.
                </li>
                <li>
                  <strong>Operational Excellence Matters:</strong> Real-time systems require robust monitoring, alerting, and operational procedures. Investing in comprehensive observability and runbooks paid dividends during critical incidents.
                </li>
                <li>
                  <strong>Technical Debt Management:</strong> The rapid evolution of streaming technologies created pressure to continuously refactor and upgrade components. Establishing clear processes for managing technical debt was essential for long-term sustainability.
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
                <li><strong>Advanced Analytics:</strong> Incorporating machine learning models for real-time anomaly detection, demand forecasting, and customer behavior prediction.</li>
                <li><strong>Event Sourcing Patterns:</strong> Evolving toward a comprehensive event sourcing architecture to enable more sophisticated event replay and historical analysis.</li>
                <li><strong>Global Expansion:</strong> Extending the platform to support multi-region deployment for improved latency and disaster recovery capabilities.</li>
                <li><strong>Self-Service Capabilities:</strong> Developing tools and interfaces to allow business users to create custom real-time analytics views without IT involvement.</li>
                <li><strong>IoT Integration:</strong> Expanding the platform to incorporate IoT data from warehouses and logistics providers for end-to-end supply chain visibility.</li>
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
