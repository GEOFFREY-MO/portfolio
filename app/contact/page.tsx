"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"

export default function ContactPage() {
  const [status, setStatus] = useState<string | null>(null)

  async function onSubmit(formData: FormData) {
    setStatus(null)
    try {
      const res = await fetch("https://formspree.io/f/yourFormId", {
        method: "POST",
        headers: { "Accept": "application/json" },
        body: formData,
      })
      const data = await res.json()
      if (data.ok || data.success) setStatus("Thanks! I’ll get back to you soon.")
      else setStatus("Something went wrong. Please email me directly.")
    } catch (e) {
      setStatus("Could not send. Please email me directly.")
    }
  }

  return (
    <div className="mx-auto max-w-6xl px-4 sm:px-6 py-12 sm:py-16 space-y-8">
      <header>
        <h1 className="text-3xl sm:text-4xl font-bold">Contact</h1>
        <p className="text-muted-foreground">Let’s build something great.</p>
      </header>
      <div className="grid grid-cols-2 gap-3 sm:gap-6 md:grid-cols-2">
        <form action={onSubmit} className="col-span-2 md:col-span-1 rounded-xl border border-border p-3 sm:p-6 bg-card/50 space-y-3 sm:space-y-4">
          <input name="name" placeholder="Name" className="w-full px-3 py-2 rounded-md bg-input/30 border border-input text-sm sm:text-base" required />
          <input type="email" name="email" placeholder="Email" className="w-full px-3 py-2 rounded-md bg-input/30 border border-input text-sm sm:text-base" required />
          <textarea name="message" placeholder="Message" rows={5} className="w-full px-3 py-2 rounded-md bg-input/30 border border-input text-sm sm:text-base" required />
          <Button className="w-full sm:w-auto bg-gradient-to-r from-indigo-500 to-fuchsia-500 text-white">Send</Button>
          {status && <p className="text-sm text-muted-foreground">{status}</p>}
        </form>
        <div className="col-span-2 md:col-span-1 space-y-3 sm:space-y-4">
          <a href="https://wa.me/1234567890" className="underline underline-offset-4">WhatsApp</a>
          <div className="rounded-xl border border-border p-3 sm:p-6 bg-card/50">
            <div className="font-semibold mb-2">Newsletter</div>
            <form className="flex flex-col sm:flex-row gap-2">
              <input className="flex-1 px-3 py-2 rounded-md bg-input/30 border border-input text-sm sm:text-base" placeholder="Your email" />
              <button className="px-4 py-2 rounded-md bg-primary text-primary-foreground">Subscribe</button>
            </form>
          </div>
          <div className="text-sm text-muted-foreground space-x-4">
            <a href="https://www.linkedin.com/in/geofrey-kegocha-1a26ba354?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank" rel="noreferrer">LinkedIn</a>
            <a href="https://github.com/GEOFFREY-MO" target="_blank" rel="noreferrer">GitHub</a>
            <a href="https://youtube.com/@new_in_ai?si=1scZtIJI0jir_W8r" target="_blank" rel="noreferrer">YouTube: New in AI</a>
            <a href="https://youtube.com/@brothergeof?si=ihB5T1asoglNNSri" target="_blank" rel="noreferrer">YouTube: Brother Geof</a>
            <a href="https://x.com/GKegocha" target="_blank" rel="noreferrer">X</a>
          </div>
        </div>
      </div>
    </div>
  )
}


