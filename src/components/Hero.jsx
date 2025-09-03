
import React from 'react'

export default function Hero({ isVisible }) {
  return (
    <section id="hero" className={`hero ${isVisible.hero ? 'animate-in' : ''}`}>
      <div className="hero-bg-image">
        <svg viewBox="0 0 400 300" className="hero-bg-svg">
          <defs>
            <linearGradient id="heroBg" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="rgba(0, 245, 255, 0.1)"/>
              <stop offset="100%" stopColor="rgba(255, 0, 255, 0.1)"/>
            </linearGradient>
          </defs>
          <rect width="400" height="300" fill="url(#heroBg)"/>
          <circle cx="100" cy="80" r="30" fill="rgba(0, 245, 255, 0.2)" opacity="0.6">
            <animate attributeName="r" values="30;40;30" dur="4s" repeatCount="indefinite"/>
          </circle>
          <circle cx="300" cy="200" r="25" fill="rgba(255, 0, 255, 0.2)" opacity="0.5">
            <animate attributeName="r" values="25;35;25" dur="3s" repeatCount="indefinite"/>
          </circle>
          <polygon points="200,50 220,90 180,90" fill="rgba(0, 245, 255, 0.15)">
            <animateTransform attributeName="transform" type="rotate" values="0 200 70;360 200 70" dur="8s" repeatCount="indefinite"/>
          </polygon>
        </svg>
      </div>
      <div className="hero-content">
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
        <div className="hero-text">
          <h1 className="hero-title">
            <span className="glowing-text">Saryam Shrestha</span>
          </h1>
          <p className="hero-subtitle">
            17-year-old Computer Engineering Student, Web Developer & Aspiring Pro Gamer
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
      </div>
    </section>
  )
}
