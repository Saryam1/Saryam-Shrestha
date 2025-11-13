import React from 'react'

export default function Gallery({ isVisible }) {
  const galleryItems = [
    { id: 1, src: "/assets/gallery-1.jpg", alt: "Gallery photo 1" },
    { id: 2, src: "/assets/gallery-2.jpg", alt: "Gallery photo 2" },
    { id: 3, src: "/assets/gallery-3.jpg", alt: "Gallery photo 3" },
    { id: 4, src: "/assets/gallery-4.jpg", alt: "Gallery photo 4" },
    { id: 5, src: "/assets/gallery-5.jpg", alt: "Gallery photo 5" },
    { id: 6, src: "/assets/gallery-6.jpg", alt: "Gallery photo 6" }
  ]

  return (
    <section id="gallery" className={`section ${isVisible.gallery ? 'animate-in' : ''}`}>
      <div className="container">
        <h2 className="section-title">Gallery</h2>

        <div className="gallery-grid-simple">
          {galleryItems.map((item, index) => (
            <div key={item.id} className="gallery-item-simple" style={{ animationDelay: `${index * 0.1}s` }}>
              <img
                src={item.src}
                alt={item.alt}
                className="gallery-image-simple"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}