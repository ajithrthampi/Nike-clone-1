import React, {useEffect, useState} from 'react'
import {motion} from "framer-motion"
import {categories} from "../../utils/data"
import { useStateValue } from '../../context/StateProvider'
import { actionType } from '../../context/reducer'

const Filter = () => {

   
   
 const [{ filterValue }, dispatch] = useStateValue()
 const filterInfo = localStorage.getItem("color_value")
 const [{ shoeItems }, dispatchs] = useStateValue()
//  console.log("shoeItems", shoeItems);


 const [filter, setFilter] = useState( filterValue && filterValue ? filterValue : filterInfo !== "undefined" ? filterInfo : "blue" )
    useEffect(() => {
  dispatch({
            type: actionType.FILTER_VALUE,
            filterValue: filter,
           })
           localStorage.setItem("color_value", filter)
    },[filter])



    return (
        <motion.div 
            // initial={{ x: "-100vw" }}
            // animate={{ x: 0 }}
            className='-[310px] min-h-screen  '
        >
            <div className='hidden  slg:block'>
                <h2 className='font-poppins text-sm'>
                    Color
                    <span className='text-gray-300'>(10)</span>
                </h2>
               
                <div className='grid grid-cols-3 text-center bg-red-00  gap-6 text-sm font-poppins  pt-4'>
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
        </motion.div>
    )
}

export default Filter
