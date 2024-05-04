import React from 'react'
import { useLoaderData } from 'react-router-dom'


const SingleEvent = () => {
    const {_id, eventName, imageURL} = useLoaderData();
  return (
    <div className='mt-28 px-4 lg:px-24 '>
        <img src={imageURL} alt="" className='h-96' />
        <h2>{eventName}</h2>
    </div>
  )
}

export default SingleEvent