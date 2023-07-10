import React, {useEffect, useState} from 'react'
import product1 from "../../assets/product1.png"
import product2 from "../../assets/product2.png"
import MoreProducts from './MoreProducts'
import Homenavbar from '../homecontent/Homenavbar'
import {useStateValue} from '../../context/StateProvider'
import {actionType} from '../../context/reducer'
import {motion} from "framer-motion"
import CartContainer from '../homecontent/CartContainer'

const ProductDetails = () => {

    const [details, setProductDetails] = useState()
    const [items, setItems] = useState(null)
    const [
        {
            shoeItems
        }, dispatchs
    ] = useStateValue()
    const [status, setStatus] = useState(false)
    
    const [cartStatus, setCartStatus] = useState(false)
    const [msg, setMsg] = useState("Already added to cart")
    const [cartMessage, setCartMesage] = useState("Added to cart")
    const [{cartShow}, dispatchss] = useStateValue()

    const [
        {
            cartItems
        }, dispatch
    ] = useStateValue()


    useEffect(() => {
        setProductDetails(JSON.parse(localStorage.getItem("Product_details")));
    }, [])

    // console.log("details", details);

    useEffect(() => {
        const storedProductDetails = JSON.parse(localStorage.getItem("Product_details"));
        if (storedProductDetails && !cartItems.some(item => item.id === storedProductDetails.id)) {
            setProductDetails(storedProductDetails);
        } else {
            setStatus(true)
            setTimeout(() => {
                setStatus(false)
            }, 3000);
          

        }
    }, [items]);

    const addtocart = () => { // Check if details already exist in cartItems
        const isAlreadyAdded = cartItems.some(item => item.id === details.id);

        if (! isAlreadyAdded) {
            dispatch({
                type: actionType.SET_CARTITEMS,
                cartItems: [
                    ...cartItems,
                    details
                ]
            });

            localStorage.setItem("cartItems", JSON.stringify([
                ...cartItems,
                details
            ]));
            setCartStatus(true)
            setTimeout(() => {
                setCartStatus(false)
            }, 3000);
        }


    };

    useEffect(() => {
        if (items !== null) {
            addtocart();
            
        }
    }, [items]);


    return (
        <>
            <Homenavbar/>
            <div className='pt-10 lg:px-16'>
                <div className='flex lg:flex-row flex-col items-center xl:gap-4 gap-5 justify-center'>

                    {/* Image */}
                    <div className='bg-[#f7f7f7]  rounded  object-cover '>
                        <img className='object-contain lg:h-[600px]  lg:w-[600px]  '
                            src={
                                details ?. imageURL
                            }
                            alt=""/>
                    </div>

                    {/* Multiple images */}
                    <div className=' flex flex-col xl:flex-row xl:gap-20 lg:gap-3  '>
                        <div className='hidde xl:block'>
                            <div className='bg-red-40 flex xl:flex-col flex-row gap-1 '>
                                <img className='bg-[#f7f7f7] xl:w-[189px] xl:h-[189px] w-[100px] h-[100px] rounded object-contain slg:px-3 px-2'
                                    src={
                                        details ?. imageURL
                                    }
                                    alt=""/>
                                <img className='bg-[#f7f7f7] xl:w-[189px] xl:h-[189px] w-[100px] h-[100px] rounded object-contain slg:px-3 px-2'
                                    src={
                                        details ?. imageURL
                                    }
                                    alt=""/>
                                <img className='bg-[#f7f7f7] xl:w-[189px] xl:h-[189px] w-[100px] h-[100px] rounded object-contain slg:px-3 px-2'
                                    src={
                                        details ?. imageURL
                                    }
                                    alt=""/>
                            </div>
                        </div>

                        {/* Product Details */}
                        <div className='bg-gren-400 flex flex-col  items-center md:items-start justify-center  '>
                            <div className=' bg-red-5'>
                                <h3 className='text-sm text-gray-400 font-poppins '>{details?.title}</h3>
                                <h1 className='font-anto text-3xl font-black w-52 pt-2'>{details?.title}</h1>
                                <p className='md:w-72 w-60 font-poppins xl:text-sm text-sm font-medium pt-5 tracking-wider '>
                                    {
                                    details ?. description
                                } </p>
                            </div>


                            <div className='mt-6 text-center lg:text-left flex justify-cente items-center gap-6 relative'>
                                <button className=' px-10 py-2 text-sm rounded font-poppins bg-black text-white '
                                    onClick={
                                        () => setItems([
                                            ...cartItems,
                                            details
                                        ])
                                }>Add to cart</button>
                                <p className='font-poppins text-md text-black font-medium'>₹ {
                                    details ?. price
                                }</p>

                                
                                {
                                status ? <motion.div
                                initial={
                                    {
                                        opacity: 0,
                                        x: 200
                                    }
                                }
                                animate={
                                    {
                                        opacity: 1,
                                        x: 0
                                    }
                                }
                                exit={
                                    {
                                        opacity: 0,
                                        x: 200
                                    }
                                }
                                 
                                className='text-red-500 font-poppins  absolute md:-right-32 text-xs left-10 md:left-64 md:top-0 top-12'>
                                    {msg}
                                </motion.div> : ""
                            }

{
                                cartStatus ? 
                                <motion.p
                                initial={
                                    {
                                        opacity: 0,
                                        x: 200
                                    }
                                }
                                animate={
                                    {
                                        opacity: 1,
                                        x: 0
                                    }
                                }
                                exit={
                                    {
                                        opacity: 0,
                                        x: 200
                                    }
                                }
                                 
                                className='text-green-500 font-poppins text-sm absolute md:-right-32 left-10 md:left-64 md:top-2 top-12'>
                                    {cartMessage}
                                </motion.p> : ""
                             }
                             </div>
                            
                             
                        </div>

                    </div>
                </div>

                <MoreProducts/>
            </div>

            {
            cartShow && (
                <> 
               
                <CartContainer/>
                </>
)
            } 
        </>
    )
}

export default ProductDetails
