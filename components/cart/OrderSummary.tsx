import React from 'react'
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'

export const OrderSummary = () => {
  return (
    <Grid container>
        <Grid item xs={6}>
            <Typography>Nº Productos</Typography>
        </Grid>
        <Grid item xs={6} display='flex' justifyContent='end'>
            <Typography>3</Typography>
        </Grid>

        <Grid item xs={6}>
            <Typography>SubTotal</Typography>
        </Grid>
        <Grid item xs={6} display='flex' justifyContent='end'>
            <Typography>{ `€${405.00}` }</Typography>
        </Grid>
        <Grid item xs={6}>
            <Typography>Impuestos (15%)</Typography>
        </Grid>
        <Grid item xs={6} display='flex' justifyContent='end'>
            <Typography>{ `€${60.75}` }</Typography>
        </Grid>
        <Grid item xs={6} sx={{  mt:2 }}>
            <Typography variant='subtitle1'>Total:</Typography>
        </Grid>
        <Grid item xs={6} display='flex' justifyContent='end' sx={{  mt:2 }}>
            <Typography variant='subtitle1'>{ `€${405.00}` }</Typography>
        </Grid>
    </Grid>
  )
}
