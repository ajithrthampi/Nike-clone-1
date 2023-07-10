import React, { useEffect } from 'react'
import NavBar from '../components/landingPage/Navbar'
import Homenavbar from '../components/homecontent/Homenavbar'
import Maincontent from '../components/homecontent/Maincontent'

import CartContainer from '../components/homecontent/CartContainer'
import {useStateValue} from '../context/StateProvider'

const Homepage = () => {

  const [{cartShow}, dispatch] = useStateValue()

  useEffect(() => {

  },[cartShow])

    return (
        <div>
            <Homenavbar/>
            <Maincontent/> {/* <ProductDetails /> */}
            {
            cartShow && (
                <CartContainer/>)
            } </div>
    )
}

export default Homepage
