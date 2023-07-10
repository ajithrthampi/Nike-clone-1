import React from 'react'
import { motion } from "framer-motion"

const Nike = () => {
  const fadeRight = {
    hidden: { opacity: 0, x: -1000 },
    visible: {
      opacity: 1,
      x: 0, 
      transition: {
        ease: 'easeInOut',
        duration: 1, // Total duration of the animation
        delay: 0.1, // Delay before starting the animation
      },
    },
  };

  return (
    <div className=''>
        <motion.h1
         variants={fadeRight}
         initial="hidden"
         animate="visible"
        //  transition={{duration: 0.6}}
        className='hidden md:block text-[350px] font-anto first-line:font-bold text-transparent  text  
        bg-clip-text bg-gradient-to-r from-[#353535] to-[#151515] tracking-tighter'>
            NIKE
        </motion.h1>
    </div>
  )
}

export default Nike