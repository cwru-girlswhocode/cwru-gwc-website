import React, {useState, useRef} from "react";
import {ThemeProvider} from '@mui/material/styles'; 
import theme from '../styles/Styles.jsx'; 
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

import './page.css';
import pythonCode from '../pictures/python-code.jpg';
import arduino from '../pictures/arduino.jpg';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import { pythonSignUpLink, arduinoSignUpLink } from '../Links.jsx';
import { Button, Container, AppBar, Box, Toolbar, Typography, Paper, Grid, Card, Divider, Stack, CardContent } from "@mui/material"; 
import PageTitle from "../components/PageTitle.jsx";
import Reveal from "../styles/Reveal.jsx";
import StaggerItem from "../styles/StaggerItems.jsx";
// import groupPic from '../pictures/group-photo.jpeg';

export default function Sessions() {

   const btnStyle = {
      textTransform: 'unset !important', 
      fontFamily: 'Poppins', 
      fontWeight: '600',
      fontSize: '16px', 
      color: 'white',
      // backgroundColor: '#7954A1',
      border: "1.5px solid", 
      borderColor: "#009ECE",
      backgroundColor: '#009ECE',
      px: '20px',
      py: '3px',
      '&:hover': {
         backgroundColor: '#E8E8E8',
         color: "#009ECE",
         borderColor: "#009ECE",
         // transform: 'scale(1.1)'
      },
      '&:focus': {
         backgroundColor: '#E8E8E8',
         color: "#009ECE",
         borderColor: "#009ECE",
         // transform: 'scale(1.1)'
      }
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

   const subtitleStyle = {
      fontFamily: 'Poppins',
      fontSize: {xs: '28px', md: '44px', xl: '65px'},
      fontWeight: 700
   }

   return (
      <ThemeProvider theme={theme}>
          <motion.div 
            id="home-page-more"
            style={{ background: 'linear-gradient(60deg, rgba(232,232,232,1.00) 6%,rgba(178,229,247,1.00) 90%)', height: '100%'}}
            initial="offscreen"
            whileInView="onscreen"
            viewport={{once: true}}
         >
            <motion.div className="page-background" style={{ textAlign: 'left', height: '100%', padding: "5vh 5%"}}>
              <PageTitle title="Sessions" />
              
              <Reveal index={1.5}>
                  <Typography variant="body1" sx={{mb: '6vh'}}>
                     CWRU Girls Who Code members are very excited to be providing <strong>free semester-long programs </strong> to introduce high-school girls to basic programming and problem-solving skills. Currently, we are seeking students in the Cleveland area for our programs this fall. Our goal is to help close the gender gap in technology and computer science. We are excited to continue teaching our Intro to Python and Intro to Arduino sessions!

                     <br /> <br />
                     Both sessions will happen in-person on CWRU’s campus. <strong>No previous experience required!</strong>
                  </Typography>
               </Reveal>
               
               <Grid container direction="row" alignItems='stretch' justifyContent='space-between' spacing={5}>
                  <Grid item xs={12} md={6}>
                  <StaggerItem index={1.5}>
                     <Card
                        sx={{
                           backgroundColor: '#E8E8E8', 
                           border: 'solid 2px', 
                           borderColor: '#22252A', 
                           borderRadius: '12px',
                           height: '100%', 
                           // width: '100%', 
                        }}
                     >
                        <CardContent>
                              <Typography variant="h4" sx={{fontWeight: '600', pt: '2%'}}>
                                 Intro to Python
                              </Typography>

                              <img src={pythonCode} style={{width: '100%', align: 'left', padding: "4% 0"}} />

                              <Typography variant='body1' sx={{fontWeight: '600', fontSize: '22px'}}> 
                                 What You Will Learn:
                              </Typography>
                              <Typography variant='body2' sx={{fontSize: '18px', pb: '4%'}}> 
                                 In this course, CWRU GWC will cover the fundamentals of programming in Python. Python is a programming language that is extremely versatile and can be used in many different fields like software engineering, data science, and artificial intelligence.
                                 <br/><br/>
                                 Some previous student projects include coding Connect 4, Battleship, sudoku, and more!
                              </Typography>

                              <Typography variant='body1' sx={{fontWeight: '600', fontSize: '22px'}}> 
                                 When:
                              </Typography>
                              <Typography variant='body2' sx={{fontSize: '18px', pb: '4%'}}> 
                              Every Saturday from 9/23 - 11/18
                              <br /> 10:00 am - 12:00 pm
                              </Typography>

                              <Typography variant='body1' sx={{fontWeight: '600', fontSize: '22px'}}> 
                                 Where:
                              </Typography>
                              <Typography variant='body2' sx={{fontSize: '18px', pb: '4%'}}> 
                                 Case Western Reserve University
                              </Typography>

                              <Button variant="outline" startIcon={<PersonAddIcon />} href={pythonSignUpLink} target="_blank" sx={btnStyle} > 
                                 Sign Up
                              </Button>

                        </CardContent>
                     </Card>
                     </StaggerItem>
                  </Grid>

                  <Grid item xs={12} md={6}>
                  <StaggerItem index={1.75}>
                     <Card
                        sx={{
                           backgroundColor: '#E8E8E8', 
                           border: 'solid 2px', 
                           borderColor: '#22252A', 
                           borderRadius: '12px',
                           height: '100%', 
                           // width: '100%', 
                        }}
                     >
                        <CardContent>
                              <Typography variant="h4" sx={{fontWeight: '600', pt: '2%'}}>
                                 Intro to Arduino
                              </Typography>

                              <img 
                                 src={arduino} 
                                 style={{width: '100%', align: 'left', padding: "4% 0"}}
                              />

                              <Typography variant='body1' sx={{fontWeight: '600', fontSize: '22px'}}> 
                                 What You Will Learn:
                              </Typography>
                              <Typography variant='body2' sx={{fontSize: '18px', pb: '4%'}}> 
                                 In this course, CWRU GWC will be teaching the fundamentals of circuitry and programming using Arduinos. Arduinos are a small electronic computer that can store code and execute tasks with components such as LEDs, servo motors and LED matrices.
                                 <br /><br/>
                                 Some previous student projects include a traffic light simulator, LED matrix flappy bird, and more!
                              </Typography>

                              <Typography variant='body1' sx={{fontWeight: '600', fontSize: '22px'}}> 
                                 When:
                              </Typography>
                              <Typography variant='body2' sx={{fontSize: '18px', pb: '4%'}}> 
                                 Every Sunday from 9/24 - 11/19
                                 <br/>10:00 am - 12:00 pm
                              </Typography>

                              <Typography variant='body1' sx={{fontWeight: '600', fontSize: '22px'}}> 
                                 Where:
                              </Typography>
                              <Typography variant='body2' sx={{fontSize: '18px', pb: '4%'}}> 
                                 Case Western Reserve University
                              </Typography>

                              <Button variant="outline" startIcon={<PersonAddIcon />} href={arduinoSignUpLink} target="_blank" sx={btnStyle} > 
                                 Sign Up
                              </Button>

                        </CardContent>
                     </Card>
                     </StaggerItem>
                  </Grid>
                  
               </Grid>
               
               <Reveal>
               <Paper elevation={2} sx={{backgroundColor: '#F4F4F4', my: '5.5vh', borderLeft: 'solid 8px', borderColor: '#009ECF'}}>
                  <Typography sx={{fontSize: {xs: '18px', md: '22px', xl: '38px'}, p: '3vh'}}>
                     Any questions about our sessions? Check out the <a style={linkStyle} href='/#/contact/faqs'>FAQs</a>.
                  </Typography>
               </Paper>
               </Reveal>
               
               <Reveal>
               <Stack direcion="column" spacing={3} sx={{mb: '-10%'}}>
                  <Typography variant="h3" sx={subtitleStyle} >
                     Hear From Our Facilitators and Students
                  </Typography>
                  <Divider variant="fullWidth" sx={{width: '55%', borderBottomWidth: 3, backgroundColor: "#22252A"}}/>
                  <div className="container">
                     <iframe className="responsive-iframe" src="https://drive.google.com/file/d/1l9s_OtVekWXk5IcUU3ImNmd0MhB0Ndj4/preview"></iframe>
                  </div>
               </Stack>
               </Reveal>
               
            </motion.div>
         </motion.div>
         
      </ThemeProvider>
   );
}

