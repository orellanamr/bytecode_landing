import React from 'react';
import { useTranslation } from 'react-i18next';
import { Select, MenuItem } from '@mui/material';

function LanguageSwitcher() {
  const { i18n } = useTranslation();

  const changeLanguage = event => {
    const selectedLanguage = event.target.value;
    i18n.changeLanguage(selectedLanguage);
  };

  return (
    <Select
      value={i18n.language}
      onChange={changeLanguage}
      sx={{ color: '#505050', backgroundColor: '#FFFFFF' }}
    >
      <MenuItem value="en">English</MenuItem>
      <MenuItem value="es">Español</MenuItem>
    </Select>
  );
}

export default LanguageSwitcher;
