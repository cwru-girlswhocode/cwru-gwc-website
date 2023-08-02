import React, { useState } from 'react';
import "./ImageSlider.css";
import { AnimatePresence, motion } from 'framer-motion';
import { Button, IconButton} from "@mui/material";  
import ChevronRightRoundedIcon from '@mui/icons-material/ChevronRightRounded';
import ChevronLeftRoundedIcon from '@mui/icons-material/ChevronLeftRounded';


// Source: https://github.com/trulymittal/slideshow-tutorial

const variants = {
   initial: direction => {
     return {
       x: direction > 0 ? 1000 : -1000,
       opacity: 0,
       // scale: 0.5,
     }
   },
   animate: {
     x: 0,
     opacity: 1,
     // scale: 1,
     // transition: 'ease-in',
     transition: {
       x: { type: 'spring', stiffness: 300, damping: 30 },
       opacity: { duration: 0.2 },
     },
   },
   exit: direction => {
     return {
       x: direction > 0 ? -1000 : 1000,
       opacity: 0,
       // scale: 0.5,
       // transition: 'ease-in',
       transition: {
         x: { type: 'spring', stiffness: 300, damping: 30 },
         opacity: { duration: 0.2 },
       },
     }
   },
 }

//images prop should be array of image links from google drive
const ImageSlider = ({images}) => {
   const [index, setIndex] = useState(0)
   const [direction, setDirection] = useState(0)

   function nextStep() {
      setDirection(1)
      if (index === images.length - 1) {
         setIndex(0)
         return
      }
      setIndex(index + 1)
   }

   function prevStep() {
      setDirection(-1)
      if (index === 0) {
         setIndex(images.length - 1)
         return
      }
      setIndex(index - 1)
   }

   return (
      <div>
         <div className='slideshow'>
         <AnimatePresence initial={false} custom={direction}>
            <motion.img
               variants={variants}
               animate='animate'
               initial='initial'
               exit='exit'
               src={images[index]}
               alt='slides'
               className='slides'
               key={images[index]}
               custom={direction}
            />
         </AnimatePresence>
         <button className='prevButton' onClick={prevStep}>
            <ChevronLeftRoundedIcon />
         </button>
         <button className='nextButton' onClick={nextStep}>
            {/* ▶ */}
            <ChevronRightRoundedIcon />
         </button>
         </div>
    </div>
   );
};

export default ImageSlider;