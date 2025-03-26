import React from 'react';
import {
  Box,
  Container,
  Typography,
  Button,
  Stack,
} from '@mui/material';
import { motion } from 'framer-motion';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';
import BlurText from './BlurText';
import styles from './About.module.css';
import InfiniteScroll from './InfiniteScroll';

const Contact = () => {
  // Define contact methods
  const contactMethods = [
    {
      content: (
        <Box 
          sx={{ 
            textAlign: 'center', 
            p: 2,
            height: '100%',
            minHeight: '150px',
            width: '100%',
            backgroundImage: 'url("../gmail.jpg")',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            position: 'relative',
            overflow: 'hidden',
            '&::before': {
              content: '""',
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              backgroundColor: 'rgba(0, 0, 0, 0.5)',
              zIndex: 1,
            },
          }}
        >
          <Box sx={{ position: 'relative', zIndex: 2, color: 'white' }}>
            <Typography variant="h6">Email Me</Typography>
            <Typography variant="body2">You can reach me at myemail@example.com</Typography>
            <Button variant="contained" color="primary" href="mailto:berlopezleon@gmail.com">Send Email</Button>
          </Box>
        </Box>
      ),
    },
    {
      content: (
        <Box 
          sx={{ 
            textAlign: 'center', 
            p: 2,
            height: '100%',
            minHeight: '150px',
            width: '100%',
            backgroundImage: 'url("../linkedIn.jpg")',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            position: 'relative',
            overflow: 'hidden',
            '&::before': {
              content: '""',
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              backgroundColor: 'rgba(0, 0, 0, 0.5)',
              zIndex: 1,
            },
          }}
        >
          <Box sx={{ position: 'relative', zIndex: 2, color: 'white' }}>
            <Typography variant="h6">Connect on LinkedIn</Typography>
            <Button variant="contained" color="primary" href="https://www.linkedin.com/in/bernardoloepzleon/" target="_blank">LinkedIn Profile</Button>
          </Box>
        </Box>
      ),
    },
    {
      content: (
        <Box 
          sx={{ 
            textAlign: 'center', 
            p: 2,
            height: '100%',
            minHeight: '150px',
            width: '100%',
            backgroundImage: 'url("../Instagram.jpg")',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            position: 'relative',
            overflow: 'hidden',
            '&::before': {
              content: '""',
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              backgroundColor: 'rgba(0, 0, 0, 0.5)',
              zIndex: 1,
            },
          }}
        >
          <Box sx={{ position: 'relative', zIndex: 2, color: 'white' }}>
            <Typography variant="h6">Follow Me on Instagram</Typography>
            <Button variant="contained" color="primary" href="https://www.instagram.com/bernie_log_/" target="_blank">Instagram</Button>
          </Box>
        </Box>
      ),
    },
    {
      content: (
        <Box 
          sx={{ 
            textAlign: 'center', 
            p: 2,
            height: '100%',
            minHeight: '150px',
            width: '100%',
            backgroundImage: 'url("../Youtube.jpg")',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            position: 'relative',
            overflow: 'hidden',
            '&::before': {
              content: '""',
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              backgroundColor: 'rgba(0, 0, 0, 0.5)',
              zIndex: 1,
            },
          }}
        >
          <Box sx={{ position: 'relative', zIndex: 2, color: 'white' }}>
            <Typography variant="h6">Check Out My YouTube</Typography>
            <Button variant="contained" color="primary" href="https://www.youtube.com/channel/UCMbDDcmfXzXt_EWGfhWRIDQ" target="_blank">YouTube Channel</Button>
          </Box>
        </Box>
      ),
    },
    {
      content: (
        <Box 
          sx={{ 
            textAlign: 'center', 
            p: 2,
            height: '100%',
            minHeight: '150px',
            width: '100%',
            backgroundImage: 'url("../GitHub.jpg")',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            position: 'relative',
            overflow: 'hidden',
            '&::before': {
              content: '""',
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              backgroundColor: 'rgba(0, 0, 0, 0.5)',
              zIndex: 1,
            },
          }}
        >
          <Box sx={{ position: 'relative', zIndex: 2, color: 'white' }}>
            <Typography variant="h6">Visit My GitHub</Typography>
            <Button variant="contained" color="primary" href="https://github.com/blopezleon" target="_blank">GitHub Profile</Button>
          </Box>
        </Box>
      ),
    },
  ];

  return (
    <Box
      sx={{
        height: '100vh',
        display: 'flex',
        alignItems: 'center',
        background: (theme) => theme.palette.background.default,
        overflow: 'hidden',
      }}
    >
      <Container maxWidth="lg" sx={{ py: 4, height: '100%', overflow: 'hidden' }}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.8 }}
          style={{ position: 'relative', zIndex: 2 }}
        >
          <BlurText text="Get In Touch" className={styles['about-title']} />
          
          <Typography
            variant="body1"
            color="text.secondary"
            sx={{ mb: 6, textAlign: 'center', maxWidth: 600, mx: 'auto' }}
          >
            I'm currently looking for new opportunities. Whether you have a question
            or just want to say hi, I'll try my best to get back to you as soon as possible!
          </Typography>

          <Box style={{ zIndex: 1, position: 'relative' }}>
            <InfiniteScroll
              items={contactMethods}
              width="100%"
              maxHeight="100vh"
              itemMinHeight={150}
              isTilted={true}
              tiltDirection="left"
              autoplay={true}
              autoplaySpeed={1}
              pauseOnHover={true}
            />
          </Box>
        </motion.div>
      </Container>
    </Box>
  );
};

export default Contact; 