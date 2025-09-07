import Link from "next/link"
import { Button } from "@/components/ui/button"

export const metadata = { title: "Blog" }

const posts = [
  { slug: "coders-to-founders", title: "Coders → Founders: From idea to product", excerpt: "How to ship faster with lean scope." },
  { slug: "ai-tips", title: "AI Tips for Builders", excerpt: "Practical heuristics for applied AI." },
]

const featured = [
  { title: "SmartRetailAI — Computer Vision Retail Analytics", href: "#" },
  { title: "Msafara Global — EV Fleet Platform", href: "#" },
  { title: "YouTube — AI, Coding, Startups", href: "#" },
]

export default function BlogPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 sm:px-6 py-12 sm:py-16 space-y-8">
      <header className="rounded-2xl border border-border overflow-hidden bg-gradient-to-r from-indigo-600/20 via-blue-600/20 to-fuchsia-600/20 p-6 sm:p-10">
        <h1 className="text-3xl sm:text-5xl font-bold tracking-tight">Knowledge Hub</h1>
        <p className="mt-3 text-sm sm:text-base text-muted-foreground max-w-2xl">Deep dives for coders → founders, applied AI tips, and pragmatic product building.</p>
        <div className="mt-6 grid grid-cols-2 gap-2 sm:grid-cols-3">
          {featured.map((f) => (
            <Link key={f.title} href={f.href} className="col-span-2 sm:col-span-1">
              <div className="rounded-lg border border-border bg-card/60 hover:bg-card/80 transition-colors px-3 py-2 text-xs sm:text-sm">
                {f.title}
              </div>
            </Link>
          ))}
        </div>
      </header>

      <div className="grid grid-cols-2 gap-3 sm:gap-4 md:gap-6">
        {posts.map((p) => (
          <div key={p.slug} className="rounded-xl border border-border p-3 sm:p-6 bg-card/50 shadow-sm hover:shadow-md transition-shadow">
            <h3 className="font-semibold text-sm sm:text-base">{p.title}</h3>
            <p className="text-xs sm:text-sm text-muted-foreground mb-3 sm:mb-4">{p.excerpt}</p>
            <Link href={`/blog/${p.slug}`}>
              <Button size="sm" className="bg-gradient-to-r from-indigo-500 to-fuchsia-500 text-white">Read</Button>
            </Link>
          </div>
        ))}
      </div>
    </div>
  )
}


