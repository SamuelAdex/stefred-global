/* eslint-disable react/no-unknown-property */
/* eslint-disable react/jsx-no-target-blank */
/* eslint-disable no-unused-vars */

import React from 'react';
import logo from '../assets/Stefred_Logo AD-cropped.png';
import { FaFacebook, FaInstagram, FaSquareTwitter } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <section className='md:mt-[5rem] mt-[3rem] mb-[-30px] p-10 flex flex-wrap bg-black justify-between'>
        <aside className=''>
          <section className=''>
            <img src={logo} loading='lazy' className='w-[150px]' alt="" />
            <p className='text-[#dcedff] md:w-[90%] w-full mt-3 text-[18px]'>Find the Perfect paradise in your home with Stefred Global Resources</p>
            <section className='flex gap-4 items-center mt-4 text-[#dcedff]'>
                <FaFacebook className='border-[1px] border-[#dcedff] rounded-[100%] p-2 text-[2.5rem] cursor-pointer hover:text-white hover:border-white' />
                <FaInstagram className='border-[1px] border-[#dcedff] rounded-[100%] p-2 text-[2.5rem] cursor-pointer hover:text-white hover:border-white' />
                <FaLinkedin className='border-[1px] border-[#dcedff] rounded-[100%] p-2 text-[2.5rem] cursor-pointer hover:text-white hover:border-white' />
                <FaSquareTwitter className='border-[1px] border-[#dcedff] rounded-[100%] p-2 text-[2.5rem] cursor-pointer hover:text-white hover:border-white' />
            </section>
          </section>
        </aside>
        <aside className='flex flex-wrap items-end md:mt-0 mt-7 md:text-left text-center'>
          <section className='text-[#dcedff] text-[14px]'>
            &copy; 2024 - Stefred Global Resources. All rights reversed.
          </section>
        </aside>
    </section>
  )
}

export default Footer