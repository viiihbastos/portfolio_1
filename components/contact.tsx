import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

export function Contact() {
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
          <form className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-400 mb-1 ml-1">Name</label>
              <Input 
                id="name" 
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
                placeholder="Your message here..." 
                required 
                className="min-h-32 bg-gray-900/70 border-gray-700 focus:border-blue-500 text-gray-200 placeholder:text-gray-500" 
              />
            </div>
            
            <Button 
              type="submit" 
              className="w-full text-lg bg-gradient-to-r from-blue-600 to-green-600 hover:from-blue-500 hover:to-green-500 transition-all duration-300 border-0 shadow-md shadow-blue-800/20"
            >
              Send Message
            </Button>
          </form>
        </div>
      </div>
    </section>
  )
}

