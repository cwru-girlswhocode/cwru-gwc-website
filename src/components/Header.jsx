import * as React from "react";
import { Button, Container, AppBar, Box, Toolbar, Typography, Stack, ButtonGroup, Menu, MenuItem, IconButton, Drawer, Divider, List, ListItem, ListItemText, ListItemButton, Collapse } from "@mui/material"; 
import { NavLink, Link } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";
import ClearIcon from '@mui/icons-material/Clear';
import HoverDropdown from "./HoverDropdown";
import logo from '../logo.png'

import './Navbar.css'

// import {ThemeProvider} from '@mui/material/styles'; 
// import theme from './styles/Styles.jsx';


export default function Header(props) {
   const drawerWidth = 300;
   const { window } = props;
   const [mobileOpen, setMobileOpen] = React.useState(false);
   const container = window !== undefined ? () => window().document.body : undefined;

   const handleDrawerToggle = () => {
      setMobileOpen((prevState) => !prevState);
    }; 

   const linkStyle = {
      textDecoration: "none",
      color: "#ffffff", 
    };

   const btnStyle = {
      textTransform: 'unset !important', 
      fontSize: '20px',
      fontFamily: 'Poppins', 
      borderRadius: '0px',
      fontWeight: '500', 
      color: '#22252A',
      px: '20px',
      mx: '5px',
      '&:hover': {
         color: '#009ECF',
         transition: 'all 0.3s',
         borderTop: 'solid 2px #4EC4EF',
         borderBottom: 'solid 2px #4EC4EF',
         // transform: 'scale(0.1, 1)'
         // backgroundColor: '#F2F2F2',
      },
   }

   const listBtnStyle = {
      textTransform: 'unset !important', 
      textAlign: 'center',
      width: '100%',
      fontSize: '20px',
      fontFamily: 'Poppins', 
      borderRadius: '0px',
      // fontWeight: 'bold', 
      color: '#401E46',
      px: '5px',
      '&:hover': {
         color: '#009ECF',
         backgroundColor: '#F2F2F2',
      },
   }

   const aboutSub = [
      {
         name: 'Facilitators', 
         link: '/about/facilitators', 
      }
   ]

   const contactSub = [
      {
         name: 'FAQs', 
         link: '/contact/faqs', 
      }
   ];

   return (
      // <ThemeProvider theme={theme}>
         <Box>
            <AppBar position="static" sx={{backgroundColor: '#EBEBEB' ,py: 2, }} component="nav">
               <Toolbar className="nav-bar-bar" sx={{ justifyContent: "space-between", align: 'center' }}>
                  <Box sx={{ display: {xs: 'none', sm: 'block'} }}>      
                     <NavLink to="/" style={linkStyle}>
                        <img src={logo} style={{height: '7.5vh', paddingTop: '1.5%'}} />
                     </NavLink>
                  </Box>
                  <Box sx={{ display: {xs: 'block', sm: 'none'}, ml: '0vh' }}>      
                     <NavLink to="/" style={linkStyle}>
                        <img src={logo} style={{height: '5vh', paddingTop: '0.5vh'}} />
                     </NavLink>
                  </Box>
               <Stack id='navbar' spacing={0} direction="row" sx={{ display: { xs: "none", md: "block"},  }}>

                  <HoverDropdown title="About Us" link='/about' submenu={aboutSub} />
                  <NavLink to='/sessions' id='sessions'>
                     <Button variant='text' sx={btnStyle}>
                        Sessions
                     </Button>
                  </NavLink>
                  <NavLink to='/resources' >
                     <Button variant='text' sx={btnStyle}>
                        Resources
                     </Button>
                  </NavLink>
                  <HoverDropdown title="Contact" link='/contact' submenu={contactSub} />
                  
               </Stack>
               <IconButton
                  color="#009ECE"
                  aria-label="open drawer"
                  edge="end"
                  size='large'
                  onClick={handleDrawerToggle}
                  sx={{ mr: "1vh", display: { md: "none" } }}
               >
                  <MenuIcon sx={{color: '#009ECE'}} />
               </IconButton>
               </Toolbar>
            </AppBar>

            <Box component="nav">
               <Drawer
                  container={container}
                  anchor='right'
                  variant="temporary"
                  open={mobileOpen}
                  onClose={handleDrawerToggle}
                  ModalProps={{
                     keepMounted: true // Better open performance on mobile.
                  }}
                  sx={{
                     display: { sm: "block", md: "none" },
                     "& .MuiDrawer-paper": {
                     boxSizing: "border-box",
                     width: drawerWidth, 
                     }
                  }}
               >
                  <Box 
                     onClick={handleDrawerToggle} sx={{ textAlign: "center" }}
                  >
                     <Stack direction='column' sx={{my: '2.5vw'}}>
                        <div style={{margin: '5px 0'}}>
                           <IconButton >
                              <ClearIcon />
                           </IconButton>
                        </div>
                        <NavLink to='/about' >
                           <Button sx={{...listBtnStyle, }} >
                              About
                           </Button>
                        </NavLink>  
                        <NavLink to='/about/facilitators' >
                           <Button sx={{...listBtnStyle, }} >
                              Meet the Facilitators
                           </Button>
                        </NavLink>  
                        <NavLink to='/sessions'>
                           <Button sx={{...listBtnStyle, }} >
                              Sessions
                           </Button>
                        </NavLink>
                        <NavLink to='/resources'>
                           <Button sx={{...listBtnStyle, }} >
                              Resources
                           </Button>
                        </NavLink>
                        <NavLink to='/contact'>
                           <Button sx={{...listBtnStyle, }} >
                              Contact
                           </Button>
                        </NavLink>
                        <NavLink to='/contact/faqs'>
                           <Button sx={{...listBtnStyle, }} >
                              FAQs
                           </Button>
                        </NavLink>
                     </Stack>
                  </Box>
               </Drawer>
            </Box>
         </Box>
      // </ThemeProvider>
      
   );
}