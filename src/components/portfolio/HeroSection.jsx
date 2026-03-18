import { ArrowUpRight } from 'lucide-react'
import Reveal from '../Reveal'
import { Badge } from '../ui/badge'
import { Button } from '../ui/button'

function HeroSection({ profile }) {
  return (
    <section id="home" className="section-spacing relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0">
        <div className="animate-pulse-soft absolute left-1/2 top-24 h-72 w-72 -translate-x-1/2 rounded-full bg-primary/20 blur-3xl" />
      </div>
      <div className="container-width relative grid items-center gap-12 lg:grid-cols-[1.2fr_0.8fr]">
        <Reveal>
          <Badge className="mb-4 w-fit">{profile.roleBadge}</Badge>
          <h1 className="text-gradient text-4xl font-semibold leading-tight sm:text-6xl">{profile.headline}</h1>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg">{profile.intro}</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Button asChild>
              <a href="#contact">Let&apos;s Connect</a>
            </Button>
            <Button variant="outline" asChild>
              <a href="#certificates">
                View Certificates <ArrowUpRight className="ml-2 h-4 w-4" />
              </a>
            </Button>
          </div>
        </Reveal>
        <Reveal delay={120} className="flex justify-center lg:justify-end">
          <div className="group animate-float-slow relative rounded-full border border-border bg-card/80 p-3 shadow-lg ring-1 ring-border/70">
            <img
              src={profile.image}
              alt={profile.name}
              className="size-70 rounded-full object-cover transition-transform duration-500 ease-out group-hover:scale-110 sm:h-80 sm:w-[320px]"
              loading="lazy"
            />
          </div>
        </Reveal>
      </div>
    </section>
  )
}

export default HeroSection
