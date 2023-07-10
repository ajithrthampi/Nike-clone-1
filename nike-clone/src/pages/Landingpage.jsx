import React from 'react'
import NavBar from '../components/landingPage/Navbar'
import Nike from '../components/landingPage/Nike'
import Pagecontent from '../components/landingPage/Pagecontent'
const Landingpage = () => {
    return (
        <div className='bg-gradient-to-r from-[#404040] to-[#1c1c20] text-white min-h-screen relativ'>
            <NavBar/>
            <div className='text-center'>
                <Nike/>
            </div>
            <div className='md:absolute left-0 right-0 top-24 z-10'>
                <Pagecontent/>  
            </div>

        </div>
    )
}

export default Landingpage
