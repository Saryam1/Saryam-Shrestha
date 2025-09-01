
import React from 'react'

export default function Header() {
  return (
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
          <li><a href="#hero">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#skills">Skills</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#gallery">Gallery</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>
    </header>
  )
}
