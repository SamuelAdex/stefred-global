/* eslint-disable react/no-unknown-property */
/* eslint-disable react/jsx-no-target-blank */
/* eslint-disable no-unused-vars */

import React from 'react'
import Button from './Button'

const CTA = () => {
  return (
    <section className='mt-[5rem] lg:w-[90%] w-full lg:px-0 px-4 m-auto m-[0px]'>
        <section className='text-center flex flex-col items-center'>
            <h1 className='md:text-[60px] text-[28px] md:w-[65%] md:leading-[70px] leading-[48px] w-full text-black font-bold'>Welcome to SG Resources</h1>
            <p className='text-[#646464] md:w-[430px] mt-4'>Where excellence meets reliability in construction, building materials, and real estate solutions.</p>
            <a className="w-full flex justify-center" href="#contact">
              <Button text={"Get Started Today"} btnStyle={"p-4 md:w-[300px] w-full bg-[#1E7BD7] text-white md:text-[20px] mt-8"} />
            </a>
        </section>
    </section>
  )
}

export default CTA