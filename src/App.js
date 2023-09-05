import './App.css';
import React from "react";
// import './index';

import Home from "./components/home";
import Login from "./components/login";
import Projects from "./components/projects";
import Settings from "./components/settings";
import {
    Routes,
    Route,
} from "react-router-dom";
function App() {
    return (
        <>
            <Routes >
                <Route path="/" element={<Home />}></Route>
                <Route path="/home" element={<Home />}></Route>
                <Route path="/login" element={<Home />}></Route>
                <Route path="/projects" element={<Projects />}></Route>
                <Route path="/settings" element={<Settings />}></Route>
            </Routes>
        </>
    );
}

export default App;
