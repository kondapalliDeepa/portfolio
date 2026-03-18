import { ArrowUpRight } from 'lucide-react'
import Reveal from '../Reveal'
import { Button } from '../ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../ui/card'
import SectionHeading from './SectionHeading'

function CertificatesSection({ certificates }) {
  return (
    <section id="certificates" className="section-spacing">
      <div className="container-width">
        <SectionHeading label="Certificates" title="Verified achievements" />
        <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {certificates.map((cert, index) => (
            <Reveal key={cert.title} delay={index * 70}>
              <Card className="group h-full overflow-hidden">
                {cert.image ? (
                  <img
                    src={cert.image}
                    alt={cert.title}
                    className="h-44 w-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                    loading="lazy"
                  />
                ) : (
                  <div className="flex h-44 items-center justify-center border-b border-neutral-800 bg-neutral-900 text-sm text-neutral-500">
                    Certificate Preview
                  </div>
                )}
                <CardHeader>
                  <CardTitle className="text-base">{cert.title}</CardTitle>
                  <CardDescription>{cert.subtitle}</CardDescription>
                </CardHeader>
                <CardContent>
                  <Button variant="outline" size="sm" className="group/btn" asChild>
                    <a href={cert.link} target="_blank" rel="noreferrer">
                      Open Certificate <ArrowUpRight className="ml-2 h-4 w-4 transition-transform group-hover/btn:translate-x-0.5" />
                    </a>
                  </Button>
                </CardContent>
              </Card>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

export default CertificatesSection
