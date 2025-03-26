import React from 'react';
import { Box, Container, Typography, Button } from '@mui/material';
import { motion } from 'framer-motion';
import Spline from '@splinetool/react-spline';

const Hero = () => {
  return (
    <>
      {/* Full viewport 3D Model Section */}
      <Box
        sx={{
          height: '100vh',
          width: '100%',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        <Spline scene="https://prod.spline.design/Qrv9zLUrmChj4tBn/scene.splinecode" />
        
        {/* Scroll Indicator */}
        <Box
          sx={{
            position: 'absolute',
            bottom: 40,
            left: '50%',
            transform: 'translateX(-50%)',
            zIndex: 2,
            cursor: 'pointer',
          }}
          onClick={() => document.getElementById('content')?.scrollIntoView({ behavior: 'smooth' })}
        >
          <motion.div
            animate={{
              y: [0, 10, 0],
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              repeatType: 'loop',
            }}
          >
            <Typography
              color="primary"
              sx={{
                textAlign: 'center',
                fontSize: '0.9rem',
                letterSpacing: '0.2em',
                textTransform: 'uppercase',
              }}
            >
              Scroll Down
            </Typography>
          </motion.div>
        </Box>
      </Box>

      {/* Content Section */}
      <Box
        id="content"
        sx={{
          minHeight: '100vh',
          display: 'flex',
          alignItems: 'center',
          background: (theme) => theme.palette.background.default,
          position: 'relative',
        }}
      >
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Typography
              variant="h6"
              color="primary"
              sx={{ mb: 2, fontWeight: 500 }}
            >
              Hi, my name is
            </Typography>
            <Typography
              variant="h2"
              sx={{
                mb: 2,
                fontWeight: 700,
                background: 'linear-gradient(45deg, #64ffda 30%, #0a192f 90%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}
            >
              Your Name
            </Typography>
            <Typography
              variant="h3"
              color="text.secondary"
              sx={{ mb: 4 }}
            >
              I build things for the web.
            </Typography>
            <Typography
              variant="body1"
              color="text.secondary"
              sx={{ mb: 4, maxWidth: '600px' }}
            >
              I'm a software developer specializing in building exceptional digital experiences.
              Currently, I'm focused on building accessible, human-centered products.
            </Typography>
            <Button
              variant="outlined"
              color="primary"
              size="large"
              onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Check out my work
            </Button>
          </motion.div>
        </Container>
      </Box>
    </>
  );
};

export default Hero; 