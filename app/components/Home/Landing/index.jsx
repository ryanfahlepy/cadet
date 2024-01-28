"use client"
import React from 'react'
import Image from 'next/image'

import { useEffect, useState } from 'react'
import { BsChevronLeft, BsChevronRight } from 'react-icons/bs';

import carousel1 from '/public/images/carousel/carousel1.png'
import carousel2 from '/public/images/carousel/carousel2.png'
import carousel3 from '/public/images/carousel/carousel3.png'
import carousel4 from '/public/images/carousel/carousel4.png'
import carousel5 from '/public/images/carousel/carousel5.png'
const images = [carousel1, carousel2, carousel3, carousel4, carousel5];

import crop1 from '/public/images/crop/crop1.png'
import crop2 from '/public/images/crop/crop2.png'
import crop3 from '/public/images/crop/crop3.png'


const Landing = () => {
    const [index, setIndex] = useState(0);

    const goToNextSlide = () => {
        setIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
    };

    const goToPrevSlide = () => {
        setIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
    };

    useEffect(() => {
        const interval = setInterval(goToNextSlide, 5000); // Interval set to 5 seconds
        return () => clearInterval(interval);
    }, []);

    return (
        <>
            <div className="relative w-full">
                <div className="flex items-center justify-center">
                    <Image src={images[index]} alt={`Slide ${index + 1}`} />
                </div>
                <button
                    className="absolute text-2xl left-0 top-1/2 transform -translate-y-1/2  text-[#fff] p-2 rounded-full"
                    onClick={goToPrevSlide}
                >
                    <BsChevronLeft />
                </button>
                <button
                    className="absolute text-2xl right-0 top-1/2 transform -translate-y-1/ text-[#fff] p-2 rounded-full"
                    onClick={goToNextSlide}
                >
                    <BsChevronRight />
                </button>
            </div>
            <div className="md:h-1.5 h-1 bg-primary"></div>
        </>
    )
}

export default Landing
