/* eslint-disable react/no-unknown-property */
/* eslint-disable react/jsx-no-target-blank */
/* eslint-disable no-unused-vars */

import React from 'react'

import Button from './Button'
import { MdCall } from 'react-icons/md'

const Contact = () => {
  return (
    <section className='lg:w-[90%] w-full m-auto m-[0px] lg:px-0 px-6 md:mt-[5rem] mt-[3rem] flex lg:flex-row flex-col items-center justify-between' id="contact">
        <section className="leading-[30px] flex-[2] platypi">
            <small className='text-[14px] font-semibold text-[#1E7BD7]'>QUICK ENQUIRY</small>
            <h1 className='text-[40px] md:w-[70%] leading-[50px] font-bold'>Get in Touch We Us</h1>
        </section>
        <section className="flex md:flex-row flex-col gap-6 md:flex-[4] md:mt-0 mt-5 w-full">
            <section className="grid gap-6 md:grid-cols-2 grid-cols-1 flex-1 ">
              <input type='text' className='border-none p-4 w-full rounded-[5px] focus:outline-[#1E7BD7]' placeholder='Your Name' />
              <input type='text' className='border-none p-4 w-full rounded-[5px] focus:outline-[#1E7BD7]' placeholder='Phone Number' />
              <input type='email' className='border-none p-4 w-full rounded-[5px] focus:outline-[#1E7BD7]' placeholder='Email' />
              <select className='bg-white rounded-[5px] focus:outline-[#1E7BD7] px-2 p-4'>
                <option>-- Type --</option>
                <option>One Bedroom</option>
                <option>Two Bedroom</option>
                <option>Three Bedroom</option>
                <option>Land</option>
                <option>Building Materials</option>
              </select>
            </section>
            <Button
                text={"GET A CALL BACK"}
                btnStyle={"bg-[#1E7BD7] md:flex-col hover:bg-opacity-[60%] md:text-[15px] text-white p-4"}
                iconName={<MdCall className="md:text-[1.2rem]" />}
            />
        </section>
    </section>
  )
}

export default Contact