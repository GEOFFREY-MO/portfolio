"use client"

import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-indigo-500/20 via-blue-500/10 to-transparent" />
      <div className="mx-auto max-w-6xl px-4 sm:px-6 py-16 sm:py-24 relative">
        <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="text-center">
          <div className="flex justify-center mb-4">
            <Image src="/profile.jpg" alt="Geofrey Mokami Kegocha" width={96} height={96} className="rounded-full border border-border" />
          </div>
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight">
            Hey, I’m <span className="bg-gradient-to-r from-indigo-400 via-blue-400 to-fuchsia-400 bg-clip-text text-transparent">Geofrey Mokami Kegocha</span>
          </h1>
          <p className="mt-3 sm:mt-4 text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto">
            Data Scientist, AI/Software Engineer, and Startup Mentor. Building products, sharing knowledge, and turning coders into founders.
          </p>
          <div className="mt-6 sm:mt-8 flex flex-nowrap items-center justify-center gap-2 sm:gap-3 w-full max-w-full px-2 mx-auto">
            <Button asChild size="sm" className="shrink whitespace-normal leading-4 text-[11px] sm:text-sm px-2 sm:px-3 bg-gradient-to-r from-indigo-500 to-fuchsia-500 text-white">
              <Link href="/hire">Hire Me</Link>
            </Button>
            <Button asChild size="sm" variant="outline" className="shrink whitespace-normal leading-4 text-[11px] sm:text-sm px-2 sm:px-3">
              <Link href="/services">Work With Me</Link>
            </Button>
            <Button asChild size="sm" variant="ghost" className="shrink whitespace-normal leading-4 text-[11px] sm:text-sm px-2 sm:px-3">
              <a href="https://youtube.com/@new_in_ai?si=1scZtIJI0jir_W8r" target="_blank" rel="noreferrer">Watch My Channels</a>
            </Button>
          </div>
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1, duration: 0.5 }} className="mt-10 sm:mt-16 grid grid-cols-2 gap-3 sm:gap-6">
          <div className="aspect-video rounded-xl border border-border overflow-hidden">
            <iframe
              className="w-full h-full"
              src="https://www.youtube.com/embed/VrQFMJT61zM"
              title="Intro video"
              loading="lazy"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            />
          </div>
          <div className="rounded-xl border border-border p-3 sm:p-6 bg-card/50">
            <blockquote className="text-xl">“Automation is not replacing humans — it’s freeing them to focus on what matters most.”</blockquote>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
