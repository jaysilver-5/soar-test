'use client';
import {
  Chart as ChartJS,
  BarElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';
import { ChartOptions } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, BarElement, Tooltip, Legend);

const TransactionChart = () => {
  const data = {
    labels: ['Sat', 'Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri'],
    datasets: [
      {
        label: 'Deposit',
        data: [200, 150, 250, 400, 300, 200, 350],
        backgroundColor: 'rgb(59, 130, 246)', // Tailwind blue-500
        borderRadius: 20,
        borderSkipped: false,
        barThickness: 10, // Increase bar thickness
        offset: 10, // Adjust offset for better spacing
      },
      {
        label: '',
        data: [0, 0, 0, 0, 0, 0, 0],
        backgroundColor: 'rgba(0, 0, 0, 0)', // Transparent bar
        barThickness: 5, // Invisible bar to create spacing
      },
      {
        label: 'Withdraw',
        data: [500, 300, 400, 450, 200, 350, 400],
        backgroundColor: 'rgb(17, 24, 39)', // Tailwind gray-900
        borderRadius: 20,
        borderSkipped: false,
        barThickness: 10, // Increase bar thickness
        offset: 5, // Adjust offset for better spacing
      },
    ],
  };

  const options: ChartOptions<'bar'> = {
    responsive: true,
    maintainAspectRatio: false, // Ensure it uses the container's width
    plugins: {
      legend: {
        position: 'top',
        align: 'end',
        labels: {
          usePointStyle: true,
          pointStyle: 'circle',
          padding: 10,
        },
      },
    },
    layout: {
      padding: {
        top: 0,
      },
    },
    scales: {
      x: {
        stacked: false, // Disable stacking
        grid: {
          drawOnChartArea: false, // Remove background grid
        },
      },
      y: {
        beginAtZero: true,
        ticks: {
          stepSize: 100, // Increment y-axis ticks by 100
        },
      },
    },
  };

  return (
    <div style={{ width: '100%', height: '100%' }}>
      <Bar data={data} options={options} />
    </div>
  );
};

export default TransactionChart;