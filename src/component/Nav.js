import React from "react";
import { Link } from "react-router-dom";
import "../App.css";
import Box from "@mui/material/Box";
import Avatar from "@mui/material/Avatar";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Tooltip from "@mui/material/Tooltip";
import PersonAdd from "@mui/icons-material/PersonAdd";
import Settings from "@mui/icons-material/Settings";
import PhoneIcon from "@mui/icons-material/Phone";
import Logout from "@mui/icons-material/Logout";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import {
  PersonFill,
  TelephoneFill,
  BoxArrowRight,
} from "react-bootstrap-icons";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import LockOpenIcon from "@mui/icons-material/LockOpen";
import { Dropdown } from "react-bootstrap";
import MenuIcon from "@mui/icons-material/Menu";
import ShoppingBagIcon from "@mui/icons-material/ShoppingBag";

const navStyle = {
  backgroundColor: "black", // Set your desired background color
  color: "white", // Set your desired text color
  padding: "0.5rem", // Set your desired padding
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  position: "fixed", // Set position to fixed
  top: 0, // Set top to 0 to position it at the top of the page
  left: 0, // Set left to 0 to position it at the left of the page
  right: 0, // Set right to 0 to position it at the right of the page
  zIndex: 9999,
};

const navLinksStyle = {
  display: "flex",
  listStyleType: "none",
  margin: 0,
  padding: 0,
  justifyContent: "space-between",
  
};

const linkStyle = {
  color: "white", // Set your desired link color
  textDecoration: "none",
  margin: "0 1rem", // Set your desired link margin
  transition: "color 0.3s ease-in-out", // Add transition for smooth hover effect
  cursor: "pointer", // Add cursor pointer for hover effect
  ":hover": {
    // Define hover styles
    color: "red", // Set your desired link color on hover
    backgroundColor: "red",
  },
};
const cart = {
  position: "absolute", /* Set the position to absolute */
  top: "50%", /* Set the top position to the middle of the nav bar */
  transform: "translateY(-50%)", /* Center the icon vertically */
  right: "4rem", /* Set the right position to 1rem or your desired amount */
  left:"auto",
  fontSize: "30px",
  cursor: "pointer",
  color:"white", 

  
};
const wishlist = {
  position: "absolute", /* Set the position to absolute */
  top: "50%", /* Set the top position to the middle of the nav bar */
  transform: "translateY(-50%)", /* Center the icon vertically */
  right: "7rem", /* Set the right position to 1rem or your desired amount */
  left:"auto",
  fontSize: "30px",
  cursor: "pointer",
  color:"white"  
};


function Nav() {
  const userLoginStatus = localStorage.getItem("status");
  const userRole = localStorage.getItem("role");
  const userName = localStorage.getItem("username");
  const userMobileNumber = localStorage.getItem("mobileNumber");
  const avatar = userName ? userName.charAt(0).toUpperCase() : "";
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleLogout = () => {
    window.location.href = "/logout";
  };
  const handleHead = () => {
    window.location.href = "/products";
  };
  const handleHeadAdmin=()=>{
    window.location.href = "/viewproducts";
  }
  const handleResetpassword = () => {
    window.location.href = "/resetpassword";
  };
  const handleOrder = () => {
    window.location.href = "/allorders";
  };
  const handleCustomerOrder = () => {
    window.location.href = "/viewordersbyusername";
  };
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div style={navStyle}>
      {!userLoginStatus && (
        <ul style={navLinksStyle}>
          <h6>E-GROCERY</h6>
          <li style={{ marginLeft: "900px" }}>
            <Link style={linkStyle} to="/">
              Home
            </Link>
          </li>
          <li>
            <Link style={linkStyle} to="/login">
              Login
            </Link>
          </li>
          <li>
            <Link style={linkStyle} to="/register">
              Register
            </Link>
          </li>
        </ul>
      )}
      {userRole === "CUSTOMER" ? (
        <ul style={navLinksStyle}>
          <Link
            style={{ marginTop: "5px", textDecoration: "none", color: "white" }}
            onClick={handleHead}
          ><strong>
            E-GROCERY</strong>
          </Link>
          <a href="/cart">
          <i class="fa fa-shopping-cart" style={cart} aria-hidden="true" ></i></a>
          <a href="/wishlist">
  <i className="fa fa-heart" aria-hidden="true" style={wishlist}></i>
</a>
          <li style={{ marginLeft: "1100px" }}>
            <React.Fragment>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  textAlign: "center",
                }}
              >
                
                <Tooltip title="Account profile">
                  <IconButton
                    onClick={handleClick}
                    size="small"
                    sx={{ ml: 2 }}
                    aria-controls={open ? "account-menu" : undefined}
                    aria-haspopup="true"
                    aria-expanded={open ? "true" : undefined}
                  >
                    <Avatar sx={{ width: 32, height: 32 , backgroundColor:"white", border: "2px solid white", color: "black"}}>{avatar}</Avatar>
                  </IconButton>
                </Tooltip>
              </Box>
              <Menu
                anchorEl={anchorEl}
                id="account-menu"
                open={open}
                onClose={handleClose}
                onClick={handleClose}
                PaperProps={{
                  elevation: 0,
                  sx: {
                    overflow: "visible",
                    filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
                    mt: 1.5,
                    "& .MuiAvatar-root": {
                      width: 32,
                      height: 32,
                      ml: -0.5,
                      mr: 1,
                    },
                    "&:before": {
                      content: '""',
                      display: "block",
                      position: "absolute",
                      top: 0,
                      right: 14,
                      width: 10,
                      height: 10,
                      bgcolor: "background.paper",
                      transform: "translateY(-50%) rotate(45deg)",
                      zIndex: 0,
                    },
                  },
                }}
                transformOrigin={{ horizontal: "right", vertical: "top" }}
                anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
              >
                <MenuItem onClick={handleClose}>
                  <ListItemIcon>
                    <Avatar />
                  </ListItemIcon>
                  {userName}
                </MenuItem>
                <MenuItem onClick={handleClose}>
                  <ListItemIcon>
                    <PhoneIcon style={{ opacity: 1.0 }} />
                  </ListItemIcon>
                  {userMobileNumber}
                </MenuItem>
                {/* <MenuItem onClick={handleWishlist}>
                  <ListItemIcon>
                    <FavoriteBorderIcon style={{ opacity: 1.0 }} />
                  </ListItemIcon>
                  My Wishlist
                </MenuItem>
                <MenuItem onClick={handleCart}>
                  <ListItemIcon>
                    <AddShoppingCartIcon style={{ opacity: 1.0 }} />
                  </ListItemIcon>
                  My Cart
                </MenuItem> */}
                <MenuItem onClick={handleCustomerOrder}>
                  <ListItemIcon>
                    <ShoppingBagIcon style={{ opacity: 1.0 }} />
                  </ListItemIcon>
                  My Orders
                </MenuItem>
                <Divider />

                <MenuItem onClick={handleResetpassword}>
                  <ListItemIcon>
                    <LockOpenIcon fontSize="small" style={{ opacity: 1.0 }} />
                  </ListItemIcon>
                  Settings
                </MenuItem>
                <MenuItem onClick={handleLogout}>
                  <ListItemIcon>
                    <Logout fontSize="small" />
                  </ListItemIcon>
                  Logout
                </MenuItem>
              </Menu>
            </React.Fragment>
          </li>
        </ul>
      ) : null}
      {userRole === "ADMIN" ? (
        <div>
          <ul style={navLinksStyle}>
          <Link
            style={{ marginTop: "5px", textDecoration: "none", color: "white" }}
            onClick={handleHeadAdmin}
          >
            E-GROCERY
          </Link>
            <li style={{ marginLeft: "1100px" }}>
              <React.Fragment>
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    textAlign: "center",
                  }}
                >
                  <Tooltip title="Account profile">
                    <IconButton
                      onClick={handleClick}
                      size="small"
                      sx={{ ml: 2 }}
                      aria-controls={open ? "account-menu" : undefined}
                      aria-haspopup="true"
                      aria-expanded={open ? "true" : undefined}
                    >
                      <Avatar sx={{ width: 32, height: 32 , backgroundColor:"white", border: "2px solid white", color: "black"}}>{avatar}</Avatar>
                    </IconButton>
                  </Tooltip>
                </Box>
                <Menu
                  anchorEl={anchorEl}
                  id="account-menu"
                  open={open}
                  onClose={handleClose}
                  onClick={handleClose}
                  PaperProps={{
                    elevation: 0,
                    sx: {
                      overflow: "visible",
                      filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
                      mt: 1.5,
                      "& .MuiAvatar-root": {
                        width: 32,
                        height: 32,
                        ml: -0.5,
                        mr: 1,
                      },
                      "&:before": {
                        content: '""',
                        display: "block",
                        position: "absolute",
                        top: 0,
                        right: 14,
                        width: 10,
                        height: 10,
                        bgcolor: "background.paper",
                        transform: "translateY(-50%) rotate(45deg)",
                        zIndex: 0,
                      },
                    },
                  }}
                  transformOrigin={{ horizontal: "right", vertical: "top" }}
                  anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
                >
                  <MenuItem onClick={handleClose}>
                    <ListItemIcon >
                      <Avatar />
                    </ListItemIcon>
                    {userName}
                  </MenuItem>
                  <MenuItem onClick={handleClose}>
                    <ListItemIcon>
                      <PhoneIcon style={{ opacity: 1.0 }} />
                    </ListItemIcon>
                    {userMobileNumber}
                  </MenuItem>
                  <MenuItem onClick={handleOrder}>
                    <ListItemIcon>
                      <ShoppingBagIcon style={{ opacity: 1.0 }} />
                    </ListItemIcon>
                    Orders
                  </MenuItem>
                  <Divider />

                  <MenuItem onClick={handleResetpassword}>
                    <ListItemIcon>
                      <LockOpenIcon fontSize="small" style={{ opacity: 1.0 }} />
                    </ListItemIcon>
                    Settings
                  </MenuItem>
                  <MenuItem onClick={handleLogout}>
                    <ListItemIcon>
                      <Logout fontSize="small" />
                    </ListItemIcon>
                    Logout
                  </MenuItem>
                </Menu>
              </React.Fragment>
            </li>
          </ul>
        </div>
      ) : null}
    </div>
  );
}

export default Nav;
