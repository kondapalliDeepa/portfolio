import { Menu, X } from 'lucide-react'
import { useEffect, useMemo, useState } from 'react'
import { cn } from '../../lib/utils'
import { Button } from '../ui/button'

function Header({ brand, navItems }) {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [activePath, setActivePath] = useState('#home')

  const sectionHashes = useMemo(
    () => navItems.map((item) => item.href).filter((href) => href.startsWith('#')),
    [navItems]
  )

  useEffect(() => {
    const initialHash = window.location.hash || '#home'
    setActivePath(initialHash)

    const handleHashChange = () => setActivePath(window.location.hash || '#home')
    const handleScroll = () => setIsScrolled(window.scrollY > 20)
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsMobileMenuOpen(false)
      }
    }

    const sections = sectionHashes
      .map((hash) => document.getElementById(hash.replace('#', '')))
      .filter(Boolean)

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleEntries = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)

        if (visibleEntries.length > 0) {
          setActivePath(`#${visibleEntries[0].target.id}`)
        }
      },
      {
        rootMargin: '-30% 0px -55% 0px',
        threshold: [0.2, 0.4, 0.6, 0.8]
      }
    )

    sections.forEach((section) => observer.observe(section))

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
          ? 'border-b border-neutral-800 bg-neutral-950/80 backdrop-blur-lg shadow-lg shadow-black/20'
          : 'border-b border-transparent bg-neutral-950/10'
      )}
    >
      <nav className="container-width flex h-20 items-center justify-between" aria-label="Main navigation">
        <a
          href="#home"
          className="text-base font-bold tracking-[0.2em] uppercase bg-linear-to-r from-neutral-100 to-neutral-500 bg-clip-text text-transparent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-400 rounded-sm"
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
                  'text-sm font-medium transition-all duration-200 px-4 py-2 rounded-full focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-400',
                  isActive ? 'bg-white/10 text-white' : 'text-neutral-400 hover:bg-white/5 hover:text-neutral-200'
                )}
                aria-current={isActive ? 'page' : undefined}
              >
                {item.label}
              </a>
            )
          })}

          <Button size="sm" className="ml-3 rounded-full px-5" asChild>
            <a href="#contact">Get In Touch</a>
          </Button>
        </div>

        <button
          className="md:hidden p-2 text-neutral-300 hover:text-white transition-transform active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-400 rounded-md"
          onClick={() => setIsMobileMenuOpen((open) => !open)}
          aria-expanded={isMobileMenuOpen}
          aria-label="Toggle navigation menu"
        >
          {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </nav>

      <div
        className={cn(
          'md:hidden overflow-hidden transition-all duration-300 ease-in-out bg-neutral-950/95 backdrop-blur-xl',
          isMobileMenuOpen
            ? 'max-h-[420px] opacity-100 border-t border-neutral-800/50'
            : 'max-h-0 opacity-0 border-t border-transparent'
        )}
      >
        <div className="flex flex-col px-6 py-6 space-y-1">
          {navItems.map((item) => {
            const isActive = activePath === item.href
            return (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className={cn(
                  'text-base font-medium px-4 py-3 rounded-lg transition-all duration-200',
                  isActive ? 'bg-white/10 text-white' : 'text-neutral-400 hover:bg-white/5 hover:text-neutral-200'
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