import {ThemeProvider} from '@mui/material/styles'; 
import {useState, useEffect} from "react";
import theme from '../styles/Styles.jsx'; 
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import './page.css';
import emailjs from '@emailjs/browser';
import SendRoundedIcon from '@mui/icons-material/SendRounded';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import InstagramIcon from '@mui/icons-material/Instagram';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import GroupsIcon from '@mui/icons-material/Groups';
import FacebookIcon from '@mui/icons-material/Facebook';
import {  Typography, Divider, Box, Grid, Stack , TextField, FormControl, FormLabel, RadioGroup, FormControlLabel, Radio, Button, Paper, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Snackbar, Alert} from "@mui/material";
import PageTitle from '../components/PageTitle.jsx'; 
import StaggerItem from '../styles/StaggerItems.jsx';
import { getLinks } from "../api.jsx";

export default function Contact() {
   const linkStyle = {
      textTransform: 'unset !important', 
      color: '#009ECF',
      fontWeight: '700',
      textDecoration: 'underline',
      '&:hover': {
         color: "#B2E5F7",
      },
   }

   const [links, setLinks] = useState([]); 

   useEffect(() => {
      try {
         const fetchData = async () => {
            const incomingLinkData = await getLinks(['Python', 'Arduino', 'Facilitator', 'Instagram', 'Email', 'Facebook']);
            setLinks(incomingLinkData);
         }

         fetchData();
      } catch (error) {
         console.error(error);
      }
   }, [])

   const [form, setForm] = useState({
      name: '', 
      email: '', 
      about: 'Sessions', 
      message: '', 
   }); 

   const [validations, setValidations] = useState({
      name: false, 
      email: false, 
      message: false,
   });

   const [emailStatus, setEmailStatus] = useState('');
   const [openSnackbar, setOpenSnackbar] = useState(false); 
   const [sendBtn, setSendBtn] = useState(false)

   const handleFieldChange = (e) => {
      setForm({
         ...form,
         [e.target.name]: e.target.value,
      });
   }

   const testEmail = () => {
      const regex = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
      if (regex.test(form.email)) {  
         return false; //good email - doesn't need to be validated
      } else {
         return true;
      }
   }

   const validateForm = () => {
      const goodEmail = testEmail()
      setValidations({
         name: form.name === '', 
         email: (form.email === '' || goodEmail), 
         // about: form.about === '', 
         message: form.message === ''
      }); 
      if(form.name === '' ||
         (form.email === '' || goodEmail) || 
         form.about === '' || 
         form.message === '') 
      {
         return false; 
      } else {
         return true; 
      }
   }

   const onSubmit = (e) => {
      const canSubmit = validateForm();
      const serviceID = import.meta.env.VITE_SERVICE_ID
      const templateID = import.meta.env.VITE_TEMPLATE_ID
      const publicKey = import.meta.env.VITE_PUBLIC_KEY

      if(canSubmit) {
         const templateParams = {
            from_name: form.name, 
            from_email: form.email, 
            subject: form.about, 
            message: form.message
         }
         setSendBtn(true);

         e.preventDefault();

         emailjs.send(serviceID, templateID, templateParams, publicKey).then((result) => {
            console.log(result)
            setForm({
               name: '', 
               email: '', 
               about: 'Sessions', 
               message: '', 
            });
            setEmailStatus('success')
            setOpenSnackbar(true);

         })
         .catch((error) => {
            console.log(error)
            setEmailStatus('error')
            setOpenSnackbar(true);
         });
      }
   }

   return (
      <ThemeProvider theme={theme}>
         <motion.div style={{ background: 'linear-gradient(60deg, rgba(232,232,232,1.00) 6%,rgba(178,229,247,1.00) 90%)', height: '100%'}}
            initial="offscreen"
            whileInView="onscreen"
            viewport={{once: true}}
         >
            <motion.div className="page-background" style={{ textAlign: 'left', height: '100%',padding: "5vh 5%", width: '90%'}}>
               <PageTitle title="Contact" />

               <StaggerItem index={1.25}>
               <Grid container xs={12} direction='row'  alignItems='stretch' justifyContent='center' sx={{width: '100%', mb: '5vh'}}>
                  <Grid item xs={12} md={4} height='auto'>
                     <Paper sx={{height: '100%', backgroundColor: '#22252A', px: '3vh', mb: {xs:'3vh', md: '0'}}}>
                        <Typography variant='h4' sx={{color: '#fff', fontWeight: 600, textAlign: 'left', width: 'auto', py: '3vh'}}>
                           Contact Information
                        </Typography>
                        <div style={{paddingBottom: '1vh'}}>
                           <Typography variant='h6' sx={{color: '#fff', fontWeight: 500, textAlign: 'left', width: 'auto', fontSize:'25px'}}>
                              Contact
                           </Typography>
                           <List>
                              <ListItem disablePadding sx={{ width: '90%', '&:hover': {backgroundColor: '#41454B'}}}>
                                 <ListItemButton href={links['Instagram']} target='_blank'>
                                    <ListItemIcon>
                                       <InstagramIcon size='medium' sx={{color: '#B2E5F7'}}/>
                                    </ListItemIcon>
                                    <ListItemText primary="@cwrugirlswhocode" primaryTypographyProps={{
                                       fontSize: 16,
                                       fontWeight: 'medium',
                                       lineHeight: '20px',
                                       color: '#ffffff',
                                       ml: -2, 
                                       // mb: '2px',
                                       }}/>
                                 </ListItemButton>
                              </ListItem>
                              <ListItem disablePadding sx={{ width: '90%', '&:hover': {backgroundColor: '#41454B'}}}>
                                 <ListItemButton href={links['Facebook']} target='_blank'>
                                    <ListItemIcon>
                                       <FacebookIcon size='medium' sx={{color: '#B2E5F7'}}/>
                                    </ListItemIcon>
                                    <ListItemText primary="CWRU GWC Facebook" primaryTypographyProps={{
                                       fontSize: 16,
                                       fontWeight: 'medium',
                                       lineHeight: '20px',
                                       color: '#ffffff',
                                       ml: -2, 
                                       // mb: '2px',
                                       }}/>
                                 </ListItemButton>
                              </ListItem>
                              <ListItem disablePadding sx={{ width: '90%', '&:hover': {backgroundColor: '#41454B'}}}>
                                 <ListItemButton href={links['Email']} target='_blank'>
                                    <ListItemIcon>
                                       <MailOutlineIcon size='medium' sx={{color: '#B2E5F7'}}/>
                                    </ListItemIcon>
                                    <ListItemText primary="girlswhocode@case.edu" primaryTypographyProps={{
                                       fontSize: 16,
                                       fontWeight: 'medium',
                                       lineHeight: '20px',
                                       color: '#ffffff',
                                       ml: -2, 
                                       // mb: '2px',
                                       }}/>
                                 </ListItemButton>
                              </ListItem>
                              
                           </List>
                        </div>
                        <div>
                           <Typography variant='h6' sx={{color: '#fff', fontWeight: 500, textAlign: 'left', width: 'auto', fontSize:'25px'}}>
                              Sign up
                           </Typography>
                           <List>
                              <ListItem disablePadding sx={{ width: '90%', '&:hover': {backgroundColor: '#41454B'}}}>
                                 <ListItemButton href={links["Python"]} target='_blank'>
                                    <ListItemIcon>
                                       <PersonAddIcon size='medium' sx={{color: '#B2E5F7'}}/>
                                    </ListItemIcon>
                                    <ListItemText primary="Python Session" primaryTypographyProps={{
                                       fontSize: 16,
                                       fontWeight: 'medium',
                                       lineHeight: '20px',
                                       color: '#ffffff',
                                       ml: -2, 
                                       // mb: '2px',
                                       }}/>
                                 </ListItemButton>
                              </ListItem>
                              <ListItem disablePadding sx={{ width: '90%', '&:hover': {backgroundColor: '#41454B'}}}>
                                 <ListItemButton href={links["Arduino"]} target='_blank'>
                                    <ListItemIcon>
                                       <PersonAddIcon size='medium' sx={{color: '#B2E5F7'}}/>
                                    </ListItemIcon>
                                    <ListItemText primary="Arduino Session" primaryTypographyProps={{
                                       fontSize: 16,
                                       fontWeight: 'medium',
                                       lineHeight: '20px',
                                       color: '#ffffff',
                                       ml: -2, 
                                       // mb: '2px',
                                       }}/>
                                 </ListItemButton>
                              </ListItem>
                              <ListItem disablePadding sx={{ width: '90%', '&:hover': {backgroundColor: '#41454B'}}}>
                                 <ListItemButton href={links["Facilitator"]} target='_blank'>
                                    <ListItemIcon>
                                       <GroupsIcon size='medium' sx={{color: '#B2E5F7'}}/>
                                    </ListItemIcon>
                                    <ListItemText primary="Be a Facilitator (CWRU Students Only)" primaryTypographyProps={{
                                       fontSize: 16,
                                       fontWeight: 'medium',
                                       lineHeight: '20px',
                                       color: '#ffffff',
                                       ml: -2, 
                                       // mb: '2px',
                                       }}/>
                                 </ListItemButton>
                              </ListItem>
                           </List>
                        </div>
                     </Paper>
                     
                  </Grid>

                  <Grid item xs={12} md={8} >
                     <Paper sx={{backgroundColor: 'rgba(240, 240, 240, 0.9)'}}>
                        <form name="contact-form" onSubmit={onSubmit}>
                        <Stack direction='column' spacing={{xs: 2, md: 4}} sx={{p: '3vh'}}>
                           <Typography variant='h4' sx={{fontWeight: 600}}>
                              Send a Message
                           </Typography>
                           <Stack direction={{xs: 'column', md: 'row'}} spacing={3}>
                              <TextField label="Your Name" color="primary" variant="outlined" name='name' type='text' fullWidth onChange={handleFieldChange} error={validations.name} value={form.name} /> 
                              <TextField label="Your Email" variant="outlined" name='email' type='text' fullWidth onChange={handleFieldChange} error={validations.email} value={form.email} /> 
                           </Stack>

                           <FormControl onChange={handleFieldChange}  value={form.about} >
                              <FormLabel>
                                 What is your email about?
                              </FormLabel>
                              <RadioGroup row defaultValue='Sessions'>
                                 <FormControlLabel value="Sessions" control={<Radio />} label="Sessions" />
                                 <FormControlLabel value="Be a Facilitator" control={<Radio />} label="Be a Facilitator" />
                                 <FormControlLabel value="Other" control={<Radio />} label="Other" />
                              </RadioGroup>
                           </FormControl>

                           <TextField multiline rows={5} variant="outlined" label="Write your message here" name='message' onChange={handleFieldChange} error={validations.message} value={form.message} />

                           <Stack direction='row' justifyContent='space-between'>
                              <div></div>
                              <Button variant="contained" endIcon={<SendRoundedIcon />} sx={{px: '5%', py: '1%', color: '#fff', border: '1.5px solid #009ECE', fontFamily: 'Poppins', fontSize: '16px', '&:hover': {color: '#009ECE', backgroundColor: '#F5F5F5', border: '1.5px solid #009ECE'} }} onClick={onSubmit} disabled={sendBtn}>
                                 Send Message
                              </Button>
                           </Stack>
                              
                        </Stack>
                        </form>
                     </Paper>
                     
                  </Grid>
                  <Snackbar
                     open={openSnackbar}
                     autoHideDuration={4000}
                     anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
                     onClose={() => {setOpenSnackbar(false); setSendBtn(false);}}
                  >
                     {emailStatus === 'error' ? 
                        <Alert variant="filled" severity='error' sx={{fontFamily: 'Poppins', color: '#fff', fontSize: '16px'}}>
                        
                           Error: Email was not sent.
                           <br/> Please refresh and try again.
                        </Alert>
                        :
                        <Alert variant="filled" severity='success' sx={{fontFamily: 'Poppins', color: '#fff', fontSize: '16px'}}>
                           Email sent successfully!
                        </Alert>                           
                        } 
               </Snackbar>
               </Grid>
               </StaggerItem>
              

            </motion.div>
         </motion.div>
      </ThemeProvider>
   );
}