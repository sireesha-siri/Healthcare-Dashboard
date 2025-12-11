import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler
} from 'chart.js';

import './BloodPressureChart.css';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler
);

const BloodPressureChart = ({ data }) => {
  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: true,
        position: 'top',
        align: 'end',
        labels: {
          usePointStyle: true,
          padding: 15,
          font: {
            size: 12,
            family: 'Manrope',
            weight: '400'
          },
          color: '#072635'
        }
      },
      tooltip: {
        enabled: true,
        backgroundColor: '#FFFFFF',
        titleColor: '#072635',
        bodyColor: '#072635',
        borderColor: '#E3E4E6',
        borderWidth: 1,
        padding: 12,
        displayColors: true,
        callbacks: {
          label: function(context) {
            return `${context.dataset.label}: ${context.parsed.y}`;
          }
        }
      }
    },
    scales: {
      y: {
        beginAtZero: false,
        min: 60,
        max: 180,
        ticks: {
          stepSize: 20,
          color: '#072635',
          font: {
            size: 12,
            family: 'Manrope'
          }
        },
        grid: {
          color: '#E3E4E6',
          drawBorder: false
        }
      },
      x: {
        ticks: {
          color: '#072635',
          font: {
            size: 12,
            family: 'Manrope'
          }
        },
        grid: {
          display: false,
          drawBorder: false
        }
      }
    },
    interaction: {
      mode: 'index',
      intersect: false
    }
  };

  return (
    <div className="blood-pressure-chart">
      <Line data={data} options={options} />
    </div>
  );
};

export default BloodPressureChart;