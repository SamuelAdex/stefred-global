/* eslint-disable react/no-unknown-property */
/* eslint-disable react/jsx-no-target-blank */
/* eslint-disable no-unused-vars */

import React from 'react'
import Button from './Button'

const Hero = () => {
    
  return (
    <>
        <section id='home' className='mt-[8rem] relative flex flex-col justify-center lg:w-[90%] w-full lg:px-0 md:rounded-[45px] rounded-[15px] px-6 m-auto m-[0px] h-[90vh] hero'>
            <section className='md:p-[50px] p-4 flex flex-col gap-6'>
                <h1 className='md:text-[60px] text-[28px] md:w-[65%] md:leading-[70px] leading-[48px] w-full text-black font-bold'>Find the Perfect paradise in your home</h1>
                <p className='mt-4 md:text-[30px] text-[16px] md:w-[75%] md:font-semibold text-black md:leading-[40px] w-full'>Welcome to SG Resources, Your Premier partner in construction, building materials, and real estate solutions</p>
                <a className="" href="#contact">
                    <Button text={"Get Started"} btnStyle={"bg-[#1E7BD7] text-white lg:w-[300px] w-full font-semibold rounded-[12px] p-5"} />
                </a>
            </section>
        </section>

        <section className='mt-[4.7rem] m-auto m-[0px] flex md:flex-row flex-col justify-between items-center lg:w-[90%] w-full lg:px-0 px-4'>
            <aside className='md:text-left text-center platypi'>
                <small className='text-[#1E7BD7] text-[14px] font-semibold'>WHAT WE BUILD</small>
                <h1 className='font-bold text-[40px]'>Acquire The Perfect Home</h1>
            </aside>
            <aside className='flex items-center gap-10 platypi'>
                <section className='md:text-right text-center'>
                    <h1 className='text-[#1E7BD7] font-bold text-[55px]'>500+</h1>
                    <p className='font-semibold text-[14px]'>Plots Sold</p>
                </section>
                <section className='md:text-right text-center'>
                    <h1 className='text-[#1E7BD7] font-bold text-[55px]'>23+</h1>
                    <p className='font-semibold text-[14px]'>Apartments Built</p>
                </section>
            </aside>
        </section>
    </>
  )
}

export default Hero