import React from 'react'
import logo from '../utils/assets/Artboard 10AIQ 4.png'
import icon1 from '../utils/assets/lSocial Media.png'
import icon2 from '../utils/assets/njb.png'
import icon3 from '../utils/assets/2Social Media.png'
import icon4 from '../utils/assets/Social Media.png'
import { color } from '../utils/data/data'
function Footer() {
    const footer = {
        quickLink:[
            {
                id:1,
                Header: 'Quick Links',
            },
            {
                id:2,
                title: 'Solution',
                url:'solution'
            },
            {
                id:3,
                title: 'About',
                url: 'about'
            },
            {
                id:4,
                title: 'Service',
                url:'service'
            },
        ],
        solution:[
                {
                    id: 1,
                    title: 'Helix',
                    url:'helix'
                },
                {
                    id: 2,
                    title: 'Civet',
                    url:'civet'
                },
        ],
        logo:[
            {
                id: 1,
                icon:icon1
            },
            {
                id: 2,
                icon:icon2
            },
            {
                id: 3,
                icon:icon3
            },
            {
                id: 4,
                icon:icon4
            },
        ]
    }
  return (
    <div>
    <div className="grid justify-items-left place-items-center  grid-cols-1 md:grid-cols-4 gap-4 items-center m-[20px] p-[20px]" style={{borderTopWidth: 1, borderColor:'#dddddd'}}>
        <div className='w-[100%] flex flex-col justify-center items-center'>
            <img src={logo} alt="logo" style={{width:100, objectFit: 'contain', marginBottom:20}}/>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ullam accusantium tempore quis voluptatum natus dignissimos nemo officiis iure repellat asperiores?</p>
        </div>
        <div className='flex flex-col'>
            {footer.quickLink.map((item)=>(
                <div>
                    <p>{item.Header}</p>
                <div className="m-2">
                    <span>{item.title}</span>
                </div>
                </div>
            ))}
        </div>
        <div className='flex flex-col'>
            {footer.solution.map((item)=>(
                <div className="m-2">
                    <span>{item.title}</span>
                </div>
            ))}
        </div>
        <div className='flex flex-col'>
            {footer.logo.map((item)=>(
                <div className="mx-4 my-1">
                    <img src ={item.icon} alt="Social" style={{width:100, height:50}}/>
                 </div>
            ))}
        </div>
      
    </div>
      <div className='flex items-center justify-center' style={{backgroundColor:color.primary, color:color.white}}>
      <span className='p-3'>Aiq &copy; 2023.</span>
  </div>
  </div>
  )
}

export default Footer