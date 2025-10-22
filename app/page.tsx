"use client"

import Link from "next/link"
import { ArrowRight, Github, Linkedin, Mail } from "lucide-react"

import { Button } from "@/components/ui/button"
import { HeroSection } from "@/components/hero-section"
import { ProjectsSection } from "@/components/projects-section"
import { SkillsSection } from "@/components/skills-section"
import { ExperienceSection } from "@/components/experience-section"
import { ContactSection } from "@/components/contact-section"
import { ThemeToggle } from "@/components/theme-toggle"
import { LanguageToggle } from "@/components/language-toggle"
import { useLanguage } from "@/contexts/language-context"

export default function Home() {
  const { t } = useLanguage()

  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-40 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <Link href="/" className="font-bold text-xl">
              Patrick W.
            </Link>
          </div>
          <nav className="hidden md:flex items-center gap-6">
            <Link href="#about" className="text-sm font-medium hover:underline underline-offset-4">
              {t('about')}
            </Link>
            <Link href="#skills" className="text-sm font-medium hover:underline underline-offset-4">
              {t('skills')}
            </Link>
            <Link href="#projects" className="text-sm font-medium hover:underline underline-offset-4">
              {t('projects')}
            </Link>
            <Link href="#experience" className="text-sm font-medium hover:underline underline-offset-4">
              {t('experience')}
            </Link>
            <Link href="#contact" className="text-sm font-medium hover:underline underline-offset-4">
              {t('contact')}
            </Link>
          </nav>
          <div className="flex items-center gap-2">
            <LanguageToggle />
            <ThemeToggle />
            <Button variant="outline" size="icon" asChild>
              <Link href="https://github.com/pacrit/" target="_blank" rel="noopener noreferrer">
                <Github className="h-4 w-4" />
                <span className="sr-only">GitHub</span>
              </Link>
            </Button>
            <Button variant="outline" size="icon" asChild>
              <Link href="https://www.linkedin.com/in/patrick-wesley-78b01a148" target="_blank" rel="noopener noreferrer">
                <Linkedin className="h-4 w-4" />
                <span className="sr-only">LinkedIn</span>
              </Link>
            </Button>
            <Button className="hidden md:flex" asChild>
              <Link href="#contact">
                {t('contactMe')} <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </header>
      <main className="flex-1">
        <HeroSection />
        <SkillsSection />
        <ProjectsSection />
        <ExperienceSection />
        <ContactSection />
      </main>
      <footer className="border-t py-6 md:py-0">
        <div className="container flex flex-col items-center justify-between gap-4 md:h-16 md:flex-row">
          <p className="text-sm text-muted-foreground">© {new Date().getFullYear()} Patrick W. {t('allRightsReserved')}</p>
          <div className="flex items-center gap-4">
            <Button variant="ghost" size="icon" asChild>
              <Link href="mailto:patrick.carneiro13@gmail.com">
                <Mail className="h-4 w-4" />
                <span className="sr-only">Email</span>
              </Link>
            </Button>
            <Button variant="ghost" size="icon" asChild>
              <Link href="https://github.com/pacrit/" target="_blank" rel="noopener noreferrer">
                <Github className="h-4 w-4" />
                <span className="sr-only">GitHub</span>
              </Link>
            </Button>
            <Button variant="ghost" size="icon" asChild>
              <Link href="https://www.linkedin.com/in/patrick-wesley-78b01a148" target="_blank" rel="noopener noreferrer">
                <Linkedin className="h-4 w-4" />
                <span className="sr-only">LinkedIn</span>
              </Link>
            </Button>
          </div>
        </div>
      </footer>
    </div>
  )
}
