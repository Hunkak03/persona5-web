import React, { useEffect } from 'react';
import { motion } from 'framer-motion';

const StatusView = ({ onBack, settings }) => {
  const animationsOn = settings && settings.animations;

  // ESC key navigation
  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === 'Escape') {
        onBack();
      }
    };
    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, [onBack]);

  const techStack = [
    { category: 'FRONTEND', skills: [
      { name: 'React', level: 75 },
      { name: 'JavaScript', level: 80 },
      { name: 'HTML/CSS', level: 85 },
      { name: 'Framer Motion', level: 70 },
    ]},
    { category: 'BACKEND', skills: [
      { name: 'Node.js', level: 65 },
      { name: 'Express', level: 60 },
      { name: 'Python', level: 70 },
    ]},
    { category: 'TOOLS', skills: [
      { name: 'Git', level: 75 },
      { name: 'VS Code', level: 90 },
      { name: 'Vite', level: 80 },
    ]}
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const cardVariants = {
    hidden: { x: 100, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        type: 'spring',
        stiffness: 80,
        damping: 12
      }
    }
  };

  return (
    <motion.div
      className="p5-status-screen"
      initial={animationsOn ? { y: '100vh', skewY: -10 } : undefined}
      animate={animationsOn ? { y: 0, skewY: 0 } : undefined}
      exit={animationsOn ? { y: '100vh', skewY: 10 } : undefined}
      transition={animationsOn ? { duration: 0.5, ease: "circOut" } : undefined}
    >
      <div className="p5-status-content">
        <motion.h2
          className="p5-section-title"
          initial={animationsOn ? { scale: 0.8, rotate: -5 } : undefined}
          animate={animationsOn ? { scale: 1, rotate: 0 } : undefined}
          transition={animationsOn ? { type: 'spring', delay: 0.2 } : undefined}
        >
          STATUS
        </motion.h2>

        <motion.div
          className="p5-tech-stack"
          variants={animationsOn ? containerVariants : undefined}
          initial={animationsOn ? "hidden" : undefined}
          animate={animationsOn ? "visible" : undefined}
        >
          {techStack.map((group, idx) => (
            <motion.div
              key={group.category}
              className="p5-tech-category"
              variants={animationsOn ? cardVariants : undefined}
            >
              <h3 className="p5-category-title">{group.category}</h3>
              <div className="p5-skills-list">
                {group.skills.map((skill, i) => (
                  <div key={skill.name} className="p5-skill-row">
                    <span className="p5-skill-name">{skill.name}</span>
                    <div className="p5-skill-bar-container">
                      <motion.div
                        className="p5-skill-bar-fill"
                        initial={animationsOn ? { width: 0 } : undefined}
                        animate={animationsOn ? { width: `${skill.level}%` } : undefined}
                        transition={animationsOn ? { delay: 0.5 + (idx * 0.2) + (i * 0.1), duration: 0.8, ease: "easeOut" } : undefined}
                        style={{ width: `${skill.level}%` }}
                      />
                      <span className="p5-skill-level">{skill.level}%</span>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          className="p5-arcana-cards"
          initial={animationsOn ? { opacity: 0, y: 50 } : undefined}
          animate={animationsOn ? { opacity: 1, y: 0 } : undefined}
          transition={animationsOn ? { delay: 1 } : undefined}
        >
          <h3 className="p5-section-subtitle">CURRENT FOCUS</h3>
          <div className="p5-arcana-grid">
            <div className="p5-arcana-card">
              <div className="arcana-icon">📚</div>
              <span className="arcana-label">Learning TypeScript</span>
            </div>
            <div className="p5-arcana-card">
              <div className="arcana-icon">🎮</div>
              <span className="arcana-label">Building Projects</span>
            </div>
            <div className="p5-arcana-card">
              <div className="arcana-icon">💼</div>
              <span className="arcana-label">Job Hunting</span>
            </div>
          </div>
        </motion.div>

        <motion.button
          className="p5-back-control"
          onClick={onBack}
          initial={animationsOn ? { opacity: 0 } : undefined}
          animate={animationsOn ? { opacity: 1 } : undefined}
          transition={animationsOn ? { delay: 1.2 } : undefined}
        >
          RETURN [ESC]
        </motion.button>
      </div>
    </motion.div>
  );
};

export default StatusView;
