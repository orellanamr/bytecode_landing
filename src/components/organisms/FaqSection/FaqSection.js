import React, { useState } from 'react';
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
  Box,
} from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import { useTranslation } from 'react-i18next';
import useMediaQuery from '@mui/material/useMediaQuery';

const FAQsSection = () => {
  const { t } = useTranslation();
  const [expanded, setExpanded] = useState(false);

  const isMobile = useMediaQuery('(max-width:600px)');

  const handleChange = panel => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  const faqsData = [
    {
      question: t('faqSection.question_1'),
      answer: t('faqSection.answer_1'),
    },
    {
      question: t('faqSection.question_2'),
      answer: t('faqSection.answer_2'),
    },
    {
      question: t('faqSection.question_3'),
      answer: t('faqSection.answer_3'),
    },
    {
      question: t('faqSection.question_4'),
      answer: t('faqSection.answer_4'),
    },
  ];

  const CustomExpandIcon = ({ isExpanded }) => (
    <Box
      sx={{
        width: '30px',
        height: '30px',
        borderRadius: '50%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: isExpanded ? '#DDF247' : '#FFFFFF',
        border: isExpanded ? 'none' : '2px solid black',
      }}
    >
      {isExpanded ? (
        <RemoveIcon sx={{ color: '#010101' }} />
      ) : (
        <AddIcon sx={{ color: '#DDF247' }} />
      )}
    </Box>
  );

  return (
    <Box
      sx={{
        width: isMobile ? '100%' : '100%',
        margin: 'auto',
        padding: '50px 50px',
        backgroundColor: 'white',
      }}
    >
      <Typography
        variant="h3"
        fontWeight="bold"
        fontFamily="Aeonik"
        textAlign="center"
        marginBottom="20px"
      >
        {t('faqSection.faqSection_title')}
      </Typography>
      {faqsData.map((faq, index) => (
        <Accordion
          key={index}
          expanded={expanded === `panel${index}`}
          onChange={handleChange(`panel${index}`)}
          sx={{ boxShadow: 'none', paddingTop: '20px', paddingBottom: '40px' }}
        >
          <AccordionSummary
            expandIcon={
              <CustomExpandIcon isExpanded={expanded === `panel${index}`} />
            }
            aria-controls={`panel${index}-content`}
            id={`panel${index}-header`}
          >
            <Typography variant="h6" fontFamily="Aeonik" fontWeight="bold">
              {`${index + 1}. ${faq.question}`}
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography fontFamily="Aeonik">{faq.answer}</Typography>
          </AccordionDetails>
        </Accordion>
      ))}
    </Box>
  );
};

export default FAQsSection;
