import React from 'react'
import {CheckIcon} from '@heroicons/react/24/solid'

const Pricing = () => {
  return (
    <div className='w-full text-white' >
        <div className='w-full h-{800px} bg-slate-900 absolute mix-blend-overlay'></div>
      <div className='pt-8 px-auto'>
        <div className='text-center'>
            <h2 className='text-3xl text-slate-300 my-5'>PRICING</h2>
            <h1 className='text-4xl font-bold text-white my-3'>The right price for your research.</h1>
            <p className='text-xl text-slate-300'>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                 Beatae rem accusamus pariatur illo non adipisci
                  dolore sed autem repudiandae consequatur odio labore minus,
                 consequuntur laborum expedita facilis eaque rerum quasi?</p>
        </div>

        <div className='grid'>
         <div>
            <span>Standard</span>
            <div>
                <p>$49 <span>/mo</span></p>
            </div>
            <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
                <div>
                    <p><CheckIcon className='w-8 mr-5 text-green-600'/>Lorem ipsum dolor.</p>
                    <p><CheckIcon className='w-8 mr-5 text-green-600'/>Lorem ipsum dolor.</p>
                    <p><CheckIcon className='w-8 mr-5 text-green-600'/>Lorem ipsum dolor.</p>
                    <p><CheckIcon className='w-8 mr-5 text-green-600'/>Lorem ipsum dolor.</p>
                    <p><CheckIcon className='w-8 mr-5 text-green-600'/>Lorem ipsum dolor.</p>
                    <button>Get Started</button>
                </div>
         </div>
        </div>
        
      </div>
    </div>
  )
}

export default Pricing