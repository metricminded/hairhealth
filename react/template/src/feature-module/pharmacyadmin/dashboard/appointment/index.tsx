import React, { useEffect, useState, useRef } from 'react';
import ReactApexChart from 'react-apexcharts';
import type { ApexOptions } from 'apexcharts';

interface ChartDataPoint {
  year: string;
  revenue: number;
}

const Appointments: React.FC = () => {
  const chartRef = useRef<ReactApexChart | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [isMounted, setIsMounted] = useState(false);

  const chartData: ChartDataPoint[] = [
    { year: '2013', revenue: 60 },
    { year: '2014', revenue: 100 },
    { year: '2015', revenue: 240 },
    { year: '2016', revenue: 120 },
    { year: '2017', revenue: 80 },
    { year: '2018', revenue: 100 },
    { year: '2019', revenue: 300 },
  ];

  const chartOptions: ApexOptions = {
    chart: {
      type: 'area',
      stacked: false,
      height: '100%',
      width: '100%',
      animations: {
        enabled: true,
        speed: 800,
        animateGradually: {
          enabled: true,
          delay: 150
        },
        dynamicAnimation: {
          enabled: true,
          speed: 350
        }
      }
    },
    dataLabels: {
      enabled: false,
    },
    series: [
      {
        name: 'Revenue',
        data: chartData.map((data) => data.revenue),
      },
    ],
    xaxis: {
      categories: chartData.map((data) => data.year),
    },
    colors: ['#1b5a90'],
    stroke: {
      width: 2,
    },
    fill: {
      opacity: 0.5,
    },
    grid: {
      show: true,
      borderColor: '#ebebeb',
      strokeDashArray: 2,
    },
    markers: {
      size: 3,
    },
    tooltip: {
      theme: 'dark',
    },
  };

  useEffect(() => {
    setIsMounted(true);
    
    return () => {
      setIsMounted(false);
    };
  }, []);

  // Only render the chart if the component is mounted and container exists
  if (!isMounted || !containerRef.current) {
    return (
      <div ref={containerRef} style={{ height: '300px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <div>Loading chart...</div>
      </div>
    );
  }

  return (
    <div ref={containerRef}>
      <ReactApexChart
        options={chartOptions}
        series={chartOptions.series}
        type="area"
        height="300"
        ref={chartRef}
      />
    </div>
  );
};

export default Appointments;

  
