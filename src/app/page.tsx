'use client';
import Card from '@/components/Card';
import RecentTransactions from '@/components/RecentTransactions';
import QuickTransfer from '@/components/QuickTransfer';
import TransactionChart from '@/components/TransactionChart';
import PieChart from '@/components/PieChart';
import LineChart from '@/components/LineChart';
import Overview from '@/components/Overview';
import Settings from '@/components/Settings';
import { useSelector } from 'react-redux';
import { RootState } from '@/app/store';

export default function Home() {
  const sidebarStatus = useSelector((state: RootState) => state.user['sidebar-status']);
  console.log(sidebarStatus);
  return (
    <>
      {sidebarStatus == 'Dashboard' && <Overview />}
      {sidebarStatus == 'Setting' && <Settings />}
    </>
  );
}
