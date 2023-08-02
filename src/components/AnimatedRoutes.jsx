import Home from '../pages/Home'; 
import About from '../pages/About'; 
import Facilitators from '../pages/Facilitators';
import Contact from '../pages/Contact'; 
import Sessions from '../pages/Sessions'; 
import Resources from '../pages/Resources'; 
import FAQ from '../pages/FAQ'; 

import {Routes, Route, useLocation} from 'react-router-dom'; 

import {AnimatePresence} from 'framer-motion'; 

export default function AnimatedRoutes() {
  const location = useLocation(); 

  return (
   <AnimatePresence>
      <Routes location={location} key={location.pathname}>
         <Route path="/" element={<Home />} />
         <Route path="/about" element={<About />} />
         <Route path="/about/facilitators" element={<Facilitators />} />          
         <Route path="/sessions" element={<Sessions />} />
         <Route path="/resources" element={<Resources />} />
         <Route path="/contact" element={<Contact />} /> 
         <Route path="/contact/faqs" element={<FAQ />} />
      </Routes>
   </AnimatePresence>
 );
}