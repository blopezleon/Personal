import React from 'react';
import { Box, Container, Typography, Grid, Theme, Paper } from '@mui/material';
import { motion } from 'framer-motion';
import BlurText from './BlurText';
import Magnet from './Magnet';
import RollingGallery from './RollingGallery';
import styles from './About.module.css';

const About = () => {
  const skills = [
    'JavaScript',
    'TypeScript',
    'React',
    'Node.js',
    'Python',
    'C++'
  ];

  return (
    <Box
      component="section"
      sx={{
        minHeight: '200vh',
        height: 'auto',
        position: 'relative',
        overflowY: 'visible',
      }}
    >
      {/* First Section - About Me */}
      <Box
        sx={{
          minHeight: '100vh',
          display: 'flex',
          alignItems: 'center',
          position: 'relative',
          background: (theme) => theme.palette.background.default,
          '&::after': {
            content: '""',
            position: 'absolute',
            bottom: 0,
            left: 0,
            width: '100%',
            height: '100px',
            background: 'linear-gradient(to bottom, #0a192f 0%, #000000 100%)',
            pointerEvents: 'none',
          }
        }}
      >
        <Container 
          maxWidth="xl"
          sx={{
            py: 8,
            px: { xs: 2, sm: 3, md: 4 },
          }}
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.8 }}
          >
            <BlurText text="About Me" className={styles['about-title']} />
            
            <Grid container spacing={4} alignItems="center">
              {/* Text Content - Left Side */}
              <Grid item xs={12} md={6}>
                <Box sx={{ pr: { md: 4 } }}>
                  <Typography variant="body1" paragraph>
                    I'm a Computer Engineering student at the University of Florida with a passion for building
                    real-world solutions through code. Whether it's developing projects, competing in hackathons, 
                    or creating content, I'm always looking for ways to improve on my last project. I also have a strong interest in 
                    sales and marketing, combining technical expertise with the ability to connect ideas with people.
                  </Typography>
                  <Typography variant="body1" paragraph>
                    I live by the idea that "good enough isn't" because I believe that the 
                    work that we do is the best reflection of who we are. The things that I do, weather
                    it be hackathons which I competed in again and again until I won, making content 
                    which I upload every week improving on my editing and filming skills, or building 
                    relationships with complete strangers as well as familar faces, I do it with the mindset 
                    of doing better and better every time. 
                  </Typography>
                  <Typography variant="h6" sx={{ mt: 6, mb: 3 }}>
                    Here are a few technologies I've been working with recently:
                  </Typography>
                  <Grid container spacing={2} sx={{ mb: 6 }}>
                    {skills.map((skill) => (
                      <Grid item xs={6} sm={4} key={skill}>
                        <Magnet padding={50} magnetStrength={1.5}>
                          <Paper
                            elevation={1}
                            sx={{
                              p: 2,
                              textAlign: 'center',
                              background: (theme: Theme) => theme.palette.background.paper,
                              borderRadius: 2,
                              cursor: 'pointer',
                              transition: 'all 0.3s ease',
                              '&:hover': {
                                boxShadow: 3,
                                background: (theme: Theme) => theme.palette.background.default,
                              },
                            }}
                          >
                            <Typography variant="body2">
                              {skill}
                            </Typography>
                          </Paper>
                        </Magnet>
                      </Grid>
                    ))}
                  </Grid>
                </Box>
              </Grid>

              {/* Image - Right Side */}
              <Grid item xs={12} md={6}>
                <Box
                  sx={{
                    width: '100%',
                    height: { xs: '300px', md: '500px' },
                    position: 'relative',
                    overflow: 'hidden',
                    borderRadius: 4,
                    boxShadow: (theme) => `0 0 20px ${theme.palette.primary.main}25`,
                  }}
                >
                  <motion.img
                    src="/581b74e5-1840-470e-86ff-7f5559cf2442.JPG"
                    alt="About Me"
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                    }}
                    initial={{ scale: 1.1 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 1.5, ease: 'easeOut' }}
                  />
                </Box>
              </Grid>
            </Grid>

            {/* Scroll Indicator */}
            <motion.div
              style={{
                position: 'absolute',
                bottom: 100,
                left: '16%',
                transform: 'translateX(-50%)',
                cursor: 'pointer',
                zIndex: 2,
              }}
              animate={{
                y: [0, 10, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: 'loop',
              }}
              onClick={() => document.getElementById('gallery-section')?.scrollIntoView({ behavior: 'smooth' })}
            >
              <Typography
                color="primary"
                sx={{
                  textAlign: 'top',
                  fontSize: '0.9rem',
                  letterSpacing: '0.2em',
                  textTransform: 'uppercase',
                }}
              >
                Scroll Down
              </Typography>
            </motion.div>
          </motion.div>
        </Container>
      </Box>

      {/* Second Section - Gallery */}
      <Box
        id="gallery-section"
        sx={{
          minHeight: '100vh',
          display: 'flex',
          alignItems: 'center',
          position: 'relative',
          background: '#000000',
          '&::before': {
            content: '""',
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '200px',
            background: 'linear-gradient(to top, #000000 0%, transparent 100%)',
            pointerEvents: 'none',
          }
        }}
      >
        <Container 
          maxWidth="xl"
          sx={{
            py: 8,
            px: { xs: 2, sm: 3, md: 3 },
          }}
        >
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1.8 }}
            viewport={{ once: true }}
          >
            <BlurText text="Gallery" className={styles['about-title']} />
            
            <Box 
              sx={{ 
                width: '100%',
                mt: 4,
                mb: 8,
              }}
            >
              <RollingGallery autoplay pauseOnHover />
            </Box>
          </motion.div>
        </Container>
      </Box>
    </Box>
  );
};

export default About; 