import React, { useState } from 'react'
import shoe3 from "../../assets/shoe3.png"
import  nike1 from "../../assets/nike1.png"
import { motion, spring } from "framer-motion"
import { useTime } from "framer-motion"
import { useNavigate } from 'react-router-dom'
import "./circle.css";
import { useStateValue } from '../../context/StateProvider'
import { actionType } from '../../context/reducer'
import Nike from './Nike'

const Pagecontent = () => {

    const [shouldRotate, setShouldRotate] = useState(false);
    const [{ showProducts }, dispatch] = useStateValue()
    const navigate = useNavigate()

  

  const handleAnimationEnd = () => {
    setShouldRotate(true);
  };

  const handleBuy = () => {
    dispatch({
        type: actionType.SHOW_PRODUCTS,
        showProducts: !showProducts,
       })
    navigate("/home")
   
       console.log("lklklklklklk");
  }

  console.log("showProducts",showProducts);

  const fadeRight = {
    hidden: { opacity: 0, x: -1000 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.5, // Duration for the initial fast movement
      },
    },
    slow: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 2, // Duration for the eventual slowing down
        
      },
    },
  };

    return (
        <div className=' flex lg:flex-row flex-col justify-between items-center   z-10 px-20 overflow-hidden h-650 bg-gradient-to-r from-[#404040] to-[#1c1c20]   '>
            {/* Shoe price details */}
            <div className='hidden lg:block z-30'>
            <motion.div
             initial={{ opacity: 0, y:-20}}
             animate={{ opacity: 1, y:10, 
                // transition: { duration: 2 }
            }}
             transition={{ delay: 1.3, type: 'spring', stiffness: 200 }}
            className='flex  flex-col gap-5  '>
                <div className='flex flex-col gap-2'>
                    <div className='-space-y-2'>
                        <h1 className='font-anto tracking-tighter text-3xl'>Airmax
                            <span className='text-pink-400 pl-3 text-3xl  tracking-tighter '>270</span>
                        </h1>
                        <h3 className='font-poppins text-[#d0d0d0]'>React</h3>
                    </div>
                    <div>
                        <h3 className='text-2xl tracking-tighter font-poppins'>$312</h3>
                    </div>
                </div>

                <div className='flex flex-col gap-5'>
                    <div className=''>
                        <h4 className='font-poppins text-xs'>Color</h4>
                        <div className='flex gap-1.5 pt-1 '>
                            <div className='rounded-full  bg-white w-3 h-3'></div>
                            <div className='rounded-full bg-purple-400 w-3 h-3'></div>
                            <div className='rounded-full bg-red-500 w-3 h-3'></div>
                            <div className='rounded-full bg-violet-400 w-3 h-3'></div>
                        </div>
                    </div>
                    <div className='font-poppins flex  flex-col justify-center'>
                        <div className='flex  gap-4 items-center'>
                            <h3 className='text-sm'>Size</h3>
                            <div className='flex gap-2 text-xs items-center'>
                                <div>md</div>
                                <div>xl</div>
                                <div>2xl</div>
                            </div>
                        </div>

                        <div>
                            <h1 className='bg-white rounded-full w-6 h-6 text-center text-black'>7</h1>
                        </div>
                    </div>
                </div>
                <button className='bg-[#be213b] py-1 mr-7 text-sm rounded font-poppins shadow' onClick={handleBuy}>BUY</button>
            </motion.div>
            </div>

            {/* Shoe Image */}
            <motion.div
        src="path_to_your_image.jpg"
        alt="Floating Image"
      

        initial={{ x: 1000, rotate: 20 }}
        animate={{
          x: 0,
          rotate: shouldRotate ? 0 : 0,
          y: [0, 10, 0, 10],
        }}
        transition={{
          x: { duration: 0.8 }, // Adjust the duration to make it faster
          rotate: { duration: 0.5 }, // Adjust the duration to make it faster
        //   delay: 0.1,
          y: {
            duration: 4, // Adjust the duration to make it faster
            repeat: Infinity,
            repeatType: 'reverse',
          },
        }}
        onTransitionEnd={handleAnimationEnd}
            className='absolut  z-20 bg-red-5 md:-ml-36 pt-28 md:pt-0 lg:pt-0'
            >
                <motion.img
                 variants={shouldRotate ? fadeRight : {}}
                 initial={shouldRotate ? "visible" : {}}
                 animate={shouldRotate ? "slow" : {}}
                 onAnimationComplete={() => {
                    setShouldRotate(false); // Stop the slowing down animation
                  }}
                className=' lg:h-[320px] md:h-[200px] h-full w-full bg-red-5 -rotate-45  lg:pt-0 md:pt-16 ' src={nike1} alt="" />
            </motion.div>


          {/* Details */}
            <div className='lg:hidden pt-24 sm:pt-32 md:pt-20 pb-16 '>
            <motion.div
             initial={{ opacity: 0, y:-20}}
             animate={{ opacity: 1, y:10, 
                // transition: { duration: 2 }
            }}
             transition={{ delay: 1.3, type: 'spring', stiffness: 200 }}
            className='flex  flex-col gap-5 '>
                <div className='flex flex-col gap-2'>
                    <div className='-space-y-2'>
                        <h1 className='font-anto tracking-tighter lg:text-3xl text-xl'>Airmax
                            <span className='text-pink-400 pl-3 text-3xl  tracking-tighter '>270</span>
                        </h1>
                        <h3 className='font-poppins text-[#d0d0d0]'>React</h3>
                    </div>
                    <div>
                        <h3 className='md:text-2xl tracking-tighter font-poppins'>$312</h3>
                    </div>
                </div>

                <div className='flex flex-col gap-5'>
                    <div className=''>
                        <h4 className='font-poppins text-xs'>Color</h4>
                        <div className='flex gap-1.5 pt-1 '>
                            <div className='rounded-full  bg-white w-3 h-3'></div>
                            <div className='rounded-full bg-purple-400 w-3 h-3'></div>
                            <div className='rounded-full bg-red-500 w-3 h-3'></div>
                            <div className='rounded-full bg-violet-400 w-3 h-3'></div>
                        </div>
                    </div>
                    <div className='font-poppins flex  flex-col justify-center'>
                        <div className='flex  gap-4 items-center'>
                            <h3 className='text-sm'>Size</h3>
                            <div className='flex gap-2 text-xs items-center'>
                                <div>md</div>
                                <div>xl</div>
                                <div>2xl</div>
                            </div>
                        </div>

                        <div>
                            <h1 className='bg-white rounded-full w-6 h-6 text-center text-black'>7</h1>
                        </div>
                    </div>
                </div>
                <button className='bg-[#be213b] py-1 mr-7 text-sm rounded font-poppins shadow' onClick={handleBuy}>BUY</button>
                {/* <button>h</button> */}
            </motion.div>
            </div>

            {/* Change shoe animation */}
             <div className='absolute right-12  '>
             {/* <div className=" flex gap-5 flex-col"> 
               <div className='w-20 h-20 border-2 bg-red-500'></div> 
               <div className='w-20 h-20 border-2 bg-red-500'></div> 
               <div className='w-20 h-20 border-2 bg-red-500'></div> 
               <div className='w-20 h-20 border-2 bg-red-500'></div> 
                  
            </div> */}
             </div>
            <div>
            <div>
    </div>
    </div>
    <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10 hidden lg:block'>
                <Nike/>
            </div>
</div>
        
    )
}

export default Pagecontent
