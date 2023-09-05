import React, {useState} from "react";
import { Link } from "react-router-dom";

const Login = () => {
    const [isSidebarOpen] = useState(false);

    // Function to open the sidebar
    const openNav = () => {
        document.getElementById("mySidebar").style.width = "250px";
        document.getElementById("main").style.marginLeft = "250px";
    };

    // Function to close the sidebar
    const closeNav = () => {
        document.getElementById("mySidebar").style.width = "10px";
        document.getElementById("main").style.marginLeft = "10px";
    };

    return (
        <body>
        <div className={`App ${isSidebarOpen ? 'open' : ''}`}>
            <div id="mySidebar" className="sidebar">
                <div className="closebtn" onClick={closeNav}>&times;</div>
                <div className="My-Stuff">
                    <Link to="/">My-Stuff</Link>
                </div>
                <div className="Account-items">
                    <div className="Account-name">
                        <Link to="/login">[Name]</Link>
                    </div>
                    <div className="Account-pic">
                        {/*<img src="assets/logo.png" width="50" height="50"></img>*/}
                    </div>
                </div>
                <Link to="/projects">Projects</Link>
                <Link to="/settings">Settings</Link>
            </div>
        </div>
        <div id="main">
            <button className="openbtn" onClick={openNav}>&#9776;</button>
            <h2>LOGIN</h2>
            <p>Content...</p>
        </div>
        </body>
    );
};

export default Login;
