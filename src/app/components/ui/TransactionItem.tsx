'use client';
import React from 'react';

export interface TransactionItemProps {
  mode: string; // Add new types here
  title: string;
  amount: number;
  date: string;
}

const TransactionItem: React.FC<TransactionItemProps> = ({
  mode,
  title,
  amount,
  date,
}) => {
  // Determine icon based on mode
  const getIconSrc = (): string => {
    switch (mode) {
      case 'deposit':
        return '/deposit.png';
      case 'paypal':
        return '/paypal.png';
      case 'people':
        return '/people.png';
      default:
        return '/default.png';
    }
  };

  // Determine text color based on the amount
  const amountColor = amount < 0 ? 'text-[#FF4B4A]' : 'text-[#41D4A8]';

  return (
    <div className="w-full items-center justify-between flex">
      <div className="flex items-center 3xl:space-x-3 space-x-3">
        <img
          src={getIconSrc()}
          alt=""
          className="3xl:w-[55px] 3xl:h-[55px] w-[50px] h-[50px]"
        />
        <div>
          <h3 className="font-primary 3xl:text-[16px] font-medium text-[14px] text-[#232323]">
            {title}
          </h3>
          <p className="3xl:text-[15px] font-primary text-[#718EBF]">{date}</p>
        </div>
      </div>
      <h3 className={`3xl:text-[15px] font-primary ${amountColor} text-[11px]`}>
        {amount < 0 ? `-$${Math.abs(amount)}` : `+$${amount}`}
      </h3>
    </div>
  );
};

export default TransactionItem;
