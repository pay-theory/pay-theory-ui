import React from "react";

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
} from "chart.js";
import { Line } from "react-chartjs-2";

import { useChartData, HOURS, DAYS } from "./chartHooks";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const PaymentChart = ({ payments = [], daily, weekly }) => {
  const type = daily ? HOURS : weekly ? DAYS : null;
  const [options, chartData] = useChartData(payments, type);

  if (options && chartData) {
    return <Line options={options} data={chartData} />;
  } else {
    return <div>loading</div>;
  }
};

export default PaymentChart;
