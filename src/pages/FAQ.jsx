import React, {useState, useEffect} from "react";
import axios from 'axios'; 
import {ThemeProvider} from '@mui/material/styles'; 
import theme from '../styles/Styles.jsx'; 
// import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import './page.css';
import {  Typography, Divider, Tab, Box} from "@mui/material"; 
import BasicTabs from '../components/BasicTabs.jsx';
import CustomizedAccordions from '../components/Accordion.jsx';
import PageTitle from "../components/PageTitle.jsx";

export default function FAQ() {

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
         <motion.div style={{ background: 'linear-gradient(60deg, rgba(232,232,232,1.00) 6%,rgba(178,229,247,1.00) 90%)', height: '100%'}}
            initial="offscreen"
            whileInView="onscreen"
            viewport={{once: true}}
         >
            <motion.div className="page-background" style={{ textAlign: 'left', height: '100%', padding: "5vh 5%", width: '90%'}}>
               <PageTitle title="Frequently Asked Questions" />

              <BasicTabs  />

            </motion.div>
         </motion.div>
      </ThemeProvider>
   );
}