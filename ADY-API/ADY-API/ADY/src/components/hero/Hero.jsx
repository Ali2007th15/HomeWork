import React from 'react';
import Train2 from "../../assets/ADY2.png";
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
const Hero = () => {
    const imageVariants = {
        initial: {
            x: "100%",
            scale: 1,
        },
        animate: {
            x: "25%",
            scale: 0.9,
            transition: {
                duration: 3,
                ease: "easeInOut",
            }
        }
    };

    return (
        <div className='w-full h-[calc(100vh-8ch)] lg:px-28 md:px-16 sm:px-7 px-4 mt-[8ch] flex items-center justify-center flex-col hero relative'>
            <div className="flex-1 w-full flex flex-col lg:flex-row items-stretch justify-between gap-12 pb-10">
                <motion.div className="lg:w-[35%] w-full h-auto rounded-md flex justify-center flex-col space-y-8 lg:space-y-14"
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, ease: 'linear', delay: 0.2 }}
                >
                    <motion.div className="space-y-5"
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, ease: 'linear', delay: 0.4 }}
                    >
                        <motion.h1 className="text-3xl sm:text-4xl lg:text-6xl font-bold text-neutral-50 leading-[1.15] text-center md:text-left"
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 2, ease: 'linear', delay: 0.4 }}
                        >
                            Reserve
                            <span className="text-violet-800 tracking-wider"> Tickets</span>
                        </motion.h1>
                        <motion.p className="text-sm sm:text-lg font-normal text-neutral-300 line-clamp-3 text-ellipsis text-center md:text-left"
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 2, ease: 'linear', delay: 0.6 }}
                        >
                            Plan your travels in comfort with our fast and easy ticket booking service available throughout the country.
                        </motion.p>
                    </motion.div>

                    <Link to={'/train'} className='w-fit bg-violet-600 text neutral-50 font-medium text-base px-6 py-2 rounded-md hover:bg-violet-700 ease-in-out duration-300'>
                        Reserve Seat
                    </Link>
                </motion.div>

                <div className="lg:w-[70%] w-full h-full rounded-md flex items-end justify-end relative lg:static">
                    <motion.img className="w-full max-h-[60%] object-contain relative"
                        style={{ top: '-160px' }} 
                        src={Train2}
                        alt='train img'
                        initial="initial"
                        animate="animate"
                        variants={imageVariants}
                    />
                </div>
            </div>
        </div>
    );
};

export default Hero;
