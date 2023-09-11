import './App.css';
import React from "react";
// import './index';

import Home from "./components/home";
import SignIn from "./components/sign_in";
import Projects from "./components/projects";
import Settings from "./components/settings";
import LoginDemo from "./components/login_demo";
import SignUp from "./components/sign_up";
import ForgotPassword from "./components/forgot_password";
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
                <Route path="/sign_in" element={<SignIn />}></Route>
                <Route path="/projects" element={<Projects />}></Route>
                <Route path="/settings" element={<Settings />}></Route>
                <Route path="/login_demo" element={<LoginDemo />}></Route>
                <Route path="/sign_up" element={<SignUp />}></Route>
                <Route path="/forgot_password" element={<ForgotPassword />}></Route>

            </Routes>
        </>
    );
}

export default App;
