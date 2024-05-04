import React from 'react'
import { Link } from 'react-router-dom'

const FavEvent = () => {
  return (
    <div class="bg" className='px-4 lg:px-24 my-20 flex flex-col md:flex-row justify-between items-center gap-12'>
        <div className='md:w-1/2'>
            <img src="https://cdn.pixabay.com/photo/2016/11/23/15/48/audience-1853662_960_720.jpg" alt="" 
            className ='rounded md:w-10/12'  />
        </div>
        <div className = 'md:w-1/2 space-y-6'>
            <h2  className='text-5xl font-bold my-5 md:w-3/4 leading-snug'>Find your Favourite
                <span className='text-blue-700'>Events here!</span></h2>
                <p className='mb-10 text-lg md:w-5/6'>In the realm of social gatherings, ambiance reigns supreme, woven with sophistication and elegance, creating an enchanting atmosphere. Amidst conviviality, laughter and conversation harmonize, echoing the allure of chic sophistication. Every detail, meticulously curated, paints a portrait of opulence and refinement, etching memories to be cherished.</p>
                {/* */}
                <div className='flex flex-col sm:flex-row justify-between gap-6 md:w-3/4 my-14'>
                    <div >
                        <h3 className='text-3xl font-bold'>800+</h3>
                        <p className='text-base'>Event Listing</p>
                    </div>
                    <div >
                        <h3 className='text-3xl font-bold'>550+</h3>
                        <p className='text-base'>Trusted Users</p>
                    </div>
                    <div >
                        <h3 className='text-3xl font-bold'>100+</h3>
                        <p className='text-base'>Sponsors</p>
                    </div>
                </div>
            
                <Link to="/shop" className='mt-8 block'><button className='bg-blue-700 text-white font-semibold px-5 py-2 
                rounded hover:bg-black transition-all duration-300'>Explore More</button></Link>
        </div>
    </div>
  )
}

export default FavEvent