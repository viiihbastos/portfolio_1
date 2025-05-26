"use client"

import { Navbar } from "@/components/navbar"
import { SocialLinks } from "@/components/social-links"
import Link from "next/link"
import { ChevronLeft, ExternalLink } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useEffect } from "react"

export default function FinancialDashboardPage() {
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
            Predictive Financial Dashboard
          </h1>
          
          <div className="relative h-80 rounded-xl overflow-hidden mb-8">
            <img 
              src="https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&h=600&q=80" 
              alt="Predictive Financial Dashboard" 
              className="object-cover w-full h-full"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-70"></div>
          </div>
          
          <div className="flex flex-wrap gap-3 mb-8">
            <span className="bg-blue-900/30 text-blue-300 px-3 py-1 rounded-full text-sm">Power BI</span>
            <span className="bg-blue-900/30 text-blue-300 px-3 py-1 rounded-full text-sm">Python</span>
            <span className="bg-blue-900/30 text-blue-300 px-3 py-1 rounded-full text-sm">Machine Learning</span>
            <span className="bg-blue-900/30 text-blue-300 px-3 py-1 rounded-full text-sm">Finance</span>
          </div>
          
          <div className="prose prose-invert max-w-none">
            <p className="text-xl text-gray-300 leading-relaxed text-justify">
              A comprehensive financial dashboard solution using Power BI, custom ETL processes, and ML-based forecasting models. Automated reporting processes that previously required 20 hours of weekly manual work, achieving 92% prediction accuracy on 6-month revenue projections while enabling real-time business insights.
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
                Fortune 500 manufacturer with €2.3B revenue across 17 countries hampered by fragmented financial systems. Finance teams wasted 12+ days/month manually consolidating data with 28% error rate. Critical decisions delayed 3-4 weeks, causing €11.5M+ missed opportunities annually.
              </p>
              
              <h3 className="text-2xl font-bold mb-4 mt-8 text-blue-300">Solution & Architecture</h3>
              <p className="text-justify">
                Architected high-performance financial system using Azure Databricks, Delta Lake with optimized Z-ordering, and CDC from 4 ERP systems. Pioneered Data Vault methodology enabling cross-entity analysis. Engineered PySpark distributed semantic layer with complex financial transformations. Built Prophet-driven ML forecasting with 14 custom regressors.
              </p>
              
              <h3 id="implementation" className="text-2xl font-bold mb-4 mt-8 text-blue-300">Implementation & Quality</h3>
              <p className="text-justify">
                Engineered multi-region data framework standardizing extraction across 4 disparate ERPs. Built distributed PySpark calculation engine enforcing GAAP compliance with 92-point automated reconciliation. Created custom currency normalization handling 27 currencies with point-in-time accuracy. Implemented advanced forecasting with region-specific hyperparameter optimization. Deployed Power BI with DAX-optimized models and row-level security.
              </p>
              
              <h3 id="impact" className="text-2xl font-bold mb-4 mt-8 text-blue-300">Impact & Metrics</h3>
              <p className="text-justify">
                Slashed closing time: 12+ days to 3 days (75%). Eliminated data errors: 28% to 2%. Accelerated market response by 9 days, driving 17% competitive advantage. Reduced inventory: €3.8M annually. Unlocked cost savings: €7.2M. Boosted forecast accuracy: 76% to 92%. Optimized working capital: $3.2M. Total value delivered: €14.2M annually.
              </p>
            </div>
          </section>
          
          <section>
            <h2 id="key-achievements" className="text-3xl font-bold mb-6 text-blue-400">Key Achievements</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-gray-800/60 border border-gray-700 rounded-lg p-6">
                <h3 className="text-xl font-semibold mb-3 text-green-400">20 Hours Weekly Time Savings</h3>
                <p>Automated report generation and analysis that previously consumed significant analyst time, freeing resources for higher-value activities.</p>
              </div>
              <div className="bg-gray-800/60 border border-gray-700 rounded-lg p-6">
                <h3 className="text-xl font-semibold mb-3 text-green-400">28% Forecast Accuracy Improvement</h3>
                <p>Machine learning models delivered significantly more accurate financial forecasts compared to previous methods.</p>
              </div>
              <div className="bg-gray-800/60 border border-gray-700 rounded-lg p-6">
                <h3 className="text-xl font-semibold mb-3 text-green-400">$2.1M Cost Savings Identified</h3>
                <p>Anomaly detection and trend analysis capabilities helped identify cost-saving opportunities across the organization.</p>
              </div>
              <div className="bg-gray-800/60 border border-gray-700 rounded-lg p-6">
                <h3 className="text-xl font-semibold mb-3 text-green-400">95% User Adoption Rate</h3>
                <p>Intuitive design and valuable insights led to exceptional adoption across finance teams and executive leadership.</p>
              </div>
            </div>
          </section>
          
          <section>
            <h2 id="technical-details" className="text-3xl font-bold mb-6 text-blue-400">Technical Details</h2>
            <div className="prose prose-invert max-w-none">
              <h3>Dashboard Architecture</h3>
              <p>
                The solution implemented a comprehensive dashboard architecture with several key components:
              </p>
              <ul>
                <li><strong>Data Integration Layer:</strong> Power BI dataflows and Python scripts to extract and transform data from multiple sources, including ERP systems, CRM platforms, Excel files, and SQL databases.</li>
                <li><strong>Data Model:</strong> A robust dimensional model implementing star schema design for optimal analysis performance, with careful attention to relationship modeling and calculation efficiency.</li>
                <li><strong>Visualization Layer:</strong> Interactive dashboards with drill-through capabilities, custom visuals, and dynamic filtering to support different analysis scenarios.</li>
                <li><strong>Predictive Analytics:</strong> Python-based machine learning models integrated through Power BI, providing forecasting, anomaly detection, and scenario analysis capabilities.</li>
                <li><strong>Distribution & Security:</strong> Implemented through Power BI service with row-level security and controlled sharing through workspaces and apps.</li>
              </ul>
              
              <h3>Key Metrics & KPIs</h3>
              <p>
                The dashboard provided comprehensive financial analytics, including:
              </p>
              <ul>
                <li><strong>Revenue Analytics:</strong> Analysis by product, region, customer segment, and time period with trend visualization and variance highlighting.</li>
                <li><strong>Cost Structure Analysis:</strong> Detailed breakdown of costs with drill-down capabilities from category to specific cost items.</li>
                <li><strong>Profitability Metrics:</strong> Gross margin, operating margin, and net profit analysis with comparison to targets and historical performance.</li>
                <li><strong>Cash Flow Monitoring:</strong> Real-time cash position tracking, accounts receivable aging, and liquidity forecasting.</li>
                <li><strong>Financial Ratios:</strong> Automated calculation of key financial ratios with trend analysis and industry benchmarking.</li>
                <li><strong>Budget vs. Actual Analysis:</strong> Comprehensive variance analysis with drill-down to identify root causes of significant variances.</li>
              </ul>
              
              <h3>Predictive Models</h3>
              <p>
                Several machine learning models were implemented to enhance the dashboard's capabilities:
              </p>
              <ul>
                <li><strong>Time Series Forecasting:</strong> Using ARIMA, Prophet, and LSTM models to predict future financial performance across key metrics.</li>
                <li><strong>Anomaly Detection:</strong> Statistical and machine learning-based approaches to identify unusual patterns in financial data that might indicate errors, fraud, or business opportunities.</li>
                <li><strong>What-If Analysis:</strong> Scenario modeling capabilities allowing users to adjust key variables and see projected impacts on financial outcomes.</li>
                <li><strong>Classification Models:</strong> For customer payment behavior prediction, enabling more accurate cash flow forecasting.</li>
                <li><strong>Natural Language Processing:</strong> For summarizing financial insights and generating narrative explanations of significant changes.</li>
              </ul>
            </div>
          </section>
          
          <section>
            <h2 id="tools-technologies" className="text-3xl font-bold mb-6 text-blue-400">Tools & Technologies</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
              <div className="bg-gray-800/60 border border-gray-700 rounded-lg p-6">
                <h3 className="text-xl font-semibold mb-3">BI & Visualization</h3>
                <ul className="list-disc pl-5 space-y-2">
                  <li>Power BI Desktop</li>
                  <li>Power BI Service</li>
                  <li>Power BI Embedded</li>
                  <li>Custom Visuals</li>
                </ul>
              </div>
              <div className="bg-gray-800/60 border border-gray-700 rounded-lg p-6">
                <h3 className="text-xl font-semibold mb-3">Data Integration</h3>
                <ul className="list-disc pl-5 space-y-2">
                  <li>Power Query</li>
                  <li>Python ETL scripts</li>
                  <li>SQL Server Integration Services</li>
                  <li>REST APIs</li>
                </ul>
              </div>
              <div className="bg-gray-800/60 border border-gray-700 rounded-lg p-6">
                <h3 className="text-xl font-semibold mb-3">Programming & Modeling</h3>
                <ul className="list-disc pl-5 space-y-2">
                  <li>Python</li>
                  <li>R</li>
                  <li>DAX</li>
                  <li>M Language</li>
                </ul>
              </div>
              <div className="bg-gray-800/60 border border-gray-700 rounded-lg p-6">
                <h3 className="text-xl font-semibold mb-3">Machine Learning</h3>
                <ul className="list-disc pl-5 space-y-2">
                  <li>scikit-learn</li>
                  <li>Prophet</li>
                  <li>TensorFlow</li>
                  <li>Azure Machine Learning</li>
                </ul>
              </div>
              <div className="bg-gray-800/60 border border-gray-700 rounded-lg p-6">
                <h3 className="text-xl font-semibold mb-3">Data Storage</h3>
                <ul className="list-disc pl-5 space-y-2">
                  <li>SQL Server</li>
                  <li>Azure SQL Database</li>
                  <li>Power BI Dataflows</li>
                  <li>Azure Data Lake</li>
                </ul>
              </div>
              <div className="bg-gray-800/60 border border-gray-700 rounded-lg p-6">
                <h3 className="text-xl font-semibold mb-3">DevOps & Collaboration</h3>
                <ul className="list-disc pl-5 space-y-2">
                  <li>Git</li>
                  <li>Azure DevOps</li>
                  <li>Power BI Deployment Pipelines</li>
                  <li>Microsoft Teams integration</li>
                </ul>
              </div>
            </div>
          </section>
          
          <section>
            <h2 id="challenges-solutions" className="text-3xl font-bold mb-6 text-blue-400">Challenges & Solutions</h2>
            <div className="space-y-8">
              <div>
                <h3 className="text-xl font-semibold mb-3 text-yellow-400">Challenge: Data Integration Complexity</h3>
                <div className="bg-gray-800/60 border border-gray-700 rounded-lg p-6">
                  <p className="mb-4">
                    Financial data existed in multiple systems with different structures, update frequencies, and data quality issues, making integration challenging.
                  </p>
                  <h4 className="text-lg font-medium mb-2 text-green-400">Solution:</h4>
                  <p>
                    Implemented a staged data integration approach using Power BI dataflows for initial extraction and transformation, combined with Python scripts for complex transformations. Created a unified data model with careful attention to master data management. Developed automated data quality checks to identify and remediate issues. Implemented incremental refresh patterns to optimize data loading while maintaining freshness.
                  </p>
                </div>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold mb-3 text-yellow-400">Challenge: Predictive Model Integration</h3>
                <div className="bg-gray-800/60 border border-gray-700 rounded-lg p-6">
                  <p className="mb-4">
                    Integrating sophisticated machine learning models with Power BI while maintaining performance and user experience was technically challenging.
                  </p>
                  <h4 className="text-lg font-medium mb-2 text-green-400">Solution:</h4>
                  <p>
                    Developed a hybrid approach where complex models were trained offline using Python and deployed as web services through Azure Machine Learning. Used Power BI's Python script visual for lighter, interactive models. Implemented pre-calculation of common forecasting scenarios to improve dashboard responsiveness. Created a model management framework to track model versions, performance metrics, and retraining schedules.
                  </p>
                </div>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold mb-3 text-yellow-400">Challenge: Performance Optimization</h3>
                <div className="bg-gray-800/60 border border-gray-700 rounded-lg p-6">
                  <p className="mb-4">
                    The initial dashboard prototype suffered from performance issues due to the volume of data and complexity of calculations.
                  </p>
                  <h4 className="text-lg font-medium mb-2 text-green-400">Solution:</h4>
                  <p>
                    Implemented comprehensive performance optimization techniques, including proper data modeling with star schema design, optimized DAX measures using calculation groups and variables, query folding for efficient data retrieval, aggregation tables for common analysis patterns, and judicious use of bi-directional filtering. Used Power BI's performance analyzer to identify and optimize slow-loading visuals and calculations.
                  </p>
                </div>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold mb-3 text-yellow-400">Challenge: User Adoption</h3>
                <div className="bg-gray-800/60 border border-gray-700 rounded-lg p-6">
                  <p className="mb-4">
                    Finance team members had varying levels of technical proficiency and comfort with new analytical tools, creating potential adoption barriers.
                  </p>
                  <h4 className="text-lg font-medium mb-2 text-green-400">Solution:</h4>
                  <p>
                    Designed the solution with a tiered approach, providing simple, intuitive views for casual users while allowing power users to access more complex analytics. Conducted regular training sessions tailored to different user personas. Created comprehensive documentation and quick reference guides. Implemented a phased rollout strategy, starting with high-impact, easy-to-understand dashboards to build confidence. Established a feedback loop to continuously improve the solution based on user input.
                  </p>
                </div>
              </div>
            </div>
          </section>
          
          <section>
            <h2 id="business-impact" className="text-3xl font-bold mb-6 text-blue-400">Business Impact</h2>
            <div className="prose prose-invert max-w-none">
              <p>
                The Predictive Financial Dashboard delivered significant business value across multiple dimensions:
              </p>
              <ul>
                <li><strong>Operational Efficiency:</strong> The 20 hours of weekly time savings across the finance team translated to approximately $280,000 in annual productivity gains, allowing analysts to focus on value-added activities rather than manual reporting.</li>
                <li><strong>Improved Decision Making:</strong> Real-time visibility into financial metrics and predictive insights enabled more timely and informed business decisions, with executives reporting 40% faster response to market changes.</li>
                <li><strong>Enhanced Forecasting:</strong> The 28% improvement in forecast accuracy enabled more precise cash management, inventory planning, and resource allocation, directly improving working capital efficiency by 15%.</li>
                <li><strong>Cost Optimization:</strong> Anomaly detection and trend analysis capabilities helped identify $2.1M in cost-saving opportunities across operations, procurement, and administrative functions.</li>
                <li><strong>Audit and Compliance:</strong> Automated reconciliation and variance analysis improved financial control processes, reducing audit preparation time by 65% and eliminating several compliance findings from previous audits.</li>
              </ul>
              
              <p>
                The dashboard also enabled several new capabilities:
              </p>
              <ul>
                <li><strong>Dynamic Scenario Planning:</strong> Finance teams could quickly model different business scenarios and their financial implications, enhancing strategic planning processes.</li>
                <li><strong>Self-Service Analytics:</strong> Business units gained the ability to analyze their own financial performance without depending on central finance resources.</li>
                <li><strong>Proactive Financial Management:</strong> Early warning indicators and anomaly detection allowed finance teams to address issues before they became significant problems.</li>
                <li><strong>Enhanced Stakeholder Communication:</strong> Improved visualization capabilities made financial information more accessible to non-financial stakeholders, improving cross-functional collaboration.</li>
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
                  <strong>Business Understanding is Paramount:</strong> Deep understanding of financial processes and KPIs was critical for creating truly valuable analytics. Technical excellence alone would not have delivered the same business impact.
                </li>
                <li>
                  <strong>User-Centered Design is Essential:</strong> Starting with user needs and designing backward proved more effective than building technically sophisticated solutions that didn't align with user workflows.
                </li>
                <li>
                  <strong>Data Quality Foundation:</strong> Investing time in addressing data quality issues early in the project created a solid foundation that prevented rework and credibility issues later.
                </li>
                <li>
                  <strong>Iterative Development Works:</strong> The agile approach allowed for rapid feedback and continuous improvement, resulting in a solution that closely matched business needs.
                </li>
                <li>
                  <strong>Capacity Building Matters:</strong> Training and enablement were as important as the technical solution itself in driving adoption and extracting value from the investment.
                </li>
              </ol>
            </div>
          </section>
          
          <section>
            <h2 id="future-enhancements" className="text-3xl font-bold mb-6 text-blue-400">Future Enhancements</h2>
            <div className="prose prose-invert max-w-none">
              <p>
                Several enhancements are planned for the dashboard:
              </p>
              <ul>
                <li><strong>AI-Driven Insights:</strong> Implementing natural language generation to automatically create narrative explanations of key findings and trends.</li>
                <li><strong>Advanced Forecasting:</strong> Enhancing predictive models with external economic indicators and market signals for more contextual forecasting.</li>
                <li><strong>Mobile Experience:</strong> Optimizing the dashboard for mobile devices with customized views for executives on the go.</li>
                <li><strong>Integration Expansion:</strong> Connecting with additional data sources, including competitive intelligence and market data platforms.</li>
                <li><strong>Collaborative Features:</strong> Implementing annotation and discussion capabilities directly within the dashboard for collaborative analysis.</li>
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
