import { Mail, Phone, Linkedin, Github, Send } from "lucide-react"

export function Contact() {
  return (
    <section className="py-24 px-6 bg-muted/30" id="contact">
      <div className="max-w-2xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-medium text-foreground mb-4">
          Let&apos;s Connect
        </h2>
        <p className="text-muted-foreground mb-10 max-w-md mx-auto">
          Open to discussing backend opportunities, collaborations, or just a friendly chat about technology.
        </p>

        <div className="bg-card border border-border rounded-xl p-8 mb-8">
          <div className="grid sm:grid-cols-2 gap-4">
            <a
              href="mailto:mananbhatia75@gmail.com"
              className="flex items-center gap-3 p-4 bg-secondary rounded-lg hover:bg-accent transition-colors group"
            >
              <div className="p-2 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors">
                <Mail className="w-5 h-5 text-primary" />
              </div>
              <div className="text-left">
                <p className="text-sm text-muted-foreground">Email</p>
                <p className="text-foreground font-medium text-sm">mananbhatia75@gmail.com</p>
              </div>
            </a>

            <a
              href="tel:+919521625341"
              className="flex items-center gap-3 p-4 bg-secondary rounded-lg hover:bg-accent transition-colors group"
            >
              <div className="p-2 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors">
                <Phone className="w-5 h-5 text-primary" />
              </div>
              <div className="text-left">
                <p className="text-sm text-muted-foreground">Phone</p>
                <p className="text-foreground font-medium text-sm">+91 9521625341</p>
              </div>
            </a>
          </div>
        </div>

        <div className="flex items-center justify-center gap-4">
          <a
            href="https://www.linkedin.com/in/manan-bhatia-868b4426a/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-5 py-3 bg-card border border-border rounded-lg text-muted-foreground hover:text-foreground hover:border-primary/30 transition-colors"
          >
            <Linkedin className="w-5 h-5" />
            <span>LinkedIn</span>
          </a>
          <a
            href="https://github.com/bhatiamanan"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-5 py-3 bg-card border border-border rounded-lg text-muted-foreground hover:text-foreground hover:border-primary/30 transition-colors"
          >
            <Github className="w-5 h-5" />
            <span>GitHub</span>
          </a>
        </div>
      </div>
    </section>
  )
}
