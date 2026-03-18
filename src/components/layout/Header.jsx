import { Menu, Moon, Sun, X } from 'lucide-react'
import { useEffect, useMemo, useState } from 'react'
import { useTheme } from 'next-themes'
import { cn } from '../../lib/utils'
import { Button } from '../ui/button'

function Header({ brand, navItems }) {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [activePath, setActivePath] = useState('#home')
  const { resolvedTheme, setTheme } = useTheme()

  const sectionHashes = useMemo(
    () => navItems.map((item) => item.href).filter((href) => href.startsWith('#')),
    [navItems]
  )

  useEffect(() => {
    const initialHash = window.location.hash || '#home'
    setActivePath(initialHash)

    const handleHashChange = () => setActivePath(window.location.hash || '#home')
    const sections = sectionHashes
      .map((hash) => document.getElementById(hash.replace('#', '')))
      .filter(Boolean)

    const updateActiveFromCenter = () => {
      if (sections.length === 0) {
        return
      }

      const viewportCenter = window.innerHeight / 2
      let closestSection = sections[0]
      let closestDistance = Number.POSITIVE_INFINITY

      sections.forEach((section) => {
        const rect = section.getBoundingClientRect()
        const sectionContainsCenter = rect.top <= viewportCenter && rect.bottom >= viewportCenter
        const distanceToSection = sectionContainsCenter
          ? 0
          : Math.min(Math.abs(rect.top - viewportCenter), Math.abs(rect.bottom - viewportCenter))

        if (distanceToSection < closestDistance) {
          closestDistance = distanceToSection
          closestSection = section
        }
      })

      const nextPath = `#${closestSection.id}`
      setActivePath((currentPath) => (currentPath === nextPath ? currentPath : nextPath))
    }

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
      updateActiveFromCenter()
    }

    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsMobileMenuOpen(false)
      }
      updateActiveFromCenter()
    }

    const observer = new IntersectionObserver(
      () => updateActiveFromCenter(),
      {
        rootMargin: '-45% 0px -45% 0px',
        threshold: 0
      }
    )

    sections.forEach((section) => observer.observe(section))
    updateActiveFromCenter()

    window.addEventListener('hashchange', handleHashChange)
    window.addEventListener('scroll', handleScroll)
    window.addEventListener('resize', handleResize)

    return () => {
      sections.forEach((section) => observer.unobserve(section))
      observer.disconnect()
      window.removeEventListener('hashchange', handleHashChange)
      window.removeEventListener('scroll', handleScroll)
      window.removeEventListener('resize', handleResize)
    }
  }, [sectionHashes])

  return (
    <header
      className={cn(
        'sticky top-0 z-50 transition-all duration-300',
        isScrolled
          ? 'border-b border-border bg-background/85 backdrop-blur-lg'
          : 'border-b border-transparent bg-transparent'
      )}
    >
      <nav className="container-width flex h-20 items-center justify-between" aria-label="Main navigation">
        <a
          href="#home"
          className="text-base font-bold tracking-[0.2em] uppercase bg-linear-to-r from-foreground to-muted-foreground bg-clip-text text-transparent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring rounded-sm"
        >
          {brand}
        </a>

        <div className="hidden items-center gap-2 md:flex">
          {navItems.map((item) => {
            const isActive = activePath === item.href
            return (
              <a
                key={item.href}
                href={item.href}
                className={cn(
                  'text-sm font-medium transition-all duration-200 px-4 py-2 rounded-full focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring',
                  isActive ? 'bg-accent text-accent-foreground' : 'text-muted-foreground hover:bg-accent/70 hover:text-foreground'
                )}
                aria-current={isActive ? 'page' : undefined}
              >
                {item.label}
              </a>
            )
          })}

          <Button
            variant="outline"
            size="icon"
            className="rounded-full"
            onClick={() => setTheme(resolvedTheme === 'dark' ? 'light' : 'dark')}
            aria-label="Toggle theme"
          >
            {resolvedTheme === 'dark' ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
          </Button>
        </div>

        <button
          className="md:hidden p-2 text-muted-foreground hover:text-foreground transition-transform active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring rounded-md"
          onClick={() => setIsMobileMenuOpen((open) => !open)}
          aria-expanded={isMobileMenuOpen}
          aria-label="Toggle navigation menu"
        >
          {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </nav>

      <div
        className={cn(
          'md:hidden overflow-hidden transition-all duration-300 ease-in-out bg-background/95 backdrop-blur-xl',
          isMobileMenuOpen
            ? 'max-h-105 opacity-100 border-t border-border'
            : 'max-h-0 opacity-0 border-t border-transparent'
        )}
      >
        <div className="flex flex-col px-6 py-6 space-y-1">
          <Button
            variant="outline"
            className="mb-2 justify-start"
            onClick={() => setTheme(resolvedTheme === 'dark' ? 'light' : 'dark')}
          >
            {resolvedTheme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
          </Button>
          {navItems.map((item) => {
            const isActive = activePath === item.href
            return (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className={cn(
                  'text-base font-medium px-4 py-3 rounded-lg transition-all duration-200',
                  isActive ? 'bg-accent text-accent-foreground' : 'text-muted-foreground hover:bg-accent/70 hover:text-foreground'
                )}
              >
                {item.label}
              </a>
            )
          })}
          <Button className="mt-3 w-full" asChild>
            <a href="#contact" onClick={() => setIsMobileMenuOpen(false)}>
              Get In Touch
            </a>
          </Button>
        </div>
      </div>
    </header>
  )
}

export default Header