import React, {useState} from "react";
import { Link } from "react-router-dom";
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import interactionPlugin from "@fullcalendar/interaction"
import { v4 as uuid } from "uuid";
import logo from './assets/logo.png'; // with import
import {closeNav, openNav} from "./utils";

const Projects = () => {
    const [isSidebarOpen] = useState(false);
    const [events, setEvents] = useState([]);
    const [task, setTask] = useState(""); // State to store the task input
    const [taskList, setTaskList] = useState([]);

    /** HOVER FUNCTIONS **/
    function handleEventMouseEnter(info) {

    }
    function handleEventMouseLeave(info) {

    }

    const handleSelect = (info) => {
        const { start, end } = info;
        const eventNamePrompt = prompt("Enter event name");
        if (eventNamePrompt) {
            setEvents([
                ...events,
                {
                    start,
                    end,
                    title: eventNamePrompt,
                    id: uuid(),
                },
            ]);
            setTaskList([...taskList, eventNamePrompt]);
        }
    };

    const EventItem = ({ info }) => {
        const { event } = info;
        return (
            <div>
                <p>{event.title}</p>
            </div>
        );
    };

    const handleTaskInputChange = (event) => {
        setTask(event.target.value);
    };

    const handleTaskSubmit = () => {
        if (task) {
            // Add the task to the task list
            setTaskList([...taskList, task]);

            // Clear the task input
            setTask("");
        }
    };


    return (
        <div>
            <div className={`App ${isSidebarOpen ? 'open' : ''}`}>
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

            {/*<Toggle*/}
            {/*    checked={isDark}*/}
            {/*    onChange={({ target }) => setIsDark(target.checked)}*/}
            {/*    icons={{ checked: "🌙", unchecked: "🔆" }}*/}
            {/*    aria-label="Dark mode toggle"*/}
            {/*/>*/}
            <div className="columns">
                <div className="first-column">
                    <h2>Projects</h2>

                    <form id="userInfoForm">
                        <label htmlFor="name">Enter Task:</label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            value={task}
                            onChange={handleTaskInputChange}
                        />
                        <button type="button" onClick={handleTaskSubmit}>
                            Submit
                        </button>
                    </form>

                    <div id="displayInfo">
                        <h2>Tasks:</h2>
                        <ul id="infoList">
                            {taskList.map((task, index) => (
                                <li key={index}>{task}</li>
                            ))}
                        </ul>
                    </div>
                </div>

                <div className="second-column">
                    <FullCalendar
                        editable
                        selectable
                        headerToolbar={{
                            start: "today prev next",
                            end: "dayGridMonth dayGridWeek dayGridDay",
                        }}
                        eventContent={(info) => <EventItem info={info} />}
                        eventMouseEnter={handleEventMouseEnter}
                        eventMouseLeave={handleEventMouseLeave}
                        events={events}
                        select={handleSelect}
                        plugins={[dayGridPlugin, interactionPlugin]}
                        views={["dayGridMonth", "dayGridWeek", "dayGridDay"]}
                        initialView='dayGridMonth'
                        eventClick={
                            function(arg){
                                alert(arg.event.title)
                                alert(arg.event.start)
                            }
                        }
                        weekends={true}
                    />
                </div>
            </div>
        </div>

            {/*{isPromptOpen && (*/}
            {/*    <div className="custom-prompt" style={{ backgroundColor: 'red', padding: '10px' }}>*/}
            {/*        <input*/}
            {/*            type="text"*/}
            {/*            placeholder="Enter event name..."*/}
            {/*            value={promptValue}*/}
            {/*            onChange={(e) => setPromptValue(e.target.value)}*/}
            {/*        />*/}
            {/*        <button onClick={handleConfirm}>OK</button>*/}
            {/*        <button onClick={handleClose}>Cancel</button>*/}
            {/*    </div>*/}
            {/*)}*/}
        </div>
    );
};

export default Projects;
