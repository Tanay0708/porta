import React from 'react'
import MagicButton from './ui/MagicButton'
import { FaLocationArrow } from 'react-icons/fa6'

const Footer = () => {
  return (
    <footer className='w-full  pt-20  pb-10' id='contact'>
        <div className='w-full absolute left-0 -bottom-72 min-h-96'>
            <img src="/footer-grid.svg" alt="grid" className='w-full h-full opacity-50' />
            </div>
            <div className='flex flex-col items-center '>
                <h1 className='heading lg:max-w-[45vw]'>
                    Ready to take <span className='text-purple'>Your digital presence</span>
                </h1>
                <p className="text-white-200 md:mt-10 my-5 text-center">
          Reach out to me today and let&apos;s discuss how I can help you
          achieve your goals.
        </p>
        <a href="mailto:anujv1212@gmail.com">
          <MagicButton
            title="Let's get in touch"
            icon={<FaLocationArrow />}
            position="right"
          />
        </a>
            
        </div>
    </footer>
)
}

export default Footer