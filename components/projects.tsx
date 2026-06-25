import { Github, ExternalLink, FolderCode } from "lucide-react"

const projects = [
  {
    title: "Contact Manager",
    description:
      "A full-stack application that optimizes contact management with secure authentication. Features include CRUD operations for contacts with JWT-based authorization.",
    tech: ["Node.js", "Express.js", "MongoDB", "REST APIs", "JWT"],
    github: "#",
  },
  {
    title: "Peppy - The Organizer",
    description:
      "A CLI tool that enhances workspace efficiency through streamlined file management. Features tree view visualization and automatic file sorting for intuitive organization.",
    tech: ["JavaScript", "Node.js", "CLI"],
    github: "#",
  },
  {
    title: "GitCheer",
    description:
      "A Chrome extension connecting GeeksforGeeks with GitHub, automatically pushing completed code challenges to repositories with celebration animations.",
    tech: ["Chrome Extension", "GitHub API", "JavaScript"],
    github: "#",
  },
]

export function Projects() {
  return (
    <section className="py-24 px-6" id="projects">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-medium text-foreground mb-4">
            Projects
          </h2>
          <p className="text-muted-foreground max-w-lg mx-auto">
            Personal projects showcasing backend development and tooling skills
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <div
              key={project.title}
              className="bg-card border border-border rounded-xl p-6 flex flex-col hover:border-primary/30 transition-colors group"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="p-2 bg-accent rounded-lg">
                  <FolderCode className="w-5 h-5 text-primary" />
                </div>
                <div className="flex items-center gap-2">
                  <a
                    href={project.github}
                    className="p-2 text-muted-foreground hover:text-foreground transition-colors"
                    aria-label={`${project.title} GitHub`}
                  >
                    <Github className="w-4 h-4" />
                  </a>
                  <a
                    href={project.github}
                    className="p-2 text-muted-foreground hover:text-foreground transition-colors"
                    aria-label={`${project.title} Live Demo`}
                  >
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </div>
              </div>

              <h3 className="text-lg font-medium text-foreground mb-2">
                {project.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed mb-4 flex-1">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2 pt-4 border-t border-border">
                {project.tech.map((tech) => (
                  <span
                    key={tech}
                    className="px-2.5 py-1 bg-secondary text-secondary-foreground text-xs rounded-md"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
