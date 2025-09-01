
import React, { useState } from 'react'

export default function Gallery({ isVisible }) {
  const [activeCategory, setActiveCategory] = useState('all')

  const galleryItems = [
    {
      id: 1,
      title: "Gaming Setup",
      category: "gaming",
      type: "image",
      description: "My professional gaming setup for competitive play"
    },
    {
      id: 2,
      title: "Code Project Demo",
      category: "coding",
      type: "video",
      description: "Live demonstration of my latest web application"
    },
    {
      id: 3,
      title: "Tournament Victory",
      category: "gaming",
      type: "image",
      description: "Winning moment from recent esports competition"
    },
    {
      id: 4,
      title: "Programming Workspace",
      category: "coding",
      type: "image",
      description: "My development environment and coding setup"
    },
    {
      id: 5,
      title: "School Project Presentation",
      category: "academic",
      type: "video",
      description: "Presenting my computer engineering project"
    },
    {
      id: 6,
      title: "Team Building",
      category: "academic",
      type: "image",
      description: "Working with classmates on group projects"
    }
  ]

  const categories = [
    { id: 'all', name: 'All', icon: '⚡' },
    { id: 'gaming', name: 'Gaming', icon: '🎮' },
    { id: 'coding', name: 'Coding', icon: '💻' },
    { id: 'academic', name: 'Academic', icon: '🎓' }
  ]

  const filteredItems = activeCategory === 'all' 
    ? galleryItems 
    : galleryItems.filter(item => item.category === activeCategory)

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

        <div className="gallery-grid">
          {filteredItems.map((item, index) => (
            <div key={item.id} className="gallery-item" style={{animationDelay: `${index * 0.1}s`}}>
              <div className="gallery-card">
                <div className="gallery-media">
                  {item.type === 'video' ? (
                    <div className="video-placeholder">
                      <svg viewBox="0 0 100 100" className="play-icon">
                        <circle cx="50" cy="50" r="35" className="play-circle"/>
                        <polygon points="40,35 40,65 70,50" className="play-triangle"/>
                      </svg>
                      <span className="video-label">Video</span>
                    </div>
                  ) : (
                    <div className="image-placeholder">
                      <svg viewBox="0 0 100 100" className="image-icon">
                        <rect x="15" y="25" width="70" height="50" rx="5" className="image-frame"/>
                        <circle cx="35" cy="40" r="8" className="image-element"/>
                        <polygon points="50,55 65,40 80,55 80,65 50,65" className="image-element"/>
                      </svg>
                      <span className="image-label">Image</span>
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
