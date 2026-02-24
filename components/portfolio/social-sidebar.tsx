"use client"

import { Github, Linkedin, Mail } from "lucide-react"

export function SocialSidebar() {
  return (
    <>
      {/* Left sidebar - social links */}
      <div className="fixed bottom-0 left-6 z-40 hidden flex-col items-center gap-6 after:mt-2 after:h-24 after:w-px after:bg-muted-foreground/50 md:flex lg:left-10">
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
          href="https://linkedin.com/in/phuoc-nguyen532004/"
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

      {/* Right sidebar - email */}
      <div className="fixed bottom-0 right-6 z-40 hidden flex-col items-center gap-6 after:mt-2 after:h-24 after:w-px after:bg-muted-foreground/50 md:flex lg:right-10">
        <a
          href="mailto:huuphuoc532004@gmail.com"
          className="font-mono text-xs tracking-widest text-muted-foreground transition-colors hover:text-primary [writing-mode:vertical-rl]"
        >
          huuphuoc532004@gmail.com
        </a>
      </div>
    </>
  )
}
