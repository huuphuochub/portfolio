"use client"

import { useEffect, useState } from "react"
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react"
import { useI18n } from "@/lib/i18n/context"

export function HeroSection() {
  const { t } = useI18n()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  // Parse description with <highlight> tags
  const renderDescription = (text: string) => {
    const parts = text.split(/(<highlight>.*?<\/highlight>)/g)
    return parts.map((part, i) => {
      const match = part.match(/<highlight>(.*?)<\/highlight>/)
      if (match) {
        return (
          <span key={i} className="font-medium text-foreground">
            {match[1]}
          </span>
        )
      }
      return part
    })
  }

  return (
    <section className="relative flex min-h-screen items-center px-6">
      {/* Subtle grid background */}
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,var(--border)_1px,transparent_1px),linear-gradient(to_bottom,var(--border)_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-20" />

      <div className="relative mx-auto w-full max-w-6xl">
        <div
          className={`transition-all duration-700 ${
            mounted ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
          }`}
        >
          <p className="mb-4 font-mono text-sm text-primary md:text-base">
            {t.hero.greeting}
          </p>

          <h1 className="mb-2 text-4xl font-bold tracking-tight text-foreground sm:text-5xl md:text-7xl">
            <span className="text-balance">{t.hero.name}</span>
          </h1>

          <h2 className="mb-6 text-3xl font-bold tracking-tight text-muted-foreground sm:text-4xl md:text-6xl">
            <span className="text-balance">{t.hero.tagline}</span>
          </h2>

          <p className="mb-8 max-w-xl text-base leading-relaxed text-muted-foreground md:text-lg">
            {renderDescription(t.hero.description)}
          </p>

          {/* Social Links */}
          <div className="mb-12 flex items-center gap-5">
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground transition-all duration-200 hover:-translate-y-0.5 hover:text-primary"
              aria-label="GitHub"
            >
              <Github className="h-5 w-5" />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground transition-all duration-200 hover:-translate-y-0.5 hover:text-primary"
              aria-label="LinkedIn"
            >
              <Linkedin className="h-5 w-5" />
            </a>
            <a
              href="mailto:email@example.com"
              className="text-muted-foreground transition-all duration-200 hover:-translate-y-0.5 hover:text-primary"
              aria-label="Email"
            >
              <Mail className="h-5 w-5" />
            </a>
          </div>

          {/* CTA */}
          <a
            href="#about"
            className="group inline-flex items-center gap-2 rounded-sm border border-primary px-6 py-3 font-mono text-sm text-primary transition-all hover:bg-primary/10"
          >
            {t.hero.cta}
            <ArrowDown className="h-4 w-4 transition-transform group-hover:translate-y-1" />
          </a>
        </div>
      </div>
    </section>
  )
}
