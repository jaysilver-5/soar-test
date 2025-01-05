import { NextResponse } from "next/server";

const mockLineChartData = {
  labels: ["Jul", "Aug", "Sep", "Oct", "Nov", "Dec", "Jan"],
  datasets: [
    {
      label: "Data",
      data: [200, 400, 300, 800, 500, 400, 600],
      borderColor: "#2d60ff", // Line color
      borderWidth: 3,
      fill: true,
      backgroundColor: "rgba(45, 96, 255, 0.25)",
      tension: 0.4,
      pointRadius: 0,
    },
  ],
};

export async function GET() {
  return NextResponse.json(mockLineChartData);
}
