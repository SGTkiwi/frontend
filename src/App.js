import logo from "./logo.svg";
import "./App.css";
import { Link, Route, Routes } from "react-router-dom";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import Jobs from "./components/jobpage/Jobs";
import { Apple } from "@mui/icons-material";
import Application from "./components/applicationpage/Application";
import Profile from "./components/profilepage/Profile";
import { AppBar, Button, Container, Toolbar } from "@mui/material";

function App() {
  return (
    <Container className="website-container">
      <AppBar position="static">
        <Container>
          <Toolbar>
            <Button color="inherit" component={Link} to="/">
              Jobs
            </Button>
            <Button color="inherit" component={Link} to="/application">
              Applications
            </Button>
            <Button color="inherit" component={Link} to="/profile">
              Applications
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
