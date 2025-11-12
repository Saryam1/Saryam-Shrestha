import React, { useState, useRef, useEffect } from 'react'

export default function Gallery({ isVisible }) {
  const [activeCategory, setActiveCategory] = useState('all')
  const galleryRef = useRef(null)
  const [touchStart, setTouchStart] = useState(null)
  const [touchEnd, setTouchEnd] = useState(null)

  const galleryItems = [
    {
      id: 3,
      title: "Study Environment",
      description: "Where I code and study computer engineering",
      category: "professional",
      type: "image",
      src: "/assets/saryam-study-desk.jpg"
    },
    {
      id: 4,
      title: "School Life",
      description: "Academic life at Adarsha Secondary School",
      category: "professional",
      type: "image",
      src: "/assets/saryam-school-uniform.jpg"
    },
    {
      id: 5,
      title: "Creative Side",
      description: "Exploring my artistic and creative expressions",
      category: "personal",
      type: "image",
      src: "/assets/saryam-creative-pose.jpg"
    },
    {
      id: 6,
      title: "Professional Portrait",
      description: "Formal headshot for professional networking",
      category: "professional",
      type: "image",
      src: "/assets/saryam-formal-portrait.jpg"
    }
  ]

  const categories = [
    { id: 'all', name: 'All', icon: '⚡' },
    { id: 'personal', name: 'Personal', icon: '📸' },
    { id: 'professional', name: 'Professional', icon: '👔' }
  ]

  const filteredItems = activeCategory === 'all'
    ? galleryItems
    : galleryItems.filter(item => item.category === activeCategory)

  // Swipe functionality for mobile
  const minSwipeDistance = 50

  const onTouchStart = (e) => {
    setTouchEnd(null)
    setTouchStart(e.targetTouches[0].clientX)
  }

  const onTouchMove = (e) => setTouchEnd(e.targetTouches[0].clientX)

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return
    const distance = touchStart - touchEnd
    const isLeftSwipe = distance > minSwipeDistance
    const isRightSwipe = distance < -minSwipeDistance

    if (galleryRef.current && window.innerWidth <= 768) {
      const scrollAmount = 300
      if (isLeftSwipe) {
        galleryRef.current.scrollLeft += scrollAmount
      }
      if (isRightSwipe) {
        galleryRef.current.scrollLeft -= scrollAmount
      }
    }
  }

  return (
    <section id="gallery" className={`section ${isVisible.gallery ? 'animate-in' : ''}`}>
      <div className="container">
        <h2 className="section-title">Gallery</h2>

        <div className="gallery-filters">
          {categories.map(category => (
            <button
              key={category.id}
              className={`filter-btn ${activeCategory === category.id ? 'active' : ''}`}
              onClick={() => setActiveCategory(category.id)}
            >
              <span className="filter-icon">{category.icon}</span>
              {category.name}
            </button>
          ))}
        </div>

        <div
          className="gallery-grid"
          ref={galleryRef}
          onTouchStart={onTouchStart}
          onTouchMove={onTouchMove}
          onTouchEnd={onTouchEnd}
        >
          {filteredItems.map((item, index) => (
            <div key={item.id} className="gallery-item" style={{ animationDelay: `${index * 0.1}s` }}>
              <div className="gallery-card">
                <div className="gallery-media">
                  {item.type === 'video' ? (
                    <div className="video-placeholder">
                      <svg className="play-icon" viewBox="0 0 80 80">
                        <circle cx="40" cy="40" r="35" className="play-circle" />
                        <polygon points="32,28 32,52 56,40" className="play-triangle" />
                      </svg>
                      <span className="video-label">Video Content</span>
                    </div>
                  ) : item.src ? (
                    <img
                      src={item.src}
                      alt={item.title}
                      className="gallery-image"
                      style={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover',
                        borderRadius: '0'
                      }}
                    />
                  ) : (
                    <div className="image-placeholder">
                      <svg className="image-icon" viewBox="0 0 80 80">
                        <rect x="10" y="20" width="60" height="40" rx="5" className="image-frame" />
                        <circle cx="30" cy="35" r="5" className="image-element" />
                        <polygon points="45,45 55,35 65,45 65,55 45,55" className="image-element" />
                      </svg>
                      <span className="image-label">Image Content</span>
                    </div>
                  )}
                </div>
                <div className="gallery-info">
                  <h3 className="gallery-title">{item.title}</h3>
                  <p className="gallery-description">{item.description}</p>
                  <span className="gallery-category">{item.category}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}