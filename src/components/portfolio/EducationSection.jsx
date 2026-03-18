import { ArrowRight, GraduationCap } from 'lucide-react'
import Reveal from '../Reveal'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../ui/card'
import SectionHeading from './SectionHeading'

function EducationSection({ educationData }) {
  const educationDataDescending = [...educationData].reverse()

  return (
    <section id="education" className="section-spacing">
      <div className="container-width">
        <SectionHeading label="Education" title="Academic journey" />
        <div className="mt-8 grid gap-4 md:grid-cols-3">
          {educationDataDescending.map((item, index) => (
            <Reveal key={item.title} delay={index * 80}>
              <div className="relative h-full">
                {index < educationDataDescending.length - 1 ? (
                  <>
                    <span className="absolute left-5 top-14 h-[calc(100%-2rem)] w-px bg-border md:hidden" />
                    <span className="absolute -right-2 top-1/2 hidden h-px w-4 -translate-y-1/2 bg-border md:block" />
                  </>
                ) : null}

                <Card className="h-full border-border/80 bg-card/70 backdrop-blur-sm">
                  <CardHeader>
                    <div className="mb-2 flex items-center gap-2 text-xs text-muted-foreground">
                      <span>{item.year}</span>
                      <span className="h-px flex-1 bg-border" />
                      <ArrowRight className="h-3.5 w-3.5" />
                    </div>
                  <CardTitle className="flex items-center gap-2 text-lg">
                    <GraduationCap className="h-5 w-5 text-muted-foreground" />
                    {item.title}
                  </CardTitle>
                  <CardDescription className="sr-only">{item.year}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="font-medium text-foreground">{item.institution}</p>
                    <p className="mt-2 border-l border-border/70 pl-3 text-sm text-muted-foreground">{item.details}</p>
                  </CardContent>
                </Card>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

export default EducationSection
