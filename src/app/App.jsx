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
    <div className="min-h-screen bg-neutral-950 text-neutral-100">
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
