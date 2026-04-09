import React, { useEffect } from 'react';
import { motion } from 'framer-motion';

const PersonaView = ({ onBack, settings }) => {
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

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0, skewX: -10 },
    visible: {
      y: 0,
      opacity: 1,
      skewX: 0,
      transition: {
        type: 'spring',
        stiffness: 100,
        damping: 15
      }
    }
  };

  return (
    <motion.div
      className="p5-persona-screen"
      initial={animationsOn ? { x: '-100vw', skewX: 15 } : undefined}
      animate={animationsOn ? { x: 0, skewX: 0 } : undefined}
      exit={animationsOn ? { x: '-100vw', skewX: -15 } : undefined}
      transition={animationsOn ? { duration: 0.5, ease: "circOut" } : undefined}
    >
      <div className="p5-persona-content">
        <motion.h2
          className="p5-section-title"
          initial={animationsOn ? { scale: 0.5, opacity: 0 } : undefined}
          animate={animationsOn ? { scale: 1, opacity: 1 } : undefined}
          transition={animationsOn ? { type: 'spring', delay: 0.3 } : undefined}
        >
          PERSONA
        </motion.h2>

        <motion.div
          className="p5-persona-card"
          variants={animationsOn ? containerVariants : undefined}
          initial={animationsOn ? "hidden" : undefined}
          animate={animationsOn ? "visible" : undefined}
        >
          <motion.div className="p5-avatar-section" variants={animationsOn ? itemVariants : undefined}>
            <div className="p5-avatar-frame">
              <div className="p5-avatar-placeholder">
                <span className="avatar-icon">👤</span>
              </div>
            </div>
          </motion.div>

          <motion.div className="p5-info-section" variants={animationsOn ? itemVariants : undefined}>
            <div className="p5-info-row">
              <span className="p5-info-label">NAME</span>
              <span className="p5-info-value">Daniel</span>
            </div>
            <div className="p5-info-row">
              <span className="p5-info-label">ROLE</span>
              <span className="p5-info-value">Freelancer / General Programmer</span>
            </div>
            <div className="p5-info-row">
              <span className="p5-info-label">LEVEL</span>
              <span className="p5-info-value">High / Low Senior</span>
            </div>
            <div className="p5-info-row">
              <span className="p5-info-label">LOCATION</span>
              <span className="p5-info-value">Your heart (or my Github)</span>
            </div>
          </motion.div>

          <motion.div className="p5-bio-section" variants={animationsOn ? itemVariants : undefined}>
            <h3 className="p5-bio-title">BIOGRAPHY</h3>
            <p className="p5-bio-text">
              A passionate developer who loves creating interactive web experiences.
              Inspired by the stylish aesthetics of Persona 5, bringing that same
              energy into modern web development.
            </p>
            <p className="p5-bio-text">
              Currently seeking opportunities to grow and contribute to exciting projects.
            </p>
          </motion.div>

          <motion.div className="p5-traits-section" variants={animationsOn ? itemVariants : undefined}>
            <h3 className="p5-bio-title">TRAITS</h3>
            <div className="p5-traits-grid">
              {['Creative', 'Detail-Oriented', 'Fast Learner', 'Team Player', 'Problem Solver', 'Gamer', 'Music Enthusiast', 'Guitarist'].map((trait, i) => (
                <div key={i} className="p5-trait-badge">
                  {trait}
                </div>
              ))}
            </div>
          </motion.div>
        </motion.div>

        <motion.button
          className="p5-back-control"
          onClick={onBack}
          initial={animationsOn ? { opacity: 0 } : undefined}
          animate={animationsOn ? { opacity: 1 } : undefined}
          transition={animationsOn ? { delay: 0.8 } : undefined}
        >
          RETURN [ESC]
        </motion.button>
      </div>
    </motion.div>
  );
};

export default PersonaView;
