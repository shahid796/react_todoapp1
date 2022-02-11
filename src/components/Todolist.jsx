import React from 'react'
import './todolist.css'
import Todo from './Todo'

export default function Todolist({list,toggle,filter}) {
    const handlesumbit=(e)=>{
    
       toggle(e.currentTarget.id)
    }
  
  return (
    <div>
        <h3>
           tasks
        </h3>
        {
            list.map((item)=>{
                return(
                    // <p onClick={handlesumbit} className={item.status?"strike":"no_strike"} id={item.id}>{item.task}</p>
                    <Todo items={item}  handle={handlesumbit}/>
                )
            })
        }
        <div>
        <button onClick={filter} >
            delete completed task
        </button>
        </div>
        
    </div>
  )
}
