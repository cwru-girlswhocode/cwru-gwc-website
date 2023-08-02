import React from 'react';
import {Link} from 'react-router-dom';
import { Button, Container, AppBar, Box, Toolbar, Typography, Stack, ButtonGroup, Menu, MenuItem, Popover, IconButton, Drawer, Divider, List, ListItem, ListItemText, Fade, Paper, ListItemButton, Grid } from "@mui/material";

function CustomButton() {
   const linkStyle = {
      textDecoration: "none",
      color: "#22252A", 
    };

    const btnStyle = {
      textTransform: 'unset !important', 
      fontSize: '16px',
      fontFamily: 'Poppins', 
      borderRadius: '2px',
      fontWeight: 600, 
      color: '22252A',
      px: '10px',
      '&:hover': {
         color: '#E6E6E6',
         backgroundColor: '#22252A',
      },
   }


   return ( 
      <Link to="/sessions" style={linkStyle}>
         <Button variant="filled" sx={btnStyle}>
            Sessions
         </Button>
      </Link>
   )
}

export default CustomButton; 