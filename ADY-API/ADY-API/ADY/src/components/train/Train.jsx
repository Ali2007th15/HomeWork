import React from 'react'
import { Link } from 'react-router-dom'
import Train1 from "../../assets/train2.png"
import Train2 from "../../assets/train6.png"
import Train3 from "../../assets/train8.png"
import { FaSearch } from 'react-icons/fa'


const Train = () => {
  return (
    <div className='w-full lg:px-28 md:px-16 sm:px-7 px-4 mt-[13ch] mb-[8ch] space-y-14 '>
     <div className="w-full grid grid-cols-6 gap-14 bg-neutral-200/60 dark:bg-neutral-900/40 rounded-md px-6 py-5 items-center justify-between">
     <div className="flex items-center gap-x-2.5 col-span-2">  
     <input type="text" id='seat' placeholder='Search Trains...' name='seat' className="w-full appearance-none text-neutral-800 dark:text-neutral-100 placeholder:text-neutral-400 dark:placeholder:text-neutral-600 inline-block bg-neutral-200/60 dark:bg-neutral-900/60 px-3 h-12 border border-neutral-200 dark:border-neutral-900 rounded-md focus:outline-none focus:bg-neutral-100 dark:focus:bg-neutral-900" /> 
     <button className="bg-violet-600 h-11 px-4 rounded-md text-base text-neutral-50 font-normal">
        <FaSearch/>
     </button>
     </div>
     <div className='col-span-2'></div>

     <div className='col-span-2'> 
     <select  className="w-full appearance-none text-neutral-800 dark:text-neutral-100 placeholder:text-neutral-400 dark:placeholder:text-neutral-600 inline-block bg-neutral-200/60 dark:bg-neutral-900/60 px-3 h-12 border border-neutral-200 dark:border-neutral-900 rounded-md focus:outline-none focus:bg-neutral-100 dark:focus:bg-neutral-900">
      <option value="">Select Train Type</option>
      <option value="touristtrain">Tourist Train</option>
      <option value="privatetrain">Private Train</option>
      <option value="governmenttrain">Fast Train</option>
     </select>
      </div>
     </div>
     <div className="w-full grid grid-cols-3 gap-12">
      <Link to={"/train/train-details"} className='w-full bg-neutral-200/60 block dark:bg-neutral-900/40 rounded-xl p-4'>
      <img src={Train1} alt="train img" className="w full aspect-video object-contain object-center"/>
      <div className="px-3 py-4 space-y-2">
        <div className="flex items-center justify-between">
            <h1 className="text-xl font-semibold text-neutral-800 dark:text-neutral-50">
                Private Train
            </h1>
            <p className="text-sm font-normal text-neutral-800 dark:text-neutral-50">
                10 passangers
            </p>
        </div>
      </div>
      </Link>
      <Link to={"/train/train-details"} className='w-full bg-neutral-200/60 block dark:bg-neutral-900/40 rounded-xl p-4'>
      <img src={Train2} alt="train img" className="w full aspect-video object-contain object-center"/>
      <div className="px-3 py-4 space-y-2">
        <div className="flex items-center justify-between">
            <h1 className="text-xl font-semibold text-neutral-800 dark:text-neutral-50">
                Tourist Train
            </h1>
            <p className="text-sm font-normal text-neutral-800 dark:text-neutral-50">
                50 passangers
            </p>
        </div>
      </div>
      </Link>
      <Link to={"/train/train-details"} className='w-full bg-neutral-200/60 block dark:bg-neutral-900/40 rounded-xl p-4'>
      <img src={Train3} alt="train img" className="w full aspect-video object-contain object-center"/>
      <div className="px-3 py-4 space-y-2">
        <div className="flex items-center justify-between">
            <h1 className="text-xl font-semibold text-neutral-800 dark:text-neutral-50">
                Fast Train
            </h1>
            <p className="text-sm font-normal text-neutral-800 dark:text-neutral-50">
                100 passangers
            </p>
        </div>
      </div>
      </Link>

     </div>
    </div>
  )
}

export default Train