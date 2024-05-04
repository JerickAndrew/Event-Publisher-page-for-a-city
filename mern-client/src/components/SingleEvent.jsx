import React from 'react'
import { useLoaderData } from 'react-router-dom'

const SingleEvent = () => {
    const {_id} = useLoaderData();
  return (
    <div>SingleEvent: {_id}</div>
  )
}

export default SingleEvent