import NextLink from 'next/link'

import React from 'react'
import Box from '@mui/material/Box'
import { AuthLayout } from '../../components/layouts/';
import Grid from '@mui/material/Grid';
import Typography  from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import Button  from '@mui/material/Button';


const RegisterPage = () => {
  return (
    <AuthLayout title={'Login'}>
        <Box sx={{ width: 350, padding:'10px 20px'}}>
            <Grid container spacing={ 2 }>
                <Grid item xs={12}>
                    <Typography variant='h1' component='h1'>Iniciar Sesión</Typography>
                </Grid>

                <Grid item xs={12}>
                    <TextField label='Nombre' variant='filled' fullWidth />
                </Grid>

                <Grid item xs={12}>
                    <TextField label='Correo' variant='filled' fullWidth />
                </Grid>

                <Grid item xs={12}>
                    <TextField label='Contraseña' type='password' variant='filled' fullWidth />
                </Grid>

                <Grid item xs={12}>
                    <Button color='secondary' className='circular-btn' size='large' fullWidth>
                        Login
                    </Button>
                </Grid>

                <Grid item xs={12} display='flex' justifyContent='end'>
                    <NextLink href='/auth/register' passHref >
                        <Link underline='always'>
                            Crear una cuenta
                        </Link>
                        
                    </NextLink>
                </Grid>

            </Grid>

        </Box>
        
    </AuthLayout>
  )
}

export default RegisterPage