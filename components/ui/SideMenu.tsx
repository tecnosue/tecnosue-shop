import {
    Box,
    Divider,
    Drawer,
    IconButton,
    Input,
    InputAdornment,
    List,
    ListItem,
    ListItemIcon,
    ListItemText,
    ListSubheader,
  } from "@mui/material";
  import { SearchOutlined } from "@mui/icons-material";
  import { adminMenu, icons, clientMenu } from "./constants";
   
  export const SideMenu = () => {
    return (
      <Drawer
        open={true}
        anchor="right"
        sx={{ backdropFilter: "blur(4px)", transition: "all 0.5s ease-out" }}
      >
        <Box sx={{ width: 250, paddingTop: 5 }}>
          <List>
            <ListItem>
              <Input
                type="text"
                placeholder="Buscar..."
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton aria-label="toggle password visibility">
                      <SearchOutlined />
                    </IconButton>
                  </InputAdornment>
                }
              />
            </ListItem>
   
            {clientMenu.map(({ label, icon, properties }) => {
              const Icon = icons[icon];
              return (
                <ListItem button key={label} {...properties}>
                  <ListItemIcon>
                    <Icon />
                  </ListItemIcon>
                  <ListItemText primary={label} />
                </ListItem>
              );
            })}
   
            {/* Admin */}
            <Divider />
            <ListSubheader>Admin Panel</ListSubheader>
            {adminMenu.map(({ label, icon }) => {
              const Icon = icons[icon];
              return (
                <ListItem button key={label}>
                  <ListItemIcon>
                    <Icon />
                  </ListItemIcon>
                  <ListItemText primary={label} />
                </ListItem>
              );
            })}
          </List>
        </Box>
      </Drawer>
    );
  }; 