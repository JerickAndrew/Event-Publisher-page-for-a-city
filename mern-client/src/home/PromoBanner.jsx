import React from 'react'
import { Link } from 'react-router-dom'
import "./PromoBanner.css"

const PromoBanner = () => {
  return (
    <div id='background'  className='mt-16 py-12 bg-teal-100 px-4 lg:px-24'>
        <div className='flex flex-col md:flex-row justify-between items-center gap-12'>
            <div className= 'md:w-1/2'>
                <h2 class="promotext" className='text-4xl font-bold mb-6 leading-snug'>2024 Management Award for Event Organising</h2>
                <Link to="/shop" className='mt-8 block'><button id='btn' className='bg-blue-700 text-white font-semibold px-5 py-2 
                    rounded hover:bg-black transition-all duration-300'>Get Promo Code</button></Link>
            </div>
            <div>
                <img src="https://cdn.pixabay.com/photo/2017/01/28/11/43/cup-2015198_960_720.png" className=''  alt="" />
            </div>
        </div>
    </div>
  )
}

export default PromoBanner