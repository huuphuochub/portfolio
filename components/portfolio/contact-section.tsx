"use client"

import { useEffect, useRef, useState } from "react"
import { Mail } from "lucide-react"

export function ContactSection() {
  const ref = useRef<HTMLElement>(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setVisible(true)
      },
      { threshold: 0.2 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section ref={ref} id="contact" className="px-6 py-24 md:py-32">
      <div
        className={`mx-auto max-w-2xl text-center transition-all duration-700 ${
          visible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
        }`}
      >
        <p className="mb-2 font-mono text-sm text-primary">04. Tiep theo la gi?</p>
        <h2 className="mb-6 text-3xl font-bold text-foreground md:text-5xl">
          Lien he voi toi
        </h2>
        <p className="mb-10 text-base leading-relaxed text-muted-foreground md:text-lg">
          Toi luon san sang lang nghe nhung co hoi moi va thu vi. Du ban co cau hoi
          hay chi don gian muon chao hoi, toi se co gang phan hoi som nhat co the!
        </p>
        <a
          href="mailto:email@example.com"
          className="group inline-flex items-center gap-2 rounded-sm border border-primary px-8 py-4 font-mono text-sm text-primary transition-all hover:bg-primary/10"
        >
          <Mail className="h-4 w-4" />
          Gui email cho toi
        </a>
      </div>
    </section>
  )
}
