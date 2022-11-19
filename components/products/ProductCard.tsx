import { FC, useMemo, useState } from "react";
import NextLink from "next/link";

import   Grid from "@mui/material/Grid";
import   Card from "@mui/material/Card";
import   CardActionArea from "@mui/material/CardActionArea";
import   CardMedia from "@mui/material/CardMedia";
import   Box from "@mui/material/Box";
import   Typography from "@mui/material/Typography";
import   Link from "@mui/material/Link";
 

import { IProduct } from "../../interfaces";

interface Props {
  product: IProduct;
}

export const ProductCard: FC<Props> = ({ product }) => {
  const [isHovered, setIsHovered] = useState(false);

  const productImage = useMemo(() => {
    return isHovered ? `products/${product.images[1]} ` : `products/${product.images[0]} `;
  }, [isHovered, product.images]);

  return (
    <Grid
      item
      xs={6}
      sm={4}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Card>
        <NextLink href="/product/slug" passHref prefetch={false}>
          <Link>
            <CardActionArea>
              <CardMedia
                component="img"
                className="fadeIn"
                image={productImage}
                alt={product.title}
              />
            </CardActionArea>
          </Link>
        </NextLink>
      </Card>

      <Box sx={{ mt: 1 }} className="fadeIn">
        <Typography fontWeight={700}>{product.title}</Typography>
        <Typography fontWeight={500}>{`€${product.price}`}</Typography>
      </Box>
    </Grid>
  );
};
