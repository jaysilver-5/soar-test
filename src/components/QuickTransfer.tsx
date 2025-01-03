'use client';
import React, { useRef } from 'react';
import { FaAngleRight } from "react-icons/fa6";
import { GrSend } from "react-icons/gr";

const QuickTransfer: React.FC = () => {
  // Dummy data for user profiles
  const users = [
    { id: 1, name: "Livia Bator", role: "CEO", imgSrc: "/livia.png" },
    { id: 2, name: "Randy Press", role: "Director", imgSrc: "/randy.png" },
    { id: 3, name: "Workman", role: "Designer", imgSrc: "/workman.png" },
    { id: 4, name: "Joshua U.", role: "FE Mang..", imgSrc: "/randy.png" },
    { id: 5, name: "Randy Press", role: "Director", imgSrc: "/livia.png" },
    { id: 6, name: "Workman", role: "Designer", imgSrc: "/workman.png" },
  ];

  // Ref for the scrollable container
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: 150, behavior: 'smooth' });
    }
  };

  return (
    <div className='flex justify-between flex-col 3xl:w-[445px] 3xl:h-[276px] w-full bg-white h-[195px] items-center rounded-[25px] 3xl:py-10 3xl:px-6 p-5 relative'>
      {/* Scrollable User Profiles */}
      <div className='flex items-center w-full relative'>
        <div
          className='flex flex-nowrap space-x-4 3xl:space-x-8 overflow-x-scroll scrollbar-hide pr-[60px]'
          ref={scrollContainerRef}
        >
          {users.map((user) => (
            <div key={user.id} className='flex flex-col items-center justify-center flex-shrink-0'>
              <img
                src={user.imgSrc}
                className='h-[50px] w-[50px] rounded-full'
                alt={user.name}
              />
              <div className='flex flex-col items-center justify-center'>
                <h3 className='text-[#232323] font-normal font-primary 3xl:text-[16px] text-[12px]'>{user.name}</h3>
                <p className='text-[#718EBF] font-normal font-primary 3xl:text-[16px] text-[12px] 3xl:leading-[18px] leading-[15px]'>{user.role}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Fixed Right Scroll Button */}
        <button
          className='3xl:w-[50px] 3xl:h-[50px] w-10 h-10 shadow-md rounded-full border border-gray-50 flex items-center justify-center absolute right-0 top-1/2 transform -translate-y-1/2 bg-white'
          onClick={scrollRight}
        >
          <FaAngleRight className='text-[20px] font-light text-[#718EBF]' />
        </button>
      </div>

      {/* Input and Button Section */}
      <div className='w-full flex justify-between items-center'>
        <h1 className='3xl:text-[16px] text-[12px] text-[#718EBF]'>Write Amount</h1>
        <div className='relative 3xl:w-[265px] 3xl:h-[50px] w-[187px] h-[40px]'>
          <input
            type="text"
            placeholder='525.50'
            className='3xl:w-[265px] 3xl:h-[50px] w-full h-[40px] rounded-full pl-5 bg-[#EDF1F7] focus:outline-none outline-none text-[#718EBF]'
          />
          <button className='bg-black absolute top-0 right-0 rounded-full h-full 3xl:w-[125px] w-[100px] flex justify-center items-center space-x-2'>
            <p className='3xl:text-[16px] text-[13px] text-white'>Send</p>
            <GrSend className='3xl:text-[24px] text-[20px] text-white' />
          </button>
        </div>
      </div>
    </div>
  );
};

export default QuickTransfer;
