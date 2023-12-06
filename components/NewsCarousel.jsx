import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';
import React, { Component } from "react";
import Link from 'next/link'

import Image from "next/image";

const NewsCarousel = ({ featuredPosts }) => {
    const settings = {
        dots: true,
        infinite: true,
        autoplay: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };
    return (
        <>

            <div className="container mx-auto px-4 lg:px-1 xl:px-10 pb-20 pt-3 sm:pt-5 md:pt-6 lg:pt-12 xl:pt-14">
                <div>
                    <h1 className=" sm:my-4 md:my-8 lg:my-10 my-2 text-center text-xl font-bold sm:text-2xl  md:text-3xl  lg:text-4xl xl:text-5xl">
                        CADET ACTIVITIES
                    </h1>
                </div>
                <Slider {...settings}  >
                    {featuredPosts.map((post) => (
                        <div key={post.title} className='sm:my-4 md:my-8 lg:my-10' >
                            <div className="max-w-sm bg-white border border-gray-300 rounded-lg shadow mx-2">
                                <Link href={`/news/post/${post.slug}`} >
                                    <img
                                        className="rounded-t-lg"
                                        src={post.featuredImage.url}
                                        alt={post.title}
                                        width={450}
                                        height={300} />
                                </Link>
                                <div className="p-5">
                                    <Link href={`/news/post/${post.slug}`}>
                                        <h5 className="mb-6 h-24 flex justify-center items-center text-ellipsis text-sm lg:text-xl font-bold tracking-tight text-gray-900 ">{post.title}</h5>
                                    </Link>
                                    <Link href={`/news/post/${post.slug}`} className="inline-flex items-center px-3 py-2 text-[10px] lg:text-sm font-medium text-center text-white bg-red-900 rounded-lg hover:text-red-900 hover:bg-white border hover:border-red-900">
                                        Read more
                                        <svg aria-hidden="true" className="w-4 h-4 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    ))}

                </Slider>
            </div>
        </>
    );


};

export default NewsCarousel;