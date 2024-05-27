/* eslint-disable react/no-unknown-property */
/* eslint-disable react/jsx-no-target-blank */
/* eslint-disable no-unused-vars */

import React from 'react';

import AboutImg from '../assets/aboutImg.jpg'


const About = ()=>{
    return (
        <section id='about' className="relative mt-[5rem] flex md:flex-row flex-col items-center gap-10">
            <section className='absolute h-[90%] right-0 z-[-9] lg:w-[70%] md:flex hidden rounded-[5px] p-10 bg-[#1E7BD7]'>

            </section>
            <aside className='flex-[3]'>
                <img src={AboutImg} loading='lazy' className='rounded-[5px]' alt="" />
            </aside>
            <aside className="flex-[2] flex flex-col gap-5 md:px-0 px-6">
                <h1 className='text-[40px] md:text-white text-black font-bold'>Stefred Global Resource Limited</h1>
                <p className='md:text-[#dcedff] text-black'>At SG Resources, we are a leading Nigerian company specializing in construction, sales of building materials, and real estate services. With a commitment to excellence and innovation, we have been serving our clients with integrity and dedication since our establishment.</p>
                <p className='md:text-[#dcedff] text-black'>Our mission is to provide top-quality construction solutions, reliable building materials, and exceptional real estate services tailored to meet the diverse needs of our clients. Backed by a team of experienced professionals, we strive to exceed expectations and contribute to the growth and development of Nigeria&apos;s infrastructure landscape. Welcome to SG Resources, where your vision becomes reality</p>
            </aside>
        </section>
    )
}

export default About