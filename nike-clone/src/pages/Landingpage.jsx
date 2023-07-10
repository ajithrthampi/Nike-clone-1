import React from 'react'
import NavBar from '../components/landingPage/Navbar'
import Nike from '../components/landingPage/Nike'
import Pagecontent from '../components/landingPage/Pagecontent'
const Landingpage = () => {
    return (
        <div className=' text-white min-h-screen relativ bg-gradient-to-r from-[#404040] to-[#1c1c20]'>
            <NavBar/>
           
            <div className='md:absolute left-0 right-0 top-24 z-10'>
                <Pagecontent/>  
            </div>

        </div>
    )
}

export default Landingpage
