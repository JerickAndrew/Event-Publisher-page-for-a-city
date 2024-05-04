import React,{useEffect, useState} from 'react'
import EventCard from '../components/EventCard';

const OtherEvent = () => {
    const [events, setEvents] = useState([]);
    useEffect(()=>{
        fetch("http://localhost:5000/all-events").then(res => res.json()).then(data => setEvents(data.slice(0,10)))
    },[])
  return (
    <div>
      <EventCard events={events} headLine="Other Events"/>
    </div>
  )
}

export default OtherEvent