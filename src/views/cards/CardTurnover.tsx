import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Typography from '@mui/material/Typography';
import CardContent from '@mui/material/CardContent';
import { LineChart } from '@mui/x-charts/LineChart';

const CardTurnover = () => {
  return (
    <Card sx={{ border: 0, boxShadow: 0, color: 'common.white', backgroundColor: '#191749' }}>
      <CardContent sx={{ paddingX: 0, paddingBottom: '0 !important' }}>
        <Box sx={{ position:'absolute'}}>
        <Typography variant='h3' sx={{ my: 0, color: 'white' }}>
          $42.8k
        </Typography>
        <Typography variant='subtitle2' sx={{ my: 0, color: 'grey' }}>
          description
        </Typography>
        </Box>
        <LineChart
          xAxis={[{ data: [1, 2, 3, 5,6, 7], min:1, max:7 }]}
          series={[{ data: [2, 2.5, 3.25, 5, 5.11, 10],area : true, showMark : false, color: '#9155FD' }]}
          height={300}
          margin={{ left: 0, right: 0, top: 0, bottom: 0 }}
          bottomAxis={null}
          leftAxis={null}
          sx={{
            'width':'100%',
            '& .MuiAreaElement-root': {
              fill: 'url(#myGradient)', // Apply the linear gradient to the area
            },
            '& .MuiLineElement-root': {
              strokeWidth: 1,
              strokeOpacity:0.7
            },
          }}
        >
          <defs>
        <linearGradient id="myGradient" gradientTransform="rotate(90)">
          <stop offset="60%" stopColor="#9155FD" stopOpacity="0.8"/>
          <stop offset="95%" stopColor="#D5BEFE" stopOpacity="1"/>
        </linearGradient>
      </defs>
        </LineChart>
      </CardContent>
    </Card>
  );
};

export default CardTurnover;
