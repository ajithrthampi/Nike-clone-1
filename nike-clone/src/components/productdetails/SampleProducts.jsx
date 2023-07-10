import React from 'react'

const SampleProducts = () => {
    return (
        <div className='mt-20 pb-20'>
            <div className='grid grid-cols-2 md:gap-5 gap-2'>
                <div>
                    <img className='md:w-full md:h-[300px] h-[150px] w-full object-cover' src="https://images.pexels.com/photos/14595091/pexels-photo-14595091.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt=""/>
                </div>
                <div>
                    <img className=' md:w-full md:h-[300px] h-[150px] w-full object-cover' src="https://images.pexels.com/photos/1166868/pexels-photo-1166868.jpeg" alt=""/>
                </div>
            </div>
        </div>
    )
}

export default SampleProducts
