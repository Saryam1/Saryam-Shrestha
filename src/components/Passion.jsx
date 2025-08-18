
import React from 'react'

export default function Passion({ isVisible }) {
  return (
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
            <h3 className="glowing-text">Pro Gaming & Web Development</h3>
            <p>
              I have dual passions that drive me every day. Gaming isn't just a hobby—it's 
              my future career goal where I combine strategy, skill, and technology to compete 
              at the highest level. Alongside this, I'm deeply passionate about web development, 
              creating beautiful, interactive websites and applications that solve real-world problems.
            </p>
            <div className="passion-details">
              <div className="passion-item">
                <h4>🎮 Pro Gaming</h4>
                <p>Competitive gaming with focus on strategy and skill development</p>
              </div>
              <div className="passion-item">
                <h4>💻 Web Development</h4>
                <p>Building modern, responsive websites and web applications</p>
              </div>
            </div>
            <div className="gaming-stats">
              <div className="stat">
                <span className="stat-number">5+</span>
                <span className="stat-label">Years Gaming</span>
              </div>
              <div className="stat">
                <span className="stat-number">2+</span>
                <span className="stat-label">Years Coding</span>
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
  )
}
