import Footer from '../components/layout/Footer'
import Header from '../components/layout/Header'
import AboutSection from '../components/portfolio/AboutSection'
import CertificatesSection from '../components/portfolio/CertificatesSection'
import ContactSection from '../components/portfolio/ContactSection'
import EducationSection from '../components/portfolio/EducationSection'
import HeroSection from '../components/portfolio/HeroSection'
import SkillsSection from '../components/portfolio/SkillsSection'
import { certificates, contact, educationData, navItems, profile, skills } from '../data/portfolioData'

function App() {
  return (
    <div className="min-h-screen font-mono bg-background text-foreground">
      <div className="pointer-events-none fixed inset-0 -z-10 bg-linear-to-b from-primary/5 via-transparent to-transparent" />
      <Header brand={profile.shortBrand} navItems={navItems} />

      <main>
        <HeroSection profile={profile} />
        <AboutSection profile={profile} />
        <EducationSection educationData={educationData} />
        <CertificatesSection certificates={certificates} />
        <SkillsSection skills={skills} />
        <ContactSection contact={contact} />
      </main>

      <Footer />
    </div>
  )
}

export default App
