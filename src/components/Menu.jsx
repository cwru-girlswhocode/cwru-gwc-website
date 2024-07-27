export default function Menu() {  
     return (
       <nav className="nav">
         <ul className="nav__menu">
           <li className="nav__menu-item">
             <a>Home</a>
           </li>
           <li
             className="nav__menu-item"
           >
             <a>About</a>
             <Submenu />
           </li>
           <li className="nav__menu-item">
             <a>Contact</a>
           </li>
         </ul>
       </nav>
     );
 }
 
 function Submenu() {

     return (
       <ul className="nav__submenu">
         <li className="nav__submenu-item ">
           <a>Our Company</a>
         </li>
         <li className="nav__submenu-item ">
           <a>Our Team</a>
         </li>
         <li className="nav__submenu-item ">
           <a>Our Portfolio</a>
         </li>
       </ul>
     )
   
 }
 
