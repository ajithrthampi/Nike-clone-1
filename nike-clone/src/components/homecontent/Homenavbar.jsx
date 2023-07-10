import {useState} from "react";
import logo from "../../assets/logo.png"
import {CiSearch} from 'react-icons/ci';
import {BiSolidShoppingBag} from 'react-icons/bi';
import {HiViewGrid} from 'react-icons/hi';
import { useStateValue } from "../../context/StateProvider";
import { actionType } from "../../context/reducer";

const Homenavbar = () => {

    const [navbar, setNavbar] = useState(false);
    const [{ cartShow, cartItems }, dispatch] = useStateValue()


    const showCart = () => {
       dispatch({
        type: actionType.SET_CART_SHOW,
        cartShow: !cartShow,
       })
    }


    return (
        <nav className="w-full  shadow md:shadow-non">

            <div className="justify-between px-4  md:items-center  md:flex md:px-16">
                <div>
                    <div className="flex items-center justify-between py-3 md:py-5 md:block">

                        {/* <h2 className="text-2xl text-red-400 font-bold">LOGO</h2> */}
                        <img className="md:w-14 md:h-14 w-12 h-12 "
                            src={logo}
                            alt=""/>

                        <div className="md:hidden">
                            <button className="p-2 text-gray-700 rounded-md outline-none focus:border-gray-400 focus:border"
                                onClick={
                                    () => setNavbar(!navbar)
                            }>
                                {
                                navbar ? (
                                    <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" viewBox="0 0 20 20" fill="currentColor">
                                        <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd"/>
                                    </svg>
                                ) : (
                                    <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"
                                        strokeWidth={2}>
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16"/>
                                    </svg>
                                )
                            } </button>
                        </div>
                    </div>
                </div>
                <div>
                    <div className={
                        `flex-1 justify-self-center  pb-3 mt-8 md:block md:pb-0 md:mt-0  ${
                            navbar ? "block" : "hidden"
                        }`
                    }>
                        <div className="flex md:flex-row flex-col lg:gap-32 gap-10">
                            <ul className="items-center justify-center lg:gap-7  space-y-8 md:flex md:space-x-2 md:space-y-0 uppercase font-medium ">
                                <li className="lg:text-sm text-[13px] font-poppins hover:text-gray-400 cursor-pointer">
                                    <h4>Men</h4>
                                </li>
                                <li className="lg:text-sm text-[13px] font-poppins hover:text-gray-400 cursor-pointer">
                                    <h4>Women</h4>
                                </li>
                                <li className="lg:text-sm text-[13px] font-poppins hover:text-gray-400 cursor-pointer">
                                    <h4>Kids</h4>
                                </li>
                                <li className="lg:text-sm text-[13px] font-poppins hover:text-gray-400 cursor-pointer ">
                                    <h4>collection</h4>
                                </li>
                                <li className="lg:text-sm text-[12px] font-poppins hover:text-gray-400 cursor-pointer">
                                    <h4>Contact</h4>
                                </li>
                            </ul>
                            {/* Cart */}
                            <div>
                                <ul className="items-center justify-center lg:gap-7 md:flex md:space-x-6 md:space-y-0 uppercase font-medium">
                                    <li className=" hidden md:block">
                                        <div className="relative">
                                            <input className="bg-[#f1f1f1] rounded font-poppins  " type="text"/>
                                            <div className="absolute top-1 left-1">
                                                <CiSearch/>
                                            </div>
                                            <h1 className="text-xs absolute top-1 left-8">Search</h1>
                                        </div>
                                    </li>
                                   
                                    <li className="lg:text-sm text-[12px] font-poppins hover:text-gray-400 
                                    cursor-pointer"
                                     onClick={showCart}
                                    >
                                       {
                                        cartItems && cartItems.length > 0 ?  (
                                             <h2>My cart 
                                            <span>
                                               ( {cartItems.length} )
                                            </span>
                                        </h2>
                                        ) : (
                                            <h2>My cart <span>
                                                (0)
                                            </span>
                                        </h2>
                                        )
                                    }
                                       
                                    </li>
                                </ul>
                            </div>

                        </div>
                    </div>
                </div>
            </div>

        </nav>
    )
}

export default Homenavbar
