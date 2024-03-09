import React, { ChangeEvent, MouseEvent, useState } from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';
import Card from '@mui/material/Card';
import Divider from '@mui/material/Divider';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import CardNavigation from 'src/views/cards/CardNavigation'

import {  ElementType,  SyntheticEvent } from 'react'

// ** MUI Imports
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import Link from '@mui/material/Link'
import Alert from '@mui/material/Alert'
import { styled } from '@mui/material/styles'
import MenuItem from '@mui/material/MenuItem'
import TextField from '@mui/material/TextField'
import Typography from '@mui/material/Typography'
import InputLabel from '@mui/material/InputLabel'
import AlertTitle from '@mui/material/AlertTitle'
import IconButton from '@mui/material/IconButton'
import FormControl from '@mui/material/FormControl'
import Button, { ButtonProps } from '@mui/material/Button'
import Close from 'mdi-material-ui/Close'

const ImgStyled = styled('img')(({ theme }) => ({
  width: 120,
  height: 120,
  marginRight: theme.spacing(6.25),
  borderRadius: theme.shape.borderRadius
}))

const ButtonStyled = styled(Button)<ButtonProps & { component?: ElementType; htmlFor?: string }>(({ theme }) => ({
  [theme.breakpoints.down('sm')]: {
    width: '100%',
    textAlign: 'center'
  }
}))

const ResetButtonStyled = styled(Button)<ButtonProps>(({ theme }) => ({
  marginLeft: theme.spacing(4.5),
  [theme.breakpoints.down('sm')]: {
    width: '100%',
    marginLeft: 0,
    textAlign: 'center',
    marginTop: theme.spacing(4)
  }
}))

interface State {
  password: string;
  password2: string;
  showPassword: boolean;
  showPassword2: boolean;
}

const MapComponent = ({
  markerPosition,
  onMapClick,
  onMarkerDragEnd,
}: {
  markerPosition: google.maps.LatLngLiteral;
  onMapClick: (event: google.maps.MapMouseEvent) => void;
  onMarkerDragEnd: (event: google.maps.MapMouseEvent) => void;
}) => (
  <LoadScript googleMapsApiKey="YOUR_GOOGLE_MAPS_API_KEY">
    <GoogleMap
      mapContainerStyle={{ height: '400px', width: '100%' }}
      center={{ lat: 14.6928, lng: -17.4467 }}
      zoom={12}
      onClick={(e: google.maps.MapMouseEvent) => onMapClick(e)}
    >
      {markerPosition && (
        <Marker
          position={markerPosition}
          draggable={true}
          onDragEnd={(e: google.maps.MapMouseEvent) => onMarkerDragEnd(e)}
        />
      )}
    </GoogleMap>
  </LoadScript>
);

const FormLayoutsSeparator = () => {
  const [markerPosition, setMarkerPosition] = useState<any>(null);

  const handleMapClick = (event: google.maps.MapMouseEvent) => {
    if (event.latLng) {
      setMarkerPosition({
        lat: event.latLng.lat(),
        lng: event.latLng.lng(),
      });
    }
  };

  const handleMarkerDragEnd = (event: google.maps.MapMouseEvent) => {
    if (event.latLng) {
      setMarkerPosition({
        lat: event.latLng.lat(),
        lng: event.latLng.lng(),
      });
    }
  };

  return (
    <Card>
      <CardHeader title='Gerer retaurant' titleTypographyProps={{ variant: 'h6' }} />

      <Divider sx={{ margin: 0 }} />

      <form onSubmit={(e) => e.preventDefault()}>
        <CardContent>
        <Grid item xs={12} sx={{ pb: 4, pt: theme => `${theme.spacing(3)} !important` }}>
        <Typography variant='h5'>Les restaurants Créer</Typography>
      </Grid>

      <Grid item xs={12} md={6}>
        <CardNavigation />
      </Grid>
          <Grid container spacing={5}>
          <Grid item xs={12}>
              <Typography variant='body2' sx={{ fontWeight: 600 }}>
                1. Détails du restaurant
              </Typography>
            </Grid>
            <Grid item xs={12} sm={12}>
              <TextField fullWidth type='file' label='Image' />
            </Grid>

            <Grid item xs={12} sm={12}>
              <TextField fullWidth type='text' label='Nom du restaurant' placeholder='Nom du restaurant' />
            </Grid>
          <Grid item xs={12} sm={12}>
  <TextField
    fullWidth
    multiline
    rows={4}
    label='Description'
    placeholder='Description'
  />
</Grid>


        <Grid item xs={12} sm={6}>
  <TextField
    fullWidth
    type='tel'
    label='Numéro de téléphone'
    placeholder='Numéro de téléphone'
  />
        </Grid>
        <Grid item xs={12} sm={6}>
  <TextField
    fullWidth
    type='url'
    label='Lien page Instagram'
    placeholder='Lien page Instagram'
  />
        </Grid>

        <Grid item xs={12}>
              <Divider sx={{ marginBottom: 0 }} />
            </Grid>

            <Grid item xs={12}>
              <Typography variant='body2' sx={{ fontWeight: 600 }}>
                2. Informations sur l'adresse
              </Typography>
            </Grid>

            <Grid item xs={12} sm={6}>
  <TextField
    fullWidth
    type='text'
    label='Adresse'
    placeholder='Adresse'
  />
        </Grid>      
            <Grid item xs={12} sm={6}>
              {/* Add a new Grid item for the Google Map */}
              <MapComponent
                markerPosition={markerPosition}
                onMapClick={handleMapClick}
                onMarkerDragEnd={handleMarkerDragEnd}
              />
            </Grid>

            {/* ... your existing form fields */}
          </Grid>
        </CardContent>

        <Divider sx={{ margin: 0 }} />

        <CardActions>
          <Button size='large' type='submit' sx={{ mr: 2 }} variant='contained'>
            Créer
          </Button>

          <Button size='large' color='secondary' variant='outlined'>
            Annuler
          </Button>
        </CardActions>
      </form>
    </Card>
  );
};

export default FormLayoutsSeparator;