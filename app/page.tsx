import { Navbar } from "@/components/navbar"
import { Hero } from "@/components/hero"
import { Skills } from "@/components/skills"
import { Projects } from "@/components/projects"
import { Contact } from "@/components/contact"
import { SocialLinks } from "@/components/social-links"

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white">
      <Navbar />
      <Hero />
      <Projects />
      <Skills />
      <Contact />
      <SocialLinks />
    </main>
  )
}

