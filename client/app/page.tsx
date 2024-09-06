"use client"
import {useEffect, useState} from 'react'

import Image from "next/image"
import {Bar, Line, Pie, ChartProps} from 'react-chartjs-2'
import "chart.js/auto";
// const labels = Utils.months({count: 7});
const data = {
  labels: ["a","a","a","a","a","a","a"],
  datasets: [{
    label: 'My First Dataset',
    data: [65, 59, 80, 81, 56, 55, 40],
    backgroundColor: [
      'rgba(255, 99, 132, 0.2)',
      'rgba(255, 159, 64, 0.2)',
      'rgba(255, 205, 86, 0.2)',
      'rgba(75, 192, 192, 0.2)',
      'rgba(54, 162, 235, 0.2)',
      'rgba(153, 102, 255, 0.2)',
      'rgba(201, 203, 207, 0.2)'
    ],
    borderColor: [
      'rgb(255, 99, 132)',
      'rgb(255, 159, 64)',
      'rgb(255, 205, 86)',
      'rgb(75, 192, 192)',
      'rgb(54, 162, 235)',
      'rgb(153, 102, 255)',
      'rgb(201, 203, 207)'
    ],
    borderWidth: 1
  }]
};

export default function Home() {

  const [barChartData, setBarChartData] = useState<ChartProps["data"]>({datasets:[]});
  useEffect(() => {
    (async () => {
      const response = await fetch('/api/bar-chart-data');
      const data = await response.json();
      setBarChartData(data);
    })()
  }, []);

console.log(barChartData);

  return (
    <div className='w-2/4'>
      <Bar data={barChartData} />
      <Pie data={barChartData} />
      <Line data={barChartData} />
      <h1>Hello from Home</h1>
    </div>
  );
}
