
import React from 'react'

export default function Hero({ isVisible }) {
  return (
    <section id="hero" className={`hero ${isVisible.hero ? 'animate-in' : ''}`}>
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
            17-year-old Computer Engineering Student, Web Developer & A spiring Pro Gamer
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
