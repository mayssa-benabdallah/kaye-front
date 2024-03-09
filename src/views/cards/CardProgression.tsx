import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Typography from '@mui/material/Typography';
import CardContent from '@mui/material/CardContent';
import { PieChart } from '@mui/x-charts';

const done = 700;
const objective = 1000
const data1 = [
  { label: 'Done', value: done, color: '#9155FD' },
  { label: 'Left', value: objective-done, color: '#D5BEFE' }
];
const newRequests = 15;
const vsObjective = 100 - done/objective * 100;

const CardTurnover = () => {
  return (
    <Card sx={{ border: 0, boxShadow: 0, color: 'common.white', backgroundColor: '#4c3d66' }}>
  <CardContent sx={{ paddingX: 0, paddingBottom: '0 !important', position: 'relative' }}>
    <Box sx={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', alignContent: 'center' }}>
      <Typography variant='h3' sx={{color: 'white', width: '10%', marginLeft: '25%'}}>
        {newRequests}
      </Typography>
      <Typography variant='subtitle2' sx={{ my: 0, color: 'grey' }}>
        New requests
      </Typography>
      <hr style={{width:'150%', marginLeft:'-25%'}}/>
      <Typography variant='h4' sx={{ color: vsObjective < 0 ? 'white' : 'red', width: '10%', marginLeft: '10%' }}>
        -{vsObjective}%
      </Typography>
      <Typography variant='subtitle2' sx={{ my: 0, color: 'grey', marginLeft: '15%' }}>
        vs Target
      </Typography>
    </Box>
    <PieChart
      series={[
        {
          innerRadius: 110,
          outerRadius: 120,
          data: data1,
        },
      ]}
      sx={{ 'fit-content': 'center', 'width': '75%'}}
      margin={{left: 100}}
      height={300}
      slotProps={{
        legend: { hidden: true },
      }}
    >
    </PieChart>
  </CardContent>
</Card>

  );
};

export default CardTurnover;
