import React, { useState } from 'react'
import { Button, Checkbox, Label, TextInput } from "flowbite-react";
import { useLoaderData, useParams } from 'react-router-dom';
import { Textarea } from "flowbite-react";

const EditEvents = () => {
  const {id} = useParams();
  const {eventName, category, imageURL, eventDescription, eventStatus} = useLoaderData()
  const eventCategories =[
    "Movies",
    "Music",
    "Event",
    "Festival",
    "Sports"
  ]
  const [selectedEventCategory,setSelectedEventCategory] = useState(eventCategories[0]);
  const handleChangeSelectedValue = (event)=>{
    //console.log(event.target.value)
    setSelectedEventCategory(event.target.value)
  }
  //handle event submission
  const handleUpdate = (event) =>{
      event.preventDefault();
      const form = event.target;

      const eventName = form.eventName.value;
      const imageURL = form.imageURL.value;
      const category = form.categoryName.value;
      const eventDescription = form.eventDescription.value;
      const eventStatus = form.eventStatus.value;
      
      const updateEventObj ={
        eventName,imageURL,category,eventDescription
      }

      //console.log(eventObj)   
      //update event data
      fetch(`http://localhost:5000/event/${id}`,{
        method: "PATCH",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(updateEventObj)
      }).then(res => res.json()).then(data => {
        //console.log(data)
        alert("Event is updated successfully!!!")
      })
  }

  return (
    <div className='px-4 my-12'>
      <h2 className='mb-8 text-3xl font-bold'>Update the event data</h2>

      <form onSubmit={handleUpdate} className="flex lg:w-[1180px] flex-col flex gap-4">
        {/*first row */}
        <div className='flex gap-8'>
          <div className='lg:w-1/2'>
              <div className="mb-2 block">
                <Label htmlFor="eventName" value="Event Name" />
              </div>
          <TextInput id="eventName" type="text"  name="eventName" placeholder="Event name" 
          defaultValue={eventName} required  />
          </div>  
          
        </div>
        {/*2nd row */}
        <div className='flex gap-8'>
          <div className='lg:w-1/2'>
              <div className="mb-2 block">
                <Label htmlFor="imageURL" value="Image URL" />
              </div>
          <TextInput id="imageURL" type="text"  name="imageURL" 
          placeholder="Url of the event image" 
          defaultValue={imageURL} required  />
          </div>           
        </div>

        {/*status row */}
        <div className='flex gap-8'>
          <div className='lg:w-1/2'>
              <div className="mb-2 block">
                <Label htmlFor="eventStatus" value="Event Status" />
              </div>
          <TextInput id="eventStatus" type="text"  name="eventStatus" 
          placeholder="Status of the event" 
          defaultValue={eventStatus} required  />
          </div>           
        </div>

        {/*category*/}
        <div className='lg:w-1/2'>
        <div className="mb-2 block">
          <Label htmlFor="inputState" value="Event Category" />
        </div>  
        <select id='inputState' name='categoryName' className='w-full rounded' value={selectedEventCategory}
        onChange={handleChangeSelectedValue}>
          {
            eventCategories.map((option) => <option key={option} value="{option}">{option}</option>)
          }
        </select>
             
         
        </div> 
        {/*Description */}   
        <div>
        <div className="mb-2 block">
          <Label htmlFor="eventDescription" value="Event Description" />
        </div>
        <Textarea id="eventDescription" placeholder="Write your event description" required
        defaultValue={eventDescription}
        className='w-full' rows={6} />
      </div>  
      <Button type="submit" className='mt-5'>
        Update event
      </Button> 
           
    </form>
    </div>
  )
}

export default EditEvents