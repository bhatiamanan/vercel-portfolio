import { Server, Database, Cloud, Code, Terminal, GitBranch } from "lucide-react"

const skillCategories = [
  {
    title: "Backend Development",
    icon: Server,
    skills: ["TypeScript", "Node.js", "NestJS", "C#", ".NET", "REST APIs"],
  },
  {
    title: "Databases",
    icon: Database,
    skills: ["MongoDB", "MySQL", "SQL", "Vector Databases"],
  },
  {
    title: "Cloud & DevOps",
    icon: Cloud,
    skills: ["Google Cloud Platform", "Pub/Sub", "Jenkins", "CI/CD"],
  },
  {
    title: "Languages",
    icon: Code,
    skills: ["JavaScript", "TypeScript", "C++", "Java", "Python"],
  },
  {
    title: "Architecture",
    icon: Terminal,
    skills: ["Microservices", "ERP Integration", "System Design", "Data Modeling"],
  },
  {
    title: "Tools & Practices",
    icon: GitBranch,
    skills: ["Git", "GitHub", "VS Code", "Agile", "OOP Principles"],
  },
]

export function Skills() {
  return (
    <section className="py-24 px-6" id="skills">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-medium text-foreground mb-4">
            Technical Skills
          </h2>
          <p className="text-muted-foreground max-w-lg mx-auto">
            A focused toolkit for building reliable, scalable backend systems
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category) => (
            <div
              key={category.title}
              className="bg-card border border-border rounded-xl p-6 hover:border-primary/30 transition-colors"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-accent rounded-lg">
                  <category.icon className="w-5 h-5 text-primary" />
                </div>
                <h3 className="font-medium text-foreground">{category.title}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1.5 bg-secondary text-secondary-foreground text-sm rounded-md"
                  >
                    {skill}
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
