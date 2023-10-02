import logo from "./logo.svg";
import "./App.css";
import { NavLink, Link, Route, Routes, useLocation } from "react-router-dom";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import Jobs from "./components/jobpage/Jobs";
import { Apple } from "@mui/icons-material";
import Application from "./components/applicationpage/Application";
import Profile from "./components/profilepage/Profile";
import { AppBar, Button, Container, Toolbar } from "@mui/material";
import { useState } from "react";

function App() {
  const [selectedButton, setSelectedButton] = useState(false);

  const handleButton = () => {
    setSelectedButton((prevButton) => !prevButton);
  };
  const location = useLocation();

  const isButtonActive = (path) => {
    return location.pathname === path;
  };
  const selectedLinkStyles = {
    fontWeight: "bold", // Make text bold
    textDecoration: "underline", // Underline text
  };
  return (
    <Container className="website-container">
      <AppBar
        position="static"
        sx={{ background: "transparent", boxShadow: "none" }}
      >
        <Container>
          <Toolbar>
            <Button
              sx={{ textTransform:"none",fontSize:20, fontFamily:"Poppins", color: "#484640" }}
              component={NavLink}
              to="/"
              className={isButtonActive("/") ? "selected-link" : ""}
            >
              Jobs
            </Button>
            <Button
              sx={{ textTransform:"none", fontSize: 20, fontFamily: "Poppins", color: "#484640" }}
              component={NavLink}
              to="/application"
              className={isButtonActive("/application") ? "selected-link" : ""}
            >
              Applications
            </Button>
            <Button
              sx={{ textTransform:"none", ml:80, fontSize: 20, fontFamily: "Poppins", color: "#484640" }}
              component={NavLink}
              to="/profile"
              className={isButtonActive("/profile") ? "selected-link" : ""}
            >
              Profile
            </Button>
          </Toolbar>
        </Container>
      </AppBar>
      <Routes>
        <Route path="/" element={<Jobs />} />
        <Route path="/application" element={<Application />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </Container>
  );
}

export default App;
