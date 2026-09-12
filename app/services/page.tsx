import Link from "next/link"
import { Button } from "@/components/ui/button"
import Image from "next/image"

export const metadata = { title: "Services" }

const services = [
  { title: "Software Development & Deployment", desc: "Fullstack web apps, DX-focused, shipped to production." },
  { title: "AI/ML Model Training & Consulting", desc: "From data to deployed models with MLOps." },
  { title: "ML Engineering for AI Projects", desc: "Model development, training pipelines, inference optimization, numerical debugging." },
  { title: "Startup Advisory / Tech Co-founder", desc: "MVP strategy, lean execution, and architecture." },
  { title: "Website/App Development + Maintenance", desc: "Modern, fast, SEO-optimized websites and apps." },
]

export default function ServicesPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 sm:px-6 py-12 sm:py-16 space-y-8">
      <header className="space-y-3">
        <h1 className="text-3xl sm:text-4xl font-bold">Services</h1>
        <p className="text-muted-foreground">Results-focused collaboration. Let's ship.</p>
        <div className="rounded-xl border border-border overflow-hidden">
          <Image src="/services-hero.jpg" alt="At work, ready to deliver" width={1920} height={768} className="w-full h-40 sm:h-56 object-cover" />
        </div>
      </header>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4 md:gap-6">
        {services.map((s) => (
          <div key={s.title} className="rounded-xl border border-border p-3 sm:p-6 bg-card/50">
            <h3 className="font-semibold text-sm sm:text-base">{s.title}</h3>
            <p className="text-xs sm:text-sm text-muted-foreground mb-3 sm:mb-4">{s.desc}</p>
            <Link href="/contact"><Button className="w-full sm:w-auto bg-gradient-to-r from-indigo-500 to-fuchsia-500 text-white">Hire Me</Button></Link>
          </div>
        ))}
      </div>

      <section className="mt-12 rounded-xl border border-border p-3 sm:p-6 bg-gradient-to-br from-indigo-500/5 to-fuchsia-500/5">
        <h2 className="text-2xl font-semibold mb-4">ML Engineering Opportunity</h2>
        <div className="space-y-4 text-sm sm:text-base text-muted-foreground">
          <p>
            <span className="font-semibold text-foreground">Flexible Remote ML Engineering:</span> Work on cutting-edge AI training projects with flexible scheduling (choose your hours and days, including weekends).
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <h3 className="font-semibold text-foreground mb-2">What You'll Work On:</h3>
              <ul className="space-y-1 text-xs sm:text-sm">
                <li>• ML model development & training pipelines</li>
                <li>• Inference system optimization</li>
                <li>• Performance debugging & tuning</li>
                <li>• Reproducible ML workflows in Python</li>
                <li>• Code review & validation</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-foreground mb-2">Required Skills:</h3>
              <ul className="space-y-1 text-xs sm:text-sm">
                <li>• BS/MS/PhD in ML, CS, or related field</li>
                <li>• Strong Python proficiency</li>
                <li>• PyTorch, JAX, NumPy/SciPy</li>
                <li>• Deep learning fundamentals</li>
                <li>• Experience with vLLM, llama.cpp, or Hugging Face</li>
              </ul>
            </div>
          </div>
          <div className="pt-4">
            <Link href="/contact"><Button className="bg-gradient-to-r from-indigo-500 to-fuchsia-500 text-white">Learn More / Apply</Button></Link>
          </div>
        </div>
      </section>
    </div>
  )
}

