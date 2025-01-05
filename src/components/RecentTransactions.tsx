"use client";

import React, { useEffect, useState } from "react";
import TransactionItem from "./ui/TransactionItem";

interface Transaction {
  mode: string;
  title: string;
  amount: number;
  date: string;
}

const RecentTransactions: React.FC = () => {
  const [transactions, setTransactions] = useState<Transaction[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchTransactions = async () => {
      try {
        const response = await fetch("/api/recent-transactions");
        const data = await response.json();
        setTransactions(data);
      } catch (error) {
        console.error("Error fetching recent transactions:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchTransactions();
  }, []);

  return (
    <div
      className={`
        bg-white flex flex-col space-y-4 3xl:h-[235px] 2xl:h-[235px] w-full flex-grow h-[170px] xl:h-[220px] lg:h-[200px]
        bg-RecentTransactions-gradient rounded-[25px] 3xl:p-6 p-[15px] overflow-y-auto
      `}
      style={{
        scrollbarWidth: "none",
        position: "relative",
      }}
    >
      {loading ? (
        <p>Loading...</p>
      ) : (
        transactions.map((transaction, index) => (
          <TransactionItem
            key={index}
            mode={transaction.mode}
            title={transaction.title}
            amount={transaction.amount}
            date={transaction.date}
          />
        ))
      )}
      <style jsx>{`
        ::-webkit-scrollbar {
          width: 2px; /* Thinner scrollbar */
        }
        ::-webkit-scrollbar-thumb {
          background: rgba(
            0,
            0,
            0,
            0.4
          ); /* Darker thumb for better visibility */
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
