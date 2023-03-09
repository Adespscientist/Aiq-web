import React from 'react'
import img1 from '../utils/assets/Logos.png'
import img2 from '../utils/assets/Logos2.png'
import img3 from '../utils/assets/Logos3.png'
function Pride() {
    const images =[
        {
            id: 1,
            image: img1
        },
        {
            id: 2,
            image: img2
        },
        {
            id: 3,
            image: img3
        },
    ]
  return (
    <div className="flex items-center justify-center m-[30px] w-full p-4 mt-[40px]">
        <div className='w-[25%]'>
            <h1 className='font-[500] text-[24px] mb-4'>We take pride in serving diverse clients in defense, intelligence</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur quidem quibusdam officia sapiente maiores.</p>
        </div>
        <div className='flex bg-[#fff] rounded-xl ml-4'>
            {images.map((item)=>(
                <div className="mx-4">
                <img src={item.image} alt="Logos" />
                </div>
            ))}
        </div>
    </div>
  )
}

export default Pride