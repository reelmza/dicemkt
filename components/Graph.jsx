"use client";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";

export default function Home() {
  ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Filler,
    Legend
  );
  const labels = [
    "1st January, 2023",
    "1st February, 2023",
    "1st March, 2023",
    "1st Aprile, 2023",
    "1st May, 2023",
    "1st June, 2023",
    "1st July, 2023",
    "1st August, 2023",
    "1st September, 2023",
    "1st November, 2023",
    "1st December, 2023",
    "1st January, 2024",
    "1st February, 2024",
    "1st March, 2024",
    "1st Aprile, 2024",
    "1st May, 2024",
    "1st June, 2024",
    "1st July, 2024",
    "1st August, 2024",
    "1st September, 2024",
  ];
  const options = {
    responsive: true,
    plugins: {
      legend: {
        display: false,
        position: "top",
      },
      title: {
        display: false,
        text: "Graph",
      },
    },

    scales: {
      x: {
        ticks: {
          display: false,
        },
        grid: {
          color: "#f3f3f3",
        },
      },

      y: {
        grid: {
          color: "#f3f3f3",
        },

        ticks: {
          autoSkip: true,
          maxTicksLimit: 8,
          callback: function (val) {
            return "$" + val;
          },
        },

        position: "right",
      },
    },
  };
  const data = {
    labels,
    datasets: [
      {
        fill: true,
        label: "Dataset 2",
        data: [
          "1100",
          "1300",
          "1250",
          "1300",
          "1200",
          "1200",
          "1300",
          "1300",
          "1350",
          "1150",
          "1400",
          "1200",
          "1500",
          "1200",
          "1350",
          "1200",
          "1200",
          "1100",
          "1300",
          "1000",
        ],
        borderColor: "rgba(3, 101, 88, 1)",
        backgroundColor: "rgba(3, 101, 88, 0.25)",
        borderWidth: 2,
        tension: 0.1,
        pointStyle: false,
      },
    ],
  };
  return (
    <div className="block w-full">
      <div className="w-full flex items-center justify-between mb-5">
        <div className="text font-semibold">Portfolio Analytics</div>
        <div className="flex items-center">
          <div className="px-3 h-5 border-r flex items-center text-center text-sm mr-3">
            1D
          </div>

          <div className="pr-3 h-5 border-r flex items-center text-center text-sm mr-3">
            5D
          </div>

          <div className="pr-3 h-5 border-r flex items-center text-center text-sm mr-3">
            1M
          </div>

          <div className="pr-3 h-5 border-r flex items-center text-center text-sm mr-3 font-semibold">
            1Y
          </div>

          <div className="pr-3 h-5 flex items-center text-center text-sm">
            MAX
          </div>
        </div>
      </div>
      <Line options={options} data={data} />
    </div>
  );
}
