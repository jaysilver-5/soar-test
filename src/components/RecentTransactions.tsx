'use client';
import React from 'react';
import TransactionItem from './ui/TransactionItem';

const RecentTransactions: React.FC = () => {
  // Dummy data for transactions
  const transactions = [
    { mode: 'deposit', title: 'Deposit from my Card', amount: -850, date: '28 January 2021' },
    { mode: 'paypal', title: 'Deposit Paypal', amount: 2500, date: '25 January 2021' },
    { mode: 'people', title: 'Jemi Wilson', amount: 5400, date: '21 January 2021' },
    { mode: 'deposit', title: 'ATM Withdrawal', amount: -500, date: '18 January 2021' },
    { mode: 'paypal', title: 'Bank Transfer', amount: 3000, date: '15 January 2021' },
  ];

  return (
    <div
      className={`
        bg-white flex flex-col space-y-4 h-[214px] 3xl:min-w-[350px] 3xl:w-full 2xl:w-full 2xl:min-w-[235px] 3xl:h-[235px] w-full 
        bg-RecentTransactions-gradient rounded-[25px] 3xl:p-6 p-[15px] overflow-y-auto
      `}
      style={{
        scrollbarWidth: 'none',
        position: 'relative',
      }}
    >
      {transactions.map((transaction, index) => (
        <TransactionItem
          key={index}
          mode={transaction.mode}
          title={transaction.title}
          amount={transaction.amount}
          date={transaction.date}
        />
      ))}
      <style jsx>{`
        ::-webkit-scrollbar {
          width: 2px; /* Thinner scrollbar */
        }
        ::-webkit-scrollbar-thumb {
          background: rgba(0, 0, 0, 0.4); /* Darker thumb for better visibility */
          border-radius: 1px;
        }
        ::-webkit-scrollbar-track {
          background: transparent; /* Track remains invisible */
        }
      `}</style>
    </div>
  );
};

export default RecentTransactions;
