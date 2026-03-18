# Deepa Kondapalli - Portfolio Website

A modern, animated portfolio website built with React, Vite, and CSS animations showcasing Deepa Kondapalli's skills, education, certificates, and professional experience.

## 🚀 Features

- **React 18** with modern hooks and functional components
- **Vite** for fast development and building
- **Responsive Design** that works on all devices
- **Smooth Animations** including:
  - Scroll-triggered animations
  - Typewriter effect for hero text
  - Mouse-follow parallax effects
  - Fade-in and slide animations
  - Hover effects and micro-interactions
- **Component-Based Architecture** for maintainability
- **Modern CSS** with flexbox and grid layouts
- **Intersection Observer** for performance-optimized animations

## 📁 Project Structure

```
deepu-portfolio/
├── index.html                  # Vite HTML entry
├── legacy/                     # Archived old static HTML/CSS files
│   ├── static-index.html
│   ├── public-index.html
│   └── static-site.css
├── src/
│   ├── assets/
│   │   ├── certificates/
│   │   ├── profile/
│   │   └── social/
│   ├── app/
│   │   ├── App.jsx             # Main app composition
│   │   └── App.css
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Navbar.jsx       # Navigation bar
│   │   │   ├── Navbar.css
│   │   │   ├── Footer.jsx       # Footer component
│   │   │   └── Footer.css
│   │   └── sections/
│   │       ├── Home.jsx         # Hero section with animations
│   │       ├── Home.css
│   │       ├── About.jsx        # About section with photo
│   │       ├── About.css
│   │       ├── Education.jsx    # Education timeline
│   │       ├── Education.css
│   │       ├── Certificates.jsx # Certificates display
│   │       ├── Certificates.css
│   │       ├── Skills.jsx       # Skills grid
│   │       ├── Skills.css
│   │       ├── Contact.jsx      # Contact form and social links
│   │       └── Contact.css
│   ├── hooks/
│   │   ├── useScrollAnimation.js # Scroll-triggered animations
│   │   └── useTypewriter.js     # Typewriter effect hook
│   ├── main.jsx                 # App entry point
│   └── styles/
│       ├── index.css            # Base styles
│       └── global.css           # Global styles and animations
├── package.json                 # Dependencies and scripts
├── pnpm-lock.yaml               # pnpm lockfile
├── vite.config.js              # Vite configuration
└── README.md                   # This file
```

## 🛠️ Technologies Used

- **React 18.2.0** - UI framework
- **React 19.2.4** - UI framework
- **Vite 8.0.0** - Build tool and dev server
- **CSS3** - Styling and animations
- **Font Awesome** - Icons
- **JavaScript ES6+** - Modern JavaScript features

## 📦 Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd deepu-portfolio
   ```

2. **Install dependencies**
   ```bash
  pnpm install
   ```

3. **Add your profile photo**
  - Place your photo at `src/assets/profile/deepa_profile.jpg`
   - Recommended size: 250x250px for optimal display

4. **Start development server**
   ```bash
  pnpm dev
   ```

5. **Open your browser**
   - Navigate to `http://localhost:3000`

## 🎯 Sections

### 1. Home
- Animated hero section with typewriter effect
- Mouse-follow parallax on name
- Scroll indicator animation

### 2. About
- Professional photo beside text
- Scroll-triggered fade-in animations
- Responsive side-by-side layout

### 3. Education
- Interactive education timeline
- Hover effects on education cards
- Grid layout with responsive design

### 4. Certificates
- Certificate showcase with hover animations
- Grid-based layout
- Smooth transitions

### 5. Skills
- Icon-based skill display
- Hover animations and effects
- Responsive grid layout

### 6. Contact
- Contact form with validation
- Social media links
- Interactive hover states

## 🎨 Animations

### Scroll Animations
- Elements animate when they come into view
- Uses Intersection Observer API for performance
- Staggered animation timing

### Interactive Effects
- Mouse parallax on hero section
- Hover states on all interactive elements
- Smooth transitions throughout

### Typewriter Effect
- Character-by-character text animation
- Configurable typing speed
- Natural typing feel

## 📱 Responsive Design

The portfolio is fully responsive and works seamlessly on:
- **Desktop** (1200px+)
- **Tablet** (768px - 1199px)
- **Mobile** (320px - 767px)

## 🚀 Scripts

- `pnpm dev` - Start development server
- `pnpm build` - Build for production
- `pnpm preview` - Preview production build

## 🔧 Customization

### Adding New Skills
Edit `src/components/sections/Skills.jsx`:
```jsx
const skills = [
  { name: "Your Skill", icon: "fas fa-icon-class" },
  // Add more skills here
]
```

### Updating Education
Edit `src/components/sections/Education.jsx`:
```jsx
const educationData = [
  {
    title: "Your Degree",
    institution: "Your Institution",
    year: "Year Range",
    details: "Your achievements"
  }
]
```

### Changing Colors
Update CSS variables in `src/styles/global.css` or modify individual component CSS files.

### Animation Speed
Adjust animation durations in CSS files:
```css
.animation-class {
  animation-duration: 1s; /* Change this value */
}
```

## 🌐 Deployment

### Build for Production
```bash
pnpm build
```

### Deploy to Netlify
1. Run `pnpm build`
2. Upload the `dist` folder to Netlify
3. Set up continuous deployment if desired

### Deploy to Vercel
1. Connect your GitHub repository
2. Vercel will automatically build and deploy
3. Configure custom domain if needed

## 📧 Contact Information

Update contact details in `src/components/sections/Contact.jsx`:
- Email address
- Social media links
- Location information

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License.

## 👤 Author

**Deepa Kondapalli**
- Portfolio: [Live Link]
- GitHub: [GitHub Profile]
- LinkedIn: [LinkedIn Profile]

---

## 🎉 Enjoy Your Portfolio!

This portfolio showcases modern web development capabilities with smooth animations, responsive design, and professional presentation. Feel free to customize it to match your personal brand and style.

For any questions or support, please reach out through the contact information provided in the portfolio.
