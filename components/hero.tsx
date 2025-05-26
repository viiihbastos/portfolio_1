"use client"

import { Button } from "@/components/ui/button"
import Image from "next/image"

export function Hero() {
  // Função para rolar suavemente até uma seção específica
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };
  
  return (
    <section id="home" className="relative flex flex-col items-center justify-center min-h-screen px-6 overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-900/20 via-gray-900/40 to-black"></div>
      <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-10 right-10 w-80 h-80 bg-green-500/10 rounded-full blur-3xl"></div>
      
      <div className="relative z-10 flex flex-col md:flex-row items-center max-w-6xl mx-auto gap-8 md:gap-12">
        {/* Image section */}
        <div className="relative w-48 h-48 md:w-64 md:h-64 mb-0 md:mb-0 overflow-hidden rounded-full border-4 border-blue-500/30 shadow-lg shadow-blue-500/20">
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-fileZAaCwbogjtszFbPwhMwDEBdOeC.png"
            alt="Victor Bastos profile picture"
            fill
            className="object-cover"
            priority
          />
        </div>
        
        {/* Content section */}
        <div className="flex flex-col text-center md:text-left">
          <h1 className="mb-4 text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
            Hi, I&apos;m <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-green-500 whitespace-nowrap">Victor Bastos</span>
          </h1>
          <p className="max-w-2xl mb-8 text-base md:text-lg text-gray-300 leading-relaxed">
            Data Engineer with over 4 years of experience in developing data pipelines, cloud data architectures, and process automation. Proven capability in optimizing complex workflows by up to <span className="text-blue-400 font-semibold">90%</span>, integrating solutions using Azure Databricks, SQL, Python, PySpark, and Power BI to deliver real-time analytics.
          </p>
          <div className="flex flex-wrap gap-4 justify-center md:justify-start">
            <Button 
              size="lg" 
              className="text-lg bg-gradient-to-r from-blue-600 to-blue-800 hover:from-blue-500 hover:to-blue-700 border-0 shadow-md shadow-blue-800/30"
              onClick={() => scrollToSection('projects')}
            >
              View Projects
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="text-lg border-blue-500 text-blue-400 hover:bg-blue-500/10"
              onClick={() => scrollToSection('contact')}
            >
              Let&apos;s Connect
            </Button>
          </div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div 
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce cursor-pointer"
        onClick={() => scrollToSection('projects')}
      >
        <div className="w-8 h-8 border-b-2 border-r-2 border-blue-400 transform rotate-45 opacity-70"></div>
        <span className="mt-2 text-xs text-blue-400">Scroll Down</span>
      </div>
    </section>
  )
}

