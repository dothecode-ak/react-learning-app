import React, { useState } from 'react'

const PropState = (props) => {
   const[name,setName]= useState(props.name);
   const[age,setAge]= useState(props.age);
    const updateName=(newName,newAge)=>
    {
setName(newName)
setAge(newAge)
    }
  return (
    <div>
      <p>Props Example</p>
      <h2>Details:</h2>
      <p>Name: {name} , Age: {age}</p>
{props.children}
<button onClick={()=>updateName('Anil2',29)}>Update Name</button>
    </div>
  )
}

export default PropState
