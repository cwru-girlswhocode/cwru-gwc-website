import {createTheme} from '@mui/material/styles';
// import { style } from '@mui/system';

const theme = createTheme({
   //color palette
   palette: {
      primary: {
         light: '#E8E8E8', //light gray not blue
         main: "#009ECF", //light blue
         dark: '#B2E5F7' //darker blue
      },
      secondary: {
         light: "#E6E6E6", //gray used in navbar
         main: "#727272", //outline of boxes?
         dark: "#22252A", //dark gray/black
      }, 
      error: {
         main: "#d32f2f"
      },
      warning: {
         main: "#ff9800"
      },
      info: {
         main: "#006083", 
      }, 
      success: {
         main: "#4caf50"
      }, 
   }, 
   breakpoints: {
      values: {
        xs: 0,
        sm: 750,
        md: 1000,
        lg: 1200,
        xl: 1536,
      },
    },
    typography: {
      h1: {
         fontFamily: 'Poppins', 
         fontWeight: 700, 
         color: '#22252A', 
         fontSize: '75px'
      }, 
      h2: {
         fontFamily: 'Poppins', 
         fontWeight: 700, 
         color: '#22252A'
      },
      h3: {
         fontFamily: 'Poppins', 
         fontWeight: 600,
         color: '#22252A', 
         fontSize: '40px'
      },
      h4: {
         fontFamily: 'Poppins', 
         fontWeight: 500,
         color: '#22252A', 
      },
      h5: {
         fontFamily: 'Poppins', 
         fontWeight: 400,
         color: '#22252A'
      },
      h6: {
         fontFamily: 'Poppins', 
         fontWeight: 400,
         color: '#22252A'
      },
      body1: {
         fontFamily: "Open Sans", 
         fontWeight: 400,
         color: '#22252A',
         fontSize: '20px'
      }, 
      body2: {
         fontFamily: "Open Sans", 
         fontWeight: 400,
         color: '#22252A'
      }, 
      button: {
         fontFamily: 'Poppins', 
         fontWeight: 500
      }

    },
   //can target components to change globally - find specific component props in MUI docs 
   components: {
      MuiButton: {
         variants: [
            {
               props: {variant: 'contained'}, 
               style: {
                  fontFamily: 'Poppins', 
                  fontWeight: '900px', 
                  textTransform: 'none',
                  color: '#22252A'

               }
               
            }
         ]
      },
   }
}); 

export default theme; 