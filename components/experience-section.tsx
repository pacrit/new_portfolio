import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export function ExperienceSection() {
  const experiences = [
    {
      title: "Analist Developer III",
      company: "Infolev Elevadores e Informática",
      period: "2022 - Present",
      description:
        "Lead the frontend development team in building responsive web applications. Implemented modern React patterns and optimized performance.",
      achievements: [
        "Contributes to the development of software that uses a facial recognition device to make elevator calls",
        "I developed a complete and effective CRUD with responsiveness and fast loading",
      ],
      technologies: ["React", "Next.js", "Redux", "Tailwind CSS", "Node", "MySQL","Postgresql","SQL Server" ],
    },
    {
      title: "Systems analyst",
      company: "Stefanini",
      period: "2020 - 2022",
      description:
        "I was part of the N1 support, solving computer and printing problems for a health insurance company.",
      achievements: [
        "Frontline support, whether speaking to the receptionist or doctor, with agility in support",
      ],
      technologies: ["Microsoft", "Linux", "Excel", "PowerBI", "Explorer"],
    }
  ]

  return (
    <section id="experience" className="py-20 bg-muted/50">
      <div className="container">
        <div className="text-center space-y-4 mb-16 animate-in">
          <h2 className="text-3xl md:text-4xl font-bold">Work Experience</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            My professional journey in the world of web development.
          </p>
        </div>
        <div className="space-y-8 animate-in">
          {experiences.map((exp, index) => (
            <Card key={index} className="transition-all hover:shadow-md">
              <CardHeader>
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
                  <div>
                    <CardTitle>{exp.title}</CardTitle>
                    <CardDescription className="text-lg">
                      {exp.company} | {exp.period}
                    </CardDescription>
                  </div>
                  <Badge variant="outline" className="w-fit">
                    {exp.period}
                  </Badge>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <p>{exp.description}</p>
                <div>
                  <h4 className="font-medium mb-2">Key Achievements:</h4>
                  <ul className="list-disc pl-5 space-y-1">
                    {exp.achievements.map((achievement, i) => (
                      <li key={i}>{achievement}</li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h4 className="font-medium mb-2">Technologies:</h4>
                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((tech, i) => (
                      <Badge key={i} variant="secondary">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
