
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
    { name: 'HTML', icon: (
      <svg viewBox="0 0 24 24" className="skill-icon">
        <path d="M1.5 0h21l-1.91 21.563L11.977 24l-8.564-2.438L1.5 0zm7.031 9.75l-.232-2.718 10.059.003.23-2.622L5.412 4.41l.698 8.01h9.126l-.326 3.426-2.91.804-2.955-.81-.188-2.11H6.248l.33 4.171L12 19.351l5.379-1.443.744-8.157H8.531z" fill="#e34f26"/>
      </svg>
    )},
    { name: 'CSS', icon: (
      <svg viewBox="0 0 24 24" className="skill-icon">
        <path d="M1.5 0h21l-1.91 21.563L11.977 24l-8.565-2.438L1.5 0zm17.09 4.413L5.41 4.41l.213 2.622 10.125.002-.255 2.716h-6.64l.24 2.573h6.182l-.366 3.523-2.91.804-2.956-.81-.188-2.11h-2.61l.29 3.855L12 19.288l5.373-1.53L18.59 4.414z" fill="#1572b6"/>
      </svg>
    )},
    { name: 'JavaScript', icon: (
      <svg viewBox="0 0 24 24" className="skill-icon">
        <path d="M0 0h24v24H0V0zm22.034 18.276c-.175-1.095-.888-2.015-3.003-2.873-.736-.345-1.554-.585-1.797-1.14-.091-.33-.105-.51-.046-.705.15-.646.915-.84 1.515-.66.39.12.75.42.976.9 1.034-.676 1.034-.676 1.755-1.125-.27-.42-.404-.601-.586-.78-.63-.705-1.469-1.065-2.834-1.034l-.705.089c-.676.165-1.32.525-1.71 1.005-1.14 1.291-.811 3.541.569 4.471 1.365 1.02 3.361 1.244 3.616 2.205.24 1.17-.87 1.545-1.966 1.41-.811-.18-1.26-.586-1.755-1.336l-1.83 1.051c.21.48.45.689.81 1.109 1.74 1.756 6.09 1.666 6.871-1.004.029-.09.24-.705.074-1.65l.046.067zm-8.983-7.245h-2.248c0 1.938-.009 3.864-.009 5.805 0 1.232.063 2.363-.138 2.711-.33.689-1.18.601-1.566.48-.396-.196-.597-.466-.83-.855-.063-.105-.11-.196-.127-.196l-1.825 1.125c.305.63.75 1.172 1.324 1.517.855.51 2.004.675 3.207.405.783-.226 1.458-.691 1.811-1.411.51-.93.402-2.07.397-3.346.012-2.054 0-4.109 0-6.179l.004-.056z" fill="#f7df1e"/>
      </svg>
    )},
    { name: 'React', icon: (
      <svg viewBox="0 0 24 24" className="skill-icon">
        <circle cx="12" cy="12" r="2" fill="#61dafb"/>
        <path d="M12,7c-2.76,0-5,2.24-5,5s2.24,5,5,5s5-2.24,5-5S14.76,7,12,7z M12,15c-1.66,0-3-1.34-3-3s1.34-3,3-3s3,1.34,3,3S13.66,15,12,15z" fill="none"/>
        <ellipse cx="12" cy="12" rx="10" ry="4" fill="none" stroke="#61dafb" strokeWidth="1"/>
        <ellipse cx="12" cy="12" rx="10" ry="4" transform="rotate(60 12 12)" fill="none" stroke="#61dafb" strokeWidth="1"/>
        <ellipse cx="12" cy="12" rx="10" ry="4" transform="rotate(120 12 12)" fill="none" stroke="#61dafb" strokeWidth="1"/>
      </svg>
    )},
    { name: 'Node.js', icon: (
      <svg viewBox="0 0 24 24" className="skill-icon">
        <path d="M11.998,24c-0.321,0-0.641-0.084-0.922-0.247l-2.936-1.737c-0.438-0.245-0.224-0.332-0.08-0.383 c0.585-0.203,0.703-0.25,1.328-0.604c0.065-0.037,0.151-0.023,0.218,0.017l2.256,1.339c0.082,0.045,0.197,0.045,0.272,0l8.795-5.076 c0.082-0.047,0.134-0.141,0.134-0.238V6.921c0-0.099-0.053-0.192-0.137-0.242l-8.791-5.072c-0.081-0.047-0.189-0.047-0.271,0 L3.075,6.68C2.99,6.729,2.936,6.825,2.936,6.921v10.15c0,0.097,0.054,0.189,0.139,0.235l2.409,1.392 c1.307,0.654,2.108-0.116,2.108-0.89V7.787c0-0.142,0.114-0.253,0.256-0.253h1.115c0.139,0,0.255,0.112,0.255,0.253v10.021 c0,1.745-0.95,2.745-2.604,2.745c-0.508,0-0.909,0-2.026-0.551L2.28,18.675c-0.57-0.329-0.922-0.945-0.922-1.604V6.921 c0-0.659,0.353-1.275,0.922-1.603l8.795-5.082c0.557-0.315,1.296-0.315,1.848,0l8.794,5.082c0.57,0.329,0.924,0.944,0.924,1.603 v10.15c0,0.659-0.354,1.276-0.924,1.604l-8.794,5.078C12.643,23.916,12.324,24,11.998,24z M19.099,13.993 c0-1.9-1.284-2.406-3.987-2.763c-2.731-0.361-3.009-0.548-3.009-1.187c0-0.528,0.235-1.233,2.258-1.233 c1.807,0,2.473,0.389,2.747,1.607c0.024,0.115,0.129,0.199,0.247,0.199h1.141c0.071,0,0.138-0.031,0.186-0.081 c0.048-0.054,0.074-0.123,0.067-0.196c-0.177-2.098-1.571-3.076-4.388-3.076c-2.508,0-4.004,1.058-4.004,2.833 c0,1.925,1.488,2.457,3.895,2.695c2.88,0.282,3.103,0.703,3.103,1.269c0,0.983-0.789,1.402-2.642,1.402 c-2.327,0-2.839-0.584-3.011-1.742c-0.02-0.124-0.126-0.215-0.253-0.215h-1.137c-0.141,0-0.254,0.112-0.254,0.253 c0,1.482,0.806,3.248,4.655,3.248C17.501,17.007,19.099,15.91,19.099,13.993z" fill="#68a063"/>
      </svg>
    )},
    { name: 'Python', icon: (
      <svg viewBox="0 0 24 24" className="skill-icon">
        <path d="M14.25.18l.9.2.73.26.59.3.45.32.34.34.25.34.16.33.1.3.04.26.02.2-.01.13V8.5l-.05.63-.13.55-.21.46-.26.38-.3.31-.33.25-.35.19-.35.14-.33.1-.3.07-.26.04-.21.02H8.77l-.69.05-.59.14-.5.22-.41.27-.33.32-.27.35-.2.36-.15.37-.1.35-.07.32-.04.27-.02.21v3.06H3.17l-.21-.03-.28-.07-.32-.12-.35-.18-.36-.26-.36-.36-.35-.46-.32-.59-.28-.73-.21-.88-.14-1.05-.05-1.23.06-1.22.16-1.04.24-.87.32-.71.36-.57.4-.44.42-.33.42-.24.4-.16.36-.1.32-.05.24-.01h.16l.06.01h8.16v-.83H6.18l-.01-2.75-.02-.37.05-.34.11-.31.17-.28.25-.26.31-.23.38-.2.44-.18.51-.15.58-.12.64-.1.71-.06.77-.04.84-.02 1.27.05zm-6.3 1.98l-.23.33-.08.41.08.41.23.34.33.22.41.09.41-.09.33-.22.23-.34.08-.41-.08-.41-.23-.33-.33-.22-.41-.09-.41.09zm13.09 3.95l.28.06.32.12.35.18.36.27.36.35.35.47.32.59.28.73.21.88.14 1.04.05 1.23-.06 1.23-.16 1.04-.24.86-.32.71-.36.57-.4.45-.42.33-.42.24-.4.16-.36.09-.32.05-.24.02-.16-.01h-8.22v.82h5.84l.01 2.76.02.36-.05.34-.11.31-.17.29-.25.25-.31.24-.38.2-.44.17-.51.15-.58.13-.64.09-.71.07-.77.04-.84.01-1.27-.04-1.07-.14-.9-.2-.73-.25-.59-.3-.45-.33-.34-.34-.25-.34-.16-.33-.1-.3-.04-.25-.02-.2.01-.13v-5.34l.05-.64.13-.54.21-.46.26-.38.3-.32.33-.24.35-.2.35-.14.33-.1.3-.06.26-.04.21-.02.13-.01h5.84l.69-.05.59-.14.5-.21.41-.28.33-.32.27-.35.2-.36.15-.36.1-.35.07-.32.04-.28.02-.21V6.07h2.09l.14.01zm-6.47 14.25l-.23.33-.08.41.08.41.23.33.33.23.41.08.41-.08.33-.23.23-.33.08-.41-.08-.41-.23-.33-.33-.23-.41-.08-.41.08z" fill="#306998"/>
      </svg>
    )},
    { name: 'Java', icon: (
      <svg viewBox="0 0 24 24" className="skill-icon">
        <path d="M8.851 18.56s-.917.534.653.714c1.902.218 2.874.187 4.969-.211 0 0 .552.346 1.321.646-4.699 2.013-10.633-.118-6.943-1.149M8.276 15.933s-1.028.761.542.924c2.032.209 3.636.227 6.413-.308 0 0 .384.389.987.602-5.679 1.661-12.007.13-7.942-1.218M13.116 11.475c1.158 1.333-.304 2.533-.304 2.533s2.939-1.518 1.589-3.418c-1.261-1.772-2.228-2.652 3.007-5.688 0-.001-8.216 2.051-4.292 6.573M19.33 20.504s.679.559-.747.991c-2.712.822-11.288 1.069-13.669.033-.856-.373.75-.89 1.254-.998.527-.114.828-.093.828-.093-.953-.671-6.156 1.317-2.643 1.887 9.58 1.553 17.462-.7 14.977-1.82M9.292 13.21s-4.362 1.036-1.544 1.412c1.189.159 3.561.123 5.77-.062 1.806-.152 3.618-.477 3.618-.477s-.637.272-1.098.587c-4.429 1.165-12.986.623-10.522-.568 2.082-1.006 3.776-.892 3.776-.892M17.116 17.584c4.503-2.34 2.421-4.589.968-4.285-.355.074-.515.138-.515.138s.132-.207.385-.297c2.875-1.011 5.086 2.981-.928 4.562 0-.001.07-.062.09-.118M14.401 0s2.494 2.494-2.365 6.33c-3.896 3.077-.888 4.832-.001 6.836-2.274-2.053-3.943-3.858-2.824-5.539 1.644-2.469 6.197-3.665 5.19-7.627M9.734 23.924c4.322.277 10.959-.153 11.116-2.198 0 0-.302.775-3.572 1.391-3.688.694-8.239.613-10.937.168 0-.001.553.457 3.393.639" fill="#ed8b00"/>
      </svg>
    )},
    { name: 'C++', icon: (
      <svg viewBox="0 0 24 24" className="skill-icon">
        <path d="M22.394 6c-.167-.29-.398-.543-.652-.69L12.926.22c-.509-.294-1.34-.294-1.848 0L2.26 5.31c-.508.293-.923 1.013-.923 1.6v10.18c0 .294.104.62.271.91.167.29.398.543.652.69l8.816 5.09c.508.293 1.34.293 1.848 0l8.816-5.09c.254-.147.485-.4.652-.69.167-.29.27-.616.27-.91V6.91c.003-.294-.1-.62-.268-.91zM12 19.11c-3.92 0-7.109-3.19-7.109-7.11 0-3.92 3.19-7.11 7.109-7.11a7.133 7.133 0 016.156 3.553l-3.076 1.78a3.567 3.567 0 00-3.08-1.78A3.56 3.56 0 008.444 12 3.56 3.56 0 0012 15.555a3.57 3.57 0 003.08-1.778l3.078 1.78A7.135 7.135 0 0112 19.11zm7.11-6.715h-.79V11.61h-.79v.785h-.79v.79h.79v.785h.79v-.785h.79zm2.962 0h-.79V11.61h-.79v.785h-.79v.79h.79v.785h.79v-.785h.79z" fill="#00599c"/>
      </svg>
    )},
    { name: 'C#', icon: (
      <svg viewBox="0 0 24 24" className="skill-icon">
        <path d="M12 0A12 12 0 000 12a12 12 0 0012 12 12 12 0 0012-12A12 12 0 0012 0zM9.426 7.12a5.55 5.55 0 011.985.38v1.181a4.5 4.5 0 00-2.025-.566 2.9 2.9 0 00-2.047.735 2.4 2.4 0 00-.762 1.837c0 .766.254 1.368.762 1.837a2.9 2.9 0 002.047.735 4.5 4.5 0 002.025-.566v1.181a5.55 5.55 0 01-1.985.38 4.5 4.5 0 01-3.33-1.252 4.22 4.22 0 01-1.252-3.315c0-1.37.417-2.457 1.252-3.315A4.5 4.5 0 019.426 7.12zm6.574 0c.617 0 1.135.192 1.553.575.418.384.627.857.627 1.42 0 .52-.134.925-.403 1.217-.269.292-.706.549-1.31.771.718.19 1.228.447 1.532.772.303.324.455.786.455 1.384 0 .658-.235 1.182-.706 1.571-.47.39-1.067.584-1.791.584a4.6 4.6 0 01-2.06-.471v-1.206a3.4 3.4 0 002.06.672c.324 0 .576-.084.757-.252.18-.168.27-.398.27-.69 0-.31-.09-.548-.27-.716-.18-.168-.432-.252-.757-.252h-.403v-1.069h.403c.269 0 .479-.074.628-.223.15-.148.224-.355.224-.62 0-.265-.075-.472-.224-.62-.15-.149-.36-.223-.628-.223a2.9 2.9 0 00-1.753.583V7.695c.627-.359 1.31-.538 2.047-.538z" fill="#239120"/>
      </svg>
    )}
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
              <div key={skill.name} className="skill-card" style={{animationDelay: `${index * 0.1}s`}}>
                <div className="skill-icon-wrapper">
                  {skill.icon}
                </div>
                <span className="skill-name">{skill.name}</span>
                <div className="skill-description">
                  {skill.name === 'HTML' && 'Semantic HTML5 structures'}
                  {skill.name === 'CSS' && 'Responsive design & animations'}
                  {skill.name === 'JavaScript' && 'ES6+ & DOM manipulation'}
                  {skill.name === 'React' && 'Component-based UI development'}
                  {skill.name === 'Node.js' && 'Server-side JavaScript runtime'}
                  {skill.name === 'Python' && 'Data structures & algorithms'}
                  {skill.name === 'Java' && 'Object-oriented programming'}
                  {skill.name === 'C++' && 'System programming & performance'}
                  {skill.name === 'C#' && '.NET framework applications'}
                </div>
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
