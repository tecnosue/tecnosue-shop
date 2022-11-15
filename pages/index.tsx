import { Typography } from '@mui/material';
import { ShopLayout } from '../components/layouts';


export default function Home() {
  return (
    <ShopLayout title={'Tecnosue-Shop - Home'} pageDescription={'Tu tienda de moda'} >
      <Typography variant='h1' component='h1'>mi-tienda</Typography>
      <Typography variant='h2' sx={{ mb: 1 }}>Todos los productos</Typography>

      
        
    </ShopLayout>
  )
}
