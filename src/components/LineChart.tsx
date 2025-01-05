"use client";

import React, { useEffect, useState } from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  LineElement,
  PointElement,
  LinearScale,
  CategoryScale,
  Tooltip,
  Filler,
  ChartOptions,
  ChartData,
} from "chart.js";

// Register the necessary chart components
ChartJS.register(
  LineElement,
  PointElement,
  LinearScale,
  CategoryScale,
  Tooltip,
  Filler,
);

const LineChart: React.FC = () => {
  const [chartData, setChartData] = useState<ChartData<"line"> | null>(null);

  useEffect(() => {
    const fetchLineChartData = async () => {
      try {
        const response = await fetch("/api/line-chart");
        const data = await response.json();
        setChartData(data);
      } catch (error) {
        console.error("Error fetching line chart data:", error);
      }
    };

    fetchLineChartData();
  }, []);

  // Chart options
  const options: ChartOptions<"line"> = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false, // Hide legend
      },
      tooltip: {
        enabled: true,
      },
    },
    scales: {
      x: {
        border: { dash: [4, 4] },
        grid: {
          color: "#e0e0e0",
          lineWidth: 1,
          offset: true,
          drawOnChartArea: true,
        },
      },
      y: {
        border: { dash: [4, 4] },
        grid: {
          color: "#e0e0e0",
          lineWidth: 1,
          offset: true,
          drawOnChartArea: true,
        },
        beginAtZero: true,
      },
    },
  };

  return (
    <div style={{ width: "100%", height: "100%" }}>
      {chartData ? (
        <Line data={chartData} options={options} />
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default LineChart;
