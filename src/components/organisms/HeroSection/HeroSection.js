import React from 'react';
import { Button, Grid, Typography } from '@mui/material';
import { useTranslation } from 'react-i18next';
import heroImage from '../../../assets/images/heroImage.png';
import LogoByteCode from '../../../assets/images/byteCode_Logo.svg';
import CodeCircle from '../../../assets/images/CodeCircle.svg';
import Icon from '../../../assets/images/icon.svg';
import LanguageSwitcher from '../../molecules/LanguageSwitcher';

const HeroSection = () => {
  const { t } = useTranslation();

  return (
    <Grid container className="hero-section" sx={{ padding: '0px 0px' }}>
      {/* Menú */}
      <Grid
        item
        xs={12}
        container
        justifyContent="space-between"
        sx={{ padding: '32px 50px' }}
      >
        <img src={LogoByteCode} alt="byteCode Logo" />
        <LanguageSwitcher />
      </Grid>

      {/* Contenido Principal */}
      <Grid
        item
        xs={12}
        md={6}
        className="hero-content"
        sx={{ padding: '32px 50px' }}
      >
        <Typography
          variant="h3"
          sx={{ fontWeight: 'medium', mb: 2, padding: '100px 0px 0px 0px' }}
        >
          {t('hero.title1')}
          <span className="icon">
            <img src={CodeCircle} alt="Code Circle" />
          </span>{' '}
        </Typography>
        <Typography
          variant="h3"
          sx={{ fontWeight: 'medium', mb: 2, padding: '0px 0px 50px 0px' }}
        >
          {t('hero.title2')}
        </Typography>

        <Grid item xs={12} container justifyContent="space-between">
          <img src={Icon} alt="byteCode icon" />
        </Grid>

        <Typography variant="h6" sx={{ mb: 4, padding: '0px 0px 50px 0px' }}>
          {t('hero.subtitle')}
        </Typography>
        <Button
          variant="contained"
          href="#cta"
          sx={{ backgroundColor: '#010101', color: 'white' }}
        >
          {t('hero.cta')}
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
