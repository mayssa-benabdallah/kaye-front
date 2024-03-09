// ** MUI Imports
import Grid from '@mui/material/Grid'
import Card from '@mui/material/Card'
import Typography from '@mui/material/Typography'
import CardHeader from '@mui/material/CardHeader'
import TableStickyHeader from 'src/views/tables/TableStickyHeader'
import TableCollapsible from 'src/views/tables/TableCollapsible'

const MUITable = () => {
  return (
    <Grid container spacing={6}>
      <Grid item xs={12}>
       
        <Typography variant='h3'>table</Typography>

        <Typography variant='body2'>Tables display sets of data. They can be fully customized</Typography>
      </Grid>

    

      

      <Grid item xs={12}>
        <Card>
          <CardHeader title='Sticky Header' titleTypographyProps={{ variant: 'h6' }} />
          <TableStickyHeader />
        </Card>
      </Grid>
    </Grid>
  )
}

export default MUITable
