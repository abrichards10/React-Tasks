import React, {useEffect, useState} from "react";
import { Link } from "react-router-dom";
import logo from "./assets/logo.png";
import {closeNav, openNav} from "./utils";

const Home = () => {
    const [theme, setTheme] = useState(
        localStorage.getItem('theme') || 'light'
    );
    const [isSidebarOpen] = useState(false);

    const toggleTheme = () => {
        if (theme === 'light') {
            setTheme('dark');
        } else {
            setTheme('light');
        }
    };

    useEffect(() => {
        localStorage.setItem('theme', theme);
        document.body.className = theme;
    }, [theme]);

    return (
        <div>
            <div className={`App ${isSidebarOpen ? 'open' : ''} ${theme}`}>
                <div id="mySidebar" className="sidebar">
                    <div className="close-button" onClick={closeNav}>&times;</div>
                    <div className="My-Stuff">
                        <Link to="/">My-Stuff</Link>
                    </div>
                    <div className="Account-columns">
                        <div className="Account-name">
                            <Link to="/sign_in">[Name]</Link>
                        </div>
                        <div className="Account-pic">
                            <Link to="/sign_in"><img src={logo} alt="logo" width={40} height={40}/></Link>
                        </div>
                    </div>
                    <Link to="/projects">Projects</Link>
                    <Link to="/settings">Settings</Link>
                </div>
            </div>

        <div id="main">
            <button className="open-button" onClick={openNav}>&#9776;</button>
            <button onClick={toggleTheme}>Toggle Theme</button>
            <h2>Tasks</h2>
            <p>Content...</p>
        </div>
        </div>
    );
};

export default Home;
