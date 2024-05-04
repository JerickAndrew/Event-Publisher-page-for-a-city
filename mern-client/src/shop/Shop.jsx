import React, { useEffect, useState } from 'react'

import { Card } from "flowbite-react";

const Shop = () => {
  const [events, setEvents] = useState([]);
  useEffect(()=>{
    fetch("http://localhost:5000/all-events").then(res => res.json()).then(data => setEvents(data));
  })
  return (
    <div className='mt-28 px-4 lg:px-24'>
      <h2 className='text-5xl font-bold text-center'>All Events are here</h2>
      <div className='grid gap-8 my-12 lg:grid-cols-4 sm:grid-cols-2 md:grid-cols-3 grid-cols-1'>
        {
          events.map(event =><Card
            className="max-w-sm"
          >
            <img src={event.imageURL} alt="" className=''/>
            <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              {event.eventName}
            </h5>
            <p className="font-normal text-gray-700 dark:text-gray-400">
              {event.eventDescription}
            </p>
            <button className='bg-blue-700 font-semibold text-white py-2 rounded'>Book Here</button>
          </Card>)
        }
      </div>
    </div>
  )
}

export default Shop