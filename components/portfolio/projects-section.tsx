"use client"

import { useEffect, useRef, useState } from "react"
import { ExternalLink, Github, Folder } from "lucide-react"
import { useI18n } from "@/lib/i18n/context"

const featuredProjectsMeta = [
  {
    techs: ["Next.js" , "Nest.js", "PostgreSQL", "TailwindCSS", "Socket.io", "RabbitMQ", "JWT", "Docker"],
    github: "#",
    live: "#",
    align: "right" as const,
  },
  {
    techs: ["Angular", "Node.js", "Socket.io", "MongoDB","TailwindCss"],
    github: "#",
    live: "#",
    align: "left" as const,
  },
  {
    techs: ["Next.js", "Laravel", "MySQL", "TailwindCSS", "JWT"],
    github: "#",
    live: "#",
    align: "right" as const,
  },
]

const otherProjectsMeta = [
  { techs: ["Next.js", "TailwindCSS"], github: "#", live: "#" },
  { techs: ["PHP", "MySQL", "API"], github: "#", live: undefined },
  { techs: ["Next.js", "Leaflet", "Socket.io"], github: "#", live: "#" },
  { techs: ["Node.js", "Redis", "React"], github: "#", live: undefined },
  { techs: ["Vue.js", "Firebase", "API"], github: "#", live: "#" },
  { techs: ["React Native", "SQLite"], github: "#", live: undefined },
]

export function ProjectsSection() {
  const { t } = useI18n()
  const ref = useRef<HTMLElement>(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setVisible(true)
      },
      { threshold: 0.05 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section ref={ref} id="projects" className="px-6 py-24 md:py-32">
      <div
        className={`mx-auto max-w-6xl transition-all duration-700 ${
          visible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
        }`}
      >
        <h2 className="mb-12 flex items-center gap-3 text-2xl font-bold text-foreground md:text-3xl">
          <span className="font-mono text-base text-primary md:text-lg">
            {t.projects.sectionNumber}
          </span>
          {t.projects.title}
          <span className="ml-4 h-px flex-1 bg-border" />
        </h2>

        {/* Featured Projects */}
        <div className="mb-24 space-y-24">
          {t.projects.featured.map((project, index) => {
            const meta = featuredProjectsMeta[index]
            return (
              <div
                key={index}
                className="relative grid items-center gap-4 md:grid-cols-12"
              >
                {/* Project Image Placeholder */}
                <div
                  className={`overflow-hidden rounded-sm md:col-span-7 ${
                    meta.align === "right"
                      ? "md:col-start-1"
                      : "md:col-start-6"
                  } md:row-start-1`}
                >
                  <div className="flex aspect-video items-center justify-center rounded-sm border border-border/50 bg-secondary/50">
                    <div className="text-center">
                      <Folder className="mx-auto mb-2 h-10 w-10 text-primary/40" />
                      <p className="font-mono text-xs text-muted-foreground">
                        project-screenshot.png
                      </p>
                    </div>
                  </div>
                </div>

                {/* Project Info */}
                <div
                  className={`relative z-10 md:col-span-6 md:row-start-1 ${
                    meta.align === "right"
                      ? "md:col-start-7 md:text-right"
                      : "md:col-start-1 md:text-left"
                  }`}
                >
                  <p className="mb-1 font-mono text-sm text-primary">
                    {t.projects.featuredLabel}
                  </p>
                  <h3 className="mb-4 text-xl font-bold text-foreground md:text-2xl">
                    {project.title}
                  </h3>
                  <div className="mb-4 rounded-sm bg-card p-5 text-sm leading-relaxed text-muted-foreground shadow-lg shadow-background/50">
                    {project.description}
                  </div>
                  <div
                    className={`mb-4 flex flex-wrap gap-3 font-mono text-xs text-muted-foreground ${
                      meta.align === "right" ? "md:justify-end" : ""
                    }`}
                  >
                    {meta.techs.map((tech) => (
                      <span key={tech}>{tech}</span>
                    ))}
                  </div>
                  <div
                    className={`flex gap-4 ${
                      meta.align === "right" ? "md:justify-end" : ""
                    }`}
                  >
                    <a
                      href={meta.github}
                      className="text-muted-foreground transition-colors hover:text-primary"
                      aria-label="GitHub repo"
                    >
                      <Github className="h-5 w-5" />
                    </a>
                    {meta.live && (
                      <a
                        href={meta.live}
                        className="text-muted-foreground transition-colors hover:text-primary"
                        aria-label="Live demo"
                      >
                        <ExternalLink className="h-5 w-5" />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            )
          })}
        </div>

        {/* Other Projects */}
        <div>
          <h3 className="mb-8 text-center text-xl font-bold text-foreground md:text-2xl">
            {t.projects.otherTitle}
          </h3>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {t.projects.other.map((project, index) => {
              const meta = otherProjectsMeta[index]
              return (
                <div
                  key={index}
                  className="group flex flex-col rounded-sm bg-card p-6 transition-all hover:-translate-y-1 hover:shadow-lg hover:shadow-background/50"
                >
                  <div className="mb-6 flex items-center justify-between">
                    <Folder className="h-9 w-9 text-primary" />
                    <div className="flex gap-3">
                      <a
                        href={meta.github}
                        className="text-muted-foreground transition-colors hover:text-primary"
                        aria-label="GitHub"
                      >
                        <Github className="h-5 w-5" />
                      </a>
                      {meta.live && (
                        <a
                          href={meta.live}
                          className="text-muted-foreground transition-colors hover:text-primary"
                          aria-label="Live demo"
                        >
                          <ExternalLink className="h-5 w-5" />
                        </a>
                      )}
                    </div>
                  </div>
                  <h4 className="mb-2 text-lg font-semibold text-foreground group-hover:text-primary">
                    {project.title}
                  </h4>
                  <p className="mb-6 flex-1 text-sm leading-relaxed text-muted-foreground">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 font-mono text-xs text-muted-foreground">
                    {meta.techs.map((tech) => (
                      <span key={tech}>{tech}</span>
                    ))}
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
