import React from 'react'
import { useState } from 'react'

const Homework = () => {
  const [color,setcolor]=useState("olive")
  return (
    <>
     <div className='w-full h-screen'
    style={{backgroundColor:color}}> 
    <button 
    onClick={()=>{setcolor("blue")}}
    style={{backgroundColor:'blue'}}
    className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
    >Blue</button><br />
    <button onClick={()=>{setcolor("green")}}>green</button><br />
   <button onClick={()=>{setcolor("red")}}>red</button><br />
     </div> 

    </>
  )
}

export default Homework