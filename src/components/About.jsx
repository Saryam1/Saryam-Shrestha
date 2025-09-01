
import React from 'react'

export default function About({ isVisible }) {
  return (
    <section id="about" className={`section ${isVisible.about ? 'animate-in' : ''}`}>
      <div className="about-bg-image">
        <svg viewBox="0 0 300 200" className="about-bg-svg">
          <defs>
            <linearGradient id="aboutBg" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="rgba(0, 245, 255, 0.05)"/>
              <stop offset="100%" stopColor="rgba(255, 0, 255, 0.05)"/>
            </linearGradient>
          </defs>
          <rect width="300" height="200" fill="url(#aboutBg)"/>
          <circle cx="50" cy="150" r="20" fill="rgba(0, 245, 255, 0.1)" opacity="0.7">
            <animate attributeName="cy" values="150;130;150" dur="3s" repeatCount="indefinite"/>
          </circle>
          <circle cx="250" cy="50" r="15" fill="rgba(255, 0, 255, 0.1)" opacity="0.6">
            <animate attributeName="cx" values="250;270;250" dur="4s" repeatCount="indefinite"/>
          </circle>
          <rect x="150" y="100" width="30" height="30" fill="rgba(0, 245, 255, 0.08)" opacity="0.8">
            <animateTransform attributeName="transform" type="rotate" values="0 165 115;360 165 115" dur="6s" repeatCount="indefinite"/>
          </rect>
        </svg>
      </div>
      <div className="container">
        <h2 className="section-title">About Me</h2>
        <div className="about-content">
          <p>
            I'm Saryam Shrestha, a 17-year-old student passionate about technology and gaming. 
            Currently studying Computer Engineering at Adarsha Secondary School in Sanothimi, Bhaktapur, 
            I'm in my Class 12 Technical program, building a strong foundation in programming and technology.
          </p>
          <p>
            My journey combines academic excellence with dual passions: becoming a professional gamer 
            and mastering web development. I love creating interactive websites and applications, 
            merging my technical skills with creative problem-solving and competitive gaming spirit.
          </p>
        </div>
      </div>
    </section>
  )
}
