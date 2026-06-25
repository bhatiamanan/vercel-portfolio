import { Mail, Github, Linkedin, MapPin } from "lucide-react"

export function Hero() {
  return (
    <section className="min-h-[85vh] flex items-center justify-center px-6">
      <div className="max-w-3xl text-center">
        <div className="mb-8">
          <div className="inline-flex items-center gap-2 text-muted-foreground text-sm mb-6 px-4 py-2 bg-card rounded-full border border-border">
            <MapPin className="w-4 h-4" />
            <span>Mumbai, India</span>
          </div>
        </div>
        
        <h1 className="text-4xl md:text-6xl font-medium tracking-tight text-foreground mb-6 text-balance">
          Manan Bhatia
        </h1>
        
        <p className="text-xl md:text-2xl text-primary font-medium mb-6">
          Backend Engineer
        </p>
        
        <p className="text-lg text-muted-foreground max-w-xl mx-auto leading-relaxed mb-10">
          Crafting scalable microservices and robust server-side solutions. Passionate about building systems that handle complexity with elegance.
        </p>

        <div className="flex items-center justify-center gap-4">
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-5 py-3 bg-primary text-primary-foreground rounded-lg hover:opacity-90 transition-opacity"
          >
            <Mail className="w-4 h-4" />
            <span>Get in Touch</span>
          </a>
          
          <div className="flex items-center gap-2">
            <a
              href="https://github.com/bhatiamanan"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-card border border-border rounded-lg text-muted-foreground hover:text-foreground hover:border-primary/30 transition-colors"
              aria-label="GitHub Profile"
            >
              <Github className="w-5 h-5" />
            </a>
            <a
              href="https://www.linkedin.com/in/manan-bhatia-868b4426a/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-card border border-border rounded-lg text-muted-foreground hover:text-foreground hover:border-primary/30 transition-colors"
              aria-label="LinkedIn Profile"
            >
              <Linkedin className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
