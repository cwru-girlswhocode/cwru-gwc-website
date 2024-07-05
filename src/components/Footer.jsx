import React, {useState, useEffect} from "react";
import {AppBar, Box, Toolbar, Typography, Stack, IconButton, Divider } from "@mui/material"; 
import { Link } from "react-router-dom";
import "../App.css";
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import InstagramIcon from '@mui/icons-material/Instagram';
import GroupAddIcon from '@mui/icons-material/GroupAdd';
import { getLinks } from '../api.jsx'

export default function Footer() {
   const [links, setLinks] = useState({});

   useEffect(() => {
      const fetchData = async () => {
         try {
            const incomingLinkData = await getLinks(['LinkTree', 'Instagram', 'Email']);
            setLinks(incomingLinkData);

         } catch (error) {
            console.error(error);
         }
      }

      fetchData();
   }, [])

   const iconLinks = [
      {
         label: '@cwrugirlswhocode', 
         link: links['Instagram'], 
         icon: <InstagramIcon sx={{color: "#ffffff"}} />
      }, 
      {
         label: 'girlswhocode@case.edu', 
         link: links['Email'], 
         icon: <MailOutlineIcon sx={{color: "#ffffff"}} />
      },
      {
         label: 'Sign Up!', 
         link: links['LinkTree'], 
         icon: <GroupAddIcon sx={{color: "#ffffff"}} />
      } 
   ]

   const iconBtnStyle = {
      // borderRadius: '10px',
      backgroundColor: '#4EC4EF', 
      '&:hover': {
         backgroundColor: '#009ECE',
      },
   }


   return (
      // <ThemeProvider theme={theme}>
      <div>
         <Box sx={{ flexGrow: 1}}> 
            <AppBar position="static" sx={{background: "#22252A", py: "3vh"}}>
               <Toolbar sx={{justifyContent: 'center',}}>
                  <Stack direction='column' justifyContent='space-evenly' alignItems='center' spacing={2}>
                     <Typography variant='h5' sx={{color: 'white', fontWeight: '600'}}>
                        <a href="/" style={{color: 'white', fontWeight: '600'}}>Girls Who Code
                        <br/>Case Western Reserve University</a>
                     </Typography>

                     <Divider sx={{ width: '100%',  borderBottomWidth: 3, backgroundColor: "#DBDBDB"}}/>

                     <Stack direction="row" alignItems='center' spacing={4} sx={{pb: '2%'}}>
                        {iconLinks.map((obj => (
                           <Stack direction="row" alignItems='center' spacing={2} key={obj.label}>
                              <IconButton href={obj.link} target='_blank' size="medium" sx={iconBtnStyle} >
                                 {obj.icon}
                              </IconButton>
                              <Typography variant="body1" sx={{color: '#ffffff', fontSize: '16px', display: { xs: 'none', sm: 'block', md: 'block' }}}>
                                <a style={{color: '#fff'}} rel="noreferrer" href={obj.link} target="_blank">{obj.label}</a> 
                              </Typography>
                           </Stack>
                        ))) }
                        
                     </Stack>
                  </Stack>
                  
               </Toolbar>
            </AppBar>
         </Box>
      </div>
      // </ThemeProvider>
      
   );
}