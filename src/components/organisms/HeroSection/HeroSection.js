import React from 'react';
import { Button, Grid, Typography } from '@mui/material';
import { useTranslation } from 'react-i18next';
import heroImage from '../../../assets/images/heroImage.png';
import LogoByteCode from '../../../assets/images/byteCode_Logo.svg';
import CodeCircle from '../../../assets/images/CodeCircle.svg';
import Icon from '../../../assets/images/icon.svg';
import MyIcon from '../../../assets/images/icon_arrow-up-right.svg';
import LanguageSwitcher from '../../molecules/LanguageSwitcher';

const HeroSection = () => {
  const { t } = useTranslation();

  return (
    <Grid
      container
      className="hero-section"
      sx={{ padding: '0px 0px 0px 0px' }}
    >
      {/* Menú */}
      <Grid
        item
        xs={12}
        container
        justifyContent="space-between"
        sx={{
          padding: '32px 50px',
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          zIndex: 1000,
          backgroundColor: '#F4F4F4F',
        }}
      >
        <img src={LogoByteCode} alt="byteCode Logo" />
        <LanguageSwitcher />
      </Grid>

      <Grid
        item
        xs={12}
        md={6}
        className="hero-content"
        sx={{ padding: '200px 50px' }}
      >
        <Typography variant="h3" sx={{ fontWeight: 'medium', mb: 2 }}>
          {t('landing_page.hero_title_1')}
          <span className="icon">
            <img src={CodeCircle} alt="Code Circle" />
          </span>{' '}
        </Typography>
        <Typography
          variant="h3"
          sx={{ fontWeight: 'medium', mb: 2, padding: '0px 0px 50px 0px' }}
        >
          {t('hero_title_2')}
        </Typography>

        <Grid item xs={12} container justifyContent="space-between">
          <img src={Icon} alt="byteCode icon" />
        </Grid>

        <Typography variant="h6" sx={{ mb: 4, padding: '0px 0px 50px 0px' }}>
          {t('hero_subtitle')}
        </Typography>
        <Button
          variant="contained"
          href="#cta"
          sx={{
            backgroundColor: '#010101',
            color: 'white',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          {t('hero_cta')}
          <img src={MyIcon} alt="Mi Icono" style={{ marginLeft: '10px' }} />
        </Button>
      </Grid>

      {/* Imagen */}
      <Grid
        item
        xs={12}
        md={6}
        className="hero-image"
        sx={{
          backgroundColor: '#010101',
          position: 'relative',
          display: 'flex',
          alignItems: 'flex-end',
          justifyContent: 'center',
          padding: '0px 0px 0px 0px',
        }}
      >
        <img
          src={heroImage}
          alt="Hero"
          style={{ maxWidth: '100%', height: 'auto' }}
        />
      </Grid>
    </Grid>
  );
};

export default HeroSection;
