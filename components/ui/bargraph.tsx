import { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';

interface BarChartProps {
  profileVisits: number[];
  daysOfWeek: string[];
}

const BarChart: React.FC<BarChartProps> = ({ profileVisits, daysOfWeek }) => {
  const chartRef = useRef<HTMLCanvasElement | null>(null);
  const chartInstance = useRef<Chart<'bar'> | null>(null);

  useEffect(() => {
    if (chartRef.current && daysOfWeek.length > 0 && profileVisits.length > 0) {
      const ctx = chartRef.current.getContext('2d');
      if (ctx && chartInstance.current) {
        chartInstance.current.destroy();
      }

      chartInstance.current = new Chart(ctx as CanvasRenderingContext2D, {
        type: 'bar',
        data: {
          labels: daysOfWeek,
          datasets: [
            {
              label: 'Profile Visits',
              data: profileVisits,
              backgroundColor: 'rgba(51, 193, 238, 1)', // Cyan color for bars
              hoverBackgroundColor: 'rgba(0, 216, 189, 1)', // Green color on hover
              borderRadius: 10, // Rounded corners
            },
          ],
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          scales: {
            x: {
              display: true,
              title: {
                display: true,
                color: 'white', // Set x-axis title color to white
                font: {
                  size: 16, // Set x-axis title font size
                },
              },
              ticks: {
                color: 'white', // Set x-axis ticks color to white
              },
            },
            y: {
              display: false,
              title: {
                display: true,
                text: 'Profile Visits',
                color: 'white', // Set y-axis title color to white
                font: {
                  size: 16, // Set y-axis title font size
                },
              },
              ticks: {
                color: 'white', // Set y-axis ticks color to white
              },
            },
          },
          plugins: {
            tooltip: {
                enabled: false,
            }
          }
        },
      });
    }
  }, [profileVisits, daysOfWeek]);

  return (
    <div className=" w-3/4  md:w-2/5 my-[2vw] mr-[2vw] h-[70vw] md:h-[20vw] p-[2vw] text-white border border-cyan-400 rounded-[0.5vw] ">
        <p className='text-white font-semibold text-[3vw] md:text-[1vw]'>Profile Visits</p>
        <p className='text-[#2CDDC7] text-[3vw] md:text-[0.6vw] ' >+1.43% <span className='text-[#849AA9]' >September 24 - September 31</span></p>
      <canvas ref={chartRef} />
    </div>
  );
};

export default BarChart;
