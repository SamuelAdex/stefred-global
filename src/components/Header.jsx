/* eslint-disable react/no-unknown-property */
/* eslint-disable react/jsx-no-target-blank */
/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react'

import logo from '../assets/Stefred_Logo AD-cropped.png';
import Button from './Button';
import { FaFacebook, FaInstagram, FaSquareTwitter } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { CgMenuRight } from "react-icons/cg";
import { MdClose, MdMail, MdOutlineWhatsapp } from 'react-icons/md';
import { BiLogoGmail } from "react-icons/bi";

const Header = () => {
    const [bgColor, setBgColor] = useState(false)
    const [isMenu, setIsMenu] = useState(false)

    const changebgColor = ()=>{
        // console.log(window.scrollY)
        if(window.scrollY >= 40){
            setBgColor(true)
        }else{
            setBgColor(false)
        }
    }


    useEffect(() => {
        changebgColor()

        window.addEventListener('scroll', changebgColor)
    }, [])

  return (
    <section className={`${bgColor ? 'backdrop-blur-sm' : ''} fixed top-0 w-full z-10 `}>
        <section className="flex justify-between px-7 bg-black p-2 gap-2 text-white text-[14px]">
            <aside className="flex items-center gap-3">
                <FaFacebook />
                <FaInstagram />
                <FaLinkedin />
                <FaSquareTwitter />
            </aside>
            <aside className="flex items-center gap-8">
                <p className='inline-flex items-center gap-1'> <MdOutlineWhatsapp fontSize={"1.2rem"} /> +2349162050795</p>
                <p className='inline-flex items-center gap-1'> <BiLogoGmail fontSize={"1.2rem"} /> stefredglobalresources@gmail.com</p>
            </aside>
        </section>
        <header className='flex justify-between py-2 lg:w-[90%] m-auto m-[0px] w-full lg:px-0 px-6 gap-12 items-center'>
            <div className='flex-[1.5]'>
                <img src={logo} loading='lazy' className='w-[150px] p-2 rounded-[8px]' alt="" />
            </div>
            <div className='md:flex hidden flex-[3] items-center gap-10 font-semibold'>
                <a href="#home" className='text-black hover:text-[#1E7bd7]'>Home</a>
                <a href="#services" className='text-black hover:text-[#1E7bd7]'>Services</a>
                <a href="#about" className='text-black hover:text-[#1E7bd7]'>About us</a>
                {/* <a href="#gallery" className='text-black hover:text-[#1E7bd7]'>Gallery</a> */}
                <a href="#contact" className='text-black hover:text-[#1E7bd7]'>Contact us</a>
            </div>
            <Button btnStyle={"bg-[#1E7BD7] flex-[1] lg:w-[200px] md:flex hidden w-full font-semibold text-white p-4"} text={"Direct Email"} />
            {isMenu ? <MdClose onClick={()=> setIsMenu(false)} fontSize={"2.5rem"} className='md:hidden active:rotate-[90deg] cursor-pointer flex' /> 
                : 
                <CgMenuRight onClick={()=> setIsMenu(true)} fontSize={"2.5rem"} className='md:hidden active:rotate-[180deg] cursor-pointer flex' />
            }
        </header>

        {isMenu && (
            <nav className='backdrop-blur-2xl h-[100vh] slide-left'>
                <div className='flex flex-col gap-3 font-semibold'>
                    <a href="#home" onClick={()=> setIsMenu(false)} className='text-[#fff] px-6 py-4 hover:bg-white hover:text-[#1E7bd7]'>Home</a>
                    <a href="#services" onClick={()=> setIsMenu(false)} className='text-[#fff] px-6 py-4 hover:bg-white hover:text-[#1E7bd7]'>Services</a>
                    <a href="#about" onClick={()=> setIsMenu(false)} className='text-[#fff] px-6 py-4 hover:bg-white hover:text-[#1E7bd7]'>About us</a>
                    {/* <a href="#gallery" onClick={()=> setIsMenu(false)} className='text-white px-6 py-4 hover:bg-white hover:text-[#1E7bd7]'>Gallery</a> */}
                    <a href="#contact" onClick={()=> setIsMenu(false)} className='text-[#fff] px-6 py-4 hover:bg-white hover:text-[#1E7bd7]'>Contact us</a>
                    <Button btnStyle={"bg-[#1E7BD7] flex-[1] mx-6 font-semibold text-white p-4"} text={"Direct Email"} />
                </div>
            </nav>
        )}
    </section>
  )
}

export default Header