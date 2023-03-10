import React from 'react'
import { color } from '../utils/data/data'

function Cycle() {
    const data=[
        {
            id: 1,
            title: 'Data Exploitation',
            text: 'Lorem ipsum dolor ieam amet connector adipsdinfdg elit'
        },
        {
            id: 2,
            title: 'Data Processing',
            text: 'Lorem ipsum dolor ieam amet connector adipsdinfdg elit'
        },
        {
            id: 3,
            title: 'Data Collection',
            text: 'Lorem ipsum dolor ieam amet connector adipsdinfdg elit'
        },
    ]
  return (
   <div className="flex flex-col items-center bg-section justify-around text-white mt-[50px] p-4" >
    <div className='w-[70%]'>
        <h1 className='text-[30px] text-center'>We Provide data-based software solutions and Infrastructure that cuts across three aspects of the intelligence cycle</h1>
    </div>
    <div className='flex items-center justify-between ' style={{backgroundColor:color.secondary, borderRadius:10, height:200}}>
        {data.map((item)=>(
            <div className='mx-4'>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
            </div>
        ))}
    </div>
   </div>
  )
}

export default Cycle