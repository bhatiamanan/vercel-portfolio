import { Building2, Calendar } from "lucide-react"

const experiences = [
  {
    role: "Backend Engineer",
    company: "Quantum Phinance",
    location: "Mumbai, India",
    period: "Sep 2025 - Present",
    highlights: [
      "Designed and developed a cash flow management application for small-scale financial operations",
      "Strengthened OOP skills and industry best practices through mentorship while working with C# and .NET framework",
    ],
  },
  {
    role: "Junior Software Developer",
    company: "GoApptiv Private Limited",
    location: "Hyderabad, India",
    period: "Dec 2023 - Aug 2025",
    highlights: [
      "Integrated vector database similarity search to auto-suggest product matches, reducing manual mapping effort",
      "Led end-to-end development of a critical microservice for automating order processing into ERP systems",
      "Achieved 25% reduction in manual data entry through ERP integration using Google Cloud Pub/Sub",
      "Developed fraud detection feature within microservice architecture, reducing operational costs",
      "Spearheaded automation enabling auto-processing of 20% of non-ERP invoices",
    ],
  },
]

export function Experience() {
  return (
    <section className="py-24 px-6 bg-muted/30" id="experience">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-medium text-foreground mb-4">
            Experience
          </h2>
          <p className="text-muted-foreground max-w-lg mx-auto">
            Building impactful backend solutions across fintech and enterprise domains
          </p>
        </div>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="bg-card border border-border rounded-xl p-6 md:p-8"
            >
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-6">
                <div>
                  <h3 className="text-xl font-medium text-foreground mb-1">
                    {exp.role}
                  </h3>
                  <div className="flex items-center gap-2 text-primary">
                    <Building2 className="w-4 h-4" />
                    <span>{exp.company}</span>
                    <span className="text-muted-foreground">· {exp.location}</span>
                  </div>
                </div>
                <div className="flex items-center gap-2 text-muted-foreground text-sm bg-secondary px-3 py-1.5 rounded-md w-fit">
                  <Calendar className="w-4 h-4" />
                  <span>{exp.period}</span>
                </div>
              </div>

              <ul className="space-y-3">
                {exp.highlights.map((highlight, i) => (
                  <li key={i} className="flex items-start gap-3 text-muted-foreground">
                    <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 shrink-0" />
                    <span className="leading-relaxed">{highlight}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
