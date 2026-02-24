"use client"

import { useEffect, useRef, useState } from "react"
import { ExternalLink } from "lucide-react"

const experiences = [
  {
    period: "2024 — Hien tai",
    role: "Senior Software Engineer",
    company: "Cong ty ABC",
    companyUrl: "#",
    description:
      "Xay dung va phat trien cac tinh nang moi cho san pham chinh cua cong ty. Lam viec voi doi ngu da chuc nang de toi uu hieu suat va trai nghiem nguoi dung. Ap dung cac phuong phap phat trien phan mem hien dai nhu CI/CD, code review va automated testing.",
    techs: ["React", "Next.js", "TypeScript", "PostgreSQL", "AWS"],
  },
  {
    period: "2022 — 2024",
    role: "Software Engineer",
    company: "Cong ty XYZ",
    companyUrl: "#",
    description:
      "Phat trien va bao tri cac ung dung web cho khach hang doanh nghiep. Tham gia thiet ke kien truc he thong va dam bao chat luong ma nguon thong qua unit testing va integration testing.",
    techs: ["Vue.js", "Node.js", "MongoDB", "Docker", "Redis"],
  },
  {
    period: "2020 — 2022",
    role: "Junior Developer",
    company: "Startup DEF",
    companyUrl: "#",
    description:
      "Bat dau su nghiep voi vai tro lap trinh vien web. Hoc hoi va ap dung cac best practices trong phat trien phan mem. Tham gia xay dung MVP cho nhieu du an khac nhau.",
    techs: ["JavaScript", "React", "Express.js", "MySQL", "Git"],
  },
]

export function ExperienceSection() {
  const ref = useRef<HTMLElement>(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setVisible(true)
      },
      { threshold: 0.1 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section ref={ref} id="experience" className="px-6 py-24 md:py-32">
      <div
        className={`mx-auto max-w-6xl transition-all duration-700 ${
          visible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
        }`}
      >
        <h2 className="mb-12 flex items-center gap-3 text-2xl font-bold text-foreground md:text-3xl">
          <span className="font-mono text-base text-primary md:text-lg">02.</span>
          Kinh nghiem
          <span className="ml-4 h-px flex-1 bg-border" />
        </h2>

        <div className="space-y-0">
          {experiences.map((exp, index) => (
            <a
              key={index}
              href={exp.companyUrl}
              className="group -mx-4 flex flex-col gap-4 rounded-sm p-4 transition-all hover:bg-secondary/50 md:flex-row md:gap-8"
            >
              {/* Timeline */}
              <div className="shrink-0 pt-1">
                <span className="font-mono text-xs uppercase tracking-wider text-muted-foreground">
                  {exp.period}
                </span>
              </div>

              {/* Content */}
              <div className="flex-1">
                <h3 className="mb-1 flex items-center gap-2 font-medium text-foreground group-hover:text-primary">
                  {exp.role}
                  <span className="text-primary">·</span>
                  {exp.company}
                  <ExternalLink className="h-3.5 w-3.5 opacity-0 transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:opacity-100" />
                </h3>
                <p className="mb-4 text-sm leading-relaxed text-muted-foreground">
                  {exp.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {exp.techs.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-full bg-primary/10 px-3 py-1 font-mono text-xs text-primary"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
