"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { useLanguage } from "@/contexts/language-context"

export function ExperienceSection() {
  const { t } = useLanguage()
  
  const experiences = [
    {
      titleKey: "exp1Title",
      company: "Infolev Elevadores e Informática",
      period: "2022 - Present",
      descriptionKey: "exp1Description",
      achievementKeys: ["exp1Achievement1", "exp1Achievement2"],
      technologies: ["React", "Next.js", "Redux", "Tailwind CSS", "Node", "MySQL","Postgresql","SQL Server" ],
    },
    {
      titleKey: "exp2Title",
      company: "Stefanini",
      period: "2020 - 2022",
      descriptionKey: "exp2Description",
      achievementKeys: ["exp2Achievement1"],
      technologies: ["Microsoft", "Linux", "Excel", "PowerBI", "Explorer"],
    }
  ]

  return (
    <section id="experience" className="py-20 bg-muted/50">
      <div className="container">
        <div className="text-center space-y-4 mb-16 animate-in">
          <h2 className="text-3xl md:text-4xl font-bold">{t('experienceTitle')}</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            {t('experienceDescription')}
          </p>
        </div>
        <div className="space-y-8 animate-in">
          {experiences.map((exp, index) => (
            <Card key={index} className="transition-all hover:shadow-md">
              <CardHeader>
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
                  <div>
                    <CardTitle>{t(exp.titleKey)}</CardTitle>
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
                <p>{t(exp.descriptionKey)}</p>
                <div>
                  <h4 className="font-medium mb-2">{t('keyAchievements')}</h4>
                  <ul className="list-disc pl-5 space-y-1">
                    {exp.achievementKeys.map((achievementKey, i) => (
                      <li key={i}>{t(achievementKey)}</li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h4 className="font-medium mb-2">{t('technologies')}</h4>
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