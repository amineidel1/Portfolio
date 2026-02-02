import { motion } from 'framer-motion';
import { skills } from '../data/portfolio';

export default function Skills() {
  return (
    <section id="skills" className="skills">
      <div className="container">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="section-title"
        >
          Compétences
        </motion.h2>

        <div className="skills-grid">
          {skills.map((skill, i) => (
            <motion.article
              key={skill.id}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, duration: 0.4 }}
              className="skill-card"
              whileHover={{ y: -5, scale: 1.02 }}
            >
              <div className="skill-image-wrap">
                <img src={skill.image} alt={skill.title} className="skill-image" />
              </div>
              <div className="skill-body">
                <h3 className="skill-title">{skill.title}</h3>
                <p className="skill-desc">{skill.description}</p>
                <a
                  href={skill.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="skill-link"
                >
                  Ressource →
                </a>
              </div>
            </motion.article>
          ))}
        </div>
      </div>

      <style>{`
        .skills {
          padding: 6rem 0;
        }
        .skills-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
          gap: 2rem;
        }
        .skill-card {
          background: var(--bg-card);
          border: 1px solid var(--border);
          border-radius: 16px;
          overflow: hidden;
          transition: all 0.3s ease;
        }
        .skill-card:hover {
          border-color: var(--accent);
          box-shadow: 0 15px 35px rgba(0,0,0,0.2);
        }
        .skill-image-wrap {
          height: 160px;
          background: rgba(6, 182, 212, 0.05);
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 1.5rem;
        }
        .skill-image {
          max-height: 100%;
          max-width: 100%;
          object-fit: contain;
        }
        .skill-body {
          padding: 1.5rem;
        }
        .skill-title {
          font-size: 1.2rem;
          font-weight: 600;
          margin-bottom: 0.5rem;
          color: var(--text-primary);
        }
        .skill-desc {
          color: var(--text-secondary);
          font-size: 0.9rem;
          line-height: 1.6;
          margin-bottom: 1rem;
        }
        .skill-link {
          color: var(--accent);
          font-weight: 600;
          font-size: 0.9rem;
        }
        .skill-link:hover {
          color: var(--accent-dim);
        }
      `}</style>
    </section>
  );
}
