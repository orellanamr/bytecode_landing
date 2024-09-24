import React, { useState } from 'react';
import {
  Box,
  Typography,
  Card,
  CardContent,
  CardMedia,
  Chip,
  Grid,
  Button,
  IconButton,
} from '@mui/material';
import { ArrowBackIos, ArrowForwardIos } from '@mui/icons-material';
import projectImage1 from '../../../assets/images/project1.png';
import projectImage2 from '../../../assets/images/project2.png';
import projectImage3 from '../../../assets/images/project3.png';
import { useTranslation } from 'react-i18next';

const OurProjectsSection = () => {
  const { t } = useTranslation();

  const projects = [
    {
      title: 'Project 1',
      tags: ['React Native', 'Material UI'],
      image: projectImage1,
    },
    {
      title: 'Project 2',
      tags: ['React Native', 'Redux'],
      image: projectImage2,
    },
    {
      title: 'Project 3',
      tags: ['React Native', 'Redux'],
      image: projectImage3,
    },
    {
      title: 'Project 4',
      tags: ['React', 'GraphQL'],
      image: projectImage1,
    },
    {
      title: 'Project 5',
      tags: ['Next.js', 'TypeScript'],
      image: projectImage2,
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const visibleSlides = 3;

  const handleNext = () => {
    setCurrentIndex(prevIndex =>
      prevIndex + visibleSlides >= projects.length ? 0 : prevIndex + 1
    );
  };

  const handlePrev = () => {
    setCurrentIndex(prevIndex =>
      prevIndex === 0 ? projects.length - visibleSlides : prevIndex - 1
    );
  };

  return (
    <Box sx={{ backgroundColor: 'white', padding: '150px 50px' }}>
      <Grid container spacing={2}>
        <Grid xs={12} sx={{ textAlign: 'center', marginBottom: '20px' }}>
          <Typography
            variant="h3"
            fontFamily="Aeonik"
            fontWeight="bold"
            color="#010101"
            gutterBottom
          >
            {t('ourProjects.ourProjects_title')}
          </Typography>
          <Typography variant="body1" fontFamily="Aeonik" color="#555555">
            {t('ourProjects.ourProjects_description')}
          </Typography>
        </Grid>

        {/* Carrusel de proyectos */}
        <Grid container justifyContent="center" alignItems="center">
          <Grid item xs={1} textAlign="center">
            <IconButton onClick={handlePrev}>
              <ArrowBackIos />
            </IconButton>
          </Grid>

          <Grid item xs={10}>
            <Grid container spacing={2} justifyContent="center">
              {projects
                .slice(currentIndex, currentIndex + visibleSlides)
                .map((project, index) => (
                  <Grid item key={index} xs={12} sm={6} md={4}>
                    <Card
                      sx={{
                        maxWidth: 345,
                        height: 'auto',
                        transition: 'all 0.3s ease',
                        boxShadow:
                          index === 1
                            ? '0px 8px 16px rgba(0, 0, 0, 0.2)'
                            : 'none',
                        borderRadius: '16px',
                      }}
                    >
                      <CardContent>
                        <Typography
                          variant="h5"
                          fontFamily="Aeonik"
                          fontWeight="bold"
                          textAlign="center"
                        >
                          {project.title}
                        </Typography>
                        <Box
                          sx={{
                            display: 'flex',
                            gap: '10px',
                            justifyContent: 'center',
                            marginTop: '10px',
                          }}
                        >
                          {project.tags.map((tag, idx) => (
                            <Chip
                              key={idx}
                              label={tag}
                              sx={{
                                backgroundColor:
                                  tag === 'React Native'
                                    ? '#DDF247'
                                    : '#000000',
                                color: tag === 'React Native' ? '#000' : '#fff',
                              }}
                            />
                          ))}
                        </Box>
                      </CardContent>
                      <CardMedia
                        component="img"
                        height="200"
                        image={project.image}
                        alt={`Image of ${project.title}`}
                      />
                    </Card>
                  </Grid>
                ))}
            </Grid>
          </Grid>

          <Grid item xs={1} textAlign="center">
            <IconButton onClick={handleNext}>
              <ArrowForwardIos />
            </IconButton>
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
};

export default OurProjectsSection;
