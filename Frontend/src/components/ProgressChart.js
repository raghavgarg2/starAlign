import React from "react";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Tooltip,
  Legend,
  Title,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Tooltip,
  Legend,
  Title
);

const ProgressChart = ({ completed, inProgress, todo }) => {
  const barData = {
    labels: ["Completed", "In Progress", "To Do"],
    datasets: [
      {
        label: "Tasks",
        data: [completed, inProgress, todo],
        backgroundColor: ["#4CAF50", "#FF9800", "#F44336"],
        borderColor: ["#388E3C", "#F57C00", "#D32F2F"],
        borderWidth: 1,
      },
    ],
  };

  const barOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: true,
        text: "Task Progress",
      },
    },
    scales: {
      x: {
        stacked: true,
        grid: {
          display: false,
        },
        ticks: {
          padding: 5,
        },
        barPercentage: 0.5,
        categoryPercentage: 0.5,
      },
      y: {
        stacked: true,
        grid: {
          drawBorder: false,
        },
        ticks: {
          beginAtZero: true,
        },
      },
    },
  };

  return (
    <div className="w-full h-auto p-4">
      <div className="w-full h-64 sm:h-80 lg:h-96">
        <h3 className="text-center text-lg font-semibold mb-4">
          Task Progress Bar Chart
        </h3>
        <Bar options={barOptions} data={barData} />
      </div>
    </div>
  );
};

export default ProgressChart;
