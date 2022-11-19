import React from 'react'

import Grid  from '@mui/material/Grid';
import Box from '@mui/system/Box';
import Button from '@mui/material/Button';
import Typography  from '@mui/material/Typography';
import { ShopLayout } from '../../components/layouts';

import TextField  from '@mui/material/TextField';
import FormControl  from '@mui/material/FormControl';
import InputLabel  from '@mui/material/InputLabel';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';



const AddressPage = () => {
  return (
    <ShopLayout title='Dirección' pageDescription={'Confirmar dirección de destino'}>
        <Typography variant='h1' component='h1'>Dirección</Typography>

        <Grid container spacing={ 2 } sx={{ mt: 2}}>
            <Grid item xs={12} sm={ 6 }>
                <TextField label='Nombre' variant='filled' fullWidth />
            </Grid>
            <Grid item xs={12} sm={ 6 }>
                <TextField label='Apellido' variant='filled' fullWidth />
            </Grid>
            <Grid item xs={12} sm={ 6 }>
                <TextField label='Dirección' variant='filled' fullWidth />
            </Grid>
            <Grid item xs={12} sm={ 6 }>
                <TextField label='Dirección 2' variant='filled' fullWidth />
            </Grid>
            <Grid item xs={12} sm={ 6 }>
                <TextField label='Codigo Postal' variant='filled' fullWidth />
            </Grid>
            <Grid item xs={12} sm={ 6 }>
                <TextField label='Ciudad' variant='filled' fullWidth />
            </Grid>
            <Grid item xs={12} sm={ 6 }>
                <FormControl fullWidth>
                    <InputLabel>País</InputLabel>
                    <Select 
                        variant='filled'
                        label='País'
                        value={1}
                    >
                        <MenuItem value={1}>España</MenuItem>
                        <MenuItem value={2}>Portugal</MenuItem>
                        <MenuItem value={3}>México</MenuItem>
                        <MenuItem value={4}>CostaRica</MenuItem>

                    </Select>
                </FormControl>
            </Grid>
            <Grid item xs={12} sm={ 6 }>
                <TextField label='Teléfono' variant='filled' fullWidth />
            </Grid>
            
        </Grid>

        <Box sx={{ mt: 5 }} display='flex' justifyContent='center'>
            <Button color='secondary' className='circular-btn' size='large'>
                Revisar Pedido
            </Button>
        </Box>

    </ShopLayout>
  )
}

export default AddressPage