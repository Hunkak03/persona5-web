import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

// Chat conversation data
const CHAT_DATA = [
  {
    message: "Hi there! I see you´re a curious one.",
    remote: true,
    avatar: "https://f4.bcbits.com/img/0022654305_41.jpg"
  },
  {
    message: "I just wanted to show some abilities o´mine and then post it on github lol.",
    remote: true,
    avatar: "https://f4.bcbits.com/img/0022654305_41.jpg"
  },
  {
    message: "Sure I am curious, how did you make this? Are you some kind of HTML CSS JS expert?",
    remote: false
  },
  {
    message: "I spent hours doing this shit lol. Just wanted to show off some skills and then upload ts to Github (Hopefully I can get a job soon)",
    remote: true,
    avatar: "https://f4.bcbits.com/img/0022654305_41.jpg"
  },
  {
    message: "Well it looks cool duh dont worry. Hope you get a job soon.",
    remote: false
  }
];

const ChatMessage = ({ message, remote, index, avatar, animationsOn }) => {
  const fontSize = 16;
  const lineHeight = 1.4;

  const safeMessage = message || "";
  if (!safeMessage) return null;

  const words = safeMessage.split(' ');
  const lines = [];
  let currentLine = "";

  words.forEach(word => {
    if ((currentLine + word).length > 28) {
      lines.push(currentLine);
      currentLine = word + " ";
    } else {
      currentLine += word + " ";
    }
  });
  lines.push(currentLine);

  const centerWidth = lines.length === 1 ? Math.min(safeMessage.length * 11 + 45, 350) : 320;
  const containerHeight = (fontSize * lineHeight * lines.length) + 25;

  const msgBox = {
    origin: { x: remote ? 115 : 45, y: 20 },
    centerWidth: centerWidth,
    leftWidth: 12,
    rightWidth: 25,
    slantHeight: 8,
    border: { normal: 4, left: 15, right: 35 }
  };

  const containerPoints = [
    `${msgBox.origin.x},${msgBox.origin.y}`,
    `${msgBox.origin.x + msgBox.centerWidth + msgBox.rightWidth},${msgBox.origin.y}`,
    `${msgBox.origin.x + msgBox.centerWidth},${msgBox.origin.y + containerHeight + msgBox.slantHeight}`,
    `${msgBox.origin.x - msgBox.leftWidth},${msgBox.origin.y + containerHeight}`
  ].join(' ');

  const borderPoints = [
    `${msgBox.origin.x - msgBox.border.normal},${msgBox.origin.y - msgBox.border.normal}`,
    `${msgBox.origin.x + msgBox.centerWidth + msgBox.border.right},${msgBox.origin.y - msgBox.border.normal}`,
    `${msgBox.origin.x + msgBox.centerWidth + msgBox.border.normal},${msgBox.origin.y + containerHeight + msgBox.border.normal + msgBox.slantHeight}`,
    `${msgBox.origin.x - msgBox.border.left},${msgBox.origin.y + containerHeight + msgBox.border.normal}`
  ].join(' ');

  const primaryColor = remote ? 'white' : 'black';
  const secondaryColor = remote ? 'black' : 'white';

  return (
    <motion.div
      initial={animationsOn ? { opacity: 0, x: remote ? -40 : 40 } : undefined}
      animate={animationsOn ? { opacity: 1, x: 0 } : undefined}
      transition={animationsOn ? { duration: 0.3 } : undefined}
      style={{ width: '100%' }}
    >
      <svg viewBox={`0 0 550 ${containerHeight + 60}`} width="100%">
        <defs>
          <clipPath id={`clip-p5-${index}`}>
            <polygon points="5,10 75,0 85,65 10,75" />
          </clipPath>
        </defs>

        {remote && (
          <g transform="translate(10, 15)">
            <polygon points="-5,-5 85,-10 95,75 0,85" fill="black" />
            <polygon points="5,10 75,0 85,65 10,75" fill="white" />
            <rect width="90" height="90" fill="#222" clipPath={`url(#clip-p5-${index})`} />
            <image
              href={avatar || "https://i.imgur.com/83p7p89.png"}
              width="90" height="90" x="0" y="-5"
              clipPath={`url(#clip-p5-${index})`}
              preserveAspectRatio="xMidYMid slice"
            />
          </g>
        )}

        <polygon points={borderPoints} fill={secondaryColor} />
        <polygon points={containerPoints} fill={primaryColor} />

        {lines.map((line, i) => (
          <text
            key={i}
            x={msgBox.origin.x + 15}
            y={msgBox.origin.y + 25 + (i * fontSize * lineHeight)}
            fill={secondaryColor}
            style={{
                fontFamily: "'Source Sans Pro', sans-serif",
                fontWeight: 900,
                fontSize: '18px',
                textTransform: 'uppercase'
            }}
          >
            {line}
          </text>
        ))}
      </svg>
    </motion.div>
  );
};

const SkillsView = ({ onBack, settings }) => {
  const animationsOn = settings && settings.animations;
  const [messages, setMessages] = useState([]);
  const scrollRef = useRef(null);

  useEffect(() => {
    let current = 0;
    const timer = setInterval(() => {
      if (current < CHAT_DATA.length) {
        setMessages(prev => [...prev, CHAT_DATA[current]]);
        current++;
      } else {
        clearInterval(timer);
      }
    }, 1200);

    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages]);

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

  return (
    <div className="p5-chat-container">
      <div className="chat-content">
        <motion.h2
          className="p5-chat-title"
          initial={animationsOn ? { scale: 0.8, rotate: -5 } : undefined}
          animate={animationsOn ? { scale: 1, rotate: 0 } : undefined}
          transition={animationsOn ? { type: 'spring' } : undefined}
        >
          SKILLS_LOG
        </motion.h2>

        <div className="messages-list">
          {messages.map((msg, i) => (
            <ChatMessage key={`msg-${i}`} index={i} animationsOn={animationsOn} {...msg} />
          ))}
          <div ref={scrollRef} />
        </div>

        <motion.button
          className="p5-btn-back"
          onClick={onBack}
          initial={animationsOn ? { opacity: 0 } : undefined}
          animate={animationsOn ? { opacity: 1 } : undefined}
          transition={animationsOn ? { delay: 0.5 } : undefined}
        >
          RETURN [ESC]
        </motion.button>
      </div>
    </div>
  );
};

export default SkillsView;