import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Box, Typography } from '@mui/material';

interface DockItem {
  icon: React.ReactNode;
  label: string;
  onClick: () => void;
}

interface DockProps {
  items: DockItem[];
  panelHeight?: number;
  baseItemSize?: number;
  magnification?: number;
}

const Dock = ({ 
  items, 
  panelHeight = 68, 
  baseItemSize = 50, 
  magnification = 70 
}: DockProps) => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [mousePosition, setMousePosition] = useState(0);

  const handleMouseMove = (e: React.MouseEvent) => {
    setMousePosition(e.clientX);
  };

  const getItemSize = (index: number) => {
    if (hoveredIndex === null) return baseItemSize;

    const distance = Math.abs(hoveredIndex - index);
    const size = Math.max(
      baseItemSize,
      magnification * Math.cos((distance * Math.PI) / 4)
    );

    return size;
  };

  return (
    <Box
      sx={{
        position: 'fixed',
        bottom: 20,
        left: '50%',
        transform: 'translateX(-50%)',
        zIndex: 1000,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'flex-end',
        background: 'rgba(255, 255, 255, 0.2)',
        backdropFilter: 'blur(10px)',
        borderRadius: 3,
        padding: '10px 20px',
        boxShadow: '0 0 20px rgba(0, 0, 0, 0.1)',
      }}
      onMouseMove={handleMouseMove}
      onMouseLeave={() => setHoveredIndex(null)}
    >
      {items.map((item, index) => (
        <Box
          key={item.label}
          sx={{
            position: 'relative',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            margin: '0 6px',
          }}
          onMouseEnter={() => setHoveredIndex(index)}
        >
          <motion.div
            animate={{
              width: getItemSize(index),
              height: getItemSize(index),
            }}
            transition={{
              type: 'spring',
              stiffness: 300,
              damping: 30,
            }}
            onClick={item.onClick}
            style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              background: 'rgba(255, 255, 255, 0.1)',
              borderRadius: '12px',
              cursor: 'pointer',
              color: 'white',
            }}
          >
            {item.icon}
          </motion.div>
          <AnimatePresence>
            {hoveredIndex === index && (
              <motion.div
                initial={{ opacity: 0, y: 0 }}
                animate={{ opacity: 1, y: -8 }}
                exit={{ opacity: 0, y: 0 }}
                style={{
                  position: 'absolute',
                  top: -24,
                  background: 'rgba(0, 0, 0, 0.8)',
                  borderRadius: '4px',
                  padding: '4px 8px',
                }}
              >
                <Typography
                  variant="caption"
                  sx={{
                    color: 'white',
                    whiteSpace: 'nowrap',
                  }}
                >
                  {item.label}
                </Typography>
              </motion.div>
            )}
          </AnimatePresence>
        </Box>
      ))}
    </Box>
  );
};

export default Dock; 