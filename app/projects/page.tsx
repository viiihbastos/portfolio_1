import { Navbar } from "@/components/navbar"
import { SocialLinks } from "@/components/social-links"
import Link from "next/link"
import { ChevronLeft, ExternalLink } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"

// Importa os dados dos projetos do arquivo de componentes
import { projects, Project } from "@/components/projects"

export default function ProjectsPage() {
  return (
    <main className="min-h-screen bg-black text-white">
      <Navbar />
      
      <section className="py-20 container mx-auto px-4">
        <div className="mb-8">
          <Link href="/" className="inline-flex items-center text-blue-400 hover:text-blue-300 transition-colors">
            <ChevronLeft className="h-5 w-5 mr-1" />
            Back to Home
          </Link>
        </div>
        
        <h1 className="text-4xl md:text-5xl font-bold mb-10 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-green-500">
          My Data Engineering Projects
        </h1>
        
        <p className="text-gray-300 max-w-3xl mx-auto text-center mb-12">
          A collection of my most impactful data engineering projects, showcasing technical solutions 
          that drive business value and enable data-driven decision making.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project: Project, index: number) => (
            <Card key={index} className="bg-gray-800/60 border-gray-700 hover:shadow-lg hover:shadow-blue-500/10 transition-all duration-300 overflow-hidden flex flex-col h-full">
              <CardHeader className="p-0 overflow-hidden">
                <Link href={`/projects/${project.slug}`} className="cursor-pointer">
                  <div className="relative overflow-hidden group">
                    <img 
                      src={project.image}
                      alt={project.title}
                      className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent opacity-70"></div>
                  </div>
                </Link>
                <div className="p-6">
                  <Link href={`/projects/${project.slug}`}>
                    <CardTitle className="text-xl text-blue-400 hover:text-blue-300 transition-colors cursor-pointer">{project.title}</CardTitle>
                  </Link>
                  <CardDescription className="mt-2 text-gray-300">{project.description}</CardDescription>
                </div>
              </CardHeader>
              <CardContent className="p-6 pt-0 mt-auto">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.slice(0, 3).map((tag: string) => (
                    <Badge key={tag} variant="secondary" className="bg-blue-900/30 hover:bg-blue-800/50 text-blue-300 transition-colors">
                      {tag}
                    </Badge>
                  ))}
                  {project.tags.length > 3 && (
                    <Badge variant="secondary" className="bg-blue-900/30 hover:bg-blue-800/50 text-blue-300 transition-colors">
                      +{project.tags.length - 3}
                    </Badge>
                  )}
                </div>
                <div className="flex justify-center">
                  <Button variant="outline" size="sm" asChild className="border-green-600 text-green-400 hover:bg-green-600/10 transition-colors w-full">
                    <Link href={`/projects/${project.slug}`}>
                      <ExternalLink className="mr-2 h-4 w-4" />
                      View Details
                    </Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
      
      <SocialLinks />
    </main>
  )
}
