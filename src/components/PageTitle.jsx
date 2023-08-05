import React from 'react';
import { Typography, Divider} from "@mui/material"; 
import Reveal from '../styles/Reveal'

const PageTitle = ({title}) => {
   return (
      <Reveal>
         <Typography variant="h2" sx={{fontSize: {xs: '50px', md: '64px', xl: '90px'} }}>
               {title}
         </Typography>
         <Divider variant="fullWidth" sx={{width: '55%', my: '4vh', borderBottomWidth: 3, backgroundColor: "#22252A"}}/>
      </Reveal>
   );
};

export default PageTitle;