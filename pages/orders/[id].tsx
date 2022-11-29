import NextLink from 'next/link';

import { Link, Box, Card, CardContent, Divider, Grid, Typography, Chip } from '@mui/material';
import { CreditCardOffOutlined, CreditScoreOutlined } from '@mui/icons-material';

import { ShopLayout } from '../../components/layouts/ShopLayout';
import { CartList, OrderSummary } from '../../components/cart';


const OrderPage = () => {
  return (
    <ShopLayout title='Resumen del pedido 123671523' pageDescription={'Resumen del pedido'}>
        <Typography variant='h1' component='h1'>Pedido: ABC123</Typography>

        {/* <Chip 
            sx={{ my: 2 }}
            label="Pendiente de pago"
            variant='outlined'
            color="error"
            icon={ <CreditCardOffOutlined /> }
        /> */}
        <Chip 
            sx={{ my: 2 }}
            label="pedido ya fue pagado"
            variant='outlined'
            color="success"
            icon={ <CreditScoreOutlined /> }
        />

        <Grid container>
            <Grid item xs={ 12 } sm={ 7 }>
                <CartList />
            </Grid>
            <Grid item xs={ 12 } sm={ 5 }>
                <Card className='summary-card'>
                    <CardContent>
                        <Typography variant='h2'>Resumen (3 productos)</Typography>
                        <Divider sx={{ my:1 }} />

                        <Box display='flex' justifyContent='space-between'>
                            <Typography variant='subtitle1'>Dirección de entrega</Typography>
                            <NextLink href='/checkout/address' passHref>
                                <Link underline='always'>
                                    Editar
                                </Link>
                            </NextLink>
                        </Box>

                        
                        <Typography>Susana Paracuellos</Typography>
                        <Typography>55 Algun lugar</Typography>
                        <Typography>Zaragoza 50008</Typography>
                        <Typography>Españ<a href=""></a></Typography>
                        <Typography>+34 55555555</Typography>

                        <Divider sx={{ my:1 }} />

                        <Box display='flex' justifyContent='end'>
                            <NextLink href='/cart' passHref>
                                <Link underline='always'>
                                    Editar
                                </Link>
                            </NextLink>
                        </Box>

                        <OrderSummary />

                        <Box sx={{ mt: 3 }}>
                            {/* TODO */}
                            <h1>Pagar</h1>

                            <Chip 
                                sx={{ my: 2 }}
                                label="pedido ya fue pagado"
                                variant='outlined'
                                color="success"
                                icon={ <CreditScoreOutlined /> }
                            />
                        </Box>

                    </CardContent>
                </Card>
            </Grid>
        </Grid>


    </ShopLayout>
  )
}

export default OrderPage;