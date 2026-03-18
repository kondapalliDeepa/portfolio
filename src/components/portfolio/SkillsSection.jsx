import Reveal from '../Reveal'
import { Badge } from '../ui/badge'
import { Card, CardContent } from '../ui/card'
import SectionHeading from './SectionHeading'

function SkillsSection({ skills }) {
  return (
    <section id="skills" className="section-spacing">
      <div className="container-width">
        <SectionHeading label="Skills" title="Technology stack" />
        <Reveal delay={120}>
          <Card className="mt-8">
            <CardContent className="flex flex-wrap gap-3 pt-6">
              {skills.map((skill) => (
                <Badge
                  key={skill}
                  variant="secondary"
                  className="px-3 py-1 text-sm transition-all duration-200 hover:-translate-y-0.5 hover:border-neutral-600 hover:bg-neutral-700/70"
                >
                  {skill}
                </Badge>
              ))}
            </CardContent>
          </Card>
        </Reveal>
      </div>
    </section>
  )
}

export default SkillsSection
