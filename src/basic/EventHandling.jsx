import React, { useState } from 'react'

const EventHandling = () => {
    const [value,setValue]=useState(10);
    const changeData=(v)=>
    {
setValue(v)
    }
  return (
    <div>
      <h2>Event Handling</h2>
      {value}
      <button onClick={()=>changeData(20)}>Update</button>
    </div>
  )
}

export default EventHandling
