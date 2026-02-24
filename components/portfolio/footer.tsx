import { Github, Linkedin, Mail } from "lucide-react"

export function Footer() {
  return (
    <footer className="px-6 pb-8 pt-12">
      <div className="mx-auto max-w-6xl">
        {/* Mobile social links */}
        <div className="mb-6 flex items-center justify-center gap-6 md:hidden">
          <a
            href="https://github.com/huuphuochub"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground transition-colors hover:text-primary"
            aria-label="GitHub"
          >
            <Github className="h-5 w-5" />
          </a>
          <a
            href="https://linkedin.com/in/phuoc-nguyen532004/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground transition-colors hover:text-primary"
            aria-label="LinkedIn"
          >
            <Linkedin className="h-5 w-5" />
          </a>
          <a
            href="mailto:huuphuoc532004@gmail.com"
            className="text-muted-foreground transition-colors hover:text-primary"
            aria-label="Email"
          >
            <Mail className="h-5 w-5" />
          </a>
        </div>

        <p className="text-center font-mono text-xs text-muted-foreground">
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="transition-colors hover:text-primary"
          >
            Thiet ke & Phat trien boi Nguyen Van A
          </a>
        </p>
      </div>
    </footer>
  )
}
