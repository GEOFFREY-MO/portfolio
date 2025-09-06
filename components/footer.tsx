import Link from "next/link"

export function Footer() {
  return (
    <footer className="border-t border-border">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 py-8 grid grid-cols-2 gap-4 sm:gap-6 md:grid-cols-3 text-sm">
        <div className="space-y-2">
          <div className="font-semibold">Quick Links</div>
          <ul className="space-y-1 text-muted-foreground">
            <li><Link href="/services">Services</Link></li>
            <li><Link href="/portfolio">Portfolio</Link></li>
            <li><Link href="/blog">Blog</Link></li>
            <li><Link href="/contact">Contact</Link></li>
          </ul>
        </div>
        <div className="space-y-2">
          <div className="font-semibold">Social</div>
          <ul className="space-y-1 text-muted-foreground">
            <li><a href="https://www.linkedin.com/" target="_blank" rel="noreferrer">LinkedIn</a></li>
            <li><a href="https://github.com/" target="_blank" rel="noreferrer">GitHub</a></li>
            <li><a href="https://www.youtube.com/" target="_blank" rel="noreferrer">YouTube</a></li>
            <li><a href="https://x.com/" target="_blank" rel="noreferrer">X / Twitter</a></li>
          </ul>
        </div>
        <div className="space-y-2 col-span-2 md:col-span-1">
          <div className="font-semibold">Newsletter</div>
          <p className="text-muted-foreground">Join for updates on AI, coding, and startups.</p>
          <form className="flex gap-2">
            <input className="flex-1 px-3 py-2 rounded-md bg-input/30 border border-input" placeholder="Your email" />
            <button className="px-4 py-2 rounded-md bg-primary text-primary-foreground">Subscribe</button>
          </form>
        </div>
      </div>
      <div className="py-4 text-center text-xs text-muted-foreground">
        © {new Date().getFullYear()} Geofrey Mokami Kegocha. All rights reserved.
      </div>
    </footer>
  )
}


