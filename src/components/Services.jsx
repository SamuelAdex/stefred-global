/* eslint-disable react/no-unknown-property */
/* eslint-disable react/jsx-no-target-blank */
/* eslint-disable no-unused-vars */
import React from 'react'
import Button from './Button'
import { RiHomeSmile2Line } from "react-icons/ri";
import { MdOutlineAddHome } from "react-icons/md";
import { TbHomeDollar } from "react-icons/tb";



const Services = () => {
  return (
    <section id='services' className='mt-[5rem] platypi text-center lg:w-[90%] w-full lg:px-0 px-4 m-auto m-[0px]'>
        <small className='text-[14px] font-semibold text-[#1E7BD7] platypi'>EXPLORE OUR SERVICES</small>
        <h1 className='text-[40px] font-bold platypi'>What we Do?</h1>
        <section className='flex items-center md:flex-row flex-col gap-10 md:mt-[3rem] mt-[1rem]'>
            <section className='text-center flex flex-col items-center hover:text-black text-[#dcedff] bg-[#1E7BD7] flex-1 hover:bg-gray-100 cursor-pointer p-3 rounded-[14px] py-8'>
                <RiHomeSmile2Line fontSize={"4rem"} />
                <h3 className='text-[20px] font-semibold'>Start Your Construction</h3>
                <p className="mt-3 md:leading-5 md:text-[15px]">From residential complexes to commercial developments, we have the expertise to handle projects of any scale.</p>
                <a className="w-full flex justify-center" href="#contact">
                    <Button text={'Get Started'} btnStyle={"border-[2px] border-[#dcedff] mt-4 p-3 hover:bg-[#1E7BD7] hover:text-white hover:border-[#1E7BD7] font-semibold w-[40%]"} />
                </a>
            </section>
            <section className='text-center flex flex-col items-center flex-1 hover:bg-gray-100 cursor-pointer p-3 rounded-[14px] py-8'>
                <TbHomeDollar fontSize={"4rem"} />
                <h3 className='text-[20px] font-semibold'>Sales of Building materials</h3>
                <p className="mt-3 text-gray-600">Discover a wide range of top-quality building materials sourced from reputable suppliers.</p>
                <a className="w-full flex justify-center" href="#contact">
                    <Button text={'Get Started'} btnStyle={"border-[2px] border-black mt-4 p-3 hover:bg-[#1E7BD7] hover:text-white hover:border-[#1E7BD7] font-semibold w-[40%]"} />
                </a>
            </section>
            <section className='text-center flex flex-col items-center flex-1 hover:bg-gray-100 cursor-pointer p-3 rounded-[14px] py-8'>
                <MdOutlineAddHome fontSize={"4rem"} />
                <h3 className='text-[20px] font-semibold'>Real Estate</h3>
                <p className="mt-3 text-gray-600">{"Find your dream property or investment opportunity with our comprehensive real estate services."}</p>
                <a className="w-full flex justify-center" href="#contact">
                    <Button text={'Get Started'} btnStyle={"border-[2px] border-black mt-4 p-3 hover:bg-[#1E7BD7] hover:text-white hover:border-[#1E7BD7] font-semibold w-[40%]"} />
                </a>
            </section>
        </section>
    </section>
  )
}

export default Services