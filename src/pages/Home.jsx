import {useRef, useState, useEffect} from "react";
import {ThemeProvider} from '@mui/material/styles'; 
import theme from '../styles/Styles.jsx'; 
import { Helmet } from "react-helmet";

import '../App.css';
import { Button, IconButton, Typography, Grid, Card, CardMedia, CardActions, Divider, Stack, CardContent, ImageList, ImageListItem, ImageListItemBar, Box } from "@mui/material";  
import ExpandMoreRoundedIcon from '@mui/icons-material/ExpandMoreRounded';
import ChevronRightRoundedIcon from '@mui/icons-material/ChevronRightRounded';
import ExitToAppRoundedIcon from '@mui/icons-material/ExitToAppRounded';
import { motion } from "framer-motion";
import arduinoPic from '../pictures/group-arduino.jpg';
import pythonPic from '../pictures/what-we-do.jpeg';
import ImageSlider from "../components/ImageSlider.jsx";
import { getSheet } from "../api.jsx";

import image0 from '../pictures/group-photo.jpeg';
import image1 from "../pictures/groupPic3.jpeg";
import image2 from '../pictures/carousel-pics/IMG_6995.jpeg';
import image3 from '../pictures/carousel-pics/IMG_8284.jpeg';
import image4 from '../pictures/carousel-pics/IMG_7662.jpeg';
import image5 from '../pictures/what-we-do-pic.jpeg'
import Reveal from "../styles/Reveal.jsx";
import StaggerItem from "../styles/StaggerItems.jsx";

export default function Home() {
   const theRef = useRef(null); 
   const [isBouncing, setIsBouncing] = useState(true);
   const [python, setPython] = useState({});
   const [arduino, setArduino] = useState({}); 

   const bounceTransition = {
      type: 'spring', 
      stiffness: 21, 
      mass: 2, 
      damping: 0,
    }

   const scrollDown = () => {
      theRef.current.scrollIntoView(); 
   }

   const handleButtonClick = () => {
      if(isBouncing) {
         setIsBouncing(false);
      }

      scrollDown(); 
    };

    const btnStyle = {
      textTransform: 'unset !important', 
      fontFamily: 'Poppins', 
      fontWeight: '600',
      fontSize: '16px', 
      border: "2px solid", 
      backgroundColor: '#22252A',
      color: "#fff",
      borderColor: "#22252A",
      px: '20px',
      py: '3px',
      transition: '0.5s',
      '&:hover': {
         borderColor: "#22252A",
         backgroundColor: '#E9E9E9',
         color: '#22252A',
         transition: '0.5s'
      },
   }

   const btnStyle2 = {
      textTransform: 'unset !important', 
      fontFamily: 'Poppins', 
      fontWeight: '600',
      fontSize:{xs: '13px', md: '16px', xl: '22px'},  
      color: 'white',
      border: "1.5px solid", 
      borderColor: "#009ECE",
      backgroundColor: '#009ECE',
      px: '25px',
      py: '3px',
      '&:hover': {
         backgroundColor: '#F5F5F5',
         color: "#009ECE",
         borderColor: "#009ECE",
      },
      '&:focus': {
         backgroundColor: '#F5F5F5',
         color: "#009ECE",
         borderColor: "#009ECE",
      }
   }
    
   const images = [
      image0, image5, image2, image3, image4, image1
   ]

   useEffect(() => {
      const fetchData = async () => {
         try {
            const incomingData = await getSheet('Semester Info');

            let tempData = incomingData[0].data;

            setPython(tempData[0]);
            setArduino(tempData[1]);
         } catch (error) {
            console.error(error);
         }
      }

      fetchData();
   }, []);

   return (
      <ThemeProvider theme={theme}>
         <Helmet>
            <meta charSet="utf-8" />
            <title>CWRU Girls Who Code</title>
            <link rel="canonical" href="https://cwrugirlswhocode.com" />
            <meta name="description" content="Case Western Reserve University's chapter of Girls Who Code"/>
         </Helmet>
         <motion.div 
            style={{background: 'linear-gradient(120deg, rgba(232,232,232,1.00) 6%,rgba(178,229,247,1.00) 58%,rgba(0,158,206,1.00) 99%)', backgroundPosition: 'center center', height: "100%", padding: "75px 0 125px 0" }}
         >
            <motion.div 
               className="page-background" 
               style={{margin: '0 8%', textAlign: 'left'}}
            >
               <Reveal index={1.5}>
               <Typography variant="h1" sx={{
                  // fontSize: '76px',
                  fontSize: {xs: '36px', md: '72px', xl: '104px'}, 
                  pt: '3%'}}>
                     Girls Who Code
               </Typography>
               <Typography variant="h3" sx={{
                  px: '2px', py: '1vh', textAlign: 'left', 
                  fontSize: {xs: '24px', md: '40px', xl: '70px'},
                  fontWeight: '500',
               }}>
                  Case Western Reserve University
               </Typography>
               <Typography variant="h5" sx={{px: '5px', my: 'max(28px, 6vh)', width: {xs: '80%', md: '65%'}, fontSize: {xs: '17px', md: '26px', xl: '40px'} }}>
                  Motivated to close the gender gap within the field of computer science by encouraging high school students to enter the field of tech.
               </Typography>
               
               <motion.div 
                  initial={{y: 0}}
                  animate={{
                     y: [7, -7], 
                  }}               
                  transition= {isBouncing ? bounceTransition : {} }
                  style={{marginTop: '7vh', marginLeft: '-5px'}}
               >
                  <IconButton color="secondary" size="large" onClick={handleButtonClick} >
                     <ExpandMoreRoundedIcon fontSize="large" sx={{transform: 'scale(1.5)', color: '#6B6D71', 
                        fontSize: {xs: '24px', md: '32px', xl: '52px'} }} 
                     />
                  </IconButton>
               </motion.div>
               </Reveal>
            
         </motion.div>
              
      </motion.div>
         <motion.div 
            id="home-page-more"
            style={{ background: 'linear-gradient(60deg, rgba(232,232,232,1.00) 6%,rgba(178,229,247,1.00) 58%,rgba(0,158,206,1.00) 99%)'}}
         >
            <motion.div className="page-background" ref={theRef} style={{ 
               textAlign: 'left', height: '100%', padding: "9vh 8%" }} >
               <Reveal index={1}>
                  <Typography variant="h2" sx={{fontSize: {xs: '36px', md: '53px', xl: '75px'} }}>
                        Our Mission
                  </Typography>
                  <Divider variant="fullWidth" sx={{width: '55%', my: '4vh', borderBottomWidth: 3, backgroundColor: "#22252A",}}/>
                  <Grid container spacing={3}>
                     <Grid item xs={12} md={6} justifyContent='space-evenly' sx={{alignItems: 'stretch', justifyContent: 'space-between'}}>
                        <Typography variant="body1" sx={{mb: '2vh', fontSize: {xs: '16px', md: '23px', xl: '36px'}, width: '97%' }}>
                           Girls Who Code’s mission is to close the gender gap in technological fields. By focusing on students in the age group of 13-17 who identify as female and nonbinary, we hope to expose them to the opportunities that they could have in the tech industry and diversify the field, pushing for equity and inclusion.
                        </Typography>
                        <br/>
                        <Button variant="outline" 
                           href='/#/about'
                           sx={{ ...btnStyle, 
                           // mt: '4vh',
                           // mb: '5vh', 
                           px: '5vh',
                           fontSize: {xs: '13px', md: '16px', xl: '24px'}, 
                           mt: {xs: '-3vh', md: '1vh'}
                           }}
                           endIcon={<ChevronRightRoundedIcon/>}
                        >
                           Learn More About Us
                        </Button>
                     </Grid>

                     <Grid item xs={12} md={6}>
                        <ImageSlider images={images} />
                     </Grid>
                  </Grid> 
               </Reveal>
            </motion.div>
         </motion.div>

         <motion.div 
            style={{ background: 'linear-gradient(110deg, rgba(232,232,232,1.00) 6%,rgba(178,229,247,1.00) 58%,rgba(0,158,206,1.00) 99%)'}}
            initial="offscreen"
            whileInView="onscreen"
            viewport={{once: true}}
         >
            <motion.div className="page-background" style={{ textAlign: 'left', height: '100%', padding: "9vh 8%"}}>
               <Reveal>
                  <Typography variant="h2" sx={{fontSize: {xs: '36px', md: '53px', xl: '75px'}}}>
                     Sessions We Offer
                  </Typography>
                  <Divider variant="fullWidth" sx={{width: '55%', my: '4vh', borderBottomWidth: 3, backgroundColor: "#22252A",}}/>

                  <Typography variant="body1" sx={{fontSize: {xs: '16px', md: '23px', xl: '36px'},}}>
                     CWRU Girls Who Code members are very excited to be providing <strong>free semester-long programs </strong> to introduce high-school girls to basic programming and problem-solving skills. Currently, we are seeking students in the Cleveland area for our programs this fall. We currently offer two weekly sessions for high school students: Intro to Programming with Python and Intro to Arduino.

                  </Typography>
                  
                  <Button variant="outline" 
                     href='/#/sessions'
                     sx={{  ...btnStyle, 
                        px: '5vh',
                        fontSize: {xs: '13px', md: '16px', xl: '24px'}, 
                        mt: {xs: '3vh', md: '5vh', xl: '4vh'}, 
                        mb: {xs: '3.5vh', md: '5.5vh', xl: '4.5vh'}, 
                     }}
                     endIcon={<ChevronRightRoundedIcon/>}
                  >
                     Learn About Our Sessions
                  </Button>
               </Reveal>

               <Grid container justifyContent="space-between" spacing={4}>
                  <Grid item xs={12} md={6}>
                     <StaggerItem index={1.25}>
                        <Card sx={{ minWidth: 300, borderRadius: '10px' }}>
                           <CardMedia component='img' image={pythonPic} height='350' width='auto'  sx={{minWidth: 400, mx: 'auto'}} />
                           <CardContent sx={{px: '5%'}}>
                              <Typography variant='h3' sx={{font: 'Poppins', fontWeight: '800px', pt: '10px', pb: '10px', 
                                 fontSize:{xs: '32px', xl: '45px'},
                              }}>
                                 Intro to Python
                              </Typography>
                              <Typography variant='body1' sx={{fontWeight: '600',fontSize:{xs: '22px', md: '26px',xl: '34px'}}}> 
                                 When:
                              </Typography>
                              <Typography variant='body2' sx={{fontSize:{xs: '16px', md: '20px', xl: '26px'}, pb: '20px'}}> 
                                 {python["Date"]}
                                 <br /> {python["Time"]}
                              </Typography>
                              <Button href={python["Link"]} target='_blank' sx={btnStyle2} endIcon={<ExitToAppRoundedIcon />}>
                                 Sign Up
                              </Button>
                           </CardContent>
                        </Card>
                     </StaggerItem>
                  </Grid>
                  
                  <Grid item xs={12} md={6}>
                     <StaggerItem index={1.5}>
                        <Card sx={{ minWidth: 300, borderRadius: '10px' }}>
                           <CardMedia component='img' image={arduinoPic} height='350' width='auto' sx={{minWidth: 'auto'}} />
                           <CardContent sx={{px: '5%'}}>
                              <Typography variant='h3' sx={{font: 'Poppins', fontWeight: '800px', pt: '10px', pb: '10px', 
                                 fontSize:{xs: '32px', xl: '45px'},
                              }}>
                                 Intro to Arduino
                              </Typography>
                              <Typography variant='body1' sx={{fontWeight: '600',fontSize:{xs: '22px', md: '26px',xl: '34px'}}}> 
                                 When:
                              </Typography>
                              <Typography variant='body2' sx={{fontSize:{xs: '16px', md: '20px', xl: '26px'}, pb: '20px'}}> 
                                 {arduino["Date"]}
                                 <br/>{arduino["Time"]}
                              </Typography>
                              <Button href={arduino["Link"]} target='_blank' sx={btnStyle2} endIcon={<ExitToAppRoundedIcon />}>
                                 Sign Up
                              </Button>
                           </CardContent>
                        </Card>
                     </StaggerItem>
                  </Grid>
                 
               </Grid>
               
            </motion.div>


         </motion.div>
      </ThemeProvider>
   );
}