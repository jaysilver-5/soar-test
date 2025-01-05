"use client";
import React, { useState, useEffect } from "react";
import Card from "@/components/Card";
import RecentTransactions from "@/components/RecentTransactions";
import QuickTransfer from "@/components/QuickTransfer";
import TransactionChart from "@/components/TransactionChart";
import PieChart from "@/components/PieChart";
import LineChart from "@/components/LineChart";
import CardList from "./CardList";
import CardModal from "./CardModal";

interface PieData {
  label: string;
  value: number;
  color: string;
}

const Overview = () => {
  const [showModal, setShowModal] = useState<boolean>(false);

  const colors = ["#2B3A67", "#F57C00", "#3F7FBF", "#2B2B2B"];

  const [chartData, setChartData] = useState<PieData[]>([]);

  useEffect(() => {
    const fetchPieData = async () => {
      try {
        const response = await fetch("/api/pie");
        const data: PieData[] = await response.json();
        setChartData(data);
      } catch (error) {
        console.error("Error fetching pie chart data:", error);
      }
    };

    fetchPieData();
  }, []);

  return (
    <>
      <div className="h-full overflow-y-scroll flex max-w-screen w-full min-w-[235px] bg-white lg:bg-[#f5f7fa] xl:bg-[#f5f7fa] 3xl:bg-[#f5f7fa] p-4 xl:py-5 xl:px-9 3xl:py-6 3xl:px-10">
        <div className="w-full flex flex-col space-y-8">
          {/* My Cards and Recent Transactions Section */}
          <div className="flex flex-col 3xl:flex-row 3xl:space-x-8 space-y-8 3xl:space-y-0 w-full max-w-full">
            <div className="flex flex-col space-y-2 3xl:w-2/3 w-full">
              <div className="flex items-center justify-between w-full">
                <h2 className="text-[#343C6A] font-semibold text-[16px] 3xl:text-[22px]">
                  My Cards
                </h2>
                <button
                  onClick={() => setShowModal(true)}
                  className="text-[#343C6A] hover:text-blue-300 text-[14px] 3xl:text-[17px]"
                >
                  See All
                </button>
              </div>
              <CardList />
            </div>
            <div className="flex flex-col space-y-2 3xl:w-1/3 w-full">
              <SectionHeader title="Recent Transactions" />
              <RecentTransactions />
            </div>
          </div>

          {/* Transaction Chart and Pie Chart Section */}
          <div className="flex flex-col 3xl:flex-row 3xl:space-x-8 space-y-8 3xl:space-y-0 w-full max-w-full">
            <div className="flex flex-col space-y-2 3xl:w-2/3 w-full">
              <SectionHeader title="Transaction Chart" />
              <div className="bg-white rounded-[25px] w-full 3xl:h-[322px] p-8">
                <TransactionChart />
              </div>
            </div>
            <div className="flex flex-col space-y-2 3xl:w-1/3 w-full">
              <SectionHeader title="Pie Chart" />
              <div className="bg-white rounded-[25px] w-full h-[322px] flex items-center justify-center">
                <PieChart data={chartData} colors={colors} />
              </div>
            </div>
          </div>

          {/* Quick Transfer and Line Chart Section */}
          <div className="flex flex-col 3xl:flex-row 3xl:space-x-8 2xl:flex-row 2xl:space-x-8 space-y-8 3xl:space-y-0 2xl:space-y-0 w-full max-w-full">
            <div className="flex flex-col space-y-2">
              <SectionHeader title="Quick Transfer" />
              <QuickTransfer />
            </div>
            <div className="flex flex-col space-y-2 w-full">
              <SectionHeader title="Line Chart" />
              <div className="bg-white rounded-[25px] w-full 3xl:h-[276px] 2xl:h-[240px] xl:h-[276px] h-[276px] flex items-center justify-center p-6">
                <LineChart />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="h-16 w-full bg-white lg:bg-[#f5f7fa] xl:bg-[#f5f7fa] 3xl:bg-[#f5f7fa]"></div>

      {showModal && (
        <CardModal showModal={showModal} onClose={() => setShowModal(false)} />
      )}
    </>
  );
};

function SectionHeader({ title }: { title: string }) {
  return (
    <div className="flex items-center justify-between w-full">
      <h2 className="text-[#343C6A] font-semibold text-[16px] 3xl:text-[22px]">
        {title}
      </h2>
      <button className="text-[#343C6A] text-[14px] 3xl:text-[17px]">
        See All
      </button>
    </div>
  );
}

export default Overview;
