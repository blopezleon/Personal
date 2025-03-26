import React from 'react';
import { Fade, Typography } from '@mui/material';

interface BlurTextProps {
  text: string;
  className?: string;
}

const BlurText: React.FC<BlurTextProps> = ({ text, className = '' }) => {
  return (
    <Fade in timeout={4000}>
      <Typography variant="h2" className={className}>
        {text}
      </Typography>
    </Fade>
  );
};

export default BlurText; 