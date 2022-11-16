import {
    AccountCircleOutlined,
    AdminPanelSettings,
    CategoryOutlined,
    ConfirmationNumberOutlined,
    EscalatorWarningOutlined,
    FemaleOutlined,
    LoginOutlined,
    MaleOutlined,
    SearchOutlined,
    VpnKeyOutlined,
  } from "@mui/icons-material";
   
  interface adminMenuItem {
    label: string;
    // path: string;
    icon: keyof typeof icons;
  }
   
  interface clientMenuItem {
    label: string;
    icon: keyof typeof icons;
    properties?: Object;
  }
   
  export const icons = {
    AccountCircleOutlined,
    AdminPanelSettings,
    CategoryOutlined,
    ConfirmationNumberOutlined,
    EscalatorWarningOutlined,
    FemaleOutlined,
    LoginOutlined,
    MaleOutlined,
    SearchOutlined,
    VpnKeyOutlined,
  };
   
  export const adminMenu: adminMenuItem[] = [
    {
      label: "Productos",
      icon: "CategoryOutlined",
    },
    {
      label: "Ordenes",
      icon: "ConfirmationNumberOutlined",
    },
    {
      label: "Usuarios",
      icon: "AdminPanelSettings",
    },
  ];
   
  export const clientMenu: clientMenuItem[] = [
    {
      label: "Perfil",
      icon: "AccountCircleOutlined",
    },
    {
      label: "Mis Ordenes",
      icon: "ConfirmationNumberOutlined",
    },
    {
      label: "Hombres",
      icon: "MaleOutlined",
      properties: {
        sx: { display: { xs: "", sm: "none" } },
      },
    },
    {
      label: "Mujeres",
      icon: "FemaleOutlined",
      properties: {
        sx: { display: { xs: "", sm: "none" } },
      },
    },
    {
      label: "Niños",
      icon: "EscalatorWarningOutlined",
      properties: {
        sx: { display: { xs: "", sm: "none" } },
      },
    },
    {
      label: "Ingresar",
      icon: "VpnKeyOutlined",
    },
    {
      label: "Salir",
      icon: "LoginOutlined",
    },
  ];