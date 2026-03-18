import Reveal from '../Reveal'
import { Card, CardContent } from '../ui/card'
import SectionHeading from './SectionHeading'

function AboutSection({ profile }) {
  return (
    <section id="about" className="section-spacing">
      <div className="container-width">
        <SectionHeading label="About" title={profile.aboutTitle} />
        <Reveal delay={120}>
          <Card className="mt-8">
            <CardContent className="space-y-4 pt-6 text-neutral-300">
              {profile.aboutParagraphs.map((paragraph, index) => (
                <p key={index} className="leading-relaxed">
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
