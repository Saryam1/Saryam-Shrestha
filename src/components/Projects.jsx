
import React from 'react'

export default function Projects({ isVisible }) {
  const projects = [
    {
      id: 1,
      title: "Gaming Portfolio Website",
      description: "A responsive portfolio website showcasing my gaming achievements and web development skills, built with React and modern CSS animations.",
      technologies: ["React", "CSS3", "JavaScript", "Responsive Design"],
      status: "Completed",
      category: "Web Development"
    },
    {
      id: 2,
      title: "Game Performance Tracker",
      description: "A desktop application to track gaming statistics, performance metrics, and improvement over time for competitive gaming.",
      technologies: ["Python", "Tkinter", "SQLite", "Data Visualization"],
      status: "In Progress",
      category: "Desktop Application"
    },
    {
      id: 3,
      title: "School Management System",
      description: "A comprehensive system for managing student records, grades, and attendance for educational institutions.",
      technologies: ["Java", "MySQL", "JavaFX", "MVC Architecture"],
      status: "Completed",
      category: "Enterprise Software"
    },
    {
      id: 4,
      title: "Gaming Tournament Organizer",
      description: "Web platform for organizing and managing esports tournaments with real-time brackets and live scoring.",
      technologies: ["Node.js", "Express", "MongoDB", "Socket.io"],
      status: "Planning",
      category: "Web Application"
    }
  ]

  return (
    <section id="projects" className={`section ${isVisible.projects ? 'animate-in' : ''}`}>
      <div className="container">
        <h2 className="section-title">My Projects</h2>
        <div className="projects-grid">
          {projects.map((project, index) => (
            <div key={project.id} className="project-card" style={{animationDelay: `${index * 0.2}s`}}>
              <div className="project-header">
                <div className="project-icon">
                  <svg viewBox="0 0 50 50" className="code-icon">
                    <rect x="5" y="10" width="40" height="30" rx="3" className="terminal-bg"/>
                    <circle cx="12" cy="18" r="2" className="terminal-btn close"/>
                    <circle cx="20" cy="18" r="2" className="terminal-btn minimize"/>
                    <circle cx="28" cy="18" r="2" className="terminal-btn maximize"/>
                    <path d="M10 25 L15 30 L10 35" className="code-bracket"/>
                    <path d="M40 25 L35 30 L40 35" className="code-bracket"/>
                    <line x1="20" y1="28" x2="30" y2="32" className="code-line"/>
                  </svg>
                </div>
                <div className="project-status">
                  <span className={`status-badge ${project.status.toLowerCase().replace(' ', '-')}`}>
                    {project.status}
                  </span>
                </div>
              </div>
              <div className="project-content">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-category">{project.category}</p>
                <p className="project-description">{project.description}</p>
                <div className="project-technologies">
                  {project.technologies.map((tech, techIndex) => (
                    <span key={techIndex} className="tech-tag">{tech}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
