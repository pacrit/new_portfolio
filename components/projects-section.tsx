import Image from "next/image"
import Link from "next/link"
import { ExternalLink, Github } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export function ProjectsSection() {
  const projects = [
    {
      title: "E-commerce Platform",
      description:
        "A full-stack e-commerce platform with product listings, cart functionality, user authentication, and payment processing.",
      image: "/placeholder.svg?height=400&width=600",
      tags: ["React", "Node.js", "MongoDB", "Express", "Stripe"],
      liveUrl: "https://project-demo.com",
      githubUrl: "https://github.com/yourusername/project",
    },
    {
      title: "Task Management App",
      description:
        "A collaborative task management application with real-time updates, task assignments, and progress tracking.",
      image: "/placeholder.svg?height=400&width=600",
      tags: ["Next.js", "TypeScript", "Firebase", "Tailwind CSS"],
      liveUrl: "https://project-demo.com",
      githubUrl: "https://github.com/yourusername/project",
    },
    {
      title: "Weather Dashboard",
      description: "A weather dashboard that displays current weather conditions and forecasts for multiple locations.",
      image: "/placeholder.svg?height=400&width=600",
      tags: ["React", "OpenWeather API", "Chart.js", "Geolocation"],
      liveUrl: "https://project-demo.com",
      githubUrl: "https://github.com/yourusername/project",
    },
  ]

  return (
    <section id="projects" className="py-20">
      <div className="container">
        <div className="text-center space-y-4 mb-16 animate-in">
          <h2 className="text-3xl md:text-4xl font-bold">My Projects</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Here are some of the projects I've worked on. Each project represents different skills and challenges I've
            tackled.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 animate-in">
          {projects.map((project, index) => (
            <Card key={index} className="overflow-hidden flex flex-col h-full transition-all hover:shadow-lg">
              <div className="aspect-video relative overflow-hidden">
                <Image
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform hover:scale-105"
                />
              </div>
              <CardHeader>
                <CardTitle>{project.title}</CardTitle>
                <CardDescription>{project.description}</CardDescription>
              </CardHeader>
              <CardContent className="flex-grow">
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, i) => (
                    <Badge key={i} variant="secondary">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </CardContent>
              <CardFooter className="flex gap-2">
                <Button asChild variant="outline" size="sm">
                  <Link href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                    <Github className="mr-2 h-4 w-4" />
                    Code
                  </Link>
                </Button>
                <Button asChild size="sm">
                  <Link href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="mr-2 h-4 w-4" />
                    Live Demo
                  </Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
        <div className="text-center mt-12">
          <Button variant="outline" asChild>
            <Link href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer">
              <Github className="mr-2 h-4 w-4" />
              See more on GitHub
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
