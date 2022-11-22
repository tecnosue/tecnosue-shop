import { NextPage } from "next";
import React from "react";

import { Typography } from "@mui/material";
import { ShopLayout } from "../../components/layouts";
import { ProductList } from "../../components/products";
import { useProducts } from '../../hooks'
import { FullScreenLoading } from '../../components/ui';



const WomenPage: NextPage = () => {
  
  const {products, isLoading} = useProducts('/products?gender=women');

  return (
    <ShopLayout
      title={"Tecnosue-Shop - Women"}
      pageDescription={"Tu tienda de moda de Mujer"}
    >
      <Typography variant="h1" component="h1">
        Mujer
      </Typography>
      <Typography variant="h2" sx={{ mb: 1 }}>
        Todos los productos
      </Typography>
      

      {
        isLoading
        ?<FullScreenLoading />
        :<ProductList products={ products } />
      }

      
    </ShopLayout>
  );
};
export default WomenPage;
