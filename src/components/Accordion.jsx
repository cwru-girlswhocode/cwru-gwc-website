import * as React from 'react';
import {useEffect, useState} from 'react';
import { styled } from '@mui/material/styles';
import ArrowForwardIosSharpIcon from '@mui/icons-material/ArrowForwardIosSharp';
import MuiAccordion from '@mui/material/Accordion';
import MuiAccordionSummary from '@mui/material/AccordionSummary';
import MuiAccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import {ThemeProvider} from '@mui/material/styles'; 
import theme from '../styles/Styles.jsx';
import { getSheet } from "../api.jsx";

const Accordion = styled((props) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
  border: `1px solid ${theme.palette.divider}`,
  '&:not(:last-child)': {
    borderBottom: 0,
  },
  '&:before': {
    display: 'none',
  },
  
  
}));

const AccordionSummary = styled((props) => (
  <MuiAccordionSummary
    expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: '0.9rem', color: '#ffffff', }} />}
    {...props}
  />
))(({ theme }) => ({
   color: '#ffffff',
  backgroundColor: '#22252A',
  flexDirection: 'row-reverse',
  '& .MuiAccordionSummary-expandIconWrapper.Mui-expanded': {
    transform: 'rotate(90deg)',
  },
  '& .MuiAccordionSummary-content': {
    marginLeft: theme.spacing(2),
  },
  paddingTop: '10px',
  paddingBottom: '10px', 
  '&:hover': {
   backgroundColor: '#009ECF'
}
  
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  padding: theme.spacing(2),
  borderTop: '1px solid rgba(0, 0, 0, .125)',
  color: '#ffffff', 
}));

export default function CustomizedAccordions(tab) {
  const [expanded, setExpanded] = useState('panel1');
  const [sheet, setSheet] = useState([]);

  useEffect(() => {
    try {
      const fetchData = async () => {
        const incomingStudentData = await getSheet('Student Questions');
        const incomingParentData = await getSheet('Parent Questions');

        if (tab.tab === 1 && incomingStudentData) {
          setSheet(incomingStudentData[0].data);
        } else if (tab.tab === 2 && incomingParentData) {
          setSheet(incomingParentData[0].data);
        }
      }

      fetchData();
    } catch (error) {
      console.error(error);
    }
  }, [tab.tab])

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

  return (
   <ThemeProvider theme={theme}>

    <div>
      {Array.isArray(sheet) && sheet.map((row, index) => (
         <Accordion expanded={expanded === `panel${index + 1}`} onChange={handleChange(`panel${index + 1}`)} key={index}>
            <AccordionSummary aria-controls={`panel1d${index + 1}-content`} id={`panel${index + 1}d-header`}>
              <Typography variant='h5' sx={{fontWeight: 500, color: '#ffffff', fontSize: {xs: '16px', md: '22px', xl: '30px'}}}>{row['Question']}</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography variant='body1' sx={{pl: '5vh', fontSize: {xs: '14px', md: '20px', xl: '28px'}}}>
                {row["Answer"]}
              </Typography>
            </AccordionDetails>
       </Accordion>

      ))}
    </div>
    </ThemeProvider>
  );
}
