
import React, { useState, useEffect } from 'react'
import './App.css'

export default function App() {
  const [isVisible, setIsVisible] = useState({})

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          setIsVisible(prev => ({
            ...prev,
            [entry.target.id]: entry.isIntersecting
          }))
        })
      },
      { threshold: 0.1 }
    )

    document.querySelectorAll('[id]').forEach((el) => {
      observer.observe(el)
    })

    return () => observer.disconnect()
  }, [])

  const skills = [
    'C', 'C++', 'Java', 'Python', 'C#', 'React', 'JavaScript', 'HTML', 'CSS'
  ]

  return (
    <div className="portfolio">
      {/* Header */}
      <header className="header">
        <nav className="nav">
          <div className="logo">
            <svg className="logo-icon" viewBox="0 0 50 50">
              <circle cx="25" cy="25" r="20" className="logo-circle"/>
              <text x="25" y="30" className="logo-text">S</text>
            </svg>
            <span>Saryam Shrestha</span>
          </div>
          <ul className="nav-links">
            <li><a href="#about">About</a></li>
            <li><a href="#skills">Skills</a></li>
            <li><a href="#passion">Passion</a></li>
            <li><a href="#school">School</a></li>
          </ul>
        </nav>
      </header>

      {/* Hero Section */}
      <section id="hero" className={`hero ${isVisible.hero ? 'animate-in' : ''}`}>
        <div className="hero-content">
          <div className="hero-text">
            <h1 className="hero-title">
              <span className="glowing-text">Saryam Shrestha</span>
            </h1>
            <p className="hero-subtitle">
              17-year-old Computer Engineering Student & Aspiring Pro Gamer
            </p>
            <div className="hero-details">
              <div className="detail-item">
                <svg className="detail-icon" viewBox="0 0 24 24">
                  <path d="M12 2L2 7v10c0 5.55 3.84 9.95 9 11 5.16-1.05 9-5.45 9-11V7l-10-5z"/>
                </svg>
                <span>Age: 17</span>
              </div>
              <div className="detail-item">
                <svg className="detail-icon" viewBox="0 0 24 24">
                  <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"/>
                </svg>
                <span>Bhaktapur, Nepal</span>
              </div>
            </div>
          </div>
          <div className="hero-avatar">
            <svg className="avatar-svg" viewBox="0 0 200 200">
              <defs>
                <linearGradient id="avatarGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#00f5ff"/>
                  <stop offset="100%" stopColor="#ff00ff"/>
                </linearGradient>
              </defs>
              <circle cx="100" cy="100" r="90" fill="url(#avatarGradient)" className="avatar-circle"/>
              <circle cx="80" cy="80" r="8" fill="#000"/>
              <circle cx="120" cy="80" r="8" fill="#000"/>
              <path d="M 70 120 Q 100 140 130 120" stroke="#000" strokeWidth="3" fill="none"/>
            </svg>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className={`section ${isVisible.about ? 'animate-in' : ''}`}>
        <div className="container">
          <h2 className="section-title">About Me</h2>
          <div className="about-content">
            <p>
              I'm Saryam Shrestha, a 17-year-old student passionate about technology and gaming. 
              Currently studying Computer Engineering at Adarsha Secondary School in Sanothimi, Bhaktapur, 
              I'm in my Class 12 Technical program, building a strong foundation in programming and technology.
            </p>
            <p>
              My journey combines academic excellence with my dream of becoming a professional gamer, 
              merging my love for technology with competitive gaming.
            </p>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className={`section ${isVisible.skills ? 'animate-in' : ''}`}>
        <div className="container">
          <h2 className="section-title">Technical Skills</h2>
          <div className="skills-grid">
            {skills.map((skill, index) => (
              <div key={skill} className="skill-card" style={{animationDelay: `${index * 0.1}s`}}>
                <svg className="skill-icon" viewBox="0 0 50 50">
                  <polygon points="25,5 45,20 45,35 25,50 5,35 5,20" className="skill-shape"/>
                </svg>
                <span className="skill-name">{skill}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Passion Section */}
      <section id="passion" className={`section ${isVisible.passion ? 'animate-in' : ''}`}>
        <div className="container">
          <h2 className="section-title">My Passion</h2>
          <div className="passion-content">
            <div className="passion-icon">
              <svg viewBox="0 0 100 100" className="gaming-icon">
                <rect x="10" y="30" width="80" height="40" rx="10" className="controller-body"/>
                <circle cx="25" cy="45" r="6" className="button"/>
                <circle cx="75" cy="45" r="6" className="button"/>
                <rect x="35" y="35" width="8" height="20" rx="2" className="dpad"/>
                <rect x="31" y="39" width="16" height="8" rx="2" className="dpad"/>
                <circle cx="65" cy="40" r="3" className="action-btn"/>
                <circle cx="70" cy="35" r="3" className="action-btn"/>
                <circle cx="75" cy="40" r="3" className="action-btn"/>
                <circle cx="70" cy="45" r="3" className="action-btn"/>
              </svg>
            </div>
            <div className="passion-text">
              <h3 className="glowing-text">Pro Gaming</h3>
              <p>
                Gaming isn't just a hobby for me—it's my passion and future career goal. 
                I'm dedicated to becoming a professional gamer, combining strategy, 
                skill, and technology to compete at the highest level.
              </p>
              <div className="gaming-stats">
                <div className="stat">
                  <span className="stat-number">5+</span>
                  <span className="stat-label">Years Gaming</span>
                </div>
                <div className="stat">
                  <span className="stat-number">∞</span>
                  <span className="stat-label">Passion Level</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* School Section */}
      <section id="school" className={`section ${isVisible.school ? 'animate-in' : ''}`}>
        <div className="container">
          <h2 className="section-title">My School</h2>
          <div className="school-content">
            <div className="school-info">
              <h3>Adarsha Secondary School</h3>
              <p>Sanothimi, Bhaktapur</p>
              <p>Class 12 Technical (Computer Engineering)</p>
              <div className="school-icon">
                <svg viewBox="0 0 100 100" className="building-icon">
                  <rect x="20" y="60" width="60" height="35" className="building-base"/>
                  <polygon points="15,60 50,30 85,60" className="building-roof"/>
                  <rect x="30" y="70" width="8" height="10" className="window"/>
                  <rect x="42" y="70" width="8" height="10" className="window"/>
                  <rect x="54" y="70" width="8" height="10" className="window"/>
                  <rect x="66" y="70" width="8" height="10" className="window"/>
                  <rect x="45" y="85" width="10" height="10" className="door"/>
                </svg>
              </div>
            </div>
            <div className="school-iframe">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3533.123456789!2d85.4123456!3d27.6789012!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2sAdarsha%20Secondary%20School!5e0!3m2!1sen!2snp!4v1234567890"
                width="100%"
                height="300"
                style={{border: 0}}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Adarsha Secondary School Location"
              ></iframe>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <p>&copy; 2024 Saryam Shrestha. Built with passion and React.</p>
          <div className="footer-icons">
            <svg className="footer-icon" viewBox="0 0 24 24">
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
            </svg>
          </div>
        </div>
      </footer>
    </div>
  )
}
