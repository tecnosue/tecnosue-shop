import { NextPage, GetServerSideProps } from "next";
import { dbProducts } from "../../database";
import { Typography } from "@mui/material";
import { ShopLayout } from "../../components/layouts";
import { ProductList } from "../../components/products";
import { IProduct } from "../../interfaces";

interface Props {
  products: IProduct[];
}

const SearchPage: NextPage<Props>= ({ products}) => {
   

  return (
    <ShopLayout
      title={"Tecnosue-Shop - Search"}
      pageDescription={"Tu tienda de moda"}
    >
      <Typography variant="h1" component="h1">
        Buscar
      </Typography>
      <Typography variant="h2" sx={{ mb: 1 }}>
        ABC-----123
      </Typography>
      
      <ProductList products={ products } />
      
    </ShopLayout>
  );
};


export const getServerSideProps: GetServerSideProps = async ({params}) => {
  const { query='' } = params as { query: string }; 

  let products = await dbProducts.getProductsByTerm( query );

  return {
    props: {
      products
      
    }
  }
}
export default SearchPage;
