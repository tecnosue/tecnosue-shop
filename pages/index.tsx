import { NextPage } from "next";

import { Typography } from "@mui/material";
import { ShopLayout } from "../components/layouts";
import { initialData } from "../database/products";
import { ProductList } from "../components/products";

const Home: NextPage = () => {
  return (
    <ShopLayout
      title={"Tecnosue-Shop - Home"}
      pageDescription={"Tu tienda de moda"}
    >
      <Typography variant="h1" component="h1">
        mi-tienda
      </Typography>
      <Typography variant="h2" sx={{ mb: 1 }}>
        Todos los productos
      </Typography>

      <ProductList products={initialData.products as any} />
    </ShopLayout>
  );
};
export default Home;
