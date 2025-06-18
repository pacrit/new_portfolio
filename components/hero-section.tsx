import Image from "next/image"
import Link from "next/link"
import { ArrowDown } from "lucide-react"

import { Button } from "@/components/ui/button"

export function HeroSection() {
  return (
    <section id="about" className="relative py-20 md:py-32 overflow-hidden">
      <div className="container flex flex-col md:flex-row items-center gap-8 md:gap-16">
        <div className="flex-1 space-y-6 animate-in">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight">Hi, I'm Patrick W.</h1>
          <p className="text-xl text-muted-foreground">
            A passionate Full Stack Developer specializing in React.js and Node.js. I love building clean, efficient,
            and user-friendly web applications.
          </p>
          <p className="text-lg text-muted-foreground">
            "Just a ambitious, smart and very curious guy loving new tech's. Learning quickly and keeping update. Never
            forget semicolon. Sometimes works at first. And always giving the code clean."
          </p>
          <div className="flex flex-col sm:flex-row gap-3">
            <Button size="lg" asChild>
              <Link href="#projects">View My Work</Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link href="/resume.pdf" target="_blank">
                Download Resume
              </Link>
            </Button>
          </div>
        </div>
        <div className="flex-1 flex justify-center md:justify-end animate-in">
          <div className="relative w-72 h-72 md:w-96 md:h-96 rounded-full overflow-hidden border-4 border-primary/20">
            <Image
              src="https://res.cloudinary.com/deu4zjoq9/image/upload/v1750258691/picture_me_yclmon.jpg?height=400&width=400"
              alt="Patrick W."
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>
      </div>
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <Link href="#skills">
          <Button variant="ghost" size="icon" className="rounded-full">
            <ArrowDown className="h-6 w-6" />
            <span className="sr-only">Scroll down</span>
          </Button>
        </Link>
      </div>
    </section>
  )
}
