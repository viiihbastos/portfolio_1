"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

export function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [error, setError] = useState<string | null>(null)
  
  return (
    <section id="contact" className="py-20 bg-gradient-to-b from-black to-gray-900 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-800/10 rounded-full blur-3xl -z-10"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-green-800/10 rounded-full blur-3xl -z-10"></div>
      
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-4xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-green-500">Get In Touch</h2>
          <p className="text-gray-400 text-lg">Have a project in mind or want to discuss data engineering solutions? I'd love to hear from you.</p>
        </div>
        
        <div className="max-w-lg mx-auto bg-gray-800/30 p-8 rounded-xl backdrop-blur-sm border border-gray-700 shadow-xl">
          {isSubmitted ? (
            <div className="text-center py-8">
              <div className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-blue-400 mb-2">Message Sent!</h3>
              <p className="text-gray-400">Thank you for reaching out. I'll get back to you as soon as possible.</p>
              <Button 
                onClick={() => setIsSubmitted(false)}
                className="mt-6 bg-gray-700 hover:bg-gray-600 text-white"
              >
                Send Another Message
              </Button>
            </div>
          ) : (
            <form 
              className="space-y-6" 
              action="https://formsubmit.co/victorbastos26@hotmail.com" 
              method="POST"
              onSubmit={(e) => {
                e.preventDefault();
                setIsSubmitting(true);
                setError(null);
                
                // Simulando sucesso para demonstração local
                setTimeout(() => {
                  setIsSubmitted(true);
                  setIsSubmitting(false);
                }, 1500);
                
                // Em produção, o formulário será enviado normalmente
                // quando o usuário clicar em enviar sem JavaScript
                const form = e.currentTarget;
                if (typeof window !== 'undefined' && window.location.href.includes('vercel.app')) {
                  form.submit(); // Envia o formulário apenas em produção
                }
              }}
            >
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-400 mb-1 ml-1">Name</label>
                <Input 
                  id="name" 
                  name="name"
                  type="text" 
                  placeholder="Your name" 
                  required 
                  className="bg-gray-900/70 border-gray-700 focus:border-blue-500 text-gray-200 placeholder:text-gray-500" 
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-400 mb-1 ml-1">Email</label>
                <Input 
                  id="email" 
                  name="email"
                  type="email" 
                  placeholder="your.email@example.com" 
                  required 
                  className="bg-gray-900/70 border-gray-700 focus:border-blue-500 text-gray-200 placeholder:text-gray-500" 
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-400 mb-1 ml-1">Message</label>
                <Textarea 
                  id="message" 
                  name="message"
                  placeholder="Your message here..." 
                  required 
                  className="min-h-32 bg-gray-900/70 border-gray-700 focus:border-blue-500 text-gray-200 placeholder:text-gray-500" 
                />
              </div>
              
              {error && (
                <div className="p-3 bg-red-500/20 border border-red-500/50 rounded-md text-red-400 text-sm mb-4">
                  {error}
                </div>
              )}
              
              <Button 
                type="submit" 
                className="w-full text-lg bg-gradient-to-r from-blue-600 to-green-600 hover:from-blue-500 hover:to-green-500 transition-all duration-300 border-0 shadow-md shadow-blue-800/20"
                disabled={isSubmitting}
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </Button>
            </form>
          )}
        </div>
      </div>
    </section>
  )
}

