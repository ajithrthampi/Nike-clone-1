import React, {useEffect, useState} from 'react'
import product1 from "../../assets/product1.png"
import product2 from "../../assets/product2.png"
import Filter from './Filter'
import {useNavigate} from 'react-router-dom'
import {motion, AnimatePresence} from "framer-motion"
import FilterColor from './FilterColor'
import {useStateValue} from '../../context/StateProvider'
import axios from 'axios'

const Productdisplay = ({isFilterVisible, data, flag}) => { // console.log("dataaaa", data);

    const [loading, setLoading] = useState(true);
    const [{ showProducts }] = useStateValue()
    const [
        {
            filterShow
        }, dispatch
    ] = useStateValue()
    const navigate = useNavigate()


    const animationVariants = {
        hidden: {
            x: "-10vw"
        },
        visible: {
            x: 0,
            transition: { 
            }
        }
    };

    // api calling

    useEffect(() => {
        if (data) {
            setLoading(false)
        }
    }, [data, flag])

    // navigate
    const handleClick = (item) => {
        navigate("/details")
        // console.log('item', item);
        localStorage.setItem("Product_details", JSON.stringify(item))
    }

    // console.log(showProducts);   


    return (
        <div className='flex slg:gap-5 '>
            <AnimatePresence> {
                !isFilterVisible && (
                    <motion.div initial="hidden" animate="visible"
                        // exit="hidden"
                        variants={animationVariants}
                        className="">
                        <Filter/>

                    </motion.div>
                )
            } </AnimatePresence>


            <motion.div initial="hidden" animate="visible"
                variants={animationVariants}
                className="grid  lg:grid-cols-3 grid-cols-2 lg:gap-4 gap-1 w-full ">
                {

                (data && data.length > 0 ? data.map((item, index) => (
                    <div className=' pb-5'
                        onClick={() => handleClick(item)}
                        key={
                            item.id
                    }>
                        <div className='bg-[#f7f7f7] w-full md:h-[370px] sm:h-[250px] h-[150px] relative hover:opacity-50 transition ease-out delay-150 '>
                            <img className='absolute  top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-full object-contain md:px-8 sm:px-4 px-2'
                                src={
                                    item.imageURL
                                }
                                alt=""/>
                        </div>
                        <div className='mt-3'>
                            <h1 className='font-poppins text-base font-normal'>
                                {
                                item.title
                            } </h1>
                            <h4 className='text-gray-400'>$ {
                                item.price
                            }</h4>
                        </div>
                    </div>
                )) : (
                    <div>Loading</div>
                ))
            } </motion.div>
            <div className='slg:hidden'>
                {
                filterShow && <div className='lg:hidden'>
                    <FilterColor/>
                </div>
            } </div>
        </div>
    )
}

export default Productdisplay
