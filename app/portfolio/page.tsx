import Link from "next/link"

export const metadata = { title: "Portfolio" }

const projects = [
  {
    title: "SmartRetailAI",
    desc: "Computer-vision powered analytics for smart retail.",
    href: "#",
  },
  {
    title: "Msafara Global EV Platform",
    desc: "Fleet telematics and EV orchestration platform.",
    href: "#",
  },
  {
    title: "YouTube Channels",
    desc: "Educational content on AI, coding, and startups.",
    href: "#",
  },
]

export default function PortfolioPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 sm:px-6 py-12 sm:py-16">
      <h1 className="text-3xl sm:text-4xl font-bold mb-8">Portfolio</h1>
      <div className="grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-3">
        {projects.map((p) => (
          <div key={p.title} className="rounded-xl border border-border p-3 sm:p-6 bg-card/50">
            <div className="aspect-video rounded-md bg-gradient-to-br from-indigo-500/10 to-fuchsia-500/10 mb-3 sm:mb-4" />
            <h3 className="font-semibold text-sm sm:text-base">{p.title}</h3>
            <p className="text-xs sm:text-sm text-muted-foreground mb-2 sm:mb-3">{p.desc}</p>
            <Link href={p.href} className="text-xs sm:text-sm text-primary underline underline-offset-4">View Project</Link>
          </div>
        ))}
      </div>
    </div>
  )
}


