import React from 'react';
import { motion } from 'framer-motion';

const MIS_REDES = [
  { name: "INSTAGRAM", type: "@Hunkak03", qty: "LINK", url: "https://instagram.com/Hunkak03", icon: "📷" },
  { name: "GITHUB", type: "PROJECTS", qty: "CODE", url: "https://github.com/Hunkak03", icon: "🐙" },
  { name: "DISCORD", type: "COMMUNITY", qty: "JOIN", url: "https://discord.gg/fFqtTw8phm", icon: "💬" },
];

const ItemsView = ({ onBack, settings }) => {
  const animationsOn = settings && settings.animations;

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { x: 100, opacity: 0, skewX: -10 },
    visible: {
      x: 0,
      opacity: 1,
      skewX: 0,
      transition: {
        type: 'spring',
        stiffness: 100,
        damping: 12
      }
    }
  };

  return (
    <motion.div
      className="p5-items-screen"
      initial={animationsOn ? { x: '100vw', skewX: -15 } : undefined}
      animate={animationsOn ? { x: 0, skewX: 0 } : undefined}
      exit={animationsOn ? { x: '100vw', skewX: 15 } : undefined}
      transition={animationsOn ? { duration: 0.5, ease: "circOut" } : undefined}
    >
      <div className="p5-items-content">
        <motion.h2
          className="p5-header-title"
          initial={animationsOn ? { scale: 0.5, opacity: 0, rotate: -10 } : undefined}
          animate={animationsOn ? { scale: 1, opacity: 1, rotate: 0 } : undefined}
          transition={animationsOn ? { type: 'spring', delay: 0.2 } : undefined}
        >
          SOCIAL MEDIA
        </motion.h2>

        <motion.div
          className="p5-list-container"
          variants={animationsOn ? containerVariants : undefined}
          initial={animationsOn ? "hidden" : undefined}
          animate={animationsOn ? "visible" : undefined}
        >
          {MIS_REDES.map((red, i) => (
            <motion.div
              key={i}
              className="p5-item-row"
              variants={animationsOn ? itemVariants : undefined}
              onClick={() => red.url && window.open(red.url, '_blank')}
              whileHover={{
                scale: 1.03,
                x: -15,
                skewX: -2,
                transition: { type: 'spring', stiffness: 400 }
              }}
              style={{ cursor: red.url ? 'pointer' : 'default' }}
            >
              <div className="p5-item-main-info">
                <span className="p5-item-icon">{red.icon}</span>
                <span className="p5-item-name">{red.name}</span>
                <span className="p5-item-type">
                  {red.type}
                </span>
              </div>
              <motion.span
                className="p5-item-qty"
                whileHover={{ scale: 1.2, rotate: 5 }}
              >
                {red.qty}
              </motion.span>
            </motion.div>
          ))}
        </motion.div>

        <motion.button
          className="p5-back-control"
          onClick={onBack}
          initial={animationsOn ? { opacity: 0, y: 20 } : undefined}
          animate={animationsOn ? { opacity: 1, y: 0 } : undefined}
          transition={animationsOn ? { delay: 0.8 } : undefined}
          whileHover={animationsOn ? { scale: 1.05, y: -3 } : undefined}
        >
          RETURN [ESC]
        </motion.button>
      </div>
    </motion.div>
  );
};

export default ItemsView;