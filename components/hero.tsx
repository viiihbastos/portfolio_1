import { Button } from "@/components/ui/button"
import Image from "next/image"

export function Hero() {
  return (
    <section id="home" className="flex flex-col items-center justify-center min-h-screen px-4 text-center">
      <div className="relative w-48 h-48 mb-8 overflow-hidden rounded-full">
        <Image
          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-fileZAaCwbogjtszFbPwhMwDEBdOeC.png"
          alt="Victor Bastos profile picture"
          fill
          className="object-cover"
          priority
        />
      </div>
      <h1 className="mb-4 text-5xl font-bold tracking-tight">
        Hi, I&apos;m <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-green-500">Victor Bastos</span>
      </h1>
      <p className="max-w-2xl mb-8 text-base text-muted-foreground text-justify">
        With over 5 years of experience in data architecture, engineering, and machine learning, I specialize in delivering end-to-end solutions that transform complex data into actionable insights. From designing scalable cloud architectures and optimizing data pipelines to deploying advanced machine learning models and creating custom Large Language Models (LLMs) and chatbots, I bring a full-stack approach to data. Skilled in Azure Databricks, Python, SQL, and Power BI, I excel at automating workflows, integrating APIs, and applying DevOps practices to ensure robust, production-ready solutions. My work consistently reduces inefficiencies, enhances decision-making, and empowers businesses to unlock the true value of their data.
      </p>
      <Button size="lg" className="text-lg">
        Let&apos;s Connect
      </Button>
    </section>
  )
}

