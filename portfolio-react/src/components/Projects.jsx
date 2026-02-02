import { motion } from 'framer-motion';
import { projects } from '../data/portfolio';

export default function Projects() {
  return (
    <section id="projects" className="projects">
      <div className="container">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="section-title"
        >
          Projets
        </motion.h2>

        <div className="projects-grid">
          {projects.map((project, i) => (
            <motion.article
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.4 }}
              className="project-card"
              whileHover={{ y: -8 }}
            >
              <div className="project-image-wrap">
                <img src={project.image} alt={project.title} className="project-image" />
                <div className="project-overlay">
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-link"
                  >
                    Voir le code →
                  </a>
                </div>
              </div>
              <div className="project-body">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-desc">{project.description}</p>
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="project-btn"
                >
                  Code source
                </a>
              </div>
            </motion.article>
          ))}
        </div>
      </div>

      <style>{`
        .projects {
          padding: 6rem 0;
          background: var(--gradient-2);
        }
        .projects-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(340px, 1fr));
          gap: 2rem;
        }
        .project-card {
          background: var(--bg-card);
          border: 1px solid var(--border);
          border-radius: 16px;
          overflow: hidden;
          transition: all 0.3s ease;
        }
        .project-card:hover {
          border-color: var(--accent);
          box-shadow: 0 20px 40px rgba(0,0,0,0.3);
        }
        .project-image-wrap {
          position: relative;
          height: 200px;
          overflow: hidden;
        }
        .project-image {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.4s ease;
        }
        .project-card:hover .project-image {
          transform: scale(1.05);
        }
        .project-overlay {
          position: absolute;
          inset: 0;
          background: rgba(6, 182, 212, 0.9);
          display: flex;
          align-items: center;
          justify-content: center;
          opacity: 0;
          transition: opacity 0.3s ease;
        }
        .project-card:hover .project-overlay {
          opacity: 1;
        }
        .project-link {
          color: var(--bg-dark);
          font-weight: 700;
          font-size: 1.1rem;
          padding: 0.75rem 1.5rem;
          background: white;
          border-radius: 8px;
          transition: transform 0.2s;
        }
        .project-link:hover {
          transform: scale(1.05);
        }
        .project-body {
          padding: 1.5rem;
        }
        .project-title {
          font-size: 1.25rem;
          font-weight: 600;
          margin-bottom: 0.75rem;
          color: var(--text-primary);
        }
        .project-desc {
          color: var(--text-secondary);
          font-size: 0.95rem;
          line-height: 1.6;
          margin-bottom: 1rem;
          display: -webkit-box;
          -webkit-line-clamp: 3;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
        .project-btn {
          color: var(--accent);
          font-weight: 600;
          font-size: 0.9rem;
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
        }
        .project-btn:hover {
          color: var(--accent-dim);
        }
      `}</style>
    </section>
  );
}
