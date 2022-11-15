import { Box, Typography } from '@mui/material';
import React, { ReactNode} from 'react';
import { ShopLayout } from '../components/layouts';



const Custom404 = () => {
  return (

    <ShopLayout title='Page not Found' pageDescription='Nada por aquí'>
        <Box display='flex' justifyContent='center' alignItems='center' height='cal(100vh - 200px)' >
            <Typography variant='h1' component='h1' fontSize={80} fontWeight={200}>404 |</Typography>
            <Typography marginLeft={2}>No hay ningún producto aquí</Typography>

        </Box>
    </ShopLayout>
  )
}

export default Custom404