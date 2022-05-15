import React from 'react';
import assets from '../assets/production ID_5077814.mp4';

const Hero = () => {
  return (
    <div className='main w-screen bg-fixed'>
        <video className='w-screen' src={assets} autoPlay loop muted />
        <div className="flex justify-center items-center">
            <div className='pt-16 md:pt-64 md:leading-loose content absolute top-0 flex justify-center items-center text-white'>
                <h1 className='text-center text-2xl md:text-5xl px-16 md:px-10 font-semibold md:font-bold tracking-wider'>My name is George Olufemi && I'm a<br /> Front-end Web Developer.</h1>
            </div>
        </div>
    </div>
  )
}

export default Hero;