import React, { useEffect, useState } from 'react'
import {delay, motion} from "framer-motion"
import {RiRefreshFill} from "react-icons/ri"
import {BiMinus, BiPlus} from "react-icons/bi"
import {useStateValue} from '../../context/StateProvider'
import {actionType} from '../../context/reducer'
import {MdOutlineKeyboardBackspace} from 'react-icons/md'
import {AiFillCloseCircle} from "react-icons/ai"
import { categories } from '../../utils/data'

const FilterColor = () => {

    const [{filterShow}, dispatch] = useStateValue()
    const filterInfo = localStorage.getItem("color_value")
    const [{ filterValue }, dispatchs] = useStateValue()

    const [filter, setFilter] = useState( filterValue && filterValue ? filterValue : filterInfo !== "undefined" ? filterInfo : "blue" )
    useEffect(() => {
  dispatch({
            type: actionType.FILTER_VALUE,
            filterValue: filter,
           })
           localStorage.setItem("color_value", filter)
    },[filter])

    const showCart = () => {
        dispatch({
            type: actionType.FILTER_SHOW,
            filterShow: !filterShow
        })
    }

    const variants = {
        hidden: {
            opacity: 1,
            y: 200
        },
        visible: {
            opacity: 1,
            y: 0
        }
    };

    return (
        <div className='slg:hidden'>
            <motion.div initial={
                    variants.hidden
                }
                animate={
                    filterShow ? variants.visible : variants.hidden
                }
                exit={
                    variants.hidden
                }

                className='fixed top-0 right-0 left-0 w-screen h-full bg-white drop-shadow-md
                                                                                                                                                                                                                 flex flex-col z-50'>
                <div className='w-full flex items-center justify-between p-4 cursor-pointer'>
                    <motion.div whileTap={
                        {scale: 0.75}
                    }></motion.div>

                    <motion.p whileTap={
                            {scale: 0.75}
                        }
                        className='flex items-center gap-2 p-1 px-2 my-2 bg-gray-100 rounded-md
                                                                                                                                                                                                                                                                                 hover:shadow-md  cursor-pointer text-base'
                        onClick={showCart}>
                        Close
                        <AiFillCloseCircle/>
                    </motion.p>
                </div>

                {/* Filter color */}
                <div className='w-full h-full bg-gray-100 rounded-t-[2rem] flex flex-col'>

                    {/* Cart Items section */}
                    <div className='w-full h-full bg-gray-100 rounded-t-[2rem] flex flex-col'>

                        {/* Cart Items section */}
                        <div className='w-full h-340 md:h-42 px-6 py-10 flex flex-col gap-3 overflow-y-scrol no-scrollba'>
                            {/* Filter color*/}
                            <div className='w-full border-b border-gray-200 my-2'></div>
                            <h2 className='font-poppins text-md'>
                                Color
                                <span className='text-gray-300'>(10)</span>
                            </h2>
                            <div className='grid grid-cols-3 text-center bg-red-00  gap-4 text-sm font-poppins cursor-pointer'>
                          {
                categories && categories.map((categoryy, index) => (
                    <div className={` flex flex-col justify-center items-center cursor-pointer  `} key={index}>
                        <motion.div
                         whileHover={{ scale: 0.9 }}
                        className={`rounded-full border-2  w-9 h-9 flex justify-center items-center text-xl text-white `}
                            style={{background : `${categoryy.urlParamName}`, color: `${filter === "white" ? "black" : ""}`}}
                             onClick={() => setFilter(categoryy.urlParamName)}
                            >
                            {filterValue === categoryy.urlParamName ? <>&#10003;</> : <></>}
                        </motion.div>
                        <p>{categoryy?.name}</p>
                    </div>
                       ))
                }
                            </div>
                        </div>
                        <div className='w-full border-b border-gray-200 my-20'></div>
                    </div>
                    {/* <div className='w-full border-b border-gray-600 my-2'></div> */} </div>
            </motion.div>
        </div>
    )
}

export default FilterColor
