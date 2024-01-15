import {ThemeProvider} from '@mui/material/styles'; 
import theme from '../styles/Styles.jsx'; 
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import './page.css';
import {  Typography, Divider, Card, CardActionArea, CardMedia, CardContent, Grid, Box } from "@mui/material"; 
import Reveal from '../styles/Reveal'
import StaggerItem from "../styles/StaggerItems.jsx";
import FadeIn from "../styles/FadeIn";

import gwcLogo from '../pictures/GWC_SEO_Logo.png'
import PageTitle from '../components/PageTitle.jsx';
// import gwcCodeAtHome from '..pictures/'

export default function Resources() {

   const allInfo = [
      {
         title: 'National Girls Who Code Resources', 
         resources: [
            {
               name: 'Girls Who Code Website',
               description: 'Learn more about the opportunities offered by the national organization.', 
               link: 'https://girlswhocode.com/',
               image: gwcLogo
            }, 
            {
               name: '"Code at Home" Activities',
               description: 'Free computer science activities featuring pioneering women in tech.', 
               link: 'https://girlswhocode.com/programs/code-at-home?gclid=Cj0KCQjwqs6lBhCxARIsAG8YcDgqufh-VvcjcH7xgAfJt0f1ywY7qympyXVnhysLQly5OPweQwtUjGwaAgEjEALw_wcB',
               image: 'https://drive.google.com/thumbnail?id=1jqhLiFJtyzel9TVlOWkAnbs8LCKsvZR7'
            },
            {
               name: 'GWC Summer Programs',
               description: 'Girls Who Code offers summer programs for high school students to continue learning about computer science over the summer.', 
               link: 'https://girlswhocode.com/get-involved/start-a-club',
               image: 'https://drive.google.com/thumbnail?id=1QNWabJShM0SwPhu4vZu-jipCPGzyv89f'
            }, 
            {
               name: 'College Student Resources',
               description: "Learn about Girls Who Code's professional development programs and resources for college students.", 
               link: 'https://girlswhocode.com/get-involved/start-a-club',
               image: 'https://drive.google.com/thumbnail?id=1XJCCW0klv3bQJ7wMH2NmM4DyxBgVp6YY'
              
            },
            {
               name: 'Start a Girls Who Code Club!',
               description: 'Want to start a Girls Who Code club at your own school? Follow this link to learn how!', 
               link: 'https://girlswhocode.com/get-involved/start-a-club',
               image: 'https://drive.google.com/thumbnail?id=11OkOil5x6z0i0_HZXQ3CrabXwjWePUD-'
               
            }
         ]
      },
      {
         title: 'Coding Resources', 
         resources: [
            {
               name: 'freeCodeCamp',
               description: 'Introductory tutorials to follow along to learn web development, data visualization, and more!', 
               link: 'https://www.freecodecamp.org/',
               image: 'https://drive.google.com/thumbnail?id=1nphs6pSX1BgG8AImWVbwUgtiCzV1mcLD'
            }, 
            {
               name: 'Runestone Academy Extended Python Tutorial',
               description: 'A great in-depth resource to learn Python and the basics of data structures.', 
               link: 'https://runestone.academy/ns/books/published/pythonds3/index.html',
               image: 'https://drive.google.com/thumbnail?id=1wTZUtj8kpUQ2MF0tUxWQS9bkL6jn0V8E'
            }, 
            {
               name: 'DataCamp',
               description: 'Learn how to use Python for data analysis, artificial intelligence, and more! ', 
               link: 'https://www.datacamp.com/',
               image: 'https://drive.google.com/thumbnail?id=1cYIDIxEgIChn54WFjQFDctYE4AA0zdun'
            }, 
            {
               name: 'Arduino Projects',
               description: 'Explore more projects that are possible with your arduino!', 
               link: 'https://projecthub.arduino.cc/',
               image: 'https://drive.google.com/thumbnail?id=1JOwEKNX8eCJPsvEwRdHzLHNKowS3QN1_'
            }, 
            {
               name: 'Tinkercad',
               description: 'Build your own arduino circuits online!', 
               link: 'https://www.tinkercad.com/',
               image: 'https://drive.google.com/thumbnail?id=1g068ypijzL_LFEWfA_2opeGHhC3Mv-BP'
            }, 

         ]
      },
      {
         title: 'CWRU Resources', 
         resources: [
            {
               name: 'CWRU Women in Tech',
               description: 'Fosters growth for women pursuing the tech field through mentorship and professional development.', 
               link: 'https://case.edu/womenintech/',
               image: 'https://drive.google.com/thumbnail?id=1dWBHq3ToYq7Gq6pzUB9EIwks2y8thpiD'
            },
            {
               name: 'Leonard Gelfand STEM Center',
               description: "Learn more about CWRU's youth programs focused on science and engineering", 
               link: 'https://gelfand.case.edu/',
               image: 'https://drive.google.com/thumbnail?id=1aKGKC8QP5KY3JisYsrB9YHIcmLu1hHwf'
            },
         ]
      },
      
      
   ]

   return (
      <ThemeProvider theme={theme}>
         <motion.div style={{ background: 'linear-gradient(60deg, rgba(232,232,232,1.00) 6%,rgba(178,229,247,1.00) 90%)', height: '100%'}}
            initial="offscreen"
            whileInView="onscreen"
            viewport={{once: true}}
         >
            <motion.div className="page-background" style={{ textAlign: 'left', height: '100%', padding: "5vh 5%", width: '90%'}}>
            <PageTitle title="Resources" />
               
               {allInfo.map(obj => (
                  <Reveal key={obj.title}>
                  <Box sx={{py: '5vh', px: '6vh', backgroundColor: 'rgba(255, 255, 255, 0.5)', my: '3vh'}}>
                     <Typography variant='h4' sx={{fontWeight: 600, mb: '4vh', 
                     fontSize: {xs: '26px', md: '34px', xl: '60px'}
                  }}>
                           {obj.title}
                     </Typography>
                     <Grid container spacing={2} alignItems='stretch' >
                     {obj.resources.map((res, index) => (
                           <Grid item xs={12} sm={6} md={4} key={index} sx={{display: 'flex'}}>
                              {/* <StaggerItem index={index} style={{height: 'auto'}}> */}
                              <Card sx={{justifyContent: 'space-between', flexDirection: 'column', pb: '1vh', width: '100%', '&:hover': {backgroundColor: '#F3F3F3', boxShadow: '1px 7px 5px rgba(0,0,0, .25)'}}}>
                                 <Reveal>
                                 <CardActionArea href={res.link} target='_blank' sx={{'&:hover': { textDecoration: 'unset'}}}>
                                    <CardMedia component='img' image={res.image} height='225' width='full' 
                                    sx={{display: 'flex', alignItems: 'center', justifyContent: 'center'}} 
                                    />
                                    <CardContent sx={{textDecoration: 'unset !important',}}>
                                       <Typography variant='h5' sx={{fontWeight: '500', pt: '0.75vh', alignSelf: 'center',
                                          fontSize: {xs: '22px', md: '22px', xl: '40px'}
                                       }}>
                                          {res.name}
                                       </Typography>
                                       <Divider sx={{my: '2vh'}}/>
                                       <Typography variant='body2' sx={{fontSize: '2.5vh'}}>
                                          {res.description}
                                       </Typography>
                                    </CardContent>
                                 </CardActionArea> 
                                 </Reveal>
                              </Card>
                              
                              {/* </StaggerItem> */}
                           </Grid>
                        
                     ))}
                     </Grid>
                  </Box>
                  </Reveal>

               ))}
               
               
               

            </motion.div>
         </motion.div>
      </ThemeProvider>
   );
}