import React from 'react'
import {ImDatabase, ImCloudUpload} from "react-icons/im"
import{ RiServerFill, RiSendPlaneFill} from "react-icons/ri"
import bgImg from '../Assests/cyber-bg.jpg'
const Hero = () => {
    return (
        <div className='w-full h-screen bg-zinc-200 flex flex-col justify-between'>
            <div className='grid md:grid-cols-2 max-w{1240px} m-auto'>
              <div className='flex flex-col justify-center md:items-start w-full px-2 py-8'>
                <p className='text-2xl'> Unique Sequencing & Production</p>
                <h1 className='py-3 text-4xl md:text-7xl font-bold'>Cloud Management</h1>
                <p className='text-2xl'>This is our Tech branch</p>
                <button className='px-8 py-3 sm:-[60%] my-4'>Get Started</button>
              </div>
              <div>
                <img className='w-full' src={bgImg} alt="/" />
              </div>
              <div className='absolute flex flex-col py-8 md:min-w-[760px] bottom-[5%]
              mx-1 md:left-1/2 transform md:-translate-x-1/2 bg-zinc-200
             border border-slate-300 rounded-xl text-center shadow-xl'>
                <p className='my-2 text-2xl'>Data services</p>
                <div className='flex justify-between flex-wrap px-4'>
                <p className='flex justify-center px-4 py-2  text-black'><ImCloudUpload  className='w-7 h-9 mx-5 text-indigo-500'/> App Security</p>
                <p className='flex justify-center px-4 py-2  text-black'><RiServerFill className='w-7 h-9 mx-5 text-indigo-500'/> Dashboard Design</p>
                <p className='flex justify-center px-4 py-2  text-black'><ImDatabase className='w-7 h-9 mx-5 text-indigo-500'/>Cloud Data</p>
                <p className='flex justify-center px-4 py-2  text-black'><RiSendPlaneFill className='w-7 h-9 mx-5 text-indigo-500'/> API</p>
              </div>
              </div>
              
            </div>

        </div>
    )
}

export default Hero;