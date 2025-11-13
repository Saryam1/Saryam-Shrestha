import React from 'react'

export default function Hero({ isVisible }) {
  return (
    <section id="hero" className={`hero ${isVisible.hero ? 'animate-in' : ''}`}>
      <div className="hero-content">
        <div className="hero-avatar">
          <div className="hero-image-container">
            <img 
              src="/assets/saryam-profile.jpg" 
              alt="Saryam Shrestha - Computer Engineering Student and Pro Gamer" 
              className="hero-profile-image"
            />
          </div>
        </div>
        
        <div className="hero-text">
          <h1 className="hero-title">Saryam Shrestha</h1>
          <p className="hero-subtitle">
            Computer Engineering Student, Web Developer & Aspiring Pro Gamer
          </p>
          
          <div className="hero-details">
            <div className="detail-item">
              <svg className="detail-icon" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2L2 7v10c0 5.55 3.84 9.95 9 11 5.16-1.05 9-5.45 9-11V7l-10-5z"/>
              </svg>
              <span>17 years old</span>
            </div>
            <div className="detail-item">
              <svg className="detail-icon" viewBox="0 0 24 24" fill="currentColor">
                <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"/>
              </svg>
              <span>Bhaktapur, Nepal</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
