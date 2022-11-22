import React from 'react'
import sptImg from '../Assests/supp.jpg'
import {IoCallOutline, IoLogoCodepen, IoArrowForwardSharp, IoHardwareChipSharp} from "react-icons/io5"
import {ArrowRightIcon, PhoneIcon} from '@heroicons/react/24/outline'
const Support = () => {
  return (
   <div className='w-full h-screen mt-24'>
    <div className='w-full h-[700px] bg-gray-900/90 absolute'>
    <img className='w-full h-full object-cover mix-blend-overlay' src={sptImg} alt="" />
    </div>

    <div className='max-w-[1240px] mx-auto text-white relative '>
    <div className='px-4 py-12 text-center' >
      <h1 className='text-3xl text-slate-300 pt-8 uppercase'>Support</h1>
      <h2 className='text-5xl font-bold py-6'>Finding the right team</h2>
      <p className='py-8 text-3xl'>
        lorem ipsum dolor sit, amet consectetur adipisicing elit.
             Corporis aperiam, ex magnam suscipit ullam,s
              voluptatibus ducimus et ut modi sapiente molestiae
               neque unde molestias optio saepe deserunt,
               aliquam itaque at.
               </p>
    </div>

    <div className='grid grid-cols-1 lg:grid-cols-3 relative
     gap-x-8 gap-y-16 px-4 pt-12 sm:pt-20 text-black'>
      <div className='bg-white rounded-xl shadow-2xl'>
       <div className='p-8'>
       <PhoneIcon className='w-16 p-4 rounded-lg text-white bg-indigo-600 mt-[-4rem] '/>
        <h3 className='font-bold text-2xl my-6'>Sales</h3>
        <p className='text-gray-600 text-xl'>
        lorem ipsum dolor sit, amet consectetur adipisicing elit.
             Corporis aperiam, ex magnam suscipit ullam,
              voluptatibus ducimus et ut modi sapiente molestiae
               neque unde molestias optio saepe deserunt,
               aliquam itaque at.
               </p>
       </div>
       <div className='bg-slate-100 pl-8 py-4'>
        <p>Contact Us 
          <ArrowRightIcon className='w-5 ml-2'/>
        </p>
       </div>
      </div>
    </div>
    </div>

     
   </div>
  )
}

export default Support;