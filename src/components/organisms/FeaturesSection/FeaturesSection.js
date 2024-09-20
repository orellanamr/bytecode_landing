import React from 'react';
import Grid from '@mui/material/Grid';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { useTranslation } from 'react-i18next';
import Card from '@mui/material/Card';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import featuresIconLines from '../../../assets/images/featuresIconLines.svg';
import mobileAppIcon from '../../../assets/images/mobile_app_icon.svg';
import devAppIcon from '../../../assets/images/web_dev_icon.svg';
import qaConsultingIcon from '../../../assets/images/qaConsultingIcon.svg';

const FeaturesSection = () => {
  const { t } = useTranslation();

  return (
    <Grid container spacing={2} sx={{ padding: '150px 0px 50px' }}>
      <Grid xs={12} md={3} sx={{ padding: '0px 60px 30px' }}>
        <Typography
          variant="h3"
          fontFamily="Aeonik"
          fontWeight="bold"
          color="#010101"
        >
          {t('featuresSection.features_title')}
        </Typography>
        <Typography variant="body1" fontFamily="Aeonik" color="#010101" mt={2}>
          {t('featuresSection.features_description')}
        </Typography>
        <Box mt={4}>
          <img src={featuresIconLines} alt="Icono" style={{ width: '150px' }} />
        </Box>
      </Grid>

      {/* Carrusel */}
      <Grid xs={12} md={9}>
        <Swiper spaceBetween={30} slidesPerView={2.5}>
          <SwiperSlide>
            <Card
              sx={{
                minHeight: '250px',
                padding: '50px 50px',
                backgroundColor: '#FFFFFF',
                borderRadius: '20px',
                boxShadow: 'none',
              }}
            >
              <span className="icon">
                <img src={mobileAppIcon} alt="Mobile App Icon" />
              </span>{' '}
              <Typography variant="h4" fontFamily="Aeonik" fontWeight="bold">
                {t('featuresSection.mobile_app_title')}
              </Typography>
              <Typography variant="body1" fontFamily="Aeonik" mt={1}>
                {t('featuresSection.mobile_app_description')}
              </Typography>
            </Card>
          </SwiperSlide>
          <SwiperSlide>
            <Card
              sx={{
                minHeight: '250px',
                padding: '50px 50px',
                backgroundColor: '#DDF247',
                borderRadius: '20px',
                boxShadow: 'none',
              }}
            >
              <span className="icon">
                <img src={devAppIcon} alt="Web Development Icon" />
              </span>{' '}
              <Typography variant="h4" fontFamily="Aeonik" fontWeight="bold">
                {t('featuresSection.web_dev_title')}
              </Typography>
              <Typography variant="body1" fontFamily="Aeonik" mt={1}>
                {t('featuresSection.web_dev_description')}
              </Typography>
            </Card>
          </SwiperSlide>
          <SwiperSlide>
            <Card
              sx={{
                minHeight: '250px',
                padding: '50px 50px',
                backgroundColor: '#FFFFFF',
                borderRadius: '20px',
                boxShadow: 'none',
              }}
            >
              <span className="icon">
                <img src={qaConsultingIcon} alt="QA Consulting Icon" />
              </span>{' '}
              <Typography variant="h4" fontFamily="Aeonik" fontWeight="bold">
                {t('featuresSection.qa_title')}
              </Typography>
              <Typography variant="body1" fontFamily="Aeonik" mt={1}>
                {t('featuresSection.qa_description')}
              </Typography>
            </Card>
          </SwiperSlide>
        </Swiper>
      </Grid>
    </Grid>
  );
};

export default FeaturesSection;
