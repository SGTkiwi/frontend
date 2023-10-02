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
import Logo from "./resources/images/LogoNavBar";
import CV from "./components/cvpage/cv";
import Footer from "./components/Footer";
import Navigationbar from "./components/Navigationbar";

function App() {


  return (
    <Container
      maxWidth={false}
      className="website-container"
      sx={{ maxWidth: 1440 }}
    >
      <Navigationbar />

      <Routes>
        <Route path="/" element={<Jobs />} />
        <Route path="/application" element={<Application />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/cv" element={<CV />} />
      </Routes>
      <Footer />
    </Container>
  );
}

export default App;
