import React, { useState } from 'react'

const Redo_i = () => {
    const[color,setcolor]=useState("black")
  return (
    <>
    <div className='w-full h-screen text-white'
    style={{backgroundColor:color}}>
    <button onClick={()=>{setcolor("blue")}}>blue</button>
    </div>
    </>
  )
}

export default Redo_i