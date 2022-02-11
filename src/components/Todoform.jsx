import React, { useState } from 'react'

export default function Todoform({addtask}) {
    const [userinput,setuserinput]=useState("")
    const handlesubmit=(e)=>{
        addtask(userinput)
        setuserinput("")
    }
  return (
    <div>
        <h1>
            TODAY PLANS..!
        </h1>
        <div>
            <input type="text"  placeholder='enter your task ' value={userinput} onChange={(e)=>{setuserinput(e.target.value)}}/>
            <button onClick={handlesubmit} className="btn btn-primary">add</button>
        </div>
    </div>
  )
}
