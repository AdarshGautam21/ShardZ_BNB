
 
import { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';

interface LineChartProps {
  subscriberCounts: number[];
  months: string[];
}

const LineChart: React.FC<LineChartProps> = ({ subscriberCounts, months }) => {
  const chartRef = useRef<HTMLCanvasElement | null>(null);
  const chartInstance = useRef<Chart<'line'> | null>(null);

  useEffect(() => {
    if (chartRef.current && months.length > 0 && subscriberCounts.length > 0) {
      const ctx = chartRef.current.getContext('2d');
      if (ctx && chartInstance.current) {
        chartInstance.current.destroy();
      }

      const gradient = ctx!.createRadialGradient(0, 0, 0,0,0, chartRef.current!.height);
      gradient.addColorStop(0, 'rgba(255, 255, 255, 1)'); // White color with transparency
      gradient.addColorStop(1,'rgba(51, 193, 238, 0.6)'); // Cyan color with transparency

      chartInstance.current = new Chart(ctx as CanvasRenderingContext2D, {
        type: 'line',
        data: {
          labels: months,
          datasets: [
            {
              label: 'Subscriber Count',
              data: subscriberCounts,
              borderColor: 'rgba(51, 193, 238, 1)',
              borderWidth: 3,
              backgroundColor: gradient, // Gradient color from white to cyan
              fill: true, // Fill the area under the line
              tension: 0.8, // Set line tension to create curved lines
              pointHoverBackgroundColor: 'rgba(75, 192, 192, 0.5)', // Dot background color when hovered
              pointHoverRadius: 6, // Dot radius when hovered
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
              type: 'linear',
              display: true,
              title: {
                display: true,
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
              backgroundColor: 'white', // Background color of tooltip
              borderColor: 'rgba(75, 192, 192, 1)', // Border color
              titleColor: 'black',
              titleFont: {
                size: 0,
              },
              bodyColor: 'black',
              bodyFont: {
                size: 16,
              },
              borderWidth: 1, // Border width
              callbacks: {
                label: (context) => ` +${context.parsed.y}`, // Show subscriber count on hover
              },
              boxHeight: 0,
              boxWidth: 0,
            },
          },
        },
      });
    }
  }, [subscriberCounts, months]);

  return (
    <div className=" md:w-3/5 h-[60vw] md:h-[20vw] my-[2vw] mr-[2vw] p-[1vw] text-white border border-cyan-400 rounded-[2vw] md:rounded-[0.5vw] ">
        <p className='text-white font-semibold text-[3vw] md:text-[1vw]' >Subscribers</p>
         <canvas ref={chartRef} />
     </div> 
  );
};

export default LineChart;
