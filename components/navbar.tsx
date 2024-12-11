"use client"

import * as React from "react"
import { cn } from "@/lib/utils"

const navItems = [
  { href: "home", label: "Home" },
  { href: "about", label: "About" },
  { href: "skills", label: "Skills" },
  { href: "projects", label: "Projects" },
  { href: "contact", label: "Contact" },
]

export function Navbar() {
  const [active, setActive] = React.useState("home")

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
      setActive(sectionId)
    }
  }

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black/50 backdrop-blur-sm">
      <div className="container flex items-center justify-between h-16 px-4 mx-auto">
        <button onClick={() => scrollToSection("home")} className="text-sm font-bold">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-green-500">Victor Bastos</span>
          <span className="text-white"> - Data Specialist</span>
        </button>
        <ul className="flex items-center space-x-8">
          {navItems.map((item) => (
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
          ))}
        </ul>
      </div>
    </nav>
  )
}

