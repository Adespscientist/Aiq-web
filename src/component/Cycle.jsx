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
   <div className="flex flex-col items-center bg-section justify-around text-white mt-[50px] p-4  md:h-[80vh]" >
    <div className="m-2">
    <div className='w-full md:w-[70%]  m-1 p-1 md:m-2 md:p-2 '>
        <h1 className='flex text-[24px] md:text-[30px] items-center text-center'>We Provide data-based software solutions and Infrastructure that cuts across three aspects of the intelligence cycle</h1>
    </div>
    <div className='flex flex-col md:flex-row items-center justify-around '>
        {data.map((item)=>(
            <div className='m-4 cycle w-[20%] flex flex-col items-center justify-center'>
                <h3 className='my-4 text-3xl '>{item.title}</h3>
                <p className='text-center'>{item.text}</p>
            </div>
        ))}
    </div>
    </div>
   </div>
  )
}

export default Cycle