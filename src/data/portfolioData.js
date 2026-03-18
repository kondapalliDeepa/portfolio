import profileImage from '../assets/profile/deepa_profile.jpg'
import linkedinLogo from '../assets/certificates/linkedin.png'
import yugaYatraCert from '../assets/certificates/yuga_yatra.png'
import eduskillCert from '../assets/certificates/eduskill.png'
import edunetCert from '../assets/certificates/edunet.png'
import fmmlCert from '../assets/certificates/fmml.png'
import linkedInCert from '../assets/certificates/linkedin.png'
import techSakshamCert from '../assets/certificates/tech_saksham.jpeg'
import wadhwaniCert from '../assets/certificates/wadhwani.jpeg'

export const profile = {
  name: 'Deepa Kondapalli',
  shortBrand: 'DEEPA',
  roleBadge: 'AI & ML Enthusiast',
  headline: 'Deepa Kondapalli',
  intro:
    'I build clean web experiences and intelligent solutions with a minimalist, user-first mindset. I focus on practical products that blend design, engineering, and machine learning.',
  aboutTitle: 'Minimal by design, focused on impact',
  aboutParagraphs: [
    "Hello, I'm Deepa Kondapalli, a passionate AI and machine learning learner with strong interest in modern web development. I enjoy building reliable, elegant systems that solve real-world problems.",
    'I continuously improve my skills through projects, certifications, and hands-on experimentation in AI, full-stack development, and product design.'
  ],
  image: profileImage
}

export const navItems = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Education', href: '#education' },
  { label: 'Certificates', href: '#certificates' },
  { label: 'Skills', href: '#skills' },
  { label: 'Contact', href: '#contact' }
]

export const educationData = [
  {
    title: 'Secondary School',
    institution: 'ZPHS Gokavaram',
    year: '2020 - 2021',
    details: 'Achieved a district-level prize in kabaddi.'
  },
  {
    title: 'Intermediate',
    institution: 'Hayagreeva Junior College for Girls',
    year: '2021 - 2023',
    details: 'Recognized among the top 10 students in college.'
  },
  {
    title: 'Bachelor of Technology',
    institution: 'Kakinada Institute of Engineering and Technology for Women',
    year: '2023 - 2027',
    details: 'Top 20 performer in FMML certification track.'
  }
]

export const certificates = [
  {
    title: 'FMML - Foundations of Modern Machine Learning',
    subtitle: 'IIIT Hyderabad, Grade A',
    image: fmmlCert,
    link: fmmlCert
  },
  {
    title: 'TechSaksham - IR4.0 Technologies',
    subtitle: 'Microsoft, SAP & Edunet Foundation',
    image: techSakshamCert,
    link: techSakshamCert
  },
  {
    title: 'Wadhwani Foundation - Ignite for Entrepreneurs',
    subtitle: 'Certificate of content completion',
    image: wadhwaniCert,
    link: wadhwaniCert
  },
  {
    title: 'Yuga Yatra Retail Internship',
    subtitle: 'Software Engineer Intern',
    image: yugaYatraCert,
    link: yugaYatraCert
  },
  {
    title: 'EduSkills - Data Engineering Virtual Internship',
    subtitle: 'AICTE National Internship Portal',
    image: eduskillCert,
    link: eduskillCert
  },
  {
    title: 'Edunet Foundation - Certificate of Achievement',
    subtitle: 'TechSaksham 2024-25',
    image: edunetCert,
    link: edunetCert
  },
  {
    title: 'LinkedIn Learning - Programming Foundations',
    subtitle: 'Fundamentals course completion',
    image: linkedInCert,
    link: linkedInCert
  },
]

export const skills = [
  'Python',
  'Java',
  'HTML',
  'CSS',
  'JavaScript',
  'React',
  'Machine Learning',
  'Artificial Intelligence'
]

export const contact = {
  email: 'kondapallideepa9@gmail.com',
  location: 'Andhra Pradesh, India',
  locationLink: 'https://maps.app.goo.gl/bbzHspksm11LrJDF6',
  linkedin:
    'https://www.linkedin.com/in/deepa-kondapalli-930672307?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app',
  github: 'https://github.com/kondapalliDeepa',
  linkedinLogo
}
