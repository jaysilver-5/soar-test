import { NextResponse } from 'next/server';

const colors = ['#2B3A67', '#F57C00', '#3F7FBF', '#2B2B2B'];

const rawPieData = [
  { label: 'Entertainment', value: 30 },
  { label: 'Expense', value: 15 },
  { label: 'Investment', value: 20 },
  { label: 'Others', value: 35 },
];

// Assign colors to pie data
const pieData = rawPieData.map((item, index) => ({
  ...item,
  color: colors[index % colors.length],
}));

export async function GET() {
  return NextResponse.json(pieData);
}
