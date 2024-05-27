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
            client: "Moshood Ajose",
            location: "Lagos, Nigeria",
            testimony: "When we came to Prime Oikos at first, there was nothing there, it was just bare land. So it's kind of nice to see how far it has come, the gate structure, where our plot is, the plans for the road, and to get an idea of how the estate is developing and moving forward. It's pretty cool that it has sort of progressed that fast in a very short time. Ajayi OluwadamilolaLagos, Nigeria. Investing with SG Resource is quite impressive. I'm coming to Prime Oikos for the first time and within a short time, I can say there's a very big plan for the future. I'm looking forward to the apartments you're building. I'm quite impressed with your processes and I would most definitely recommend SG Resource to others. Olawunmi OlasunboLagos, Nigeria. I'm so delighted with what I've seen at Pacific Manor. The quality of work is super, and the rate of work Is very impressive considering the economy, Covid, and what I've seen in other estates. From what I can see now, I wish I had invested more. So I would encourage other people to come and invest"
        },
        {
            id: 2,
            client: "S.A",
            location: "Owerri, Nigeria",
            testimony: "When we came to Prime Oikos at first, there was nothing there, it was just bare land. So it's kind of nice to see how far it has come, the gate structure, where our plot is, the plans for the road, and to get an idea of how the estate is developing and moving forward. It's pretty cool that it has sort of progressed that fast in a very short time. Ajayi OluwadamilolaLagos, Nigeria. Investing with SG Resource is quite impressive. I'm coming to Prime Oikos for the first time and within a short time, I can say there's a very big plan for the future. I'm looking forward to the apartments you're building. I'm quite impressed with your processes and I would most definitely recommend SG Resource to others. Olawunmi OlasunboLagos, Nigeria. I'm so delighted with what I've seen at Pacific Manor. The quality of work is super, and the rate of work Is very impressive considering the economy, Covid, and what I've seen in other estates. From what I can see now, I wish I had invested more. So I would encourage other people to come and invest"
        },
        {
            id: 3,
            client: "Brain P.A",
            location: "Bonny Island, Nigeria",
            testimony: "When we came to Prime Oikos at first, there was nothing there, it was just bare land. So it's kind of nice to see how far it has come, the gate structure, where our plot is, the plans for the road, and to get an idea of how the estate is developing and moving forward. It's pretty cool that it has sort of progressed that fast in a very short time. Ajayi OluwadamilolaLagos, Nigeria. Investing with SG Resource is quite impressive. I'm coming to Prime Oikos for the first time and within a short time, I can say there's a very big plan for the future. I'm looking forward to the apartments you're building. I'm quite impressed with your processes and I would most definitely recommend SG Resource to others. Olawunmi OlasunboLagos, Nigeria. I'm so delighted with what I've seen at Pacific Manor. The quality of work is super, and the rate of work Is very impressive considering the economy, Covid, and what I've seen in other estates. From what I can see now, I wish I had invested more. So I would encourage other people to come and invest"
        },
    ]

    const responsive = {
        0: { items: 1 },
        568: { items: 1 },
        1024: { items: 1 },
    };
  return (
    <section className='md:mt-[5rem] mt-[3rem]'>
        <section className='text-center leading-8'>
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
                                {_.testimony.slice(0,200)}
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