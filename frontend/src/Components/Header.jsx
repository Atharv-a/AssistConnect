import React, { useState } from "react";
import { AppBar, Box, IconButton, Menu, MenuItem, MenuList, Toolbar, Typography } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { NavLink, useLocation } from "react-router-dom";

function Header() {
  return (
    <AppBar position="sticky">
      <Toolbar
        disableGutters
        sx={{
          display: "flex",
          justifyContent: "space-between",
          padding: "0 2rem",
        }}
      >
        <Typography 
          variant="h6" 
          sx={{ letterSpacing: ".05rem", fontWeight: "600", color:"#fff" }}>
          ASSIST CONNECT
        </Typography>
        <Box>
          <NavBar />
          <IconButton sx={{ display: { xs: "flex", md: "none" } }}>
            <DropDownMenu />
          </IconButton>
        </Box>
      </Toolbar>
    </AppBar>
  );
}

function NavBar() {

  const location = useLocation()

  return (
    <Box
      sx={{
        display: { xs: "none", md: "flex" },
        justifyContent: "space-between",
        width: "400px",
      }}
    >
      <NavLink to="/" className={`nav-link ${location.pathname === "/" ? "active-link" : ""}`} >
        Home
      </NavLink>
      <NavLink to="/helplines" className={`nav-link ${
          location.pathname === "/helplines" ? "active-link" : ""
        }`}>
        Helplines
      </NavLink>
      <NavLink to="/docs" className={`nav-link ${location.pathname === "/docs" ? "active-link" : ""}`}>
        Helpdocs
      </NavLink>
    </Box>
  );
}

function DropDownMenu() {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const location = useLocation()

  return (
    <>
      <MenuIcon onClick={handleClick}  sx={{color:"#fff",          "&:hover": {
            color: "#000",
          }}}/>
      <Menu
        id="appbar-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
      >
        <MenuList>
        <MenuItem onClick={handleClose}>
          <NavLink to="/" className={`menu-link ${location.pathname === "/" ? "active-link" : ""}`}>
            Home
          </NavLink>
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <NavLink to="/helplines" className={`menu-link ${
          location.pathname === "/helplines" ? "active-link" : ""
        }`}>
            Helplines
          </NavLink>
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <NavLink to="/docs" className={`menu-link ${location.pathname === "/docs" ? "active-link" : ""}`}>
            Helpdocs
          </NavLink>
        </MenuItem>
        </MenuList>
      </Menu>
    </>
  );
}

export default Header;
