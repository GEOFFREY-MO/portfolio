"use client"

import { useState, useEffect } from "react"

type Layout = "row" | "stack"

export function NewsletterForm({ layout = "row" }: { layout?: Layout }) {
  const [email, setEmail] = useState("")
  const [submitting, setSubmitting] = useState(false)
  const [toast, setToast] = useState<{ message: string; type: "success" | "error" } | null>(null)

  useEffect(() => {
    if (!toast) return
    const id = setTimeout(() => setToast(null), 3000)
    return () => clearTimeout(id)
  }, [toast])

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    if (!email) return
    try {
      setSubmitting(true)
      const res = await fetch("/api/newsletter", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({ email }),
      })
      const data = await res.json().catch(() => ({}))
      if (!res.ok || !data?.ok) {
        setToast({ message: data?.error || "Subscription failed", type: "error" })
      } else {
        setToast({ message: "Subscribed! Check your inbox.", type: "success" })
        setEmail("")
      }
    } catch (err) {
      setToast({ message: "Network error. Try again.", type: "error" })
    } finally {
      setSubmitting(false)
    }
  }

  return (
    <div>
      <form onSubmit={onSubmit} className={layout === "row" ? "flex gap-2" : "flex flex-col gap-2"}>
        <input
          name="email"
          type="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="flex-1 px-3 py-2 rounded-md bg-input/30 border border-input text-sm sm:text-base"
          placeholder="Your email"
          aria-label="Email address"
        />
        <button
          type="submit"
          disabled={submitting}
          className="px-4 py-2 rounded-md bg-primary text-primary-foreground cursor-pointer disabled:opacity-60"
        >
          {submitting ? "Subscribing..." : "Subscribe"}
        </button>
      </form>

      {toast && (
        <div className={`fixed bottom-4 left-1/2 -translate-x-1/2 z-50 px-4 py-2 rounded-md text-sm shadow-md border
          ${toast.type === "success" ? "bg-green-600 text-white border-green-500" : "bg-red-600 text-white border-red-500"}
        `}>
          {toast.message}
        </div>
      )}
    </div>
  )
}


