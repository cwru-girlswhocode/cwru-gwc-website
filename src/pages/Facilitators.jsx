import {useState, useEffect} from "react";
import {ThemeProvider} from '@mui/material/styles'; 
import theme from '../styles/Styles.jsx'; 
import { motion } from "framer-motion";
import './page.css';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { facilitatorForm } from '../Links.jsx';
import {  Typography, Divider, Paper, Stack, Grid, IconButton, Chip, Card, CardMedia, CardContent, CardActions} from "@mui/material"; 
import CheckIcon from '@mui/icons-material/Check';
import useGoogleSheets from 'use-google-sheets';
import PageTitle from "../components/PageTitle.jsx";
import Reveal from "../styles/Reveal.jsx";
import StaggerItem from "../styles/StaggerItems.jsx";
import { SignalWifiStatusbarConnectedNoInternet4TwoTone } from "@mui/icons-material";
import { GOOGLE_API_KEY, SPREADSHEET_ID } from '../constants';

export default function Facilitators() {
   const [filteredInfo, setFilteredInfo] = useState([]);
   const [info, setInfo] = useState([]);
   const [activeChips, setActiveChips] = useState({
      'all': 'filled', 
      'arduino': 'outlined', 
      'python': 'outlined', 
      'exec': 'outlined'
   }); 

   const resetAllChips = {
      'all': 'outlined', 
      'arduino': 'outlined', 
      'python': 'outlined', 
      'exec': 'outlined'
   }

   const { data, loading, error } = useGoogleSheets({
      apiKey: GOOGLE_API_KEY,
      sheetId: SPREADSHEET_ID,
      sheetsOptions: [{ id: 'Facilitator Pics' }],
    });

   useEffect(() => {
      if(data[0]) {
         setInfo(data[0].data)
         setFilteredInfo(data[0].data)
      }
      
      setActiveChips({
         'all': 'filled', 
         'arduino': 'outlined', 
         'python': 'outlined', 
         'exec': 'outlined'
      })

   }, [data])

   const handleFilterClick = (e) => {
      console.log(e)
      const chipName = e.target.firstChild.nodeValue.split(' ')[0].toLowerCase();
     //switch variant 
      let newObj = activeChips; 

      //if none clicked, default select all
      if(activeChips['all'] === 'outlined' 
         && activeChips['python'] === 'outlined'
         && activeChips['arduino'] === 'outlined'
         && activeChips['exec'] === 'outlined')  {
            newObj = {
               ...resetAllChips, 
               'all': 'filled'
            }
      }
      //if clicked chip that is currently selected, go back to 'all'
      else if(activeChips[chipName] === 'filled') {
         newObj = {
            ...resetAllChips, 
            'all': 'filled'
         }
      }
      else {
         newObj = {
            ...resetAllChips, 
            [chipName]: activeChips[chipName] === 'outlined' ? 'filled' : 'outlined'
         }
      }
   
      setActiveChips(newObj);

      let newInfo = []; 

      if(newObj['all'] === 'filled') {
         newInfo = info;  
      } else if(chipName === 'exec') {
         newInfo = info.filter(obj => obj["Role"] !== ""); 
      } else {
         newInfo = info.filter(obj => obj["Type"].toLowerCase() === chipName); 
      }

      setFilteredInfo(newInfo); 
   }

   const iconBtnStyle = {
      borderRadius: '10px',
      // border: '3px solid #EFEFEF',
      '&:hover': {
         color: '#009ECE', 
         backgroundColor: '#EFEFEF',
      },
   }

   const linkStyle = {
      textTransform: 'unset !important', 
      color: '#009ECF',
      fontWeight: '700',
      textDecoration: 'underline',
      '&:hover': {
         color: "#B2E5F7",
      },
   }

   const chipStyle = {
      fontFamily: 'Poppins', 
      fontWeight: '400',
      fontSize: {xs: '14px', md: '18px', xl: '30px'}, 
      p: '2vh', 
   }

   const Chips = (sessionType, execRole) => {
      return (
         <Stack direction='column' alignItems='center' justifyContent='center' spacing={2} sx={{pt: '2%', width: '100%'}}>
            {execRole !== '' && <Chip label={execRole} sx={{mr: '3%', fontFamily: 'Open Sans', fontSize: '2vh', fontWeight: 500, backgroundColor: '#F4E6F2'}} />}
            {execRole === '' && <div />}
            {sessionType === 'Python' && <Chip label="Python Facilitator" sx={{mr: '3%', fontFamily: 'Open Sans', fontSize: '2vh', fontWeight: 500, backgroundColor: '#cbf0d2'}} />}
            {sessionType === 'Arduino' && <Chip label="Arduino Facilitator" sx={{fontFamily: 'Open Sans', fontSize: '2vh', fontWeight: 500, backgroundColor: '#D6EFF8'}} />}
            {execRole === '' && <br />}
         </Stack>
      );
   }

   return (
      <ThemeProvider theme={theme}>
         <motion.div style={{ background: 'linear-gradient(60deg, rgba(232,232,232,1.00) 6%,rgba(178,229,247,1.00) 90%)', height: '100%'}}
            initial="offscreen"
            whileInView="onscreen"
            viewport={{once: true}}
         >
            <motion.div className="page-background" style={{ textAlign: 'left', height: '100%', padding: "5vh 5%", width: '90%'}}>
               <PageTitle title="Meet Our Facilitators" />

               <Reveal index={1.3}>
                  <Paper elevation={2} sx={{backgroundColor: '#F4F4F4', my: '25px', borderLeft: 'solid 8px', borderColor: '#009ECF', mb: '4vh'}}>
                     <Typography sx={{fontSize: {xs: '16px', md: '22px', xl: '38px'}, p: '3vh'}}>
                        Interested in becoming a facilitator? <a style={linkStyle} target='_blank' rel="noreferrer" href={facilitatorForm} >Apply for next semester!</a> <em>(CWRU students only)</em>
                     </Typography>
                  </Paper>
               </Reveal>
               
               <Reveal index={1.5}>
                  <Typography variant='h4' sx={{fontSize: {xs: '22px', md: '26px', xl: '48px'}, mr: '2%', mb: '2.5vh'}}>
                        Filter Facilitators:
                  </Typography>
               </Reveal>
               <Stack  spacing={2} sx={{mb: '25px', flexWrap: 'wrap', }} alignItems='center' direction={{ xs: 'column', sm: 'row' }} >
                  <StaggerItem index={1.5}>
                     <Chip label="All Facilitators" variant={activeChips['all']} clickable onClick={handleFilterClick} sx={chipStyle} icon={activeChips['all'] === 'filled' ? <CheckIcon /> : ''} />
                  </StaggerItem>

                  <StaggerItem index={1.6}>
                     <Chip label="Exec Board" clickable variant={activeChips['exec']} onClick={handleFilterClick} sx={chipStyle} icon={activeChips['exec'] === 'filled' ? <CheckIcon /> : ''} />
                  </StaggerItem>

                  <StaggerItem index={1.7}>
                     <Chip label="Python Facilitators" variant={activeChips['python']} clickable onClick={handleFilterClick} sx={chipStyle} icon={activeChips['python'] === 'filled' ? <CheckIcon /> : ''}/>
                  </StaggerItem>

                  <StaggerItem index={1.8}>
                     <Chip label="Arduino Facilitators" variant={activeChips['arduino']} clickable onClick={handleFilterClick} sx={chipStyle} icon={activeChips['arduino'] === 'filled' ? <CheckIcon /> : ''} />
                  </StaggerItem>
               </Stack>

               <Grid container justifyContent='center' alignItems='center' columnSpacing={3} rowSpacing={3}>
                  {filteredInfo.map((obj, index) => (
                     <Grid item key={index} alignItems='stretch' xs={10} sm={6} md={4} lg={3}>
                        <Reveal 
                        // index={index > 3 ? index%4 + 1 : 1.5*index}
                           index={1.6}
                        >
                        <Card sx={{ minWidth: 'auto' }}>
                           <CardMedia component='img' 
                           image={`https://drive.google.com/uc?export=view&id=${obj["Image ID"]}`} 
                           height='330vh' width='auto' sx={{display: 'block', mx: 'auto',}} />

                           <CardContent sx={{pt: '5%'}} >
                              <Typography variant='h5' sx={{fontWeight: 600, fontSize:'1.5em', textAlign: 'center', pb: '2%'}}>
                                 {obj["Name"]}
                              </Typography>

                              {Chips(obj["Type"], obj["Role"])} 
                           </CardContent>
                           <CardActions sx={{justifyContent:'end', mt: '-15px'}} disableSpacing>
                              <IconButton href={obj.LinkedIn} target='_blank' size="medium"  sx={iconBtnStyle}>
                                 <LinkedInIcon />
                              </IconButton>
                              <IconButton href={`mailTo: ${obj["Email"]}`} size="medium"  sx={iconBtnStyle}>
                                 <MailOutlineIcon />
                              </IconButton>
                           </CardActions>
                        </Card>
                        </Reveal>
                     </Grid>
                  ))}

               </Grid>
               

            </motion.div>
         </motion.div>
      </ThemeProvider>
   );
}