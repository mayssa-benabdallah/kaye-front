// ** React Imports
import { SyntheticEvent, useState } from 'react'

// ** MUI Imports
import Tab from '@mui/material/Tab'
import Card from '@mui/material/Card'
import TabList from '@mui/lab/TabList'
import TabPanel from '@mui/lab/TabPanel'
import Button from '@mui/material/Button'
import TabContext from '@mui/lab/TabContext'
import Typography from '@mui/material/Typography'
import CardContent from '@mui/material/CardContent'

const CardNavigation = () => {
  // ** State
  const [value, setValue] = useState<string>('1')

  const handleChange = (event: SyntheticEvent, newValue: string) => {
    setValue(newValue)
  }

  return (
    <Card>
      <TabContext value={value}>
        <TabList onChange={handleChange} aria-label='card navigation example'>
          <Tab value='1' label='Details' />
        </TabList>

        <CardContent>
        <TabPanel value='1' sx={{ p: 0 }}>
  <Typography variant='h6' sx={{ marginBottom: 2 }}>
    Jardin Thailandais
  </Typography>

  <Typography variant='body2' sx={{ marginBottom: 2 }}>
    Pudding tiramisu caramels. Gingerbread gummies danish chocolate bar toffee marzipan. Wafer wafer cake
    powder danish oat cake.
  </Typography>

  {/* Add phone number, Instagram link, and address */}
  <Typography variant='body2' sx={{ marginBottom: 2 }}>
    <strong>Phone Number:</strong> +123456789
  </Typography>

  <Typography variant='body2' sx={{ marginBottom: 2 }}>
    <strong>Instagram:</strong> <a href="https://www.instagram.com/jardinthailandais/" target="_blank" rel="noopener noreferrer">jardinthailandais</a>
  </Typography>

  <Typography variant='body2' sx={{ marginBottom: 4 }}>
    <strong>Address:</strong> 123 Main Street, City, Country
  </Typography>

  <Button variant='contained' sx={{ backgroundColor: 'blue', color: 'white', marginRight: 2, '&:hover': { backgroundColor: 'white', color: 'black', border: '1px solid blue' } }}>
    Modifier
  </Button>
  <Button variant='contained' sx={{ backgroundColor: 'red', color: 'white' , marginRight: 2, '&:hover': { backgroundColor: 'white', color: 'black', border: '1px solid red' } }}>
    Supprimer
  </Button>

</TabPanel>


        

         
        </CardContent>
      </TabContext>
    </Card>
    
  )
}

export default CardNavigation
