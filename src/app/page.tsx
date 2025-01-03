import Image from 'next/image';
import Header from '@/components/Header';
import Sidebar from '@/components/Sidebar';
import Card from '@/components/Card';
import RecentTransactions from '@/components/RecentTransactions';
import QuickTransfer from '@/components/QuickTransfer';

export default function Home() {
  return (
    <div className='h-full flex w-full min-w-[235px] bg-white lg:bg-[#f5f7fa] xl:bg-[#f5f7fa] 3xl:bg-[#f5f7fa] 3xl:py-6 3xl:px-10 p-4 xl:py-5 xl:px-9'>
      <div className='w-full flex-col'>

        <div className='flex items-center justify-between mb-4'>
          <h2 className='text-lg font-semibold'>My Cards</h2>
          <button className='text-sm text-blue-500'>See All</button>
        </div>

        <div className='flex space-x-8'>
          {/* Cards Section */}
          <div className='flex flex-1 space-x-4'>
            <Card mode='dark' />
            <Card mode='light' />
          </div>

          {/* Recent Transactions Section */}
          <div className='flex flex-1 flex-col space-y-4'>
            <h2 className='text-lg font-semibold'>Recent Transactions</h2>
            <RecentTransactions />
          </div>
        </div>

      </div>
    </div>
  );
}
