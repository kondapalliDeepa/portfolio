import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './app/App.jsx'
import { ThemeProvider } from './components/theme-provider.jsx'
import './styles/index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
      <App />
    </ThemeProvider>
  </React.StrictMode>,
)
