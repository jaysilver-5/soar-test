'use client';
import React, { useState } from 'react';
import Transction from './ui/Icons/Transaction';
import HomeIcon from './ui/Icons/HomeIcon';
import AccountIcon from './ui/Icons/AccountIcon';
import InvestmentIcon from './ui/Icons/InvestmentIcon';
import CreditCardIcon from './ui/Icons/CreditCardIcon';
import LoansIcon from './ui/Icons/LoansIcon';
import ServicesIcon from './ui/Icons/ServicesIcon';
import PriviledgesIcon from './ui/Icons/PriviledgesIcon';
import SettingsIcon from './ui/Icons/SettingsIcon';
import { useDispatch, useSelector } from 'react-redux';
import { updateSidebarStatus } from '@/app/store/slices/userSlice';
import { RootState } from '@/app/store';

// Define the prop type for the component
interface SidebarProps {
  onClose?: () => void; // Optional function prop
}

const Sidebar: React.FC<SidebarProps> = ({ onClose }) => {
  const sidebarStatus = useSelector(
    (state: RootState) => state.user['sidebar-status'],
  );
  const dispatch = useDispatch();

  const handleUpdateSidebarStatus = (name: string) => {
    if (name === 'Dashboard' || name === 'Setting') {
      dispatch(updateSidebarStatus(name));
    }
  };

  const [active, setActive] = useState(sidebarStatus || 'Dashboard');
  const [isOpen, setIsOpen] = useState(true);

  const menuItems = [
    { name: 'Dashboard', icon: HomeIcon },
    { name: 'Transactions', icon: Transction },
    { name: 'Accounts', icon: AccountIcon },
    { name: 'Investments', icon: InvestmentIcon },
    { name: 'Credit Cards', icon: CreditCardIcon },
    { name: 'Loans', icon: LoansIcon },
    { name: 'Services', icon: ServicesIcon },
    { name: 'My Privileges', icon: PriviledgesIcon },
    { name: 'Setting', icon: SettingsIcon },
  ];

  if (!isOpen && window.innerWidth <= 1024) {
    return null; // Sidebar is hidden on lg and smaller screens when closed
  }

  return (
    <div
      className={`min-h-full 3xl:w-[250px] bg-white w-[90%] sm:w-[80%] md:w-[60%] lg:w-[200px] xl:w-[200px] border-r border-gray-200 py-5 fixed lg:relative z-50 transition-transform overflow-scroll scrollbar-hide max-h-screen ${
        isOpen ? 'translate-x-0' : '-translate-x-full'
      }`}
    >
      {/* Close button for lg and below */}
      <div className="flex items-center justify-between px-4 xl:hidden">
        <h1 className="font-extrabold text-[5vw] sm:text-[20px] text-primary">
          Soar Task
        </h1>
        <button
          className="text-black text-xl"
          onClick={() => {
            if (onClose) {
              onClose(); // Call the provided function if it exists
            } else {
              setIsOpen(false); // Fallback to internal state management
            }
          }}
        >
          ✕
        </button>
      </div>

      {/* Sidebar header */}
      <div className="flex flex-row space-x-2 w-full xl:px-4 items-center justify-center">
        <img
          src="/logo.png"
          alt="Logo"
          className="hidden xl:inline-block w-5 sm:w-6 h-[5vw] sm:h-[30px]"
        />
        <h1 className="font-extrabold font-primary text-[5vw] sm:text-[20px] lg:text-[20px] text-primary hidden xl:block">
          Soar Task
        </h1>
      </div>

      {/* Menu Items */}
      <div className="flex flex-col mt-10 space-y-1 sm:space-y-1.5 lg:space-y-2">
        {menuItems.map((item) => {
          const Icon = item.icon;
          const isActive = active === item.name;
          return (
            <div
              key={item.name}
              className={`relative flex items-center space-x-4 pr-4 py-3 cursor-pointer w-full ${
                isActive ? 'pl-6' : 'pl-10'
              } ${isActive ? '' : 'hover:bg-gray-100'}`}
              onClick={() => {
                setActive(item.name);
                handleUpdateSidebarStatus(item.name);
                // setIsOpen(false);
              }}
            >
              {isActive && (
                <div className="absolute left-0 top-0 h-full w-[2%] bg-black rounded-r-md pointer-events-none"></div>
              )}
              <div className="flex items-center justify-center w-[4vw] sm:w-[25px] h-[4vw] sm:h-[25px]">
                <Icon
                  fill={isActive ? '#232323' : '#B1B1B1'}
                  width="3vw"
                  height="3vw"
                />
              </div>
              <h1
                className={`font-semibold text-[3.5vw] sm:text-[15px] ${
                  isActive ? 'text-black' : 'text-gray-500'
                }`}
              >
                {item.name}
              </h1>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Sidebar;
