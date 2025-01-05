'use client';
import React from 'react';
import { IoMenu, IoSettingsOutline } from 'react-icons/io5';
import SearchBar from './ui/SearchBar';
import Sidebar from './Sidebar';
import { useDispatch, useSelector } from 'react-redux';
import { updateSidebarStatus } from '@/app/store/slices/userSlice';
import { RootState } from '@/app/store';

const Header = () => {
  const [showSideBar, setShowSideBar] = React.useState(false);
  const sidebarStatus = useSelector((state: RootState) => state.user['sidebar-status']);  
  const dispatch = useDispatch();                    
  return (
    <div className="relative w-full bg-white px-4 sm:px-6 py-5 3xl:px-10 border-b border-gray-200">
      {/* Small Screens (xl and below) */}
      <div className="flex xl:hidden justify-between items-center w-full">
        {/* Hamburger Icon */}
        <IoMenu
          onClick={() => setShowSideBar(!showSideBar)}
          className="text-2xl text-primary"
        />

        {/* Title */}
        <h1 className="text-xl font-semibold text-primary leading-[24px]">
          {sidebarStatus}
        </h1>

        {/* Profile Image */}
        <img
          src="/profile.png"
          alt="Profile"
          className="w-[35px] h-[35px] rounded-full"
        />
      </div>

      {/* Search Bar for Small Screens */}
      <div className="flex xl:hidden mt-4">
        <SearchBar />
      </div>

      {/* Large Screens (above xl) */}
      <div className="hidden xl:flex flex-col md:flex-row justify-between items-center w-full">
        {/* Title */}
        <h1 className="text-xl font-semibold text-primary sm:text-left md:text-[24px] lg:text-[26px] 3xl:text-[28px] leading-[24px] 3xl:leading-[33.89px]">
          Overview
        </h1>

        {/* Right Side: Search Bar, Buttons, and Profile */}
        <div className="flex flex-col md:flex-row items-center md:space-x-4 w-full 3xl:w-fit md:w-auto">
          {/* Search Bar */}
          <div className="w-full md:w-[300px] lg:w-[400px] 3xl:w-fit">
            <SearchBar />
          </div>

          {/* Action Buttons */}
          <div className="flex items-center space-x-4 mt-4 md:mt-0">
            {/* Settings Button */}
            <button
              className="bg-[#F5F7FA] rounded-full w-[45px] h-[45px] md:w-[50px] md:h-[50px] flex items-center justify-center hover:bg-blue-100"
              style={{ minWidth: '45px', minHeight: '45px' }}
              onClick={() => dispatch(updateSidebarStatus('Setting'))}
            >
              <IoSettingsOutline className="text-[#718EBF] text-xl md:text-2xl" />
            </button>

            {/* Notification Button */}
            <button
              className="bg-[#F5F7FA] rounded-full w-[45px] h-[45px] md:w-[50px] md:h-[50px] flex items-center justify-center hover:bg-blue-100"
              style={{ minWidth: '45px', minHeight: '45px' }}
            >
              <img
                src="/notification-icon.png"
                className="w-[20px] h-[20px] md:w-[25px] md:h-[25px]"
                alt="Notifications"
              />
            </button>

            {/* Profile Image */}
            <img
              src="/profile.png"
              alt="Profile"
              className="w-[45px] h-[45px] md:w-[50px] md:h-[50px] lg:w-[60px] lg:h-[60px] rounded-full"
            />
          </div>
        </div>
      </div>

      {showSideBar && (
        <div className="absolute top-0 left-0 h-screen bg-white border-r border-gray-200 py-5 z-50">
          <Sidebar onClose={() => setShowSideBar(false)} />
        </div>
      )}
    </div>
  );
};

export default Header;
