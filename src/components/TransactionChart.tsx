"use client";

import {
  Chart as ChartJS,
  BarElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";
import { ChartOptions } from "chart.js";
import { useEffect, useState } from "react";

ChartJS.register(CategoryScale, LinearScale, BarElement, Tooltip, Legend);

const TransactionChart = () => {
  const [chartData, setChartData] = useState<any>(null);

  useEffect(() => {
    const fetchTransactionData = async () => {
      try {
        const response = await fetch("/api/transactions");
        const data = await response.json();
        setChartData(data);
      } catch (error) {
        console.error("Error fetching transaction data:", error);
      }
    };

    fetchTransactionData();
  }, []);

  const options: ChartOptions<"bar"> = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: "top",
        align: "end",
        labels: {
          usePointStyle: true,
          pointStyle: "circle",
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
        stacked: false,
        grid: {
          drawOnChartArea: false,
        },
      },
      y: {
        beginAtZero: true,
        ticks: {
          stepSize: 100,
        },
      },
    },
  };

  return (
    <div style={{ width: "100%", height: "100%" }}>
      {chartData ? (
        <Bar data={chartData} options={options} />
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default TransactionChart;
