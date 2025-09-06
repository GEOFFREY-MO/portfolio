import Link from "next/link"
import { Button } from "@/components/ui/button"

export const metadata = { title: "Services" }

const services = [
  { title: "Software Development & Deployment", desc: "Fullstack web apps, DX-focused, shipped to production." },
  { title: "AI/ML Model Training & Consulting", desc: "From data to deployed models with MLOps." },
  { title: "Startup Advisory / Tech Co-founder", desc: "MVP strategy, lean execution, and architecture." },
  { title: "Website/App Development + Maintenance", desc: "Modern, fast, SEO-optimized websites and apps." },
]

export default function ServicesPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 sm:px-6 py-12 sm:py-16 space-y-8">
      <header>
        <h1 className="text-3xl sm:text-4xl font-bold">Services</h1>
        <p className="text-muted-foreground">Results-focused collaboration. Let’s ship.</p>
      </header>
      <div className="grid grid-cols-2 gap-3 sm:gap-4 md:gap-6">
        {services.map((s) => (
          <div key={s.title} className="rounded-xl border border-border p-3 sm:p-6 bg-card/50">
            <h3 className="font-semibold text-sm sm:text-base">{s.title}</h3>
            <p className="text-xs sm:text-sm text-muted-foreground mb-3 sm:mb-4">{s.desc}</p>
            <Link href="/contact"><Button className="w-full sm:w-auto bg-gradient-to-r from-indigo-500 to-fuchsia-500 text-white">Hire Me</Button></Link>
          </div>
        ))}
      </div>
    </div>
  )
}


