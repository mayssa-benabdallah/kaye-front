import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Typography from '@mui/material/Typography';
import CardContent from '@mui/material/CardContent';
import LinearProgress, { LinearProgressProps } from '@mui/material/LinearProgress';

function LinearProgressWithLabel(props: LinearProgressProps & { value: number }) {
  return (
    <Box sx={{ display: 'flex', alignItems: 'center' }}>
      <Box sx={{ width: '100%', mr: 1 }}>
        <LinearProgress variant="determinate" {...props} />
      </Box>
      <Box sx={{ minWidth: 35 }}>
        <Typography variant="body2" color="text.secondary">{`${Math.round(
          props.value,
        )}%`}</Typography>
      </Box>
    </Box>
  );
}

const CardTickets = () => {
  const [progress, setProgress] = React.useState(0);

  React.useEffect(() => {
    const timer = setInterval(() => {
      setProgress((oldProgress) => {
        if (oldProgress === 100) {
          return 0;
        }
        const diff = Math.random() * 10;
        return 70;
      });
    }, 500);

    return () => {
      clearInterval(timer);
    };
  }, []);
  return (
    <Card sx={{ border: 0,boxShadow: 0, color: 'common.white', backgroundColor: '#4c3d66;' }}>
      <CardContent sx={{ paddingX: 0}}>
        <Typography variant='h4' sx={{ my: 0, color: 'white' }}>
        Etats des Réservations
        </Typography>
        <ul className="zero-margin-list" style={{ listStyleType: 'disc' }}>
          < Box sx={{mb: 5}}>
        <Typography variant='subtitle2' sx={{ my: 0, color: 'white' }}>
          <li className="green">Accepté</li>
        </Typography>
        <LinearProgressWithLabel variant='determinate' value={60}>   
        </LinearProgressWithLabel>
        </Box>
        < Box sx={{mb: 5}}>
        <Typography variant='subtitle2' sx={{ my: 0, color: 'white' }}>
          <li>En attente </li>
        </Typography> 
        <LinearProgressWithLabel variant='determinate' value={60}>   
        </LinearProgressWithLabel>
        </Box>
        < Box sx={{mb: 5}}>
        <Typography variant='subtitle2' sx={{ my: 0, color: 'white' }}>
          <li className="red">Refusé</li>
        </Typography> 
        <LinearProgressWithLabel variant='determinate' value={60}>   
        </LinearProgressWithLabel>
        </Box>
        </ul>
      </CardContent>
    </Card>
  );
};

export default CardTickets;
