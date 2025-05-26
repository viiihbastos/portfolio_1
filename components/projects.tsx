import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ExternalLink, Github, ArrowRight } from 'lucide-react'
import Link from "next/link"

// Definindo interface para o tipo de projeto
export interface Project {
  title: string;
  description: string;
  tags: string[];
  image: string;
  githubLink: string;
  liveLink: string;
  slug: string;
}

// Exportando o array de projetos para reutilizar em outros componentes
export const projects: Project[] = [
  // Adicionando slugs para cada projeto para facilitar a navegação
  
  // Projeto A - Mais focado em Data Engineering
  {
    title: "Monthly Water Meter Closing System",
    description: "Designed and implemented a complete architecture for monthly water meter data processing (volume, revenue, replacements) for a major sanitation company. Built using Azure Databricks, PySpark, SQL, Azure Storage, orchestrated with Apache Airflow, and visualized in Power BI. Reduced processing time from 1 week to 2 hours, generating €13M in annual savings.",
    tags: ["Azure Databricks", "PySpark", "SQL", "Apache Airflow", "Power BI"],
    image: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&h=400&q=80",
    githubLink: "https://github.com/viiihbastos/water-meter-processing",
    liveLink: "#",
    slug: "monthly-water-meter-closing"
  },
  // Projeto B
  {
    title: "Annual Water Meter Replacement Plan",
    description: "Engineered an advanced analytics system using Azure Databricks (PySpark, SQL) to assess multiple water meter metrics (model, flow rate, measured volume, degradation indicators). Implemented Data Vault modeling with statistical algorithms to identify measurement inaccuracies, generating ROI-based prioritization that increased revenue recovery by 15% while optimizing field operations.",
    tags: ["Azure Databricks", "PySpark", "SQL", "Data Vault", "DataOps"],
    image: "https://images.unsplash.com/photo-1584438784894-089d6a62b8fa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&h=400&q=80",
    githubLink: "https://github.com/viiihbastos/water-meter-replacement",
    liveLink: "#",
    slug: "water-meter-replacement"
  },
  // Projeto C
  {
    title: "Real-Time Orders Data Platform",
    description: "Built a real-time data processing platform ingesting events via Apache Kafka into Azure Databricks, applying Medallion Architecture (Bronze/Silver/Gold) with Delta Lake. Orchestrated batch and streaming workloads with Apache Airflow and exposed processed data in SQL Pools and Power BI dashboards, enabling real-time business insights.",
    tags: ["Apache Kafka", "Azure Databricks", "Delta Lake", "Apache Airflow", "Power BI"],
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&h=400&q=80",
    githubLink: "https://github.com/viiihbastos/real-time-orders-platform",
    liveLink: "#",
    slug: "real-time-orders"
  },
  // Projeto D
  {
    title: "Application Logs Data Lake",
    description: "Architected a Data Lake solution in Azure Storage + Delta Lake via Azure Databricks Autoloader for application log processing. Implemented DAGs in Apache Airflow for data ingestion and quality control. Achieved cost reduction and up to 40% improvement in Power BI query performance through optimized data storage and processing.",
    tags: ["Azure Storage", "Delta Lake", "Azure Databricks", "Apache Airflow", "Power BI"],
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&h=400&q=80",
    githubLink: "https://github.com/viiihbastos/app-logs-datalake",
    liveLink: "#",
    slug: "app-logs-data-lake"
  },
  // Projeto E
  {
    title: "CI/CD for Data Pipelines",
    description: "Implemented continuous integration in Jenkins for automated deployment of notebooks and jobs in Azure Databricks. Set up ETL unit testing with pytest (Python), schema validation, and multi-environment deployment (dev/staging/prod). Added automated monitoring and rollback capabilities through DataOps, significantly improving release quality and frequency.",
    tags: ["Jenkins", "Azure Databricks", "Python", "pytest", "DataOps"],
    image: "https://images.unsplash.com/photo-1618401471353-b98afee0b2eb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&h=400&q=80",
    githubLink: "https://github.com/viiihbastos/data-pipelines-cicd",
    liveLink: "#",
    slug: "cicd-data-pipelines"
  },
  // Projetos Originais
  {
    title: "Real-Time ETL Platform",
    description: "Developed a real-time ETL platform using Azure Databricks, Delta Lake, and Apache Kafka, reducing processing time by 90% and enabling real-time analytics of more than 1TB of daily data.",
    tags: ["Azure Databricks", "Kafka", "PySpark", "Delta Lake"],
    image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&h=400&q=80",
    githubLink: "https://github.com/viiihbastos/data-engineering-projects",
    liveLink: "#",
    slug: "etl-platform"
  },
  {
    title: "Predictive Financial Dashboard",
    description: "Created a financial dashboard with predictive capabilities using Power BI and integrated ML models. The system automated analytics that previously required 20 hours of weekly manual work.",
    tags: ["Power BI", "Python", "Machine Learning", "Finance"],
    image: "https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&h=400&q=80",
    githubLink: "https://github.com/viiihbastos/bi-analytics",
    liveLink: "#",
    slug: "financial-dashboard"
  },
  {
    title: "E-commerce Recommendation System",
    description: "Implemented a personalized recommendation system using collaborative filtering and content-based filtering algorithms, increasing conversion rate by 27% for a large-scale e-commerce platform.",
    tags: ["Python", "TensorFlow", "Scikit-learn", "Recommendation"],
    image: "https://images.unsplash.com/photo-1560472355-536de3962603?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&h=400&q=80",
    githubLink: "https://github.com/viiihbastos/recommendation-engine",
    liveLink: "#",
    slug: "recommendation-system"
  },
  {
    title: "Marketing Automation Data Pipeline",
    description: "Developed a comprehensive API integration pipeline for marketing, automating data collection from various sources (Google Ads, Facebook, CRM) and creating unified analytics dashboards that revealed insights about the customer journey.",
    tags: ["APIs", "Python", "SQL", "Automation"],
    image: "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&h=400&q=80",
    githubLink: "https://github.com/viiihbastos/marketing-data-automation",
    liveLink: "#",
    slug: "marketing-automation"
  }
];

export function Projects() {
  return (
    <section id="projects" className="py-20 bg-gradient-to-b from-black to-gray-900">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-green-500">Featured Projects</h2>
          <p className="text-gray-400 text-lg text-justify md:text-center">Showcasing my expertise in data engineering through real-world solutions that deliver measurable results for businesses while leveraging modern data architecture patterns and technologies</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {/* Mostrando apenas os 6 primeiros projetos na página principal */}
          {projects.slice(0, 6).map((project, index) => (
            <Card 
              key={index} 
              className="bg-gray-800/60 border-gray-700 hover:shadow-lg hover:shadow-blue-500/10 transition-all duration-300 overflow-hidden"
            >
              <CardHeader className="p-0 overflow-hidden">
                <Link href={`/projects/${project.slug}`} className="cursor-pointer">
                <div className="relative overflow-hidden group">
                  <img 
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent opacity-70"></div>
                  <div className="absolute top-3 right-3 bg-blue-600 text-white text-xs font-bold px-2 py-1 rounded-full shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform translate-y-2 group-hover:translate-y-0">View Project</div>
                </div>
              </Link>
                <div className="p-6">
                  <Link href={`/projects/${project.slug}`}>
                    <CardTitle className="text-xl text-blue-400 hover:text-blue-300 transition-colors cursor-pointer">{project.title}</CardTitle>
                  </Link>
                  <CardDescription className="mt-2 text-gray-300 line-clamp-3 text-justify">{project.description}</CardDescription>
                </div>
              </CardHeader>
              <CardContent className="p-6 pt-0">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <Badge key={tag} variant="secondary" className="bg-blue-900/30 hover:bg-blue-800/50 text-blue-300 transition-colors">
                      {tag}
                    </Badge>
                  ))}
                </div>

              </CardContent>
            </Card>
          ))}
        </div>

        <div className="flex justify-center mt-12">
          <Button asChild className="bg-gradient-to-r from-blue-600 to-green-500 hover:from-blue-700 hover:to-green-600 text-white transition-all duration-300 px-8 py-6 text-lg rounded-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1">
            <Link href="/projects" className="flex items-center">
              View All Projects
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}

