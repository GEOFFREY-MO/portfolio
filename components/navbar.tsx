"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Moon, Sun, Menu, X } from "lucide-react"
import { useTheme } from "next-themes"
import { motion } from "framer-motion"
import { useState } from "react"

const links = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/portfolio", label: "Portfolio" },
  { href: "/services", label: "Services" },
  { href: "/hire", label: "Hire Me" },
  { href: "/blog", label: "Blog" },
  { href: "/contact", label: "Contact" },
]

export function Navbar() {
  const pathname = usePathname()
  const { theme, setTheme } = useTheme()
  const [open, setOpen] = useState(false)

  return (
    <>
    <motion.header
      className="sticky top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-background/70 border-b border-border"
      initial={{ y: -24, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.4 }}
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 h-14 flex items-center justify-between">
        <Link href="/" className="font-semibold text-lg">
          <span className="bg-gradient-to-r from-indigo-400 via-blue-400 to-fuchsia-400 bg-clip-text text-transparent">
            Geofrey Mokami Kegocha
          </span>
        </Link>

        <nav className="hidden md:flex items-center gap-2">
          {links.map((l) => {
            const active = pathname === l.href
            return (
              <Link key={l.href} href={l.href} className="text-sm">
                <Button
                  variant={active ? "default" : "ghost"}
                  className={active ? "bg-gradient-to-r from-indigo-500 to-fuchsia-500 text-white" : ""}
                >
                  {l.label}
                </Button>
              </Link>
            )
          })}
        </nav>

        <div className="flex items-center gap-2">
          <Button
            variant="ghost"
            size="icon"
            aria-label="Toggle theme"
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
          >
            <Sun className="hidden dark:block" />
            <Moon className="block dark:hidden" />
          </Button>
          <Button
            className="md:hidden"
            variant="ghost"
            size="icon"
            aria-label="Toggle menu"
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X /> : <Menu />}
          </Button>
        </div>
      </div>
    </motion.header>
    {/* Mobile Menu */}
    <motion.nav
      className="md:hidden fixed inset-x-0 top-14 z-40"
      initial={false}
      animate={{ height: open ? "auto" : 0, opacity: open ? 1 : 0 }}
      transition={{ duration: 0.2 }}
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="rounded-xl border border-border bg-background/95 backdrop-blur p-3 shadow-sm">
          <div className="grid">
            {links.map((l) => {
              const active = pathname === l.href
              return (
                <Link key={l.href} href={l.href} onClick={() => setOpen(false)}>
                  <Button
                    variant={active ? "default" : "ghost"}
                    className={`w-full justify-start ${active ? "bg-gradient-to-r from-indigo-500 to-fuchsia-500 text-white" : ""}`}
                  >
                    {l.label}
                  </Button>
                </Link>
              )
            })}
          </div>
        </div>
      </div>
    </motion.nav>
    </>
  )
}


