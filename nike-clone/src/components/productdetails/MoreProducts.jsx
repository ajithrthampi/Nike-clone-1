import React from 'react'
import product1 from "../../assets/product1.png"
import product2 from "../../assets/product2.png"
import SampleProducts from './SampleProducts'
import {useStateValue} from '../../context/StateProvider';
const MoreProducts = () => {

    const [
        {
            shoeItems
        }, dispatchs
    ] = useStateValue()

// Check if shoeItems is null or undefined
if (!shoeItems) {
    return null; // or render a loading state or handle the situation accordingly
  }

  // Function to shuffle the array using Fisher-Yates algorithm
  const shuffleArray = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  };

  // Get a random subset of 8 items from shoeItems
  const randomItems = shuffleArray(shoeItems).slice(0, 8);

    return (
        <div className='mt-16 px-5 lg:px-0'>
            <div className=''>
                <h1 className='font-anto text-lg font-black'>You may also like</h1>
                <div className="w-full my-12 overflow-x-scroll flex items-center gap-4 no-scrollbar">
                    {randomItems && randomItems.map((item)=> (
                         <div key={item.id}>
                        <div className="w-300 md:w-[375px] md:h-[370px] bg-[#f7f7f7] shadow-md backdrop-blur-lg">
                            <div className='w-full  items-center justify-between '>
                                <img className='md:absolute md:top-1/2 md:left-1/2 md:transform md:-translate-x-1/2 md:-translate-y-1/2 md:px-6 w-56 object-contain h-56 md:w-full md:h-full'
                                    src={item?.imageURL}
                                    alt=""/>
                            </div>
                        </div>
                        <div className='mt-3'>
                            <h1 className='font-poppins text-base font-normal'>{item?.title}</h1>
                            <h4 className='text-gray-400'>{item?.price}</h4>
                        </div>
                    </div>
                    ))}
                   
                </div>


            </div>

            <div>
                <SampleProducts/>
            </div>
        </div>
    )
}

export default MoreProducts
