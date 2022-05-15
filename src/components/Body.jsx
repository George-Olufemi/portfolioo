import React from 'react';
import man from '../man/me.jpg';
import Slide from 'react-reveal/Slide';

const Body = () => {
  return (
    <React.Fragment>
        <div className='bg-blue-900 h-auto'>
            <div className="md:flex pt-10 px-9 md:pt-40 md:px-64 md:ml-5 pb-12 md:pb-40">
                {/* image container div */}
                <div className="flex justify-center items-center">
                    <Slide left>
                        <img className="rounded-full mt-16 w-26 ml-7 md:w-26 border-4 mr-10" src={man} alt="Pic" />
                    </Slide>
                </div>
                {/* text container div */}
                <Slide right>
                    <div className="mt-12 md:ml-28 border-l-4 border-yellow-400">
                        <h1 className="md:pt-2 md:pl-5 text-white md:text-xl tracking-wider mb-5 ml-5 pt-5">I'm an innovative Front-end Developer<br /> with less than two years of experience building and maintaining<br /> responsive websites in the recruiting industry,<br />specializing in React, Responsive Web design, CSS, HTML and JavaScript; plus modern libraries and frameworks.<br /> I am a passionate and goal driven<br /> Techpreneur whose interest is in using technology to<br /> build solutions to solve real world problems. I have a hunger for learning new things and I'm always trying to stretch my abilities.</h1>
                        <h1 className="md:pt-5 md:pl-5 text-white md:text-xl tracking-wider ml-5 pb-5">Programming Languages: JavaScript and some familiarity with Motoko and Solidity.</h1>
                    </div>
                </Slide>
            </div>
        </div>
    </React.Fragment>
  )
}

export default Body;