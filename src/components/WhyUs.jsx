/* eslint-disable react/no-unknown-property */
/* eslint-disable react/jsx-no-target-blank */
/* eslint-disable no-unused-vars */

import React from 'react'
import achieveBuilding from '../assets/achieve_building.jpg'


const WhyUs = () => {
  return (
    <section className='mt-[5rem] lg:w-[90%] w-full lg:px-0 px-4 m-auto m-[0px]'>
        <section className="text-center">
            <small className='text-[14px] font-semibold text-[#1E7BD7] platypi'>Why Choose</small>
            <h1 className='text-[40px] font-bold platypi'>Stefred Global Resources</h1>
        </section>
        <section className='flex rounded-[10px] md:h-[650px] overflow-hidden bg-white md:mt-8 mt-4'>
            <aside className="flex-[1] md:p-10 p-5 flex flex-col gap-6 md:text-[26px] text-[15px]">
                <p>🎯 Experience: With years of industry experience, we have a proven track record of success.</p>
                <p>🎯 Quality: We prioritize quality in everything we do, ensuring lasting results and customer satisfaction.</p>
                <p>🎯 Customer-Centric Approach: Your needs are our top priority, and we are dedicated to exceeding your expectations.</p>
                <p>🎯 Nationwide Reach: With offices and projects spanning across Nigeria, we are your trusted partner wherever you are.</p>
            </aside>
            <aside className='md:block hidden flex-[1]'>
                <img src={achieveBuilding} loading='lazy' className='' alt="" />
            </aside>
        </section>
    </section>
  )
}

export default WhyUs