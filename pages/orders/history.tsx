import NextLink from "next/link";
import React from "react";

import Grid from "@mui/material/Grid";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import { ShopLayout } from "../../components/layouts";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import Chip from "@mui/material/Chip";

const columns: GridColDef[] = [
  { field: "id", headerName: "ID", width: 100 },
  { field: "fullname", headerName: "Nombre Completo", width: 300 },

  {
    field: "paid",
    headerName: "Pagada",
    width: 200,
    renderCell: (params) => {
      return params.row.paid ? (
        <Chip color="success" label="Pagada" variant="outlined" />
      ) : (
        <Chip color="error" label="No pagada" variant="outlined" />
      );
    },
  },

  {
    field: "orden",
    headerName: "Ver Pedido",
    width: 200,
    sortable: false,
    renderCell: (params) => {
      return (
        <NextLink href={`/orders/${params.row.id}`} passHref >
          <Link underline="always">Ver Pedido</Link>
        </NextLink>
      );
    },
  },
];

const rows = [
  { id: 1, paid: true, fullname: "Susana Perez" },
  { id: 2, paid: false, fullname: "Juan García" },
  { id: 3, paid: true, fullname: "Ana LLop" },
  { id: 4, paid: false, fullname: "Pedro Carrasco" },
  { id: 5, paid: false, fullname: "Eduardo Fernandez" },
  { id: 6, paid: true, fullname: "Natalia Marin" },
];

const HistoryPage = () => {
  return (
    <ShopLayout
      title={"Historial de pedidos"}
      pageDescription={"Historial de pedidos del cliente"}
    >
      <Typography variant="h1" component="h1">
        Historial de ordenes
      </Typography>

      <Grid container>
        <Grid item xs={12} sx={{ height: 650, width: "100%" }}>
          <DataGrid
            rows={rows}
            columns={columns}
            pageSize={10}
            rowsPerPageOptions={[10]}
          />
        </Grid>
      </Grid>
    </ShopLayout>
  );
};

export default HistoryPage;
