
import React from 'react'

export default function Projects({ isVisible }) {
  const projects = [
    {
      id: 1,
      title: "Calculator Application",
      description: "A simple calculator built with C++ demonstrating basic programming concepts and user interface design.",
      technologies: ["C++", "Object-Oriented Programming"],
      status: "Completed",
      codeLink: "#",
      demoLink: "#"
    },
    {
      id: 2,
      title: "Student Management System",
      description: "A console-based application for managing student records using fundamental programming concepts.",
      technologies: ["C Programming", "File Handling"],
      status: "In Progress",
      codeLink: "#",
      demoLink: "#"
    },
    {
      id: 3,
      title: "Personal Website",
      description: "This portfolio website showcasing my skills and projects using modern web technologies.",
      technologies: ["HTML", "CSS", "JavaScript"],
      status: "Completed",
      codeLink: "#",
      demoLink: "#"
    }
  ]

  return (
    <section id="projects" className={`section ${isVisible.projects ? 'animate-in' : ''}`}>
      <div className="container">
        <h2 className="section-title">Projects</h2>
        <p className="section-subtitle">A showcase of my programming projects and learning journey</p>
        <div className="projects-grid">
          {projects.map((project, index) => (
            <div key={project.id} className="project-card" style={{animationDelay: `${index * 0.2}s`}}>
              <div className="project-header">
                <h3 className="project-title">{project.title}</h3>
                <span className={`status-badge ${project.status.toLowerCase().replace(' ', '-')}`}>
                  {project.status}
                </span>
              </div>
              <p className="project-description">{project.description}</p>
              <div className="project-technologies">
                {project.technologies.map((tech, techIndex) => (
                  <span key={techIndex} className="tech-tag">{tech}</span>
                ))}
              </div>
              <div className="project-actions">
                <a href={project.codeLink} className="project-btn code-btn">
                  <svg viewBox="0 0 24 24" className="btn-icon">
                    <path fill="currentColor" d="M9.4 16.6L4.8 12l4.6-4.6L8 6l-6 6 6 6 1.4-1.4zm5.2 0l4.6-4.6-4.6-4.6L16 6l6 6-6 6-1.4-1.4z"/>
                  </svg>
                  Code
                </a>
                <a href={project.demoLink} className="project-btn demo-btn">
                  <svg viewBox="0 0 24 24" className="btn-icon">
                    <path fill="currentColor" d="M8 5v14l11-7z"/>
                  </svg>
                  Demo
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
