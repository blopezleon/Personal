import React from 'react';
import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  CardMedia,
  CardActions,
  Button,
  Chip,
  Stack,
} from '@mui/material';
import { motion } from 'framer-motion';
import GitHubIcon from '@mui/icons-material/GitHub';
import LaunchIcon from '@mui/icons-material/Launch';
import BlurText from './BlurText';
import styles from './About.module.css';
import LetterGlitch from './LetterGlitch';
import './Projects.css';

const Projects = () => {
  const projects = [
    {
      title: 'Fluent-Form',
      description: 'A full-stack web application built with React and Node.js. Uses phoneme recognition to correct speech impediments and provides feedback and training exercises.',
      image: '../Screenshot 2025-03-11 at 12.01.49 AM.png',
      technologies: ['React', 'Node.js', 'Microsoft Azure', 'OpenAI', 'Express'],
      github: 'https://github.com/blopezleon/goat-idk',
      live: 'https://youtu.be/nVcaHkGg8zA',
    },
    {
      title: 'Love Letter Generator',
      description: 'A fully deployed HTML website that generates a love letter with a joke for my girlfriend to get some of my humor even when I am not available.',
      image: '../Screenshot 2025-03-11 at 12.11.58 AM.png',
      technologies: ['Render', 'OpenAI', 'Node.js', 'GitHub Pages'],
      github: 'https://github.com',
      live: 'https://blopezleon.github.io/MinILoveYou/',
    },
    {
      title: 'Portfolio Website',
      description: 'AWS deployed website that showcases some who I am.',
      image: 'https://via.placeholder.com/400x200',
      technologies: ['React', 'Firebase', 'WebSocket', 'Material-UI'],
      github: 'https://github.com',
      live: 'https://example.com',
    },
  ];

  return (
    <div style={{ position: 'relative', height: '100vh', overflow: 'hidden' }}>
      {/* Background Glitch Effect */}
      <div className="background" style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', zIndex: 0 }}>
        <LetterGlitch 
          glitchColors={['#2b4539', '#61dca3', '#61b3dc']} 
          glitchSpeed={50} 
          centerVignette={true} 
          outerVignette={true} 
          smooth={true} 
        />
      </div>
      
      <Box
        sx={{
          height: '100vh',
          display: 'flex',
          alignItems: 'center',
          background: 'transparent',
          overflow: 'auto',
          zIndex: 1,
          position: 'relative',
        }}
      >
        <Container maxWidth="lg" sx={{ py: 4 }}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.8 }}
          >
            <BlurText text="Featured Projects" className={styles['about-title']} />
            
            <Grid container spacing={4}>
              {projects.map((project, index) => (
                <Grid item xs={12} md={6} lg={4} key={index}>
                  <Card
                    sx={{
                      height: '100%',
                      display: 'flex',
                      flexDirection: 'column',
                      background: (theme) => theme.palette.background.paper,
                      position: 'relative',
                      zIndex: 1,
                    }}
                  >
                    <CardMedia
                      component="img"
                      height="200"
                      image={project.image}
                      alt={project.title}
                    />
                    <CardContent sx={{ flexGrow: 1 }}>
                      <Typography gutterBottom variant="h5" component="h2">
                        {project.title}
                      </Typography>
                      <Typography variant="body2" color="text.secondary" paragraph>
                        {project.description}
                      </Typography>
                      <Stack direction="row" spacing={1} flexWrap="wrap" gap={1}>
                        {project.technologies.map((tech) => (
                          <Chip
                            key={tech}
                            label={tech}
                            size="small"
                            color="primary"
                            variant="outlined"
                          />
                        ))}
                      </Stack>
                    </CardContent>
                    <CardActions>
                      <Button
                        size="small"
                        startIcon={<GitHubIcon />}
                        href={project.github}
                        target="_blank"
                      >
                        Code
                      </Button>
                      <Button
                        size="small"
                        startIcon={<LaunchIcon />}
                        href={project.live}
                        target="_blank"
                      >
                        Live Demo
                      </Button>
                    </CardActions>
                  </Card>
                </Grid>
              ))}
            </Grid>
          </motion.div>
        </Container>
      </Box>
    </div>
  );
};

export default Projects; 