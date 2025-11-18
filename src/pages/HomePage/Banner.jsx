import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Banner = () => {
    const textSlides = [
        { heading: "Connecting hearts, creating stories", paragraph: "Where every match is a new beginning" },
        { heading: "Love is just a click away", paragraph: "Start your journey towards happiness today" },
        { heading: "Find your perfect match", paragraph: "Millions are waiting to meet someone like you" }
    ];

    const [currentSlide, setCurrentSlide] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % textSlides.length);
        }, 4000);
        return () => clearInterval(interval);
    }, []);

    return (
        <div className='relative h-[500px] sm:h-[550px] md:h-[600px]'>
            {/* Background Image */}
            <div 
                className='absolute inset-0 bg-cover bg-center bg-no-repeat'
                style={{ backgroundImage: `url("https://i.ibb.co/YFjb3XBY/F97316-1.png")` }}
            ></div>

            {/* White overlay */}
            <div className='absolute inset-0 bg-white opacity-20'></div>

            {/* Text Content */}
            <div className='relative flex flex-col items-center justify-center h-full text-center px-4 sm:px-6 md:px-0'>
                <AnimatePresence mode='wait'>
                    <motion.div
                        key={currentSlide}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 1 }}
                        className='space-y-4'
                    >
                        <h1 className='text-3xl sm:text-4xl md:text-5xl font-bold text-black'>
                            {textSlides[currentSlide].heading}
                        </h1>
                        <p className='text-lg sm:text-xl md:text-xl font-semibold text-gray-800'>
                            {textSlides[currentSlide].paragraph}
                        </p>
                    </motion.div>
                </AnimatePresence>

                <button className='mt-6 sm:mt-8 px-6 sm:px-8 md:px-10 py-2 sm:py-3 bg-orange-500 text-white font-semibold rounded-lg hover:bg-orange-600 transition text-base sm:text-lg md:text-xl'>
                    Explore
                </button>
            </div>
        </div>
    );
};

export default Banner;
