import React, { useEffect, useState } from 'react'
import {AiOutlinePlus} from 'react-icons/ai';
import {MdOutlineKeyboardArrowDown} from 'react-icons/md';
import Productdisplay from './Productdisplay';
import { motion } from "framer-motion"
import { actionType } from '../../context/reducer';
import { useStateValue } from '../../context/StateProvider';

const Maincontent = () => {

    const [isFilterVisible, setIsFilterVisible] = useState(true);
    const [{ filterShow }, dispatch] = useStateValue()
    const [{ shoeItems }, dispatchs] = useStateValue()
    const [{ filterValue }, dispatchss] = useStateValue()
    const [all_show_items, setall_show_items] = useState([])

    


    const handleFilter = () => {
        setIsFilterVisible(!isFilterVisible);
        dispatch({
            type: actionType.FILTER_SHOW,
            filterShow: !filterShow,
           })
    }

    useEffect(() => {
        setall_show_items(shoeItems);
    },[shoeItems])

    useEffect(() => {
        setall_show_items(shoeItems?.filter(n => n.category === filterValue));

    },[filterValue])


    return (
        <div className='md:px-16 px-4 pt-10'>
            <div>
                <h1 className='font-poppins text-2xl font-semibold'>Man Shoes</h1>
            </div>
            <div className='mt-10 '>

                {/* Button */}
                <div className='relative flex justify-between'>
                    
                    <motion.button
                   whileHover={{ scale: 1.1 }}
                    className='bg-black text-white px-8 font-poppins text-center text-sm py-1.5' onClick={handleFilter}>
                        Filter
                    </motion.button>
                    <div className='absolute text-white text-xs top-2.5 left-4'>
                        <AiOutlinePlus/>
                    </div>
                    <div>
                        <h4 className='font-poppins text-sm text-gray-400 flex  items-center'>Sort by: 
                            <span className='text-base text-black pl-2'> Popular</span>
                            <span className='text-black pl-1'>
                                <MdOutlineKeyboardArrowDown/>
                            </span>
                        </h4>
                    </div>
                </div>
            </div>

               {/*Product Display  */}
            <motion.div
            className='mt-10'>
                <Productdisplay isFilterVisible={isFilterVisible} flag={true} data={ 
                    all_show_items
                    // shoeItems?.filter(n => n.category === filterValue ) 
                    }/>
            </motion.div>
        </div>
    )
}

export default Maincontent
