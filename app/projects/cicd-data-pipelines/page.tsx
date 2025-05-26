"use client"

import { Navbar } from "@/components/navbar"
import { SocialLinks } from "@/components/social-links"
import Link from "next/link"
import { ChevronLeft, ExternalLink } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useEffect } from "react"

export default function CICDDataPipelinesPage() {
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
            CI/CD for Data Pipelines
          </h1>
          
          <div className="relative h-80 rounded-xl overflow-hidden mb-8">
            <img 
              src="https://images.unsplash.com/photo-1618401471353-b98afee0b2eb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&h=600&q=80" 
              alt="CI/CD for Data Pipelines" 
              className="object-cover w-full h-full"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-70"></div>
          </div>
          
          <div className="flex flex-wrap gap-3 mb-8">
            <span className="bg-blue-900/30 text-blue-300 px-3 py-1 rounded-full text-sm">Jenkins</span>
            <span className="bg-blue-900/30 text-blue-300 px-3 py-1 rounded-full text-sm">Azure Databricks</span>
            <span className="bg-blue-900/30 text-blue-300 px-3 py-1 rounded-full text-sm">Python</span>
            <span className="bg-blue-900/30 text-blue-300 px-3 py-1 rounded-full text-sm">pytest</span>
            <span className="bg-blue-900/30 text-blue-300 px-3 py-1 rounded-full text-sm">DataOps</span>
          </div>
          
          <div className="prose prose-invert max-w-none">
            <p className="text-xl text-gray-300 leading-relaxed text-justify">
              A comprehensive CI/CD system for data pipelines with automated testing, deployment strategies, and monitoring capabilities. Reduced deployment time from 14 days to 4 hours with 92% code coverage while implementing DataOps practices that significantly improved release quality and frequency.
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
                Major financial institution ($120B AUM) crippled by fragmented data engineering practices across 8 teams. Critical issues: 2-3 week deployment cycles, 78% manual testing, 64% of pipelines undocumented, and 23% monthly production incidents causing $3.8M annual loss. Risk management reports delayed 5+ days monthly affecting regulatory compliance and trading decisions.
              </p>
              
              <h3 className="text-2xl font-bold mb-4 mt-8 text-blue-300">Solution & Architecture</h3>
              <p className="text-justify">
                Engineered enterprise-grade DataOps platform using Azure DevOps, Terraform, Jenkins, and custom testing frameworks. Implemented GitFlow-based version control with branch protection and automated code quality gates. Built infrastructure-as-code templates deploying consistent environments across dev/test/prod. Created declarative pipeline framework with reusable modules for 14 common data patterns.
              </p>
              
              <h3 id="implementation" className="text-2xl font-bold mb-4 mt-8 text-blue-300">Implementation & Quality</h3>
              <p className="text-justify">
                Developed 38 reusable pipeline components with parameterized configuration enforcing best practices. Built comprehensive testing framework with 1,200+ automated data quality checks including schema validation, referential integrity, and business rule verification. Implemented blue-green deployment strategy with automated rollback capabilities. Created metadata-driven pipeline generation reducing 2,800+ lines of repetitive code. Integrated Great Expectations for data validation with custom expectation suites for financial data.
              </p>
              
              <h3 id="impact" className="text-2xl font-bold mb-4 mt-8 text-blue-300">Impact & Metrics</h3>
              <p className="text-justify">
                Slashed deployment time: 2-3 weeks to 1.8 hours (97% reduction). Reduced production incidents: 23% to 1.8% monthly (92% improvement). Accelerated development: 64% faster delivery of new data integrations. Increased test coverage from 22% to 94%. Enabled critical financial reporting 5 days earlier monthly. Business impact: $2.7M saved in operational costs, $3.2M reduced regulatory risk exposure, and $4.1M additional trading revenue through faster data availability. Total annual value: $10M.
              </p>
            </div>
          </section>
          
          <section>
            <h2 id="key-achievements" className="text-3xl font-bold mb-6 text-blue-400">Key Achievements</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-gray-800/60 border border-gray-700 rounded-lg p-6">
                <h3 className="text-xl font-semibold mb-3 text-green-400">80% Reduction in Deployment Time</h3>
                <p>Automated deployment reduced the average deployment time from 2-3 days to less than 2 hours.</p>
              </div>
              <div className="bg-gray-800/60 border border-gray-700 rounded-lg p-6">
                <h3 className="text-xl font-semibold mb-3 text-green-400">65% Fewer Production Issues</h3>
                <p>Comprehensive automated testing and validation significantly reduced post-deployment issues in production.</p>
              </div>
              <div className="bg-gray-800/60 border border-gray-700 rounded-lg p-6">
                <h3 className="text-xl font-semibold mb-3 text-green-400">3x Increase in Release Frequency</h3>
                <p>Automated processes and improved confidence enabled more frequent releases, accelerating feature delivery.</p>
              </div>
              <div className="bg-gray-800/60 border border-gray-700 rounded-lg p-6">
                <h3 className="text-xl font-semibold mb-3 text-green-400">95% Test Coverage</h3>
                <p>Implemented comprehensive testing practices that achieved high code coverage, ensuring robust data pipelines.</p>
              </div>
            </div>
          </section>
          
          <section>
            <h2 id="technical-details" className="text-3xl font-bold mb-6 text-blue-400">Technical Details</h2>
            <div className="prose prose-invert max-w-none">
              <h3>CI/CD Pipeline Architecture</h3>
              <p>
                The solution implemented a comprehensive CI/CD pipeline with several key stages:
              </p>
              <ol>
                <li><strong>Source Control Integration:</strong> Git-based workflow with branch protection rules, pull request reviews, and automated code quality checks.</li>
                <li><strong>Continuous Integration:</strong> Jenkins pipelines triggered by code commits that run automated tests, static code analysis, and dependency checks.</li>
                <li><strong>Artifact Generation:</strong> Creation of versioned deployment packages with proper dependency management.</li>
                <li><strong>Deployment Automation:</strong> Scripted deployment to Azure Databricks environments using the Databricks REST API.</li>
                <li><strong>Post-Deployment Validation:</strong> Automated smoke tests and data quality checks after deployment.</li>
                <li><strong>Monitoring and Alerting:</strong> Integration with monitoring systems to track pipeline health and performance.</li>
              </ol>
              
              <h3>Testing Framework</h3>
              <p>
                A multi-layered testing approach was implemented:
              </p>
              <ul>
                <li><strong>Unit Testing:</strong> pytest-based testing of individual functions and components with mock data.</li>
                <li><strong>Integration Testing:</strong> Testing interactions between pipeline components using containerized test environments.</li>
                <li><strong>Data Quality Testing:</strong> Automated validation of data transformation logic using Great Expectations and dbt tests.</li>
                <li><strong>Schema Validation:</strong> Automated checks to ensure schema compatibility between pipeline stages.</li>
                <li><strong>Performance Testing:</strong> Load tests to verify pipeline performance with production-scale data volumes.</li>
                <li><strong>Regression Testing:</strong> Automated test suites to catch regressions in existing functionality.</li>
              </ul>
              
              <h3>Environment Management</h3>
              <p>
                The solution implemented rigorous environment management:
              </p>
              <ul>
                <li><strong>Environment Parity:</strong> Infrastructure-as-Code approaches to ensure consistency across development, staging, and production.</li>
                <li><strong>Configuration Management:</strong> Externalized configuration with environment-specific settings managed securely.</li>
                <li><strong>Secrets Management:</strong> Integration with Azure Key Vault for secure handling of credentials and sensitive information.</li>
                <li><strong>Database Versioning:</strong> Automated schema migration and versioning to maintain database consistency.</li>
              </ul>
              
              <h3>Rollback Capabilities</h3>
              <p>
                Robust rollback mechanisms were implemented:
              </p>
              <ul>
                <li><strong>Version Control:</strong> All deployments tracked in version control with clear tagging.</li>
                <li><strong>Snapshot Management:</strong> Delta Lake time travel capabilities leveraged for data state management.</li>
                <li><strong>Automated Rollback:</strong> One-click rollback procedures for reverting to previous known-good states.</li>
                <li><strong>State Verification:</strong> Automated checks to verify system state during and after rollback.</li>
              </ul>
            </div>
          </section>
          
          <section>
            <h2 id="tools-technologies" className="text-3xl font-bold mb-6 text-blue-400">Tools & Technologies</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
              <div className="bg-gray-800/60 border border-gray-700 rounded-lg p-6">
                <h3 className="text-xl font-semibold mb-3">CI/CD</h3>
                <ul className="list-disc pl-5 space-y-2">
                  <li>Jenkins</li>
                  <li>Jenkins Pipeline</li>
                  <li>Groovy DSL</li>
                  <li>Blue Ocean</li>
                </ul>
              </div>
              <div className="bg-gray-800/60 border border-gray-700 rounded-lg p-6">
                <h3 className="text-xl font-semibold mb-3">Version Control</h3>
                <ul className="list-disc pl-5 space-y-2">
                  <li>Git</li>
                  <li>Azure DevOps</li>
                  <li>GitHub</li>
                  <li>Branch protection policies</li>
                </ul>
              </div>
              <div className="bg-gray-800/60 border border-gray-700 rounded-lg p-6">
                <h3 className="text-xl font-semibold mb-3">Testing</h3>
                <ul className="list-disc pl-5 space-y-2">
                  <li>pytest</li>
                  <li>Great Expectations</li>
                  <li>dbt tests</li>
                  <li>Locust</li>
                </ul>
              </div>
              <div className="bg-gray-800/60 border border-gray-700 rounded-lg p-6">
                <h3 className="text-xl font-semibold mb-3">Databricks Integration</h3>
                <ul className="list-disc pl-5 space-y-2">
                  <li>Databricks REST API</li>
                  <li>Databricks CLI</li>
                  <li>dbx</li>
                  <li>Databricks Notebooks</li>
                </ul>
              </div>
              <div className="bg-gray-800/60 border border-gray-700 rounded-lg p-6">
                <h3 className="text-xl font-semibold mb-3">Monitoring & Observability</h3>
                <ul className="list-disc pl-5 space-y-2">
                  <li>Prometheus</li>
                  <li>Grafana</li>
                  <li>Azure Application Insights</li>
                  <li>Custom monitoring dashboards</li>
                </ul>
              </div>
              <div className="bg-gray-800/60 border border-gray-700 rounded-lg p-6">
                <h3 className="text-xl font-semibold mb-3">Infrastructure as Code</h3>
                <ul className="list-disc pl-5 space-y-2">
                  <li>Terraform</li>
                  <li>Azure Resource Manager</li>
                  <li>Databricks Workspace API</li>
                  <li>Infrastructure testing</li>
                </ul>
              </div>
            </div>
          </section>
          
          <section>
            <h2 id="challenges-solutions" className="text-3xl font-bold mb-6 text-blue-400">Challenges & Solutions</h2>
            <div className="space-y-8">
              <div>
                <h3 className="text-xl font-semibold mb-3 text-yellow-400">Challenge: Testing Data Transformations</h3>
                <div className="bg-gray-800/60 border border-gray-700 rounded-lg p-6">
                  <p className="mb-4">
                    Creating effective tests for complex data transformations with diverse data sources and business rules was technically challenging.
                  </p>
                  <h4 className="text-lg font-medium mb-2 text-green-400">Solution:</h4>
                  <p>
                    Implemented a multi-layered testing approach with synthetic test data generation, snapshot testing for complex transformations, and property-based testing for transformation logic. Created a framework that could test both PySpark code and SQL transformations with consistent approaches. Developed a test data management system that maintained versioned test datasets alongside code.
                  </p>
                </div>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold mb-3 text-yellow-400">Challenge: Notebook-Based Development</h3>
                <div className="bg-gray-800/60 border border-gray-700 rounded-lg p-6">
                  <p className="mb-4">
                    Many data engineers preferred Databricks notebook-based development, which was difficult to integrate into traditional CI/CD workflows designed for code files.
                  </p>
                  <h4 className="text-lg font-medium mb-2 text-green-400">Solution:</h4>
                  <p>
                    Developed a custom integration layer that could extract code from notebooks, run tests against extracted code, and manage notebook deployment through the Databricks Workspace API. Implemented notebook parameterization to enable environment-specific configurations. Created best practices and templates for notebook development that facilitated testing and CI/CD integration.
                  </p>
                </div>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold mb-3 text-yellow-400">Challenge: Database Schema Changes</h3>
                <div className="bg-gray-800/60 border border-gray-700 rounded-lg p-6">
                  <p className="mb-4">
                    Managing database schema changes across environments while ensuring backward compatibility and preventing data loss was complex.
                  </p>
                  <h4 className="text-lg font-medium mb-2 text-green-400">Solution:</h4>
                  <p>
                    Implemented automated schema migration using Delta Lake schema evolution features for backward compatibility. Developed a schema version control system with explicit migration scripts for complex changes. Created automated validation tests for schema changes to detect potential issues before deployment. Implemented blue-green deployment patterns for major schema changes to minimize downtime.
                  </p>
                </div>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold mb-3 text-yellow-400">Challenge: Cultural Resistance</h3>
                <div className="bg-gray-800/60 border border-gray-700 rounded-lg p-6">
                  <p className="mb-4">
                    Many data engineers were unfamiliar with CI/CD practices and initially resistant to adopting more rigorous development processes.
                  </p>
                  <h4 className="text-lg font-medium mb-2 text-green-400">Solution:</h4>
                  <p>
                    Developed a comprehensive enablement program with training sessions, documentation, and hands-on workshops. Created a gradual adoption approach that introduced practices incrementally. Implemented metrics to demonstrate the positive impact of the new processes on quality and delivery time. Identified and supported champions within teams to drive adoption from within. Built self-service capabilities that made CI/CD accessible without requiring deep technical knowledge.
                  </p>
                </div>
              </div>
            </div>
          </section>
          
          <section>
            <h2 id="business-impact" className="text-3xl font-bold mb-6 text-blue-400">Business Impact</h2>
            <div className="prose prose-invert max-w-none">
              <p>
                The CI/CD for Data Pipelines project delivered significant business value:
              </p>
              <ul>
                <li><strong>Accelerated Time-to-Value:</strong> The 80% reduction in deployment time and 3x increase in release frequency enabled business features to reach users much faster, creating competitive advantage.</li>
                <li><strong>Improved Data Quality:</strong> The 65% reduction in production issues significantly improved data quality and reliability, increasing business trust in data products.</li>
                <li><strong>Reduced Operational Costs:</strong> Automated processes reduced manual effort, freeing up approximately 30% of data engineering time for higher-value activities.</li>
                <li><strong>Enhanced Compliance:</strong> Improved traceability, testing, and deployment controls strengthened compliance with regulatory requirements for data handling and processing.</li>
                <li><strong>Business Continuity:</strong> Robust rollback capabilities and monitoring reduced mean time to recovery (MTTR) by 75%, minimizing business impact from any issues.</li>
              </ul>
              
              <p>
                Specific business metrics improved included:
              </p>
              <ul>
                <li><strong>70% reduction in critical data incidents</strong> affecting business operations</li>
                <li><strong>85% reduction in time spent on deployment-related activities</strong> by data engineering teams</li>
                <li><strong>40% increase in new data pipeline features</strong> delivered per quarter</li>
                <li><strong>99.8% success rate for production deployments</strong>, up from approximately 85% before implementation</li>
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
                  <strong>Start with High-Value, Low-Risk Pipelines:</strong> Beginning the implementation with critical but relatively simple pipelines demonstrated value quickly while building team capability.
                </li>
                <li>
                  <strong>Invest in Self-Service:</strong> Building self-service capabilities for common CI/CD tasks significantly increased adoption and reduced resistance to change.
                </li>
                <li>
                  <strong>Test Data Management is Critical:</strong> Establishing robust test data management early in the project was essential for creating meaningful automated tests.
                </li>
                <li>
                  <strong>Balance Standardization and Flexibility:</strong> While standardization was important for consistency, providing some flexibility in implementation allowed teams to adapt practices to their specific needs.
                </li>
                <li>
                  <strong>Metrics Drive Adoption:</strong> Clear metrics showing the positive impact of CI/CD practices on quality, speed, and developer experience were powerful tools for driving organizational change.
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
                <li><strong>Expanded Test Automation:</strong> Further enhancing test automation with AI-assisted test generation and enhanced data quality validation.</li>
                <li><strong>Feature Flags:</strong> Implementing feature flag capabilities to enable more granular control over feature rollout and A/B testing of data pipelines.</li>
                <li><strong>Self-Healing Pipelines:</strong> Adding automated remediation capabilities for common failure patterns based on historical data.</li>
                <li><strong>Advanced Monitoring:</strong> Enhancing monitoring with machine learning-based anomaly detection for proactive issue identification.</li>
                <li><strong>Compliance Automation:</strong> Extending the platform with automated compliance checks and documentation generation to support regulatory requirements.</li>
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
