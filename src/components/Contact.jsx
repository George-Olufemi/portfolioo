import React from 'react';
import './Contact.css';
import Fade from 'react-reveal/Fade';

const Contact = () => {
  return (
    <div className='contact h-auto bg-fixed bg-contain'>
        <div className="md:flex pt-32 pb-32 md:pt-64 md:pb-64 md:justify-center md:items-center">
            {/*  */}
            <div>
                <Fade>
                    <h1 className="text-center text-3xl mb-16 md:mb-0 md:mr-20 text-blue-900 md:text-5xl">Need a driven developer<br /> to join your team?</h1>
                </Fade>
            </div>
            {/*  */}
            <div>
            <a href="mailto: georgeoluolufemi@gmail.com" method="post">
                <Fade>
                    <h1 className="text-blue-900 font-bold text-center text-7xl md:text-8xl hover:text-yellow-300 transition-all">LET'S TALK.</h1>
                </Fade>
            </a>
            </div>
        </div>
    </div>
  )
}

export default Contact;