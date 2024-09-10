'use client'

import { useState } from 'react'
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function Gallery() {
  return (
    <div className="">
      
      <div className="relative isolate px-6 lg:px-8">
        <div
          aria-hidden="true"
          className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
        >
          <div
            style={{
              clipPath:
                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
            }}
            className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
          />
        </div>
        <div className="flex justify-center mt-12">
            
            {/* For small screens, display one of each star color */}
            <FontAwesomeIcon icon={faStar} size="2x" className="text-[#A790C6] mx-1 sm:mx-2 sm:size-3x" />
            <FontAwesomeIcon icon={faStar} size="2x" className="text-[#A790C6] mx-1 sm:mx-2 sm:size-3x hidden md:inline-block" />
            <FontAwesomeIcon icon={faStar} size="2x" className="text-[#A790C6] mx-1 sm:mx-2 sm:size-3x hidden lg:inline-block" />
            <FontAwesomeIcon icon={faStar} size="2x" className="text-[#B297E0] mx-1 sm:mx-2 sm:size-3x" />
            <FontAwesomeIcon icon={faStar} size="2x" className="text-[#B297E0] mx-1 sm:mx-2 sm:size-3x hidden md:inline-block" />
            <FontAwesomeIcon icon={faStar} size="2x" className="text-[#B297E0] mx-1 sm:mx-2 sm:size-3x hidden lg:inline-block" />
            <FontAwesomeIcon icon={faStar} size="2x" className="text-[#B9A8E0] mx-1 sm:mx-2 sm:size-3x" />
            <FontAwesomeIcon icon={faStar} size="2x" className="text-[#B9A8E0] mx-1 sm:mx-2 sm:size-3x hidden md:inline-block" />
            <FontAwesomeIcon icon={faStar} size="2x" className="text-[#B9A8E0] mx-1 sm:mx-2 sm:size-3x hidden lg:inline-block" />
            <FontAwesomeIcon icon={faStar} size="2x" className="text-[#BDB5EC] mx-1 sm:mx-2 sm:size-3x" />
            <FontAwesomeIcon icon={faStar} size="2x" className="text-[#BDB5EC] mx-1 sm:mx-2 sm:size-3x hidden md:inline-block" />
            <FontAwesomeIcon icon={faStar} size="2x" className="text-[#BDB5EC] mx-1 sm:mx-2 sm:size-3x hidden lg:inline-block" />
            <FontAwesomeIcon icon={faStar} size="2x" className="text-[#D5BBED] mx-1 sm:mx-2 sm:size-3x" />
            <FontAwesomeIcon icon={faStar} size="2x" className="text-[#D5BBED] mx-1 sm:mx-2 sm:size-3x hidden md:inline-block" />
            <FontAwesomeIcon icon={faStar} size="2x" className="text-[#D5BBED] mx-1 sm:mx-2 sm:size-3x hidden lg:inline-block" />
            <FontAwesomeIcon icon={faStar} size="2x" className="text-[#E5C3DE] mx-1 sm:mx-2 sm:size-3x" />
            <FontAwesomeIcon icon={faStar} size="2x" className="text-[#E5C3DE] mx-1 sm:mx-2 sm:size-3x hidden md:inline-block" />
            <FontAwesomeIcon icon={faStar} size="2x" className="text-[#E5C3DE] mx-1 sm:mx-2 sm:size-3x hidden lg:inline-block" />        
        </div>


            <div className=" flex justify-center items-center max-w-2xl py-20 sm:py-20 lg:py-32 order-2 lg:order-1">
                <div className="text-center lg:text-left">
                    <h2 className="text-2xl font-bold tracking-tight sm:text-4xl text-[#785C92]">
                    Gallery
                    </h2>
                    
                </div>
            </div>


        
        <div
          aria-hidden="true"
          className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
        >
          <div
            style={{
              clipPath:
                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
            }}
            className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
          />
        </div>
      </div>
    </div>
  );
}
