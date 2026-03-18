import Reveal from '../Reveal'
import { Sparkles } from 'lucide-react'
import { Badge } from '../ui/badge'
import { Card, CardContent } from '../ui/card'
import { Separator } from '../ui/separator'
import SectionHeading from './SectionHeading'

function AboutSection({ profile }) {
  return (
    <section id="about" className="section-spacing">
      <div className="container-width">
        <SectionHeading label="About" title={profile.aboutTitle} />
        <Reveal delay={120}>
          <Card className="mt-8 border-border/80 bg-card/70 backdrop-blur-sm">
            <CardContent className="space-y-6 pt-6">
              {profile.aboutParagraphs.map((paragraph, index) => (
                <p
                  key={index}
                  className="border-l border-border/70 pl-4 leading-relaxed text-muted-foreground text-base sm:pl-5"
                >
                  {paragraph}
                </p>
              ))}
            </CardContent>
          </Card>
        </Reveal>
      </div>
    </section>
  )
}

export default AboutSection
