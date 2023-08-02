import * as React from 'react'
import HoverMenu from 'material-ui-popup-state/HoverMenu'
import MenuItem from '@mui/material/MenuItem'
import Button from '@mui/material/Button'
import {
  usePopupState,
  bindHover,
  bindMenu,
} from 'material-ui-popup-state/hooks'
import { NavLink } from "react-router-dom";
import './Navbar.css';

function HoverDropdown ({title, link, submenu}) {
   // const title = props.title; 
  const popupState = usePopupState({
    variant: 'popover',
    popupId: 'demoMenu',
  })

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
   fontSize: '18px',
   fontFamily: 'Poppins', 
   borderRadius: '0px',
   fontWeight: '500', 
   color: '#22252A',
   pr: '10px',
   '&:hover': {
      color: '#009ECF',
      // transform: 'scale(0.1, 1)'
      // backgroundColor: '#F2F2F2',
   },
}

  return (
    <React.Fragment>
      <NavLink to={link} activeClassName='active'>
         <Button variant="text" sx={btnStyle} {...bindHover(popupState)}>
            {title}
         </Button>
      </NavLink>
      <HoverMenu
        {...bindMenu(popupState)}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}
        transformOrigin={{ vertical: 'top', horizontal: 'left' }}
        sx={{mt: '2px'}}
      >
         {submenu.map((item, index) => (
            <MenuItem 
              onClick={popupState.close}
              key={index}
              sx={{width: '22vh'}}
           >
               <NavLink to={item.link} style={{left: '0'}} >
                  <Button variant='text' sx={listBtnStyle}>
                     {item.name}
                  </Button>
                  
               </NavLink>
                 
            </MenuItem>
         ))}
      </HoverMenu>
    </React.Fragment>
  )
}

export default HoverDropdown; 