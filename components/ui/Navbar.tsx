import NextLink from "next/link";

 
import  AppBar from "@mui/material/AppBar";
import  Button from "@mui/material/Button";
import  Badge from "@mui/material/Badge";
import  IconButton from "@mui/material/IconButton";
import  Link from "@mui/material/Link";
import  Toolbar from "@mui/material/Toolbar";
import  Typography from "@mui/material/Typography";
import  Box from "@mui/material/Box";
import { SearchOutlined, ShoppingCartOutlined } from "@mui/icons-material";
import { useRouter } from "next/router";




export const Navbar = () => {

  const {asPath} = useRouter();
   /*console.log(asPath);*/  
   
  return (
    <AppBar>
      <Toolbar>
        <NextLink href="/" passHref legacyBehavior>
          <Link display="flex" alignItems="center">
            <Typography variant="h6">Tecnosue |</Typography>
            <Typography sx={{ ml: 0.5 }}>Shop</Typography>
          </Link>
        </NextLink>

        {/* Box flex={ 1 } -> ocupa el espacio que tiene disponible */}

        <Box flex={1} />

        <Box sx={{ display: { xs: "none", sm: "block" } }}>
          <NextLink href="/category/women" passHref legacyBehavior>
            <Link>
              <Button color={ asPath === '/category/women' ? 'primary' : 'info'}>Mujeres</Button>
            </Link>
          </NextLink>
          <NextLink href="/category/men" passHref legacyBehavior>
            <Link>
              <Button color={ asPath === '/category/men' ? 'primary' : 'info'}>Hombres</Button>
            </Link>
          </NextLink>
          <NextLink href="/category/kid" passHref legacyBehavior>
            <Link>
              <Button color={ asPath === '/category/kid' ? 'primary' : 'info'}>Niños</Button>
            </Link>
          </NextLink>
        </Box>

        <Box flex={1} />

        <IconButton>
          <SearchOutlined />
        </IconButton>

        <NextLink href="/cart" passHref legacyBehavior>
          <Link>
            <Badge badgeContent={2} color="secondary">
              <ShoppingCartOutlined />
            </Badge>
          </Link>
        </NextLink>

        <Button>Menú</Button>
      </Toolbar>
    </AppBar>
  );
};
