import React, { useEffect, useState } from 'react'
import {MdOutlineKeyboardBackspace} from "react-icons/md"
import {motion} from "framer-motion"
import {RiRefreshFill} from "react-icons/ri"
import {BiMinus, BiPlus} from "react-icons/bi"
import {useStateValue} from '../../context/StateProvider'
import {actionType} from '../../context/reducer'
import CartItem from './CartItem'

const CartContainer = () => {

    const [
        {
            cartShow,
            cartItems
        }, dispatch
    ] = useStateValue()
    const [tot, setTot] = useState(0);
    const [flag, setFlag] = useState(1);

    const showCart = () => {
        dispatch({
            type: actionType.SET_CART_SHOW,
            cartShow: !cartShow
        })
    }

    useEffect(() => {
       let totalPrice = cartItems.reduce(function (accumulator, item) {
        return accumulator + item.qty * item.price
       },0)
       setTot(totalPrice);
       console.log(tot);
    },[tot, flag])

    const clearCart = () => {
        dispatch({
            type: actionType.SET_CARTITEMS,
            cartItems: [],
        });
        // localStorage.setItems("cartItems", JSON.stringify([]))
        localStorage.removeItem("cartItems");
    }

    return (
        <motion.div initial={
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
            className='fixed top-0 right-0 w-full md:w-460 h-screen bg-white drop-shadow-md
                                                                                                    flex flex-col z-[101]'>
            <div className='w-full flex items-center justify-between p-4 cursor-pointer'>
                <motion.div whileTap={
                        {scale: 0.75}
                    }
                    onClick={showCart}>
                    <MdOutlineKeyboardBackspace className='text-black text-3xl'/>

                </motion.div>
                <p className='text-black font-poppins text-lg font '>Cart</p>
                <motion.p whileTap={
                        {scale: 0.75}
                    }
                    className='flex items-center gap-2 p-1 px-2 my-2 bg-gray-100 rounded-md
                            hover:shadow-md  cursor-pointer text-base
                        '
                        onClick={clearCart}
                        >Clear
                    <RiRefreshFill/>
                </motion.p>
            </div>

            {/* Bottom section */}
            {
            cartItems && cartItems.length > 0 ? (
                <div className='w-full h-full bg-gray-100 rounded-t-[2rem] flex flex-col'>

                    {/* Cart Items section */}
                    <div className='w-full h-340 md:h-42 px-6 py-10 flex flex-col gap-3 overflow-y-scroll
                                                                             no-scrollbar'>
                        {/* Cart Item */}
                        {
                        cartItems && cartItems.map(item => (
                           <CartItem  
                            key={item?.id} 
                            item={item}
                             setFlag={setFlag}
                             flag={flag}
                            />
                        ))
                    } </div>

                    {/* Cart Total Section */}
                    <div className='w-full flex-1 bg-white rounded-t-[2rem] flex flex-col items-center
                                                     justify-evenly px-8 py-2'>
                        <div className='w-full flex items-center justify-between'>
                            <p className='text-lg'>Sub Total</p>
                            <p className='text-lg'>$ {tot}</p>
                        </div>
                        <div className='w-full flex items-center justify-between'>
                            <p className='text-lg'>Delivery</p>
                            <p className='text-lg'>$ 2.5</p>
                        </div>

                        <div className='w-full border-b border-gray-600 my-2'></div>

                        <div className='w-full flex items-center justify-between'>
                            <p className='text-xl font-semibold'>Total</p>
                            <p className='text-xl font-semibold'>{tot + 2.5}</p>
                        </div>

                        <motion.button className='w-full p-2 rounded-full bg-gradient-to-tr from-gray-100 to-gray-300 text-lg my-2
                                                                 hover:shadow-lg transition-all duration-150 ease-out font-poppins'>
                            Check Out
                        </motion.button>
                    </div>
                </div>
            ) : (
                <div>
                    <h1 className='flex justify-center  items-center h-screen font-poppins'>There are no items in your cart.</h1>
                </div>
            )
        } </motion.div>
    )
}

export default CartContainer
