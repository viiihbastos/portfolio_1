"use client"

import { Navbar } from "@/components/navbar"
import { SocialLinks } from "@/components/social-links"
import Link from "next/link"
import { ChevronLeft, ExternalLink } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useEffect } from "react"

export default function WaterMeterReplacementPage() {
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
            Annual Water Meter Replacement Plan
          </h1>
          
          <div className="relative h-80 rounded-xl overflow-hidden mb-8">
            <img 
              src="https://images.unsplash.com/photo-1584438784894-089d6a62b8fa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&h=600&q=80" 
              alt="Annual Water Meter Replacement Plan" 
              className="object-cover w-full h-full"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-70"></div>
          </div>
          
          <div className="flex flex-wrap gap-3 mb-8">
            <span className="bg-blue-900/30 text-blue-300 px-3 py-1 rounded-full text-sm">Azure Databricks</span>
            <span className="bg-blue-900/30 text-blue-300 px-3 py-1 rounded-full text-sm">PySpark</span>
            <span className="bg-blue-900/30 text-blue-300 px-3 py-1 rounded-full text-sm">SQL</span>
            <span className="bg-blue-900/30 text-blue-300 px-3 py-1 rounded-full text-sm">Data Vault</span>
            <span className="bg-blue-900/30 text-blue-300 px-3 py-1 rounded-full text-sm">DataOps</span>
          </div>
          
          <div className="prose prose-invert max-w-none">
            <p className="text-xl text-gray-300 leading-relaxed text-justify">
              An advanced analytics system using Azure Databricks, PySpark, and statistical modeling to identify which water meters in a 2M+ device network should be prioritized for replacement, achieving 92% prediction accuracy and generating €8.7M in annual incremental billing through data-driven decision making.
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
                Major utility with 1.2M meters constrained by 2% annual replacement budget (24,000 meters). Previous age-based strategy ignored critical factors: measurement drift, revenue impact, consumption patterns. Resulted in €7.5M annual undetected revenue leakage and 47% higher maintenance costs for problematic meters.
              </p>
              
              <h3 className="text-2xl font-bold mb-4 mt-8 text-blue-300">Solution & Architecture</h3>
              <p className="text-justify">
                Engineered advanced analytics engine on Azure Databricks using custom PySpark algorithms processing 300M+ historical readings. Implemented Data Vault modeling with specialized satellite tables tracking 14 performance indicators. Built configurable scoring framework with dynamic weighting system allowing business-driven prioritization without code changes.
              </p>
              
              <h3 id="implementation" className="text-2xl font-bold mb-4 mt-8 text-blue-300">Implementation & Quality</h3>
              <p className="text-justify">
                Developed ML models detecting measurement drift using PySpark MLlib with 96.3% accuracy. Created Monte Carlo simulation framework validating ROI predictions against historical data. Built geospatial optimization algorithm clustering high-priority meters to maximize replacement efficiency. Implemented interactive Power BI dashboard with what-if scenario planning and budget optimization tools.
              </p>
              
              <h3 id="impact" className="text-2xl font-bold mb-4 mt-8 text-blue-300">Impact & Metrics</h3>
              <p className="text-justify">
                Generated €4.2M additional annual revenue (327% ROI) through precision replacements. Reduced emergency maintenance by 34% saving €850K annually. Achieved efficiency of 3.25x over age-based approach. Solution expanded to other assets (pipes, pumps) generating additional €3.8M savings. Total value: €8.85M annual benefit from data-driven decision making.
              </p>
            </div>
          </section>
          
          <section>
            <h2 id="key-achievements" className="text-3xl font-bold mb-6 text-blue-400">Key Achievements</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-gray-800/60 border border-gray-700 rounded-lg p-6">
                <h3 className="text-xl font-semibold mb-3 text-green-400">Time-Series Anomaly Detection</h3>
                <p>Developed custom algorithms using seasonal decomposition, ARIMA modeling, and change-point detection to identify non-linear degradation patterns in measurement accuracy, with 92% precision on historical validation data.</p>
              </div>
              <div className="bg-gray-800/60 border border-gray-700 rounded-lg p-6">
                <h3 className="text-xl font-semibold mb-3 text-green-400">Feature Engineering Pipeline</h3>
                <p>Created 120+ engineered features from raw meter data using PySpark's windowing functions and custom UDFs to extract temporal patterns, measurement deltas, and environmental correlations that improved model performance by 43%.</p>
              </div>
              <div className="bg-gray-800/60 border border-gray-700 rounded-lg p-6">
                <h3 className="text-xl font-semibold mb-3 text-green-400">ML Model Deployment</h3>
                <p>Implemented model deployment pipeline with MLflow tracking, model versioning, and A/B testing framework that enabled continuous model improvement through feedback loops, boosting decision accuracy to 92% while reducing inference time by 68%.</p>
              </div>
              <div className="bg-gray-800/60 border border-gray-700 rounded-lg p-6">
                <h3 className="text-xl font-semibold mb-3 text-green-400">Data Vault Implementation</h3>
                <p>Architected Data Vault 2.0 model with 18 hubs, 32 links, and 47 satellites using hash keys and integrated metadata tracking, enabling point-in-time analytical queries and full data lineage for all transformations.</p>
              </div>
            </div>
          </section>
          
          <section>
            <h2 id="technical-details" className="text-3xl font-bold mb-6 text-blue-400">Technical Details</h2>
            <div className="prose prose-invert max-w-none">
              <h3>Advanced Data Architecture</h3>
              <p>
                Implemented a hybrid data architecture combining real-time analytics with historical pattern recognition:
              </p>
              <ul>
                <li><strong>Data Vault Core:</strong> 18 hub entities, 32 link tables, and 47 satellites with hash-based keys and continuous integration testing</li>
                <li><strong>Streaming Layer:</strong> Near real-time reading ingestion via Apache Kafka with Structured Streaming for incremental model updates</li>
                <li><strong>Compute Optimization:</strong> Implemented custom data partitioning strategy based on geospatial clustering and temporal access patterns</li>
                <li><strong>Cache Management:</strong> Multi-level caching system with hot/warm/cold data tiers and automatic expiration policies</li>
              </ul>
              
              <p>
                This architecture achieved 87% query acceleration for analytical workloads while enabling point-in-time analysis across the entire device history.
              </p>
              
              <h3>Technical Algorithm Implementation</h3>
              <p>
                Engineered a distributed multi-stage ML pipeline with the following technical components:
              </p>
              <ol>
                <li><strong>Vector Feature Engineering:</strong> Created time-series feature vectors using sliding window aggregations (6h, 24h, 7d, 30d, 90d, 365d) with Spark's window functions and custom UDFs for lag features, Fourier transforms, and wavelet decomposition</li>
                <li><strong>Distributed Statistical Processing:</strong> Implemented parallel hypothesis testing using Benjamini-Hochberg correction for false discovery rate control across millions of time series</li>
                <li><strong>Multi-model Ensemble:</strong> Deployed gradient boosting, isolation forest, and LSTM neural networks in a voting ensemble with custom weighting based on historical accuracy by device segment</li>
                <li><strong>Explainability Layer:</strong> Integrated SHAP (SHapley Additive exPlanations) values to provide interpretable feature importance for each prediction</li>
                <li><strong>Spatial Optimization:</strong> Implemented geospatial clustering using DBSCAN algorithm with custom distance metrics to optimize field operations while maintaining prioritization integrity</li>
              </ol>
              
              <h3>Technical Implementation Stack</h3>
              <p>
                Developed with an optimized technical stack for distributed data processing and machine learning:
              </p>
              <ul>
                <li><strong>Compute Engine:</strong> Azure Databricks with custom init scripts, isolated pools for ETL/ML/serving, and dynamic autoscaling based on workload patterns</li>
                <li><strong>Data Processing:</strong> PySpark 3.2 with custom DataFrame transformers, Catalyst optimizer hints, and UDF vectorization techniques</li>
                <li><strong>Storage Layer:</strong> Delta Lake with optimized Z-ordering on high-cardinality fields, retention policies, and vacuum operations</li>
                <li><strong>ML Framework:</strong> MLflow with experiment tracking, model versioning, and automated model registry integration</li>
                <li><strong>CI/CD Pipeline:</strong> Azure DevOps with automated unit testing (pytest), integration testing on isolated environments, and blue/green deployment</li>
                <li><strong>Monitoring:</strong> Custom metrics framework using Prometheus and Grafana with anomaly detection for pipeline performance</li>
              </ul>
            </div>
          </section>
          
          <section>
            <h2 id="tools-technologies" className="text-3xl font-bold mb-6 text-blue-400">Tools & Technologies</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
              <div className="bg-gray-800/60 border border-gray-700 rounded-lg p-6">
                <h3 className="text-xl font-semibold mb-3">Data Platform</h3>
                <ul className="list-disc pl-5 space-y-2">
                  <li>Azure Databricks</li>
                  <li>Delta Lake</li>
                  <li>Azure Data Lake Storage</li>
                  <li>Azure Synapse Analytics</li>
                </ul>
              </div>
              <div className="bg-gray-800/60 border border-gray-700 rounded-lg p-6">
                <h3 className="text-xl font-semibold mb-3">Programming Languages</h3>
                <ul className="list-disc pl-5 space-y-2">
                  <li>Python</li>
                  <li>PySpark</li>
                  <li>SQL</li>
                  <li>R (for prototype modeling)</li>
                </ul>
              </div>
              <div className="bg-gray-800/60 border border-gray-700 rounded-lg p-6">
                <h3 className="text-xl font-semibold mb-3">Data Modeling</h3>
                <ul className="list-disc pl-5 space-y-2">
                  <li>Data Vault 2.0</li>
                  <li>Dimensional modeling</li>
                  <li>Time-series optimization</li>
                </ul>
              </div>
              <div className="bg-gray-800/60 border border-gray-700 rounded-lg p-6">
                <h3 className="text-xl font-semibold mb-3">Analytics & ML</h3>
                <ul className="list-disc pl-5 space-y-2">
                  <li>scikit-learn</li>
                  <li>PyTorch</li>
                  <li>MLflow</li>
                  <li>Statistical analysis libraries</li>
                </ul>
              </div>
              <div className="bg-gray-800/60 border border-gray-700 rounded-lg p-6">
                <h3 className="text-xl font-semibold mb-3">DevOps & Monitoring</h3>
                <ul className="list-disc pl-5 space-y-2">
                  <li>Azure DevOps</li>
                  <li>Git</li>
                  <li>Jenkins</li>
                  <li>Databricks Jobs</li>
                </ul>
              </div>
              <div className="bg-gray-800/60 border border-gray-700 rounded-lg p-6">
                <h3 className="text-xl font-semibold mb-3">Visualization</h3>
                <ul className="list-disc pl-5 space-y-2">
                  <li>Power BI</li>
                  <li>Plotly</li>
                  <li>Matplotlib</li>
                  <li>GIS integration</li>
                </ul>
              </div>
            </div>
          </section>
          
          <section>
            <h2 id="challenges-solutions" className="text-3xl font-bold mb-6 text-blue-400">Challenges & Solutions</h2>
            <div className="space-y-8">
              <div>
                <h3 className="text-xl font-semibold mb-3 text-yellow-400">Challenge: Data Historicity & Quality</h3>
                <div className="bg-gray-800/60 border border-gray-700 rounded-lg p-6">
                  <p className="mb-4">
                    Historical meter data had significant quality issues, inconsistent formats, and lacked proper versioning, making it difficult to establish accurate baselines for consumption patterns.
                  </p>
                  <h4 className="text-lg font-medium mb-2 text-green-400">Solution:</h4>
                  <p>
                    Implemented a Data Vault modeling approach to properly capture and version all historical data. Developed data quality scorecards and automated cleansing pipelines. Used statistical techniques to impute missing values and identify unreliable data points that needed to be excluded from analysis.
                  </p>
                </div>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold mb-3 text-yellow-400">Challenge: Distinguishing Meter Degradation from Usage Changes</h3>
                <div className="bg-gray-800/60 border border-gray-700 rounded-lg p-6">
                  <p className="mb-4">
                    A critical challenge was differentiating between genuine consumption decreases (e.g., water conservation efforts, property vacancies) and meter degradation that resulted in undercounting.
                  </p>
                  <h4 className="text-lg font-medium mb-2 text-green-400">Solution:</h4>
                  <p>
                    Developed a multi-factor causal model that incorporated property characteristics, neighborhood trends, seasonal patterns, and customer segments. Implemented control group analysis, comparing meters of similar age and characteristics to identify anomalous patterns. Used change-point detection algorithms to identify gradual degradation versus sudden changes in usage.
                  </p>
                </div>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold mb-3 text-yellow-400">Challenge: Processing Scale & Performance</h3>
                <div className="bg-gray-800/60 border border-gray-700 rounded-lg p-6">
                  <p className="mb-4">
                    The algorithm needed to process billions of historical readings for millions of meters, with initial runs taking over a week to complete.
                  </p>
                  <h4 className="text-lg font-medium mb-2 text-green-400">Solution:</h4>
                  <p>
                    Optimized the data pipeline through careful partitioning strategies, query optimization, and distributed processing techniques in Spark. Implemented incremental processing to analyze only newly available data. Designed a multi-stage approach that allowed for parallel processing of independent components. Reduced runtime from 7+ days to under 12 hours.
                  </p>
                </div>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold mb-3 text-yellow-400">Challenge: Operational Integration</h3>
                <div className="bg-gray-800/60 border border-gray-700 rounded-lg p-6">
                  <p className="mb-4">
                    The final solution needed to integrate with the utility's work order management systems and field operation planning tools to be actionable.
                  </p>
                  <h4 className="text-lg font-medium mb-2 text-green-400">Solution:</h4>
                  <p>
                    Developed API endpoints to expose prioritized replacement lists to downstream systems. Created geographical clustering algorithms to optimize field crew routing. Implemented feedback loops to capture post-replacement validation data, which continuously improved the algorithm's accuracy. Built Power BI dashboards for operational teams with clear prioritization guidance and expected ROI metrics.
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
