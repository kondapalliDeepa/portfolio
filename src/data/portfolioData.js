import profileImage from '../assets/profile/deepa_profile.jpg'
import linkedinLogo from '../assets/social/linkedin.png'
import internshipCert from '../assets/certificates/internship_primary.png'
import eduskillCert from '../assets/certificates/eduskill_primary.png'
import edunetCert from '../assets/certificates/edunet.png'
import fmmlCert from '../assets/certificates/fmml.png'

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
    title: 'Infosys - Artificial Intelligence',
    subtitle: 'Certification of completion',
    link: 'https://www.infosys.com'
  },
  {
    title: 'Yuga Yatra Retail Internship',
    subtitle: 'Internship completion certificate',
    image: internshipCert,
    link: internshipCert
  },
  {
    title: 'Eduskills - Java Full Stack',
    subtitle: 'Primary certificate',
    image: eduskillCert,
    link: eduskillCert
  },
  {
    title: 'Edunet',
    subtitle: 'Program certificate',
    image: edunetCert,
    link: edunetCert
  },
  {
    title: 'FMML',
    subtitle: 'Performance certification',
    image: fmmlCert,
    link: fmmlCert
  }
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
