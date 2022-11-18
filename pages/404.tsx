import Typography  from '@mui/material/Typography';
import React, { ReactNode} from 'react';
import { ShopLayout } from '../components/layouts';
import  Box  from '@mui/material/Box';


const Custom404 = () => {
  return (

    <ShopLayout title='Page not Found' pageDescription='Nada por aquí'>
        <Box display='flex' justifyContent='center' alignItems='center' height='cal(100vh - 200px)' sx={{ flexDirection: { xs: 'column', sm: 'row' }}} >
            <Typography variant='h1' component='h1' fontSize={80} fontWeight={200}>404 |</Typography>
            <Typography marginLeft={2}>No hay ningún producto aquí</Typography>

        </Box>
    </ShopLayout>
  )
}

export default Custom404