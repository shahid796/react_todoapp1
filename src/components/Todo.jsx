import React from 'react'

export default function Todo({items,handle}) {
  return (
    <div>
        
        <p onClick={handle} className={items.status?"strike":"no_strike"} id={items.id}>{items.task}</p>
    </div>
  )
}
