import { NextResponse } from "next/server";

const mockTransactions = [
  {
    mode: 'deposit',
    title: 'Deposit from my Card',
    amount: -850,
    date: '28 January 2021',
  },
  {
    mode: 'paypal',
    title: 'Deposit Paypal',
    amount: 2500,
    date: '25 January 2021',
  },
  {
    mode: 'people',
    title: 'Jemi Wilson',
    amount: 5400,
    date: '21 January 2021',
  },
  {
    mode: 'deposit',
    title: 'ATM Withdrawal',
    amount: -500,
    date: '18 January 2021',
  },
  {
    mode: 'paypal',
    title: 'Bank Transfer',
    amount: 3000,
    date: '15 January 2021',
  },
];

export async function GET() {
  return NextResponse.json(mockTransactions);
}
