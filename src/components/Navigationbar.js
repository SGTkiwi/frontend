import { AppBar, Button, Container, Toolbar } from "@mui/material";
import { NavLink, Link, Route, Routes, useLocation } from "react-router-dom";
import Logo from "../resources/images/LogoNavBar";



const Navigationbar = () => {
  const location = useLocation();

  const isButtonActive = (path) => {
    return location.pathname === path;
  };
  return (
    <AppBar
    position="static"
    sx={{ background: "transparent", boxShadow: "none", paddingTop: 4, margin: "0 auto",}}
  >
    <Container maxWidth={false}>
      <Toolbar>
        <Logo />
        <Button
          sx={{ ml:8,textTransform:"none",fontSize:20, fontFamily:"Poppins", color: "#484640" }}
          component={NavLink}
          to="/"
          className={isButtonActive("/") ? "selected-link" : ""}
        >
          Jobs
        </Button>
        <Button
          sx={{ ml:3,textTransform:"none", fontSize: 20, fontFamily: "Poppins", color: "#484640" }}
          component={NavLink}
          to="/application"
          className={isButtonActive("/application") ? "selected-link" : ""}
        >
          Applications
        </Button>
        <Button
          sx={{ ml:3,textTransform:"none", fontSize: 20, fontFamily: "Poppins", color: "#484640" }}
          component={NavLink}
          to="/cv"
          className={isButtonActive("/cv") ? "selected-link" : ""}
        
        >
          CVs
        </Button>
        <Button
          sx={{ textTransform:"none", marginLeft:"auto", fontSize: 20, fontFamily: "Poppins", color: "#484640" }}
          component={NavLink}
          to="/profile"
          className={isButtonActive("/profile") ? "selected-link" : ""}
        >
          Profile
        </Button>
      </Toolbar>
    </Container>
  </AppBar>
  );
}

export default Navigationbar;