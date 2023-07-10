import React, { useEffect, useState } from 'react'
import {BiMinus, BiPlus} from "react-icons/bi"
import {motion} from "framer-motion"
import { useStateValue } from '../../context/StateProvider'
import { actionType } from '../../context/reducer'

let items = [];

const CartItem = ({item, setFlag, flag}) => {

    const [qty, setQty] = useState(item.qty)
    const [{cartItems}, dispatch] = useStateValue()
    // const [items, setItems] = useState([])

    const cartDispatch = () => {
        localStorage.setItem("cartItems", JSON.stringify(items));
        dispatch({
            type: actionType.SET_CARTITEMS,
            cartItems: items,
        })
    }

    const updateQty = (action, id) => {
        if(action == "add") {
            setQty(qty + 1)
             cartItems.map((item) => {
                if(item.id === id) {
                    item.qty +=1;
                    setFlag(flag + 1);
                }
             });
             cartDispatch()
        } else {
            //initialte state value is 1 so you need to catch if 1 then remove it.
            if(qty == 1){
                items = cartItems.filter((item) => item.id !== id)
                setFlag(flag + 1);
                cartDispatch();
            } else {
                setQty(qty - 1);
                cartItems.map((item) => {
                    if(item.id === id) {
                        item.qty -=1;
                        setFlag(flag + 1);
                    }
                 });
                 cartDispatch()
            }
        }
    }

    useEffect(() => {
       items = cartItems
    },[items,qty])

    return (
        <div className='w-full p-1 px-2 rounded-lg bg-white flex items-center gap-2'
          
        >
            <img className='w-20 h-20 max-w-[60px] rounded-full object-contain'
                src={
                    item ?. imageURL
                }
                alt=""/> {/* Name section */}
            <div className='flex flex-col gap-'>
                <p className='text-sm text-black font-poppins '>
                    {
                    item.title
                } </p>
                <p className='text-sm block text-black font-poppins '>₹ {
                    parseFloat( item?.price * qty )
                }</p>
            </div>

            {/* button section */}
            <div className='group flex items-center gap-2 ml-auto cursor-pointer'>
                <motion.div whileTap={
                    {scale: 0.75}
                
                }
                onClick={() =>updateQty("remove", item?.id)}
                >
                    <BiMinus className=''/>
                </motion.div>
                <p className='w-5 h-5 rounded-full bg-gray-100 flex  text-sm items-center justify-center'>
                    {
                     qty
                } </p>
                <motion.div whileTap={
                    {scale: 0.75}
                
                }
                onClick={() =>updateQty("add", item?.id)}
                >
                    <BiPlus className=''/>
                </motion.div>
            </div>
        </div>
    )
}

export default CartItem
