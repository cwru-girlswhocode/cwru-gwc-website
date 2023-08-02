import {useRef, useState, useEffect} from "react";
import {ThemeProvider} from '@mui/material/styles'; 
import theme from '../styles/Styles.jsx'; 
// import { Link } from "react-router-dom";
// import Dropdown from '../components/Dropdown'

import '../App.css';
import { Button, IconButton, Typography, Grid, Card, CardMedia, CardActions, Divider, Stack, CardContent, ImageList, ImageListItem, ImageListItemBar, Box } from "@mui/material";  
import ExpandMoreRoundedIcon from '@mui/icons-material/ExpandMoreRounded';
import ChevronRightRoundedIcon from '@mui/icons-material/ChevronRightRounded';
import ExitToAppRoundedIcon from '@mui/icons-material/ExitToAppRounded';
import { motion } from "framer-motion";
import arduinoPic from '../pictures/group-arduino.jpg';
import pythonPic from '../pictures/what-we-do.jpeg';
import { pythonSignUpLink, arduinoSignUpLink } from '../Links.jsx';
import ImageSlider from "../components/ImageSlider.jsx";

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
         // console.log("button clicked")
      }

      scrollDown(); 
    };

    const btnStyle = {
      textTransform: 'unset !important', 
      fontFamily: 'Poppins', 
      fontWeight: '600',
      fontSize: '16px', 
      border: "1.5px solid", 
      backgroundColor: '#22252A',
      color: "#fff",
      borderColor: "#22252A",
      px: '20px',
      py: '3px',
      transition: '0.5s',
      '&:hover': {
         backgroundColor: '#22252A',
         color: "#fff",
         borderColor: "#22252A",
         letterSpacing: '2px',
         transition: '0.5s'
      },
   }

   const btnStyle2 = {
      textTransform: 'unset !important', 
      fontFamily: 'Poppins', 
      fontWeight: '600',
      fontSize: '16px', 
      color: 'white',
      border: "1.5px solid", 
      borderColor: "#009ECE",
      backgroundColor: '#009ECE',
      px: '20px',
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

   return (
      <ThemeProvider theme={theme}>
         <motion.div 
            style={{background: 'linear-gradient(120deg, rgba(232,232,232,1.00) 6%,rgba(178,229,247,1.00) 58%,rgba(0,158,206,1.00) 99%)', backgroundPosition: 'center center', height: "100vh", padding: "75px 0 125px 0"}}
         >
            <motion.div 
               className="page-background" 
               style={{margin: '0 8%', textAlign: 'left'}}
            >
               <Reveal index={1.5}>
               <Typography variant="h1" sx={{fontSize: '76px', pt: '3%'}}>
                     Girls Who Code
               </Typography>
               <Typography variant="h3" sx={{px: '5px', py: '1%'}}>
                  Case Western Reserve University
               </Typography>
               <Typography variant="h5" sx={{px: '5px', my: '8vh', width: '60%'}}>
                  Motivated to close the gender gap within the field of computer science by encouraging high school students to enter the field of tech.
               </Typography>
               
               <motion.div 
                  initial={{y: 0}}
                  animate={{
                     y: [7, -7], 
                  }}               
                  transition= {isBouncing ? bounceTransition : {} }
               >
                  <IconButton color="secondary" size="large" onClick={handleButtonClick} >
                     <ExpandMoreRoundedIcon fontSize="large" sx={{transform: 'scale(1.5)', color: '#6B6D71'}} />
                  </IconButton>
               </motion.div>
               </Reveal>
            
         </motion.div>
              
      </motion.div>
         <motion.div 
            id="home-page-more"
            style={{ background: 'linear-gradient(60deg, rgba(232,232,232,1.00) 6%,rgba(178,229,247,1.00) 58%,rgba(0,158,206,1.00) 99%)'}}
         >
            <motion.div className="page-background" ref={theRef} style={{ textAlign: 'left', height: '100%', padding: "8% 8%"}} >
               <Reveal index={1}>
                  <Typography variant="h2" >
                        Our Mission
                  </Typography>
                  <Divider variant="fullWidth" sx={{width: '55%', my: '5vh', borderBottomWidth: 3, backgroundColor: "#22252A"}}/>
                  <Grid container spacing={5}>
                     <Grid item xs={12} md={6} justifyContent='space-evenly' sx={{alignItems: 'stretch'}}>
                        <Typography variant="body1" sx={{fontSize: '22px', mb: '2vh'}}>
                           Girls Who Code’s mission is to close the gender gap in technological fields. By focusing on students in the age group of 13-17 who identify as female and nonbinary, we hope to expose them to the opportunities that they could have in the tech industry and diversify the field, pushing for equity and inclusion.
                        </Typography>
                        <Button variant="outline" 
                           href='/about'
                           sx={{ ...btnStyle, 
                           mt: '4vh',
                           mb: '5vh', 
                           px: '5vh',
                           fontSize: '16px',                   
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
            <motion.div className="page-background" style={{ textAlign: 'left', height: '100%', padding: "8% 8%"}}>
               <Reveal>
                  <Typography variant="h2" >
                     Sessions We Offer
                  </Typography>
                  <Divider variant="fullWidth" sx={{width: '55%', my: '5vh', borderBottomWidth: 3, backgroundColor: "#22252A"}}/>

                  <Typography variant="body1">
                     CWRU Girls Who Code members are very excited to be providing <strong>free semester-long programs </strong> to introduce high-school girls to basic programming and problem-solving skills. Currently, we are seeking students in the Cleveland area for our programs this fall. We currently offer two weekly sessions for high school students: Intro to Programming with Python and Intro to Arduino.

                  </Typography>
                  
                  <Button variant="outline" 
                     href='/about'
                     sx={{  ...btnStyle, 
                        mt: '4vh',
                        mb: '5vh', 
                        px: '5vh',
                        fontSize: '16px',  }}
                     endIcon={<ChevronRightRoundedIcon/>}
                  >
                     Learn About Our Sessions
                  </Button>
               </Reveal>

               <Grid container justifyContent="space-between" spacing={4}>
                  <Grid item xs={12} md={6}>
                     <StaggerItem index={1.25}>
                        <Card sx={{ minWidth: 300, borderRadius: '10px' }}>
                           <CardMedia component='img' image={pythonPic} height='auto' width='50%'  sx={{minWidth: 400, mx: 'auto'}} />
                           <CardContent sx={{px: '5%'}}>
                              <Typography variant='h3' sx={{font: 'Poppins', fontSize:'32px', fontWeight: '800px', py: '3%'}}>
                                 Intro to Python
                              </Typography>
                              <Typography variant='body1' sx={{fontWeight: '600', fontSize: '22px'}}> 
                                 When:
                              </Typography>
                              <Typography variant='body2' sx={{fontSize: '18px', pb: '4%'}}> 
                                 Every Saturday from 9/23 - 11/18
                                 <br /> 10:00 am - 12:00 pm
                              </Typography>
                              <Button href={pythonSignUpLink} target='_blank' sx={btnStyle2} endIcon={<ExitToAppRoundedIcon />}>
                                 Sign Up
                              </Button>
                           </CardContent>
                        </Card>
                     </StaggerItem>
                  </Grid>
                  
                  <Grid item xs={12} md={6}>
                     <StaggerItem index={1.5}>
                        <Card sx={{ minWidth: 300, borderRadius: '10px' }}>
                           <CardMedia component='img' image={arduinoPic} height='auto' width='50%' sx={{minWidth: 'auto'}} />
                           <CardContent sx={{px: '5%'}}>
                              <Typography variant='h3' sx={{font: 'Poppins', fontSize:'32px', fontWeight: '800px', py: '3%'}}>
                                 Intro to Arduino
                              </Typography>
                              <Typography variant='body1' sx={{fontWeight: '600', fontSize: '22px'}}> 
                                 When:
                              </Typography>
                              <Typography variant='body2' sx={{fontSize: '18px', pb: '4%'}}> 
                                 Every Sunday from 9/24 - 11/19
                                 <br/>10:00 am - 12:00 pm
                              </Typography>
                              <Button href={arduinoSignUpLink} target='_blank' sx={btnStyle2} endIcon={<ExitToAppRoundedIcon />}>
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