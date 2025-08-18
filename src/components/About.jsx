
import React from 'react'

export default function About({ isVisible }) {
  return (
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
  )
}
