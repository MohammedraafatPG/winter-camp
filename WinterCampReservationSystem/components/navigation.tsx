"use client"

import Link from "next/link"
import { useState } from "react"
import { Menu, X, LogIn } from "lucide-react"
import { Button } from "@/components/ui/button"
import { ThemeToggle } from "@/components/theme-toggle"

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false)

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/services", label: "Services" },
    { href: "/offers", label: "Offers" },
    { href: "/contact", label: "Contact" },
  ]

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/98 backdrop-blur-md border-b-2 border-border shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="text-2xl font-bold text-primary hover:opacity-80 transition-opacity">
            WinterCamp
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-foreground hover:text-primary transition-colors relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-primary after:transition-all hover:after:w-full"
              >
                {link.label}
              </Link>
            ))}
            <ThemeToggle />
            <Button
              asChild
              size="sm"
              variant="outline"
              className="shadow-md hover:shadow-lg transition-all bg-transparent"
            >
              <Link href="/auth">
                <LogIn size={16} className="mr-2" />
                Login
              </Link>
            </Button>
            <Button asChild size="sm" className="shadow-md hover:shadow-lg transition-all">
              <Link href="/reserve">Reserve Now</Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center gap-2">
            <ThemeToggle />
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 text-foreground hover:text-primary transition-colors"
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-4 border-t-2 border-border animate-in slide-in-from-top-2 duration-200">
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-sm font-medium text-foreground hover:text-primary transition-colors py-2"
                  onClick={() => setIsOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
              <Button asChild size="sm" variant="outline" className="w-full shadow-md bg-transparent">
                <Link href="/auth" onClick={() => setIsOpen(false)}>
                  <LogIn size={16} className="mr-2" />
                  Login
                </Link>
              </Button>
              <Button asChild size="sm" className="w-full shadow-md">
                <Link href="/reserve" onClick={() => setIsOpen(false)}>
                  Reserve Now
                </Link>
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
