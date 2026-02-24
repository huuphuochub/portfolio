"use client"

import { useEffect, useRef, useState } from "react"

const skills = [
  "JavaScript",
  "TypeScript",
  "MySQL",
  "React",
  "Next.js",
  "Node.js",
  "TailwindCSS",
  "PostgreSQL",
  "Docker",
  "Git",
  "REST APIs",
]

export function AboutSection() {
  const ref = useRef<HTMLElement>(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setVisible(true)
      },
      { threshold: 0.15 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section
      ref={ref}
      id="about"
      className="px-6 py-24 md:py-32"
    >
      <div
        className={`mx-auto max-w-6xl transition-all duration-700 ${
          visible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
        }`}
      >
        <h2 className="mb-12 flex items-center gap-3 text-2xl font-bold text-foreground md:text-3xl">
          <span className="font-mono text-base text-primary md:text-lg">01.</span>
          Gioi thieu
          <span className="ml-4 h-px flex-1 bg-border" />
        </h2>

        <div className="grid gap-12 md:grid-cols-5">
          {/* Text */}
          <div className="space-y-4 text-muted-foreground md:col-span-3">
            <p className="leading-relaxed">
              Xin chao! Toi la mot lap trinh vien dam me voi viec xay dung nhung
              san pham ky thuat so. Hanh trinh cua toi bat dau tu viec tu hoc
              lap trinh va phat trien web, roi dan dan tro thanh mot ky su phan
              mem chuyen nghiep.
            </p>
            <p className="leading-relaxed">
              Hien tai, toi dang tap trung vao viec xay dung cac ung dung web
              hien dai voi{" "}
              <span className="text-primary">hieu suat cao</span>,{" "}
              <span className="text-primary">kha nang mo rong tot</span> va{" "}
              <span className="text-primary">
                trai nghiem nguoi dung tuyet voi
              </span>
              . Toi luon hoc hoi va cap nhat cong nghe moi nhat.
            </p>
            <p className="leading-relaxed">
              Mot so cong nghe toi su dung thuong xuyen:
            </p>

            {/* Skills Grid */}
            <ul className="grid grid-cols-2 gap-x-6 gap-y-2 pt-2">
              {skills.map((skill) => (
                <li
                  key={skill}
                  className="flex items-center gap-2 font-mono text-sm text-muted-foreground"
                >
                  <span className="text-primary">{">"}</span>
                  {skill}
                </li>
              ))}
            </ul>
          </div>

          {/* Profile Image Placeholder */}
          <div className="flex items-start justify-center md:col-span-2">
            <div className="group relative">
              <div className="relative z-10 overflow-hidden rounded-sm">
                <div className="h-64 w-64 bg-secondary flex items-center justify-center">
                  <div className="text-center">
                    <div className="mx-auto mb-3 flex h-16 w-16 items-center justify-center rounded-full border-2 border-primary/30 bg-primary/5">
                      <span className="font-mono text-2xl text-primary">A</span>
                    </div>
                    <p className="font-mono text-xs text-muted-foreground">your-photo.jpg</p>
                  </div>
                </div>
                <div className="absolute inset-0 bg-primary/10 transition-opacity group-hover:opacity-0" />
              </div>
              <div className="absolute -bottom-3 -right-3 z-0 h-64 w-64 rounded-sm border-2 border-primary transition-all group-hover:-translate-x-1 group-hover:-translate-y-1" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
