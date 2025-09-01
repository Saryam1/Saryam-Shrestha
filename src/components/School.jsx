
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
              src="https://www.google.com/maps/place/Adarsha+Secondary+School,+Madhyapur+Thimi+Muncipality+44600/@27.6805032,85.3753458,18.25z/data=!4m6!3m5!1s0x39eb1a6ada9ef59f:0x1ceb33d394a77335!8m2!3d27.6815007!4d85.376109!16s%2Fg%2F11b8tcpdlg?entry=ttu&g_ep=EgoyMDI1MDgxMy4wIKXMDSoASAFQAw%3D%3D"
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