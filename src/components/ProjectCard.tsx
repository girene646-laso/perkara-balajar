import { Project } from '../lib';

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <div className="project-card" role="article" aria-labelledby={`project-${project.id}`}>
      <h3 id={`project-${project.id}`}>{project.name}</h3>
      <p className="desc">{project.description}</p>
      
      {/* Case Study Details */}
      {project.problem && (
        <div className="case-study">
          <div className="case-study-item">
            <h4>The Challenge</h4>
            <p>{project.problem}</p>
          </div>
          
          {project.solution && (
            <div className="case-study-item">
              <h4>Technical Implementation</h4>
              <p>{project.solution}</p>
            </div>
          )}
          
          {project.role && (
            <div className="case-study-item">
              <h4>My Role</h4>
              <p>{project.role}</p>
            </div>
          )}
          
          {project.outcome && (
            <div className="case-study-item">
              <h4>Performance & Results</h4>
              <p>{project.outcome}</p>
            </div>
          )}
        </div>
      )}
      
      {/* Key Highlights */}
      {project.highlights && project.highlights.length > 0 && (
        <div className="project-highlights">
          <h4>Key Achievements</h4>
          <ul>
            {project.highlights.map((highlight, index) => (
              <li key={index}>{highlight}</li>
            ))}
          </ul>
        </div>
      )}
      
      <div className="tech-stack">
        <h4>Tech Stack</h4>
        <ul className="tech-list" aria-label="Technologies used">
          {project.tech.map(t => <li key={t} className="tech">{t}</li>)}
        </ul>
      </div>
      
      <div className="links">
        {project.repo && (
          <a href={project.repo} target="_blank" rel="noopener noreferrer" className="button">
            <span>View Source Code ↗</span>
          </a>
        )}
        {project.demo && (
          <a href={project.demo} target="_blank" rel="noopener noreferrer" className="button primary">
            <span>Live Demo ↗</span>
          </a>
        )}
      </div>
    </div>
  );
}
