"use client"

import { useEffect, useRef, useState } from "react"
import { ExternalLink, Github, Folder } from "lucide-react"

const featuredProjects = [
  {
    title: "E-Commerce Platform",
    description:
      "Nen tang thuong mai dien tu day du tinh nang voi gio hang, thanh toan, quan ly don hang va dashboard admin. Ho tro nhieu phuong thuc thanh toan va tich hop van chuyen.",
    techs: ["Next.js", "TypeScript", "Stripe", "PostgreSQL", "TailwindCSS"],
    github: "#",
    live: "#",
    align: "right" as const,
  },
  {
    title: "Task Management App",
    description:
      "Ung dung quan ly cong viec theo phong cach Kanban voi tinh nang drag-and-drop, thong bao thoi gian thuc, bieu do tien do va tich hop voi cac dich vu ben ngoai.",
    techs: ["React", "Node.js", "Socket.io", "MongoDB", "Docker"],
    github: "#",
    live: "#",
    align: "left" as const,
  },
  {
    title: "AI Chat Application",
    description:
      "Ung dung chat tich hop AI voi kha nang xu ly ngon ngu tu nhien, ho tro nhieu ngon ngu, luu tru lich su tro chuyen va giao dien than thien voi nguoi dung.",
    techs: ["Next.js", "AI SDK", "Python", "FastAPI", "Redis"],
    github: "#",
    live: "#",
    align: "right" as const,
  },
]

const otherProjects = [
  {
    title: "Portfolio Website",
    description: "Website portfolio ca nhan voi thiet ke toi gian va hien dai.",
    techs: ["Next.js", "TailwindCSS"],
    github: "#",
    live: "#",
  },
  {
    title: "Weather Dashboard",
    description: "Dashboard thoi tiet voi du lieu thoi gian thuc va bieu do truc quan.",
    techs: ["React", "Chart.js", "API"],
    github: "#",
  },
  {
    title: "Blog CMS",
    description: "He thong quan ly noi dung blog voi editor markdown va SEO toi uu.",
    techs: ["Next.js", "MDX", "Prisma"],
    github: "#",
    live: "#",
  },
  {
    title: "URL Shortener",
    description: "Dich vu rut gon URL voi phan tich luot click va QR code.",
    techs: ["Node.js", "Redis", "React"],
    github: "#",
  },
  {
    title: "Recipe Finder",
    description: "Ung dung tim kiem cong thuc nau an voi bo loc da dang va luu tru yeu thich.",
    techs: ["Vue.js", "Firebase", "API"],
    github: "#",
    live: "#",
  },
  {
    title: "Expense Tracker",
    description: "Ung dung theo doi chi tieu ca nhan voi bieu do va bao cao hang thang.",
    techs: ["React Native", "SQLite"],
    github: "#",
  },
]

export function ProjectsSection() {
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
          <span className="font-mono text-base text-primary md:text-lg">03.</span>
          Du an noi bat
          <span className="ml-4 h-px flex-1 bg-border" />
        </h2>

        {/* Featured Projects */}
        <div className="mb-24 space-y-24">
          {featuredProjects.map((project, index) => (
            <div
              key={index}
              className={`relative grid items-center gap-4 md:grid-cols-12 ${
                project.align === "left" ? "" : ""
              }`}
            >
              {/* Project Image Placeholder */}
              <div
                className={`overflow-hidden rounded-sm md:col-span-7 ${
                  project.align === "right" ? "md:col-start-1" : "md:col-start-6"
                } md:row-start-1`}
              >
                <div className="aspect-video bg-secondary/50 flex items-center justify-center border border-border/50 rounded-sm">
                  <div className="text-center">
                    <Folder className="mx-auto mb-2 h-10 w-10 text-primary/40" />
                    <p className="font-mono text-xs text-muted-foreground">project-screenshot.png</p>
                  </div>
                </div>
              </div>

              {/* Project Info */}
              <div
                className={`relative z-10 md:col-span-6 md:row-start-1 ${
                  project.align === "right"
                    ? "md:col-start-7 md:text-right"
                    : "md:col-start-1 md:text-left"
                }`}
              >
                <p className="mb-1 font-mono text-sm text-primary">Du an noi bat</p>
                <h3 className="mb-4 text-xl font-bold text-foreground md:text-2xl">
                  {project.title}
                </h3>
                <div className="mb-4 rounded-sm bg-card p-5 text-sm leading-relaxed text-muted-foreground shadow-lg shadow-background/50">
                  {project.description}
                </div>
                <div
                  className={`mb-4 flex flex-wrap gap-3 font-mono text-xs text-muted-foreground ${
                    project.align === "right" ? "md:justify-end" : ""
                  }`}
                >
                  {project.techs.map((tech) => (
                    <span key={tech}>{tech}</span>
                  ))}
                </div>
                <div
                  className={`flex gap-4 ${
                    project.align === "right" ? "md:justify-end" : ""
                  }`}
                >
                  <a
                    href={project.github}
                    className="text-muted-foreground transition-colors hover:text-primary"
                    aria-label="GitHub repo"
                  >
                    <Github className="h-5 w-5" />
                  </a>
                  {project.live && (
                    <a
                      href={project.live}
                      className="text-muted-foreground transition-colors hover:text-primary"
                      aria-label="Live demo"
                    >
                      <ExternalLink className="h-5 w-5" />
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Other Projects */}
        <div>
          <h3 className="mb-8 text-center text-xl font-bold text-foreground md:text-2xl">
            Cac du an khac
          </h3>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {otherProjects.map((project, index) => (
              <div
                key={index}
                className="group flex flex-col rounded-sm bg-card p-6 transition-all hover:-translate-y-1 hover:shadow-lg hover:shadow-background/50"
              >
                <div className="mb-6 flex items-center justify-between">
                  <Folder className="h-9 w-9 text-primary" />
                  <div className="flex gap-3">
                    <a
                      href={project.github}
                      className="text-muted-foreground transition-colors hover:text-primary"
                      aria-label="GitHub"
                    >
                      <Github className="h-5 w-5" />
                    </a>
                    {project.live && (
                      <a
                        href={project.live}
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
                  {project.techs.map((tech) => (
                    <span key={tech}>{tech}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
