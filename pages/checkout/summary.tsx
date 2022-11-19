import React from "react";
import NextLink from 'next/link'

import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Divider from "@mui/material/Divider";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";

import { ShopLayout } from "../../components/layouts";
import { CartList, OrderSummary }  from "../../components/cart";

const SummaryPage = () => {
  return (
    <ShopLayout
      title="Resumen del pedido"
      pageDescription={"Resumen del pedido"}
    >
      <Typography variant="h1" component="h1">
        Resumen del pedido
      </Typography>

      <Grid container>
        <Grid item xs={12} sm={7}>
          <CartList />
        </Grid>
        <Grid item xs={12} sm={5}>
          <Card className="summary-card">
            <CardContent>
              <Typography variant="h1">Resumen Pedido</Typography>

              <Divider sx={{ my: 1 }} />
              
              <Box display='flex' justifyContent='space-between'>
                <Typography variant="h2">Dirección de Entrega</Typography>
                <NextLink href="/checkout/address" passHref>
                  <Link >
                    Editar
                  </Link>
                </NextLink>
              </Box>

              <Typography >Susana Paracuellos</Typography>
              <Typography >55 algún lugar</Typography>
              <Typography >Zaragoza 50008</Typography>
              <Typography >España</Typography>

              <Divider sx={{ my: 1 }} />

              <Box display='flex' justifyContent='end'>
                <NextLink href="/cart" passHref>
                  <Link >
                    Editar
                  </Link>
                </NextLink>
              </Box>


              <OrderSummary />

              <Box sx={{ mt: 3 }}>
                <Button color="secondary" className="circular-btn" fullWidth>
                  Checkout
                </Button>
              </Box>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </ShopLayout>
  );
};

export default SummaryPage;
