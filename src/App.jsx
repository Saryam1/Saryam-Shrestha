import React, { useState, useEffect } from 'react'
import './App.css'
import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Passion from './components/Passion'
import School from './components/School'
import Footer from './components/Footer'

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

  return (
    <div className="portfolio">
      <Header />
      <Hero isVisible={isVisible} />
      <About isVisible={isVisible} />
      <Skills isVisible={isVisible} />
      <Passion isVisible={isVisible} />
      <School isVisible={isVisible} />
      <Footer />
    </div>
  )
}