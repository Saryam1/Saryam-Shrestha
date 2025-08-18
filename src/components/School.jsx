
import React from 'react'

export default function School({ isVisible }) {
  return (
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
  )
}
