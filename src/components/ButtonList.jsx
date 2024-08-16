import React from 'react'
import Button from "./Button"

const ButtonList = () => {
  const list=["All","Gaming","Cricket","news","Songs","Update","TodayHeadlines","pop music","Guitar","Today special"]

  return (
    <div >
       <ul className='flex'>
      {
       
          list.map((index,item)=>{
          return <li key={index}><Button name={list[item]}/></li>
          })
       
      }
       </ul>
    </div>
  )
}

export default ButtonList