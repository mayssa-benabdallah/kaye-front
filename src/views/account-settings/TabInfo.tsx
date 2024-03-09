// ** React Imports
import { forwardRef, useState } from 'react';

// ** MUI Imports
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import CardContent from '@mui/material/CardContent';

// ** Styled Components
import DatePickerWrapper from 'src/@core/styles/libs/react-datepicker';

type UserData = {
  nom: string;
  prenom: string;
  phone: string;
  email: string;
  country: string;
  languages: string;
  sexe: string;
};

const CustomInput = forwardRef((props, ref) => {
  return <TextField inputRef={ref} label='Birth Date' fullWidth {...props} />;
});

const TabInfo = () => {
  // ** State for managing user data
  const [userData, setUserData] = useState<UserData>({
    nom: 'BEN ABDALLAH',
    prenom: 'mayssaaa',
    phone: '(123) 456-7890',
    email: 'maissa@gmail.com',
    country: 'dakkar, pointc',
    languages: 'English',
    sexe: 'Homme'
  });

  // Function to update user data
  const updateUserData = (field: keyof UserData, value: string) => {
    setUserData((prevUserData) => ({
      ...prevUserData,
      [field]: value
    }));
  };

  return (
    <CardContent>
      <Grid container spacing={20}>
      <Grid item xs={12} sm={6}>
      <img width={183} alt='avatar' height={256} src='/images/pages/pose-m-1.png' />
      </Grid> 

        <Grid item xs={12} sm={6}>
          <Typography variant='body2' style={{ fontWeight: 'bold' }}>Nom: {userData.nom}</Typography>
          <Typography variant='body2' style={{ fontWeight: 'bold' }}>Prénom: {userData.prenom}</Typography>
          <Typography variant='body2' style={{ fontWeight: 'bold' }}>Numéro de télephone: {userData.phone}</Typography>
          <Typography variant='body2' style={{ fontWeight: 'bold' }}>email: {userData.email}</Typography>
          <Typography variant='body2' style={{ fontWeight: 'bold' }}>Adresse: {userData.country}</Typography>
          <Typography variant='body2' style={{ fontWeight: 'bold' }}>Adresse secondaire: {userData.languages}</Typography>
          <Typography variant='body2' style={{ fontWeight: 'bold' }}>Sexe: {userData.sexe}</Typography>
        </Grid>
      </Grid>
    </CardContent>
  );
};
  


export default TabInfo;
