import React from 'react'
import BannerCard from '../home/BannerCard'

const Banner = () => {
  return (
    <div className='px-4 lg:px-24 bg-teal-100 flex items-center'>
        <div className='flex w-full flex-col md:flex-row justify-between items-center gap-12 py-40 '>
            {/*left side */}
            <div className='md:w-1/2 space-y-8 h-full'>
                <h2 className='text-5xl font-bold leading-snug text-black'>Explore the events here @<span
                className='text-blue-800 text-8xl'><div>Event XP</div></span>
                </h2>
                <p className='md:w-4/5'>
                    <div className='font-bold text-3xl px-5'>But how can you </div>
                    <div className='font-bold text-3xl px-5'>live and have no</div>
                    <div className='font-bold text-3xl px-5'>story to tell?</div>
                    <div className='font-bold text-1xl px-24'>~Fyodor Dostoevsky</div>
                </p>
                
            </div>
            




            {/*right side*/}
            <div>
                <BannerCard/>
            </div>

        </div>
    </div>
  )
}

export default Banner