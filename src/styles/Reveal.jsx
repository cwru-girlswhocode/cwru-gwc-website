import React, {useEffect, useRef} from "react"; 
import {motion, useInView, useAnimation, stagger} from "framer-motion";

const Reveal = ({children, index=1}) => {
   const ref = useRef(null); 
   const isInView = useInView(ref, {once: true}); 
   
   const mainControls = useAnimation(); 

   useEffect(() => {
      if(isInView) {
         //animation should start
         mainControls.start("visible"); 
      } 
   }, [isInView]);

   return (
      <div ref={ref} style={{position: "relative", width: "hidden"}}>
         <motion.div
            variants={{
               hidden: {opacity: 0, y: 75}, 
               visible: {opacity: 1, y: 0},
            }}
            initial="hidden"
            animate={mainControls}
            transition={{
               duration: 0.5, 
               delay: index*0.3,
            }}
         >
            {children}
         </motion.div>
      </div>
   )
}

export default Reveal; 