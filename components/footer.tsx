import Link from "next/link"
import { NewsletterForm } from "@/components/newsletter-form"

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
            <li><a href="https://www.linkedin.com/in/geofrey-kegocha-1a26ba354?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank" rel="noreferrer">LinkedIn</a></li>
            <li><a href="https://github.com/GEOFFREY-MO" target="_blank" rel="noreferrer">GitHub</a></li>
            <li><a href="https://youtube.com/@new_in_ai?si=1scZtIJI0jir_W8r" target="_blank" rel="noreferrer">YouTube: New in AI</a></li>
            <li><a href="https://youtube.com/@brothergeof?si=ihB5T1asoglNNSri" target="_blank" rel="noreferrer">YouTube: Brother Geof</a></li>
            <li><a href="https://x.com/GKegocha" target="_blank" rel="noreferrer">X / Twitter</a></li>
          </ul>
        </div>
        <div className="space-y-2 col-span-2 md:col-span-1">
          <div className="font-semibold">Newsletter</div>
          <p className="text-muted-foreground">Join for updates on AI, coding, and startups.</p>
          <NewsletterForm layout="row" />
        </div>
      </div>
      <div className="py-4 text-center text-xs text-muted-foreground">
        © {new Date().getFullYear()} Geofrey Mokami Kegocha. All rights reserved.
      </div>
    </footer>
  )
}


