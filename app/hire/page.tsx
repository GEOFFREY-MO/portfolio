import { Button } from "@/components/ui/button"
import Link from "next/link"

export const metadata = { title: "Hire Me" }

export default function HirePage() {
  const skills = ["AI/ML", "Fullstack", "Cloud/DevOps", "Product", "Data Engineering"]
  const logos = ["Python", "Django", "React", "Next.js", "TensorFlow", "PyTorch", "AWS", "Docker"]
  return (
    <div className="mx-auto max-w-6xl px-4 sm:px-6 py-12 sm:py-16 space-y-8">
      <header className="space-y-2">
        <h1 className="text-3xl sm:text-4xl font-bold">Hire Me</h1>
        <p className="text-muted-foreground">Designed for companies like Turing, Micro1, Crossover.</p>
      </header>

      <section className="rounded-xl border border-border p-3 sm:p-6 bg-card/50">
        <h2 className="font-semibold mb-2">Skills Snapshot</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
          {skills.map((s) => (
            <span key={s} className="px-2.5 py-1 rounded-full text-xs sm:text-sm bg-gradient-to-r from-indigo-500/10 to-fuchsia-500/10 border border-border text-center">{s}</span>
          ))}
        </div>
      </section>

      <section className="rounded-xl border border-border p-3 sm:p-6 bg-card/50">
        <h2 className="font-semibold mb-3">Tech Stack</h2>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 sm:gap-3 text-xs sm:text-sm text-muted-foreground">
          {logos.map((l) => (
            <span key={l} className="px-2.5 py-1 rounded-md border border-input bg-input/30 text-center">{l}</span>
          ))}
        </div>
      </section>

      <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
        <a href="/resume.pdf" download className="underline underline-offset-4 text-sm sm:text-base">Download Resume (PDF)</a>
        <Button asChild className="w-full sm:w-auto bg-gradient-to-r from-indigo-500 to-fuchsia-500 text-white">
          <Link href="/contact">Schedule an Interview</Link>
        </Button>
      </div>
    </div>
  )
}


