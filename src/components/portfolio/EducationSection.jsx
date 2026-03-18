import { GraduationCap } from 'lucide-react'
import Reveal from '../Reveal'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../ui/card'
import SectionHeading from './SectionHeading'

function EducationSection({ educationData }) {
  return (
    <section id="education" className="section-spacing">
      <div className="container-width">
        <SectionHeading label="Education" title="Academic journey" />
        <div className="mt-8 grid gap-4 md:grid-cols-3">
          {educationData.map((item, index) => (
            <Reveal key={item.title} delay={index * 80}>
              <Card className="h-full">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-lg">
                    <GraduationCap className="h-5 w-5 text-neutral-400" />
                    {item.title}
                  </CardTitle>
                  <CardDescription>{item.year}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="font-medium text-neutral-200">{item.institution}</p>
                  <p className="mt-2 text-sm text-neutral-400">{item.details}</p>
                </CardContent>
              </Card>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

export default EducationSection
