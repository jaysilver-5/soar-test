import Image from 'next/image';
import Header from '@/components/Header';
import Sidebar from '@/components/Sidebar';
import Card from '@/components/Card';
import RecentTransactions from '@/components/RecentTransactions';
import QuickTransfer from '@/components/QuickTransfer';
import TransactionChart from '@/components/TransactionChart';
import PieChart from '@/components/PieChart';

export default function Home() {
  const chartData = [
    { label: 'Entertainment', value: 30 },
    { label: 'Bill Expense', value: 15 },
    { label: 'Investment', value: 20 },
    { label: 'Others', value: 35 },
  ];

  const colors = ['#2B3A67', '#F57C00', '#3F7FBF', '#2B2B2B'];
  return (
    <div className="h-full flex w-full min-w-[235px] bg-white lg:bg-[#f5f7fa] xl:bg-[#f5f7fa] 3xl:bg-[#f5f7fa] 3xl:py-6 3xl:px-10 p-4 xl:py-5 xl:px-9">
      <div className="w-full flex-col space-y-8">
        <div className="3xl:flex-row flex-col flex 3xl:space-x-8 w-full 3xl:space-y-0 space-y-8">
          <div className="3xl:w-2/3 w-full flex-col space-y-2">
            <div className="flex items-center justify-between w-full">
              <h2 className="3xl:text-[22px] text-[#343C6A] text-[16px] font-semibold">
                My Cards
              </h2>
              <button className="3xl:text-[17px] text-[14px] text-[#343C6A]">
                See All
              </button>
            </div>

            <div className=" flex-grow w-full scrollbar-hide overflow-x-scroll flex 3xl:space-x-8 space-x-4">
              <Card mode="dark" />
              <Card mode="light" />
            </div>
          </div>

          <div className="3xl:w-1/3 w-full flex-col space-y-2">
            <h2 className="3xl:text-[22px] text-[#343C6A] text-[16px] font-semibold">
              Recent Transactions
            </h2>
            <div className="w-full">
              <RecentTransactions />
            </div>
          </div>
        </div>

        <div className="3xl:flex-row flex-col flex 3xl:space-x-8 2xl:space-x-6 2xl:space-y-0 w-full 3xl:space-y-0 space-y-8">
          <div className="3xl:w-2/3 w-full flex-col space-y-2">
            <div className="flex items-center justify-between w-full">
              <h2 className="3xl:text-[22px] text-[#343C6A] text-[16px] font-semibold">
                My Cards
              </h2>
              <button className="3xl:text-[17px] text-[14px] text-[#343C6A]">
                See All
              </button>
            </div>

            <div className='w-full 3xl:h-[322px] 2xl:h-[322px] 3xl:p-8 2xl:p-0 bg-white rounded-[25px]'>
              <TransactionChart />
            </div>
          </div>

          <div className="3xl:w-1/3 w-full flex-col space-y-2">
            <h2 className="3xl:text-[22px] text-[#343C6A] text-[16px] font-semibold">
              Recent Transactions
            </h2>
            <div className="flex items-center justify-center w-full 3xl:min-w-[350px] rounded-[25px] bg-white 3xl:h-[322px] h-[322px]">
              <PieChart data={chartData} colors={colors} />
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}
