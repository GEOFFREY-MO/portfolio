import Link from "next/link"

export const metadata = { title: "Blog" }

const posts = [
  { slug: "coders-to-founders", title: "Coders → Founders: From idea to product", excerpt: "How to ship faster with lean scope." },
  { slug: "ai-tips", title: "AI Tips for Builders", excerpt: "Practical heuristics for applied AI." },
]

export default function BlogPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 sm:px-6 py-12 sm:py-16 space-y-6">
      <header>
        <h1 className="text-3xl sm:text-4xl font-bold">Blog</h1>
        <p className="text-muted-foreground">Guides for coders and founders.</p>
      </header>
      <div className="grid grid-cols-2 gap-3 sm:gap-4 md:gap-6">
        {posts.map((p) => (
          <div key={p.slug} className="rounded-xl border border-border p-3 sm:p-6 bg-card/50">
            <h3 className="font-semibold text-sm sm:text-base">{p.title}</h3>
            <p className="text-xs sm:text-sm text-muted-foreground mb-2">{p.excerpt}</p>
            <Link href={`/blog/${p.slug}`} className="text-xs sm:text-sm text-primary underline underline-offset-4">Read</Link>
          </div>
        ))}
      </div>
    </div>
  )
}


