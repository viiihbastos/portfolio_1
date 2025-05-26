import { Github, Linkedin, Mail } from 'lucide-react'
import { SiMedium } from 'react-icons/si'
import Link from "next/link"

export function SocialLinks() {
  return (
    <div className="fixed left-0 bottom-0 p-4 flex flex-col gap-4">
      <Link
        href="https://github.com/viiihbastos"
        target="_blank"
        rel="noopener noreferrer"
        className="text-muted-foreground hover:text-primary transition-colors"
      >
        <Github className="w-6 h-6" />
        <span className="sr-only">GitHub</span>
      </Link>
      <Link
        href="https://linkedin.com/in/bastosvictor"
        target="_blank"
        rel="noopener noreferrer"
        className="text-muted-foreground hover:text-primary transition-colors"
      >
        <Linkedin className="w-6 h-6" />
        <span className="sr-only">LinkedIn</span>
      </Link>
      <Link
        href="https://medium.com/@vibastos"
        target="_blank"
        rel="noopener noreferrer"
        className="text-muted-foreground hover:text-primary transition-colors"
      >
        <SiMedium className="w-5 h-5" />
        <span className="sr-only">Medium</span>
      </Link>
      <Link
        href="mailto:victorbastos26@hotmail.com"
        className="text-muted-foreground hover:text-primary transition-colors"
      >
        <Mail className="w-6 h-6" />
        <span className="sr-only">Email</span>
      </Link>
    </div>
  )
}

