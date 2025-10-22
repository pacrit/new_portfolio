"use client"

import Image from "next/image"
import Link from "next/link"
import { ExternalLink, Github } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { useLanguage } from "@/contexts/language-context"

export function ProjectsSection() {
  const { t } = useLanguage()
  
  const projects = [
    {
      titleKey: "project1Title",
      descriptionKey: "project1Description",
      image: "https://res.cloudinary.com/deu4zjoq9/image/upload/v1750255346/picture_eComm_yisvka.png?height=400&width=600",
      tags: ["React", "Node.js", "MongoDB", "Express", "Stripe"],
      liveUrl: "https://ecommercedemonstracao.vercel.app/",
      githubUrl: "https://github.com/pacrit/eComm",
    },
    {
      titleKey: "project2Title",
      descriptionKey: "project2Description",
      image: "https://res.cloudinary.com/deu4zjoq9/image/upload/v1750255871/picture_task_q8t9hf.png?height=400&width=600",
      tags: ["Next.js", "TypeScript", "Firebase", "Tailwind CSS"],
      liveUrl: "https://listask.vercel.app/",
      githubUrl: "https://github.com/pacrit/ToDo-List-i3",
    },
    {
      titleKey: "project3Title", 
      descriptionKey: "project3Description",
      image: "https://res.cloudinary.com/deu4zjoq9/image/upload/v1750257784/picture_weather_qzlrll.png?height=400&width=600",
      tags: ["React", "OpenWeather API", "Chart.js", "Geolocation"],
      liveUrl: "https://weather-query-sage.vercel.app/",
      githubUrl: "https://github.com/pacrit/weather_query",
    },
  ]

  return (
    <section id="projects" className="py-20">
      <div className="container">
        <div className="text-center space-y-4 mb-16 animate-in">
          <h2 className="text-3xl md:text-4xl font-bold">{t('projectsTitle')}</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            {t('projectsDescription')}
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 animate-in">
          {projects.map((project, index) => (
            <Card key={index} className="overflow-hidden flex flex-col h-full transition-all hover:shadow-lg">
              <div className="aspect-video relative overflow-hidden">
                <Image
                  src={project.image || "/placeholder.svg"}
                  alt={t(project.titleKey)}
                  fill
                  className="object-cover transition-transform hover:scale-105"
                />
              </div>
              <CardHeader>
                <CardTitle>{t(project.titleKey)}</CardTitle>
                <CardDescription>{t(project.descriptionKey)}</CardDescription>
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
            <Link href="https://github.com/pacrit" target="_blank" rel="noopener noreferrer">
              <Github className="mr-2 h-4 w-4" />
              {t('seeMoreGithub')}
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}