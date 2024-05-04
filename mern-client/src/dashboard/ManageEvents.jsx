import React, { useEffect, useState } from 'react'

import { Table } from "flowbite-react";
import { Link } from 'react-router-dom';

const ManageEvents = () => {
  const[allEvents, setAllEvents] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/all-events").then(res => res.json()).then(data => setAllEvents(data));
  },[])
  // delete an event 
  const handleDelete = (id) => {
    console.log(id);
    fetch( `http://localhost:5000/event/${id}`,{
      method: "DELETE"
    }).then(res => res.json()).then(data =>{
      alert("Event is deleted successfully")
      //setAllEvents(data)
    })
  }
  return (
    <div className='px-4 my-12'>
          <h2 className='mb-8 text-3xl font-bold'>Manage your events</h2>
          {/*table for event data */}

          <Table className='lg:w-[1180px]'>
        <Table.Head>
          <Table.HeadCell>No.</Table.HeadCell>
          <Table.HeadCell>Event Name</Table.HeadCell>

          <Table.HeadCell>Category</Table.HeadCell>
          <Table.HeadCell>Event Status</Table.HeadCell>
          <Table.HeadCell>
            <span>Edit or Manage</span>
          </Table.HeadCell>
        </Table.Head>
        {
          allEvents.map((event, index)=> <Table.Body className="divide-y" key={event}>
            <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
            <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
              {index + 1}
            </Table.Cell>
            <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
              {event.eventName}
            </Table.Cell>
            <Table.Cell>{event.category}</Table.Cell>
            <Table.Cell>{event.eventStatus}</Table.Cell>
            
            <Table.Cell>
              <Link to={`/admin/dashboard/edit-events/${event._id}`} className="font-medium text-cyan-600 hover:underline dark:text-cyan-500 mr-5">
                Edit
              </Link>
              <button onClick={()=> handleDelete(event._id)} className='bg-red-600 px-4 py-1 font-semibold text-white rounded-sm hover:bg-sky-600'>Delete</button>
            </Table.Cell>
          </Table.Row>
          </Table.Body> )
        }
       
      </Table>
    </div>
    

  )
}

export default ManageEvents