"use client"

import * as React from "react"
import { cn } from "@/lib/utils"
import Link from "next/link"
import { usePathname } from "next/navigation"

const navItems = [
  { label: "Home", href: "home" },
  { label: "Projects", href: "projects" },
  { label: "Skills", href: "skills" },
  { label: "Contact", href: "contact" },
  { label: "Hobbies", href: "hobbies" },
]

export function Navbar() {
  const [active, setActive] = React.useState("home")
  const pathname = usePathname()
  const isHomePage = pathname === "/"

  const scrollToSection = (sectionId: string) => {
    // Se estiver na página inicial, faça o scroll
    if (isHomePage) {
      const element = document.getElementById(sectionId)
      if (element) {
        element.scrollIntoView({ behavior: "smooth" })
      }
    } else {
      // Se não estiver na página inicial, navegue para a página inicial com um hash
      window.location.href = `/#${sectionId}`
    }
    setActive(sectionId)
  }

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black/50 backdrop-blur-sm">
      <div className="container flex items-center justify-between h-16 px-4 mx-auto">
        <Link href="/" className="text-sm font-bold">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-green-500">Victor Bastos</span>
          <span className="text-white"> - Data Engineer</span>
        </Link>
        <ul className="flex items-center space-x-8">
          {/* Home e links de seção dentro da página principal */}
          {isHomePage ? (
            // Na página inicial, usa scroll para navegar entre seções
            navItems.map((item) => (
              <li key={item.href}>
                <button
                  onClick={() => scrollToSection(item.href)}
                  className={cn(
                    "text-sm transition-colors hover:text-primary",
                    active === item.href ? "text-primary" : "text-muted-foreground"
                  )}
                >
                  {item.label}
                </button>
              </li>
            ))
          ) : (
            // Em outras páginas, mostra links para todas as seções da página principal
            navItems.map((item) => (
              <li key={item.href}>
                <Link 
                  href={`/#${item.href}`} 
                  className="text-sm transition-colors hover:text-primary text-muted-foreground"
                >
                  {item.label}
                </Link>
              </li>
            ))
          )}
        </ul>
      </div>
    </nav>
  )
}

