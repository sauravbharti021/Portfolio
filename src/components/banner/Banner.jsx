
import React, { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import bg1 from '../../assets/bg1.jpg'
import backgound from '../../assets/banner_wallpaper.svg'
import Typed from 'typed.js'
import './Banner.css'

export default function Banner() {

    const el= useRef(null)

    useEffect(()=>{
        const typed = new Typed(el.current, {
            strings: ['Full', "Full Stack", "Full Stack Developer "],
            typeSpeed: 100,
            loop: true
          });
      
          return () => {
            // Destroy Typed instance during cleanup to stop animation
            typed.destroy();
          };
    },[])

  return (
    <>
        <div style={
                {
                    backgroundImage : `url(${backgound})`,
                    backgroundSize: 'cover'
                }
            } className='main-container flex items-center'>
        {/* border-8 border-blue-500 */}
            
            <div  className=' w-full flex justify-center ml-0 sm:ml-10 text-white' >
                <div className=' w-2/3 pb-5' >
                    
                    <h3 className='mt-2 text-3xl font-semibold'>Hello, I am</h3>
                    <h1 className=' mt-2 sm:text-5xl text-3xl font-bold'>Saurav Bharti</h1>
                    <h2 className='mt-1 text-2xl font-bold'>I'm a <span className='underline' ref={el}> Full Stack Developer </span> </h2>
                    <p className='mt-2'>As a full stack Developer. I possess a strong arsenal of skills in ReactJS, NodeJS, MongoDB, Javascript, CSS and HTML. My expertise lies in crafting dynamic and engaging ways to build an application from scratch.</p>


                    <div className='icons-container p-4 flex-col sm:flex-row items-center'>
                        
                        
                    <Link to='https://github.com/sauravbharti021' className='hover:bg-orange-300 mb-10 sm:mb-0 mr-4 p-2 rounded-full bg-gray-700'>
                        <i className="fa-brands fa-github fa-2xl mb-10 sm:mb-0 "></i>
                    </Link> 
                    <Link to='https://linkedin.com/in/sauravbharti021' className='hover:bg-orange-300 mb-4 sm:mb-0 mr-4 p-2 rounded-full bg-blue-700'>
                        <i className="fa-brands fa-linkedin fa-2xl mb-10 sm:mb-0"></i>
                    </Link>
                     
                    <Link to='mailto:sauravbhartibgs37@gmail.com' className='hover:bg-orange-300 mb-4 sm:mb-0 p-2 rounded-full bg-red-700'>
                        <i className="fa-solid fa-envelope fa-2xl"></i>
                    </Link>

                    </div>
                    <br/>
                    {/* <Link to="/contact" className='mt-4 px-5 py-2 bg-orange-600 rounded-full shadow '> 
                        <button type='button' className='text-white'>Contact Me</button>
                    </Link> */}
                </div>
            </div>

            
            <div className='bubble w-full flex justify-center'>
                <img className='rounded-full shadow-lg w-fit h-96 ' src={bg1} />
            </div>
        </div>
    </>
  )
}
