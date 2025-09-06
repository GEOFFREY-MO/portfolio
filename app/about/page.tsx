"use client"

import { motion } from "framer-motion"

export default function AboutPage() {
  const milestones = [
    { year: "2018", title: "Data Scientist", desc: "Built ML models for analytics." },
    { year: "2020", title: "AI/Software Engineer", desc: "Shipped AI features end-to-end." },
    { year: "2022", title: "YouTuber", desc: "Published tech and AI content." },
    { year: "2024", title: "Startup Builder", desc: "Building product-led businesses." },
  ]

  return (
    <div className="mx-auto max-w-6xl px-4 sm:px-6 py-12 sm:py-16 space-y-12">
      <header className="space-y-2">
        <h1 className="text-3xl sm:text-4xl font-bold">About Me</h1>
        <p className="text-sm sm:text-base text-muted-foreground">My journey from data to product.</p>
      </header>

      <section className="grid grid-cols-2 gap-3 sm:gap-6">
        <div className="rounded-xl border border-border p-3 sm:p-6 bg-card/50">
          <h2 className="font-semibold mb-2 text-sm sm:text-base">Tech Professional</h2>
          <p className="text-xs sm:text-sm text-muted-foreground">Focused on scalable systems, AI/ML, and developer experience. Great fit for remote-first teams and product companies.</p>
        </div>
        <div className="rounded-xl border border-border p-3 sm:p-6 bg-card/50">
          <h2 className="font-semibold mb-2 text-sm sm:text-base">Mentor / Entrepreneur</h2>
          <p className="text-xs sm:text-sm text-muted-foreground">Helping coders and founders go from idea to shipped product with lean, pragmatic execution.</p>
        </div>
      </section>

      <section className="space-y-6">
        <h2 className="text-xl font-semibold">Timeline</h2>
        <ol className="relative border-s border-border pl-4 sm:pl-6">
          {milestones.map((m, idx) => (
            <motion.li key={m.year} initial={{ opacity: 0, x: -8 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: idx * 0.05 }} className="mb-6">
              <div className="absolute -left-2 top-1 size-3 rounded-full bg-gradient-to-r from-indigo-500 to-fuchsia-500" />
              <div className="font-semibold text-sm sm:text-base">{m.year} — {m.title}</div>
              <div className="text-xs sm:text-sm text-muted-foreground">{m.desc}</div>
            </motion.li>
          ))}
        </ol>
      </section>
    </div>
  )
}


