import React from 'react'

const About = () => {
  return (
    <div className='w-full my-32'>
    <div className='max-w-[1240px] mx-auto mb-6'>
        <div className='text-center'>
        <h2 className='text-3xl font-bold my-2 mx-5 '>Trusted by developers across the world</h2>
        <p className='text-1xl text-gray-700   '>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
             Corporis aperiam, ex magnam suscipit ullam,
              voluptatibus ducimus et ut modi sapiente molestiae
               neque unde molestias optio saepe deserunt,
               aliquam itaque at.

        </p>
        </div>
        </div>
        <div className='grid md:grid-cols-3 gap-1 px-2 text-center mt-3'>
            <div className='flex flex-col shadow-xl border  px-9 py-3  mx-2  rounded-xl '>
                <h1 className='text-indigo-500 text-5xl font-bold mb-2'>100%</h1>
                <p className='r mx-2'>Completion</p>
            </div>
            <div className='flex flex-col shadow-xl border px-9 py-3  mx-2 rounded-xl '>
                <h1 className='text-indigo-500 text-5xl font-bold mb-2'>24/7</h1>
                <p className='text-center mx-2'>Delivery</p>
            </div>
            <div className='flex flex-col shadow-xl border  px-9 py-3 mx-2 rounded-xl '>
                <h1 className='text-indigo-500 text-5xl font-bold mb-2'>100K</h1>
                <p className='text-center mx-2'>Transactions</p>
            </div>
        </div>
    </div>
  )
}

export default About