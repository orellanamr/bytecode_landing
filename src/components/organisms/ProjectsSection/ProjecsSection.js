import React from 'react';
import Grid from '@mui/material/Grid';
import { useTranslation } from 'react-i18next';
import {
  Typography,
  Box,
  Chip,
  Card,
  CardMedia,
  CardContent,
} from '@mui/material';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';
import projectImage1 from '../../../assets/images/project1.png';
import projectImage2 from '../../../assets/images/project2.png';
import projectImage3 from '../../../assets/images/project3.png';

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
  ];

  return (
    <Box sx={{ backgroundColor: 'white', padding: '150px 50px' }}>
      <Grid container spacing={2}>
        {/* Título de la sección */}
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
        <Grid xs={12}>
          <Swiper spaceBetween={20} slidesPerView={3} container spacing={2}>
            {projects.map((project, index) => (
              <SwiperSlide key={index}>
                <Card sx={{ maxWidth: 345 }}>
                  <CardContent>
                    <Typography
                      variant="h5"
                      fontFamily="Aeonik"
                      fontWeight="bold"
                    >
                      {project.title}
                    </Typography>
                    <Box
                      sx={{ display: 'flex', gap: '10px', marginTop: '10px' }}
                    >
                      {project.tags.map((tag, idx) => (
                        <Chip
                          key={idx}
                          label={tag}
                          sx={{
                            backgroundColor:
                              tag === 'React Native' ? '#c1ff00' : '#000000',
                            color: tag === 'React Native' ? '#000' : '#fff',
                          }}
                        />
                      ))}
                    </Box>
                  </CardContent>
                  <CardMedia
                    component="img"
                    height="140"
                    image={project.image}
                    alt={`Image of ${project.title}`}
                  />
                </Card>
              </SwiperSlide>
            ))}
          </Swiper>
        </Grid>
      </Grid>
    </Box>
  );
};

export default OurProjectsSection;
