import React, {useState} from "react";
import { Link } from "react-router-dom";
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import interactionPlugin from "@fullcalendar/interaction"
import { v4 as uuid } from "uuid";

const Projects = () => {
    const [isSidebarOpen] = useState(false);
    const [events, setEvents] = useState([]);
    const [task, setTask] = useState(""); // State to store the task input
    const [taskList, setTaskList] = useState([]);

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
            <button className="open-button" onClick={openNav}>&#9776;</button>

            {/*<Toggle*/}
            {/*    checked={isDark}*/}
            {/*    onChange={({ target }) => setIsDark(target.checked)}*/}
            {/*    icons={{ checked: "🌙", unchecked: "🔆" }}*/}
            {/*    aria-label="Dark mode toggle"*/}
            {/*/>*/}
            <div class="columns">
                <div class="first-column">
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

                <div class="second-column">
                    {/*<div id="calendar"></div>*/}
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

        {/*<div id="customPrompt" class="custom-prompt">*/}
        {/*    <input type="text" id="eventNameInput" placeholder="Enter event name..."></input>*/}
        {/*        <button id="confirmButton">OK</button>*/}
        {/*        <button id="cancelButton">Cancel</button>*/}
        {/*</div>*/}

        {/*<div id="customEditPrompt" class="custom-edit-prompt">*/}
        {/*    <input type="text" id="editEventNameInput" placeholder="Enter event name..."></input>*/}
        {/*        <button id="editConfirmButton">OK</button>*/}
        {/*        <button id="editCancelButton">Cancel</button>*/}
        {/*</div>*/}
        </div>
    );
};

export default Projects;
