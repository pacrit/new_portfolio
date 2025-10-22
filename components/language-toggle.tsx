"use client"

import * as React from "react"
import { Languages } from "lucide-react"

import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { useLanguage } from "@/contexts/language-context"

export function LanguageToggle() {
  const { language, setLanguage } = useLanguage()

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size="icon">
          <Languages className="h-[1.2rem] w-[1.2rem]" />
          <span className="sr-only">Toggle language</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem onClick={() => setLanguage('en')}>
          <span className={`mr-2 ${language === 'en' ? 'font-bold' : ''}`}>🇺🇸</span>
          English
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setLanguage('pt')}>
          <span className={`mr-2 ${language === 'pt' ? 'font-bold' : ''}`}>🇧🇷</span>
          Português
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}