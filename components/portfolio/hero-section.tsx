"use client"

import { useEffect, useState } from "react"
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react"

export function HeroSection() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

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
            Xin chao, toi la
          </p>

          <h1 className="mb-2 text-4xl font-bold tracking-tight text-foreground sm:text-5xl md:text-7xl">
            <span className="text-balance">Nguyen Huu Phuoc.</span>
          </h1>

          <h2 className="mb-6 text-3xl font-bold tracking-tight text-muted-foreground sm:text-4xl md:text-6xl">
            <span className="text-balance">Toi xay dung san pham so.</span>
          </h2>

          <p className="mb-8 max-w-xl text-base leading-relaxed text-muted-foreground md:text-lg">
            Toi la mot{" "}
            <span className="text-foreground font-medium">Software Developer</span>{" "}
            chuyen ve phat trien ung dung web. Hien tai, toi tap trung xay dung
            nhung san pham co trai nghiem nguoi dung tuyet voi va hieu suat cao.
          </p>

          {/* Social Links */}
          <div className="mb-12 flex items-center gap-5">
            <a
              href="https://github.com/huuphuochub"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground transition-all duration-200 hover:-translate-y-0.5 hover:text-primary"
              aria-label="GitHub"
            >
              <Github className="h-5 w-5" />
            </a>
            <a
              href="https://www.linkedin.com/in/phuoc-nguyen532004/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground transition-all duration-200 hover:-translate-y-0.5 hover:text-primary"
              aria-label="LinkedIn"
            >
              <Linkedin className="h-5 w-5" />
            </a>
            <a
              href="mailto:huuphuoc532004@gmail.com"
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
            Kham pha them
            <ArrowDown className="h-4 w-4 transition-transform group-hover:translate-y-1" />
          </a>
        </div>
      </div>
    </section>
  )
}
