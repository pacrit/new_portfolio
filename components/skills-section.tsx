import { Code, Database, Layout, Server, Terminal, Workflow } from "lucide-react"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export function SkillsSection() {
  const skills = [
    {
      category: "Frontend",
      icon: <Layout className="h-8 w-8 text-primary" />,
      items: ["HTML5", "CSS3", "JavaScript", "TypeScript", "React.js", "Next.js", "Tailwind CSS", "Redux"],
    },
    {
      category: "Backend",
      icon: <Server className="h-8 w-8 text-primary" />,
      items: ["Node.js", "Express.js", "RESTful APIs", "GraphQL", "Authentication", "Authorization"],
    },
    {
      category: "Database",
      icon: <Database className="h-8 w-8 text-primary" />,
      items: ["MongoDB", "PostgreSQL", "MySQL", "Firebase", "Redis"],
    },
    {
      category: "DevOps",
      icon: <Terminal className="h-8 w-8 text-primary" />,
      items: ["Git", "GitHub", "CI/CD", "Docker", "AWS", "Vercel", "Netlify"],
    },
    {
      category: "Tools",
      icon: <Workflow className="h-8 w-8 text-primary" />,
      items: ["VS Code", "Postman","Insomnia", "Figma", "Jira", "Notion"],
    },
    {
      category: "Other",
      icon: <Code className="h-8 w-8 text-primary" />,
      items: ["Responsive Design", "SEO", "Accessibility", "Performance Optimization", "Testing"],
    },
  ]

  return (
    <section id="skills" className="py-20 bg-muted/50">
      <div className="container">
        <div className="text-center space-y-4 mb-16 animate-in">
          <h2 className="text-3xl md:text-4xl font-bold">My Skills</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            I've worked with a variety of technologies in the web development world. Here's a snapshot of my technical
            expertise:
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 animate-in">
          {skills.map((skill, index) => (
            <Card key={index} className="transition-all hover:shadow-md">
              <CardHeader className="flex flex-row items-center gap-4">
                {skill.icon}
                <div>
                  <CardTitle>{skill.category}</CardTitle>
                  <CardDescription>Technologies I work with</CardDescription>
                </div>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {skill.items.map((item, i) => (
                    <span key={i} className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">
                      {item}
                    </span>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
