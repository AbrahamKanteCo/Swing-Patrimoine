import React, { useEffect, useRef } from 'react';
import { Chart, LineElement, LineController, PointElement, LinearScale, CategoryScale, Legend, Tooltip } from 'chart.js';

Chart.register(LineElement, LineController, PointElement, LinearScale, CategoryScale, Legend, Tooltip);

const ChartComponent = ({ checkedItems }) => {
  const chartRef = useRef(null);

  useEffect(() => {
    const data = {
      labels: ['07-02', '07-04', '07-06', '07-08', '07-10', '07-12', '07-14', '07-16'],
      datasets: [
        {
          label: 'Agregat',
          data: [60_000, 40_000, 60_000, 100_000, 100_000, 80_000, 60_000, 60_000],
          borderColor: 'green',
          borderWidth: 2,
          fill: false,
          hidden: !checkedItems.Agregat,
        },
        {
          label: 'Trésorerie',
          data: [0, 0, 20_000, 40_000, 40_000, 30_000, 20_000, 10_000],
          borderColor: 'red',
          borderWidth: 3,
          fill: false,
          hidden: !checkedItems.Trésorerie, 
        },
        {
          label: 'Obligations',
          data: [0, -20_000, -60_000, -80_000, -80_000, -60_000, -40_000, -40_000],
          borderColor: 'yellow',
          borderWidth: 2,
          borderDash: [10, 5],
          fill: false,
          hidden: !checkedItems.Obligations, 
        },
      ],
    };

    const options = {
      responsive: true,
      maintainAspectRatio: false, 
      plugins: {
        legend: {
          display: true,
          position: 'right',
        },
      },
      scales: {
        x: {
          title: {
            display: true,
            text: 'Date',
          },
        },
        y: {
          title: {
            display: true,
            text: 'Montant',
          },
          beginAtZero: true,
        },
      },
    };

    const chartInstance = new Chart(chartRef.current, {
      type: 'line',
      data: data,
      options: options,
    });

    return () => {
      chartInstance.destroy();
    };
  }, [checkedItems]);

  return <canvas className='w-full' ref={chartRef}></canvas>;
};

export default ChartComponent;
