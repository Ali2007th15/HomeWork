import React from "react";
import { FaStar } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import Train from '../../assets/train6.png';
import Destination from '../destination/Destination';
import DepartTime from "../departtime/DepartTime";
import Seat from "../seat/Seat"



const Detail = () => {
    return (
        <div className='w-full lg:px-28 md:px-16 sm:px-7 px-4 mt-[13ch] mb-[10ch] '>
            <div className="w-full grid grid-cols-2 gap-16 items-center">
                <div className="col-span-1 space-y-8">
                    <img src={Train} alt="detail img" className="w-full aspect-[3/2] rounded-md object-contain" />
                    <div className="space-y-4">
                        <h1 className="text-4xl font-bold text-neutral-900 dark:text-neutral-50">
                            Luxury Train
                            <span className="text-base font-normal text-neutral-400 dark:text-neutral-500 ml-3">
                                1518
                            </span>
                        </h1>

                        <div className="flex items-center gap-x-2">
                            <div className="flex items-center gap-x-1 text-sm text-yellow-500 dark:text-yellow-600">
                                <FaStar />
                                <FaStar />
                                <FaStar />
                                <FaStar />
                                <FaStar />
                            </div>
                            <p className="text-neutral-900 dark:text-neutral-200 text-sm font-normal">
                                (5.0)
                            </p>
                        </div>
                        <p className="text-neutral-900 dark:text-neutral-200 text-sm font-normal">
                        Comfort Meets Speed on Our High-Speed Train
                        Enjoy a smooth, quiet journey with spacious, ergonomic seating and ample legroom. Our high-speed train offers Wi-Fi, power outlets, and personal climate control, ensuring a comfortable ride. With large windows for panoramic views and attentive service, travel in style and comfort, whether for business or leisure.
                            </p>
                    </div>
                </div>
                <div className="col-span-1 space-y-10">
                    <div className="space-y-6">
                        
                        <Destination />
                     <DepartTime/>
                     <Seat/>
                    </div>

                    <div className="flex">
                        <Link to={'/train/train-details/checkout'} className='w-fit bg-violet-600 text neutral-50 font-medium text-base px-6 py-2 rounded-md hover:bg-violet-700 ease-in-out duration-300'>
                            Processed to Checkout
                        </Link>                       
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Detail