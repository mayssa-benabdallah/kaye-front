import React, { useState, useEffect } from 'react';
import { LineChart } from '@mui/x-charts/LineChart';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import Typography from '@mui/material/Typography';
import CardContent from '@mui/material/CardContent';

const CardGraph = () => {
  // State variables
  const [selectedPeriod, setSelectedPeriod] = useState('lastDay');
  const [chartData, setChartData] = useState([]);
  const [XAxisData,setXAxisData] = useState([]);

  // Function to fetch data based on selected period
// Function to fetch data based on the selected period
const fetchData = async (period: string) => {
    let xAxis = [];
    let chart = [];
  
    // Simulating fetching data from the database based on the selected period
    switch (period) {
        case 'lastDay':
          xAxis = Array.from({ length: 24 }, (_, i) => new Date(Date.now() - i * 60 * 60 * 1000));
          chart = xAxis.map(() => Math.random() * 100);
          break;
        case '7days':
          xAxis = Array.from({ length: 7 }, (_, i) => new Date(Date.now() - i * 24 * 60 * 60 * 1000));
          chart = xAxis.map(() => Math.random() * 100);
          break;
        case '14days':
          xAxis = Array.from({ length: 14 }, (_, i) => new Date(Date.now() - i * 24 * 60 * 60 * 1000));
          chart = xAxis.map(() => Math.random() * 100);
          break;
        default:
          xAxis = [];
          chart = [];
      }
  
    setXAxisData(xAxis);
    setChartData(chart);
    console.log(XAxisData);
    console.log(chartData);
  };
  

  // Initial data fetch for last 24 hours
  React.useEffect(() => {
    fetchData('lastDay');
  }, []);
  
  

  useEffect(() => {
    fetchData(selectedPeriod);
  }, [selectedPeriod]);

  return (
    <Card sx={{ border: 0, boxShadow: 0, color: 'common.white', backgroundColor: '#4c3d66' }}>
      <CardContent sx={{ paddingX: 0, paddingBottom: '0 !important' }}>
      {/* Buttons for selecting time periods */}
      <Button onClick={() => setSelectedPeriod('lastDay')}>Last Day</Button>
<Button onClick={() => setSelectedPeriod('7days')}>Last 7 Days</Button>
<Button onClick={() => setSelectedPeriod('14days')}>Last 14 Days</Button>

      {/* LineChart component */}
      <LineChart
       xAxis={[{ data: XAxisData}]}
        series={[{ data: chartData, area: true, color: '#9155FD' }]} // Example series data
        height={300}
        margin={{ left: 0, right: 0, top: 0, bottom: 0 }}
        sx={{
          'width': '100%',
          '& .MuiAreaElement-root': {
            fill: 'url(#myGradient)', // Apply the linear gradient to the area
          },
          '& .MuiLineElement-root': {
            strokeWidth: 1,
            strokeOpacity: 0.7
          },
        }}
      />
    </CardContent>
    </Card>
  );
};

export default CardGraph;