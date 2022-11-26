import React from "react";
import NextLink from "next/link";

import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Divider from "@mui/material/Divider";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import Chip from "@mui/material/Chip";

import { ShopLayout } from "../../components/layouts";
import { CartList, OrderSummary } from "../../components/cart";
import {
  CreditCardOffOutlined,
  CreditScoreOutlined,
} from "@mui/icons-material";

const OrderPage = () => {
  return (
    <ShopLayout
      title="Resumen del pedido 123456789"
      pageDescription={"Resumen del pedido"}
    >
      <Typography variant="h1" component="h1">
        Pedido: ABC123
      </Typography>
      {/* <Chip sx={{ my: 2}}
        label='pendiente de pago'
        variant="outlined" 
        color='error'
        icon={<CreditCardOffOutlined />}
       /> */}
      <Chip
        sx={{ my: 2 }}
        label="Pagado"
        variant="outlined"
        color="success"
        icon={<CreditScoreOutlined />}
      />

      <Grid container sx={{ mt: 5 }} alignItems="center">
        <Grid item xs={12} sm={7}>
          <CartList />
        </Grid>
        <Grid item xs={12} sm={5} sx={{ pl: 5 }}>
          <Card className="summary-card">
            <CardContent>
              <Typography variant="h2" color={"secondary"}>
                Datos de su Pedido
              </Typography>

              <Divider sx={{ my: 1 }} />

              <Box display="flex" justifyContent="space-between">
                <Typography variant="h2">Dirección de Entrega</Typography>
                <NextLink href="/checkout/address" passHref >
                  <Link>Editar</Link>
                </NextLink>
              </Box>

              <Typography>Susana Paracuellos</Typography>
              <Typography>55 algún lugar</Typography>
              <Typography>Zaragoza 50008</Typography>
              <Typography>España</Typography>

              <Divider sx={{ my: 1 }} />

              <Box display="flex" justifyContent="end">
                <NextLink href="/cart" passHref >
                  <Link>Editar</Link>
                </NextLink>
              </Box>

              <OrderSummary />
                    {/* //condicion */}
              <Box sx={{ mt: 3 }}>
                <Button color="secondary" className="circular-btn" fullWidth>
                  Pagar Ahora
                </Button>

                <Chip
                  sx={{ my: 2 }}
                  label="Pagado"
                  variant="outlined"
                  color="success"
                  icon={<CreditScoreOutlined />}
                />
              </Box>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </ShopLayout>
  );
};

export default OrderPage;
