import logo from "./logo.svg";
import "./App.css";
import {Link, Route, Routes} from 'react-router-dom';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import Jobs from "./components/jobpage/Jobs";
import { Apple } from "@mui/icons-material";
import Application from "./components/applicationpage/Application";
import Profile from "./components/profilepage/Profile";


function App() {
    return (
        <>
            <nav>
                <ul>
                    <li>
                        <Link to="/">Jobs</Link>
                    </li>
                    <li>
                        <Link to="/application">Application</Link>
                    </li>
                    <li>
                        <Link to="/profile">Profile</Link>
                    </li>
                </ul>
            </nav>
            <Routes>
                <Route path="/" element={<Jobs/>} />
                <Route path="/application" element={<Application/>} />
                <Route path="/profile" element={<Profile/>} />
            </Routes>
        </>
    );
}

export default App;
