import React from 'react'
import { Link } from 'react-router-dom'
import Train1 from "../../assets/train6.png"
import Train2 from "../../assets/train8.png"
import Train3 from "../../assets/train2.png"

const Category = () => {
    return (
        <div className='w-full lg:px-28 md:px-16 sm:px-7 px-4 mb-[8ch]'>
            <div className="w-full items-center flex justify-between">
                <h1 className="text-2xl font-medium mb-6">
                    Category
                </h1>
                <Link to={"/train"} className='text-violet-600'>View All</Link>
            </div>
            <div className="grid grid-cols-3 gap-6">
                <Link to={"/train/train-details"} className='bg-neutral-200/60 dark:bg-neutral-900/40 block rounded-xl px-4 py-5 relative group ease-in-out duration-300 overflow-hidden' >
                        <img src={Train1} alt="train img" className="w-full aspect-video object-contain" />
                        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-tr dark:from-neutral-950/80 dark:to-neutral-950/60 from-neutral-400/80 to-neutral-400/60 group-hover:flex hidden items-center justify-center ease-in-out duration-300">
                            <h2 className="text-2xl front-bold text-center text-neutral-900 dark:text-neutral-50">
                                Private Train
                            </h2>
                        </div>
                </Link>

    
                <Link to={"/train/train-details"} className='bg-neutral-200/60 dark:bg-neutral-900/40 block rounded-xl px-4 py-5 relative group ease-in-out duration-300 overflow-hidden' >
                        <img src={Train2} alt="train img" className="w-full aspect-video object-contain" />
                        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-tr dark:from-neutral-950/80 dark:to-neutral-950/60 from-neutral-400/80 to-neutral-400/60 group-hover:flex hidden items-center justify-center ease-in-out duration-300">
                            <h2 className="text-2xl front-bold text-center text-neutral-900 dark:text-neutral-50">
                                Tourist Train
                            </h2>
                        </div>
                </Link>


                <Link to={"/train/train-details"} className='bg-neutral-200/60 dark:bg-neutral-900/40 block rounded-xl px-4 py-5 relative group ease-in-out duration-300 overflow-hidden' >
                        <img src={Train3} alt="train img" className="w-full aspect-video object-contain" />
                        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-tr dark:from-neutral-950/80 dark:to-neutral-950/60 from-neutral-400/80 to-neutral-400/60 group-hover:flex hidden items-center justify-center ease-in-out duration-300">
                            <h2 className="text-2xl front-bold text-center text-neutral-900 dark:text-neutral-50">
                                Fast Train
                            </h2>
                        </div>
                </Link>

            </div>
        </div>
    )
}

export default Category