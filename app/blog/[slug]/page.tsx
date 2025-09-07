import fs from "node:fs"
import path from "node:path"
import matter from "gray-matter"

type Params = { params: Promise<{ slug: string }> }

const BLOG_DIR = path.join(process.cwd(), "content", "blog")

export async function generateStaticParams() {
  if (!fs.existsSync(BLOG_DIR)) return []
  const files = fs.readdirSync(BLOG_DIR).filter((f) => f.endsWith(".md"))
  return files.map((f) => ({ slug: f.replace(/\.md$/, "") }))
}

export async function generateMetadata({ params }: Params) {
  const { slug } = await params
  const file = path.join(BLOG_DIR, `${slug}.md`)
  if (!fs.existsSync(file)) return { title: "Post" }
  const src = fs.readFileSync(file, "utf8")
  const { data } = matter(src)
  return { title: data.title ?? slug }
}

export default async function BlogPostPage({ params }: Params) {
  const { slug } = await params
  const file = path.join(BLOG_DIR, `${slug}.md`)
  if (!fs.existsSync(file)) {
    return <div className="mx-auto max-w-3xl px-4 sm:px-6 py-12">Not found</div>
  }

  const src = fs.readFileSync(file, "utf8")
  const { content, data } = matter(src)

  const { remark } = await import("remark")
  const htmlPlugin = (await import("remark-html")).default
  const processed = await remark().use(htmlPlugin).process(content)
  const html = processed.toString()

  return (
    <div className="mx-auto max-w-4xl px-4 sm:px-6 py-10 sm:py-14 space-y-6">
      <header className="rounded-2xl border border-border p-6 sm:p-10 bg-gradient-to-r from-indigo-600/20 via-blue-600/20 to-fuchsia-600/20">
        <h1 className="text-2xl sm:text-4xl font-bold tracking-tight">{data.title ?? slug}</h1>
        {data.date && (
          <p className="mt-2 text-sm text-muted-foreground">{new Date(data.date).toLocaleDateString()}</p>
        )}
      </header>
      <article className="prose prose-neutral dark:prose-invert max-w-none">
        <div dangerouslySetInnerHTML={{ __html: html }} />
      </article>
    </div>
  )
}


