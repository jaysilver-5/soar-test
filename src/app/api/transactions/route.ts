import { NextResponse } from 'next/server';

const mockTransactionData = {
  labels: ['Sat', 'Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri'],
  datasets: [
    {
      label: 'Deposit',
      data: [200, 150, 250, 400, 300, 200, 350],
      backgroundColor: 'rgb(59, 130, 246)', // Tailwind blue-500
      borderRadius: 20,
      borderSkipped: false,
      barThickness: 10,
      offset: 10,
    },
    {
      label: '',
      data: [0, 0, 0, 0, 0, 0, 0],
      backgroundColor: 'rgba(0, 0, 0, 0)', // Transparent bar
      barThickness: 5,
    },
    {
      label: 'Withdraw',
      data: [500, 300, 400, 450, 200, 350, 400],
      backgroundColor: 'rgb(17, 24, 39)', // Tailwind gray-900
      borderRadius: 20,
      borderSkipped: false,
      barThickness: 10,
      offset: 5,
    },
  ],
};

export async function GET() {
  return NextResponse.json(mockTransactionData);
}
