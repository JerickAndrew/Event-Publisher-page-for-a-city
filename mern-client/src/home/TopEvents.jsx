import React,{useEffect, useState} from 'react'
import EventCard from '../components/EventCard';

const TopEvents = () => {
  const [events, setEvents] = useState([]);
    useEffect(()=>{
        fetch("http://localhost:5000/all-events").then(res => res.json()).then(data => setEvents(data.slice(0,6)))
    },[])
  return (
    <div>
      <EventCard events={events} headLine="Top Events"/>
    </div>
  )
}

export default TopEvents