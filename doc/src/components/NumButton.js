import  { useState } from "react"
import React from 'react'



const Numbutton =()=>{
    const [num,setNum]=useState(0);
    const [isplus,setPlus]=useState(true);

  return (
     <div>
         <button onClick={()=>{setNum(num+1)}}>{num}</button>
         <button onClick={()=>{setPlus(!isplus)}}>{isplus?'+':'-'}</button>
     </div>
  )
}

export default Numbutton