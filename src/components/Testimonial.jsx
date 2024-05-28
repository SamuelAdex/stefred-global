/* eslint-disable react/no-unknown-property */
/* eslint-disable react/jsx-no-target-blank */
/* eslint-disable no-unused-vars */

import React from 'react'
import "react-alice-carousel/lib/alice-carousel.css";
import AliceCarousel from 'react-alice-carousel';

const Testimonial = () => {
    const testimonies = [
        {
            id: 1,
            client: "Chinedu Okafor",
            location: "Nigeria",
            testimony: "Buying my building materials from this company has been a game-changer. The quality of the materials is top-notch, and their customer service is impeccable. I highly recommend them to anyone looking for reliable construction supplies."
        },
        {
            id: 2,
            client: "Amina Yusuf",
            location: "Nigeria",
            testimony: "I recently bought a property through this real estate company, and the experience was seamless. They were professional, transparent, and made the whole process stress-free. Their dedication to customer satisfaction is evident in every interaction."
        },
        {
            id: 3,
            client: "Emeka Nwosu",
            location: "Nigeria",
            testimony: "As a contractor, finding a trustworthy supplier for construction materials is crucial. This company has never let me down. Their products are of the highest quality, and they always deliver on time. I wouldn't go anywhere else."
        },
        {
            id: 4,
            client: "Funmi Adewale",
            location: "Nigeria",
            testimony: "The real estate services provided by this company are outstanding. From the initial consultation to closing the deal, they were supportive and knowledgeable. I felt confident and well-informed throughout the entire process."
        },
    ]

    const responsive = {
        0: { items: 1 },
        568: { items: 1 },
        1024: { items: 1 },
    };
  return (
    <section className='md:mt-[5rem] mt-[3rem]' id='testimonies'>
        <section className='text-center leading-8 platypi'>
            <small className='text-[14px] font-semibold text-[#1E7BD7]'>WHAT OUR CLIENTS SAY ABOUT US</small>
            <h1 className='text-[40px] font-bold'>Testimonials</h1>            
        </section>
        <section className='md:mt-[2rem] mt-[1rem] m-auto m-[0px] lg:w-[70%] w-full lg:px-0 px-4'>
            <AliceCarousel
                mouseTracking
                responsive={responsive}
                controlsStrategy="alternate"
                disableButtonsControls={true}
                autoPlay
                infinite
                // animationDuration={2000}
                autoPlayInterval={2000}
                // animationType='fadeout'
            >
                {testimonies.map((_, i)=>(
                    <div className='mx-5' key={i}>
                        <div className='text-center'>
                            <p className='bg-gray-100 italic md:text-[24px] text-[14px] relative p-10 '>
                                {_.testimony.slice(0,200)}{"..."}
                                <span id='triangle' className='w-[20px] h-[20px] absolute z-10 rotate-180 bottom-[-11px] bg-inherit left-[450px] right-[500px]'></span>
                            </p>
                            <div className='flex flex-col gap-1 mt-2'>
                                <small className='text-[14px] font-semibold text-[#1E7BD7]'>{_.client}</small>
                                <small className='font-bold'>{_.location}</small>
                            </div>
                        </div>
                    </div>
                ))}
            </AliceCarousel>
        </section>
    </section>
  )
}

export default Testimonial