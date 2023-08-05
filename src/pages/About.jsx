import React, {useState} from "react";
import {ThemeProvider} from '@mui/material/styles'; 
import theme from '../styles/Styles.jsx'; 
import { NavLink } from "react-router-dom";
import './page.css';
import {  Typography, Grid, Card, Divider, Stack, CardContent, CardMedia, CardActionArea } from "@mui/material"; 
import { motion } from "framer-motion";
import KeyboardArrowRightRoundedIcon from '@mui/icons-material/KeyboardArrowRightRounded';
import TerminalIcon from '@mui/icons-material/Terminal';
import SendIcon from '@mui/icons-material/Send';
import GroupsIcon from '@mui/icons-material/Groups';
import SchoolIcon from '@mui/icons-material/School';
import Diversity2Icon from '@mui/icons-material/Diversity2';
import Diversity3Icon from '@mui/icons-material/Diversity3';
import CodeIcon from '@mui/icons-material/Code';
import groupPic from '../pictures/group-photo.jpeg';
import groupPic2 from '../pictures/groupPic2.jpeg';
import whatWeDo from '../pictures/what-we-do.jpeg';
import Reveal from '../styles/Reveal'
import StaggerItem from "../styles/StaggerItems.jsx";
import PageTitle from "../components/PageTitle.jsx";


export default function About() {

   const infoBoxes = [
      {
         text: 'Meet Our Facilitators',
         link: '/about/facilitators', 
         icon: <GroupsIcon sx={{ml: '1vh', mr: '2.5vh', color: "#009ECF", fontSize: {xs: '24px', xl: '45px'} }} />, 
         image: groupPic
      }, 
      {
         text: 'About Our Sessions',
         link: '/sessions', 
         icon: <TerminalIcon sx={{ml: '1vh', mr: '2.5vh', color: "#009ECF", fontSize: {xs: '24px', xl: '45px'} }} />, 
         image: whatWeDo
      }, 
      {
         text: 'Contact Us',
         link: '/contact', 
         icon: <SendIcon sx={{ml: '1vh', mr: '2.5vh', color: "#009ECF", fontSize: {xs: '24px', xl: '45px'} }} />, 
         image: groupPic2
      }
   ]

   const btnStyle = {
      textTransform: 'unset !important', 
      fontFamily: 'Poppins', 
      fontWeight: '600',
      fontSize: '18px', 
      color: '#22252A',
      border: "1.5px solid", 
      borderColor: "#22252A",
      // backgroundColor: '#009ECE',
      px: '20px',
      py: '3px',
      '&:hover': {
         // backgroundColor: '#E8E8E8',
         // backgroundColor: '#009ECE',
         color: "#009ECE",
         borderColor: "#009ECE",
         // transform: 'scale(1.1)'
      },
   }

   const descTextStyle = {
      fontSize: {xs: '18px', md: '24px', xl: '32px'}, 
      fontWeight: 300
   }

   const descTitleStyle = {
      fontSize: {xs: '36px', xl: '46px'},
      fontWeight: 600
   }

   const iconStyle = {
      fontSize: {xs: '45px', md: '60px'}, 
      backgroundColor: '#009ECE', 
      borderRadius: '100%', 
      p: '2vh', 
      color: '#fff'
   }

   const subtitleStyle = {
      fontFamily: 'Poppins',
      fontSize: {xs: '28px', md: '44px', xl: '65px'},
      fontWeight: 700
   }

   return (
      <ThemeProvider theme={theme}>
         <motion.div style={{ background: 'linear-gradient(60deg, rgba(232,232,232,1.00) 6%,rgba(178,229,247,1.00) 90%)', height: '100%'}}
            initial="offscreen"
            whileInView="onscreen"
            viewport={{once: true}}>
            <motion.div className="page-background" style={{ textAlign: 'left', height: '100%', padding: "5vh 5%", width: '90%'}}>
               <PageTitle title="About Us" />

               <Grid container spacing={2} justifyContent='center' alignItems='center' sx={{my: '4vh'}}>
               
               {infoBoxes.map((box, index) => (
                  <Grid item xs={10} sm={6} md={4} key={index} >
                     <StaggerItem index={index+0.75}>
                     <Card sx={{display: 'flex', justifyContent: 'space-between', flexDirection: 'column', pb: '1vh', width: '100%', '&:hover': {backgroundColor: '#EFEFEF', boxShadow: '1px 7px 5px rgba(0,0,0, .25)'}}} 
                     >
                        <CardActionArea href={box.link} sx={{'&:hover': { textDecoration: 'unset'}}}>
                           <CardMedia component='img' image={box.image} height='50%' width='full' 
                           sx={{display: 'flex', alignItems: 'center', justifyContent: 'center'}} 
                           />
                           <CardContent sx={{display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'flex-start', textDecoration: 'unset !important',
                           }}>
                              {box.icon}
                              <Typography variant='h6' sx={{fontWeight: '400', alignSelf: 'center', fontSize: {xs: '18px', xl: '32px'}}}>
                                 {box.text}
                              </Typography>
                           </CardContent>
                        </CardActionArea> 
                     </Card>
                     </StaggerItem>
                  </Grid>
               ))}
               
               </Grid>
         
            <Reveal>
            {/* <Paper elevation={2} sx={{background: 'rgba(240, 240, 240, 0.8)', p: '5vh', borderRadius: '12px'}}> */}
               <Stack justifyContent= 'space-around' alignItems='start' spacing={1} sx={{mt: '10vh', mb: '4vh'}}>
                     <Typography variant='h4' sx={descTitleStyle}>
                        Who We Are: 
                     </Typography>
                     <Grid container rowSpacing={3} columnSpacing={2}>
                        <Grid item xs={12} md={6}>
                           <Stack direction='row' alignItems='center' spacing={2}>
                              <GroupsIcon sx={iconStyle} />
                              <Typography variant='h5' sx={descTextStyle}>
                                 <span style={{fontWeight: 550}}>22 Facilitators</span> of CWRU graduate and undergraduate students
                              </Typography>
                           </Stack>
                        </Grid>
                        <Grid item xs={12} md={6}>
                           <Stack direction='row' alignItems='center' spacing={2}>
                              <SchoolIcon sx={iconStyle} />
                              <Stack direction='column'>
                                 <Typography variant='h5' sx={{fontSize: {xs: '18px', md: '24px', xl: '32px'},fontWeight: 550}}>
                                    Over 5 Areas of Study
                                 </Typography>
                                 <Typography variant='body1' sx={{fontSize: {xs: '16px', md: '20px', xl: '28px'}}}>
                                    including computer/data science, systems biology, biomedical engineering, psychology and more!
                                 </Typography>
                              </Stack>
                              
                           </Stack>
                        </Grid>
                     </Grid>
               </Stack>
            </Reveal>
            {/* </Paper> */}
            <Reveal>
               <Stack justifyContent= 'space-around' alignItems='start' spacing={3} sx={{mb: '5vh'}}>
                  <Typography variant='h4' sx={descTitleStyle}>
                     Our Goal: 
                  </Typography>
                  <Stack direction='row' alignItems='center' spacing={2} sx={{pl: '13px'}}>
                     <Diversity2Icon sx={iconStyle} />
                     <Typography variant='h5' sx={descTextStyle}>
                        Help close the gender gap in the technology field by exposing high school students to opportunities within the tech industry with free weekly sessions.
                     </Typography>
                  </Stack>
                  
               </Stack>
            </Reveal>

            <Reveal>
               <Stack justifyContent= 'space-around' alignItems='start' spacing={1} sx={{mb: '10vh'}}>
                     <Typography variant='h4' sx={descTitleStyle}>
                        What We Do: 
                     </Typography>
                     <Grid container rowSpacing={3} columnSpacing={2}>
                        <Grid item xs={12} md={6}>
                           <Stack direction='row' alignItems='center' spacing={2}>
                              <CodeIcon sx={iconStyle} />
                              <Typography variant='h5' sx={descTextStyle}>
                                 Host <span style={{fontWeight: 550}}>2 weekly sessions</span> introducing programming and problem-solving skills with Python and Arduino
                              </Typography>
                           </Stack>
                        </Grid>
                        <Grid item xs={12} md={6}>
                           <Stack direction='row' alignItems='center' spacing={2}>
                              <Diversity3Icon sx={iconStyle} />
                              <Typography variant='h5' sx={descTextStyle}>
                                 Foster a supportive community for underrepresented genders pursuing the tech field
                              </Typography>
                              
                           </Stack>
                        </Grid>
                     </Grid>
               </Stack>
            </Reveal>

            {/* for computer */}
            <Reveal>
            <Stack direction="column" sx={{mt: '8vh', mb: '2vh', display: {xs: 'none', md: 'block'} }} spacing={4}>
               <Typography variant="h3" sx={subtitleStyle}>
                  Why is Girls Who Code important?
               </Typography>
               <Divider variant="fullWidth" sx={{width: '50vh', borderBottomWidth: 3, backgroundColor: "#22252A"}}/>
               <div>
                  <iframe width="100%" height="600vh" src="https://www.youtube.com/embed/jFms7zHxDlM" title="Cracking the Gender Code" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen />
                  <Typography variant='body2' sx={{fontStyle: 'italic', fontSize: '18px', pt: '5px'}}>
                     Source: &quot;Cracking the Gender Code&quot;, Girls Who Code (2016)
                  </Typography>
               </div>
            </Stack>
            </Reveal>

            {/* for mobile */}
            <Reveal>
            <Stack direction="column" sx={{mb: '4vh', display: {xs: 'block', md: 'none'} }} spacing={4}>
               <Typography sx={subtitleStyle}>
                  Why is Girls Who Code important?
               </Typography>
               <Divider variant="fullWidth" sx={{width: '60%', borderBottomWidth: 3, backgroundColor: "#22252A"}}/>
               <div>
                  <iframe width="100%" height="350vh" src="https://www.youtube.com/embed/jFms7zHxDlM" title="Cracking the Gender Code" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen />
                  <Typography variant='body2' sx={{fontStyle: 'italic', fontSize: '18px', pt: '5px'}}>
                     Source: "Cracking the Gender Code", Girls Who Code (2016)
                  </Typography>
               </div>
            </Stack>
            </Reveal>
            <br/>

         </motion.div>
      </motion.div>

      
      </ThemeProvider>
   );
}