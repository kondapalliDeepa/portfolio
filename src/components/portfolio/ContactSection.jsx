import { Github, Linkedin, Mail, MapPin, Sparkles } from 'lucide-react'
import Reveal from '../Reveal'
import { Button } from '../ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../ui/card'

function ContactSection({ contact }) {
  return (
    <section id="contact" className="section-spacing pb-20">
      <div className="container-width">
        <Reveal>
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-2xl">
                <Sparkles className="h-5 w-5 text-muted-foreground" />
                Let&apos;s build something meaningful
              </CardTitle>
              <CardDescription>Open to internships, collaborations, and impactful opportunities.</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid gap-6 md:grid-cols-2">
                <div className="space-y-4 text-sm text-muted-foreground">
                  <a
                    href={`mailto:${contact.email}`}
                    className="group flex items-center gap-3 rounded-md border border-border bg-card/70 px-3 py-2 transition-all duration-200 hover:-translate-y-0.5 hover:bg-accent/50"
                  >
                    <Mail className="h-4 w-4 text-muted-foreground transition-transform duration-200 group-hover:scale-110" />
                    {contact.email}
                  </a>
                  <a
                    href={contact.locationLink}
                    target="_blank"
                    rel="noreferrer"
                    className="group flex items-center gap-3 rounded-md border border-border bg-card/70 px-3 py-2 transition-all duration-200 hover:-translate-y-0.5 hover:bg-accent/50"
                  >
                    <MapPin className="h-4 w-4 text-muted-foreground transition-transform duration-200 group-hover:scale-110" />
                    {contact.location}
                  </a>
                </div>
                <div className="flex flex-wrap items-center gap-3">
                  <Button variant="outline" asChild>
                    <a href={contact.linkedin} target="_blank" rel="noreferrer">
                      <Linkedin className="mr-2 h-4 w-4" /> LinkedIn
                    </a>
                  </Button>
                  <Button variant="outline" asChild>
                    <a href={contact.github} target="_blank" rel="noreferrer">
                      <Github className="mr-2 h-4 w-4" /> GitHub
                    </a>
                  </Button>
                  <a
                    href={contact.linkedin}
                    target="_blank"
                    rel="noreferrer"
                    className="ml-2 inline-flex h-10 w-10 items-center justify-center rounded-md border border-border bg-card/70 p-2 transition-all duration-200 hover:-translate-y-0.5 hover:bg-accent/50"
                    aria-label="LinkedIn profile"
                  >
                    <img
                      src={contact.linkedinLogo}
                      alt="LinkedIn"
                      className="h-5 w-5 object-contain transition-transform duration-200 hover:scale-110"
                      loading="lazy"
                    />
                  </a>
                </div>
              </div>
            </CardContent>
          </Card>
        </Reveal>
      </div>
    </section>
  )
}

export default ContactSection
