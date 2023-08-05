import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import CustomizedAccordions from '../components/Accordion.jsx';
import {ThemeProvider} from '@mui/material/styles'; 
import theme from '../styles/Styles.jsx'; 
import StaggerItem from '../styles/StaggerItems.jsx';
// import Reveal from '../styles/Reveal.jsx';

function CustomTabPanel(props) {
  const { children, value, index ,...other } = props;

  return (
    <ThemeProvider theme={theme}>
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <StaggerItem index={1.5}>
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
        </StaggerItem>
      )}
    </div>
    </ThemeProvider>
  );
}

CustomTabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

export default function BasicTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const tabStyle = {
    textTransform: 'unset !important', 
    fontFamily: 'Poppins', 
    fontWeight: '600',
    fontSize: '2.5vh', 
 }

  const tabComponents = 
   [  {
      name: "For High School Students/Parents", 
      item:  <CustomizedAccordions tab={1} />
   },
   {
      name: "For CWRU Students", 
      item:  <CustomizedAccordions tab={2} />
   }];

  return (
    <ThemeProvider theme={theme}>

    <Box sx={{ width: '100%' }}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <StaggerItem index={1}>
          <Tabs value={value} onChange={handleChange} aria-label="tabs" textColor='#22252A' variant='fullWidth' TabIndicatorProps={{
              title: "indicator",
              //hidden: true,
              sx: { backgroundColor: "#009ECF", height: 3} 
            }}
            sx={{
              width: '100%',
              overflow: 'none',
              "& button": { borderRadius: 1 },
              "& button:hover": {backgroundColor: 'rgba(245,245,245, 0.4)' },
              "& button:focus": { backgroundColor: "rgba(245,245,245, 0.4)" },
              "& button:active": { backgroundColor: "rgba(245,245,245, 0.4)" }
            }} >
            {tabComponents.map((tab, index) => (
                <Tab disableRipple key={index} label={tab.name} {...a11yProps(0)} 
              sx={tabStyle}  />

            ))}
        </Tabs>
        </StaggerItem>
      </Box>
      {tabComponents.map((tab, index) => (
        <CustomTabPanel key={tab.name} value={value} index={index}>
            {tab.item}
        </CustomTabPanel>
      ))}
    </Box>
    </ThemeProvider>
  );
}