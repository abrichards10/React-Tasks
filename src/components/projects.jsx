import React, {useState} from "react";
import { Link } from "react-router-dom";
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import interactionPlugin from "@fullcalendar/interaction"
import { v4 as uuid } from "uuid";

// import Toggle from "react-toggle";
// import { useMediaQuery } from "react-responsive";
// import { useEffect, useMemo } from "react";
// import createPersistedState from "use-persisted-state";
// const useColorSchemeState = createPersistedState("colorScheme");

const Projects = () => {
    const [isSidebarOpen] = useState(false);
    // const { isDark, setIsDark } = useColorScheme();
    //
    // function useColorScheme() {
    //     const systemPrefersDark = useMediaQuery(
    //         {
    //             query: "(prefers-color-scheme: dark)",
    //         },
    //         undefined
    //     );
    //
    //     const [isDark, setIsDark] = useColorSchemeState();
    //     const value = useMemo(
    //         () => (isDark === undefined ? !!systemPrefersDark : isDark),
    //         [isDark, systemPrefersDark]
    //     );
    //
    //     useEffect(() => {
    //         if (value) {
    //             document.body.classList.add("dark");
    //         } else {
    //             document.body.classList.remove("dark");
    //         }
    //     }, [value]);
    //
    //     return {
    //         isDark: value,
    //         setIsDark,
    //     };
    // }


    // const submitButton = document.getElementById('submitButton');
    // const infoList = document.getElementById('infoList');
    // const userInfoForm = document.getElementById('userInfoForm');
    // const calendarEl = document.getElementById('calendar');
    // const customPrompt = document.getElementById('customPrompt');
    // const cancelButton = document.getElementById('cancelButton');
    //
    // const nameInput = document.getElementById('name');
    // const eventNameInput = document.getElementById('eventNameInput');
    // const customEditPrompt = document.getElementById('customEditPrompt');
    //
    // const editEventNameInput = document.getElementById('editEventNameInput');
    // const editCancelButton = document.getElementById('editCancelButton');
    // const editConfirmButton = document.getElementById('editConfirmButton');
    // const confirmButton = document.getElementById('confirmButton');
    // let name = "";
    //
    // let lastClickedDate = null;
    // let dateList = [];
    // let currentID = null;
    // let localID = null;

    // const calendar = new FullCalendar.Calendar(calendarEl, {
    //     initialView: 'dayGridMonth',
    //     eventMouseEnter: handleEventMouseEnter,
    //     eventMouseLeave: handleEventMouseLeave,
    //     headerToolbar: {
    //         left: 'prev, next today',
    //         center: 'title',
    //         right: 'dayGridMonth,timeGridWeek,timeGridDay',
    //     },
    //     dateClick: dateClickFunction,
    //     eventClick: eventClickFunction,
    // });

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


    // function eventClickFunction(info) {
    //     currentID = info.id;
    //     customEditPrompt.style.display = 'block';
    //     lastClickedDate = info.date; // Store the last clicked date
    // }
    //
    // function dateClickFunction(info) {
    //     eventNameInput.value = '';
    //     customPrompt.style.display = 'block';
    //     lastClickedDate = info.date; // Store the last clicked date
    // }

    // function handleFormSubmit() {
    //     const currentDate = new Date();
    //     let formattedDate = currentDate.toISOString();
    //
    //     if (lastClickedDate == null) {
    //         formattedDate = currentDate.toISOString();
    //     } else {
    //         formattedDate = lastClickedDate.toISOString();
    //     }
    //
    //     dateList.push(currentID);
    //     console.log(dateList);
    //
    //     const entry = document.createElement('li');
    //     entry.innerHTML = `
    //             <button class="deleteButton">x</button>
    //             <span contenteditable="true">${name}</span>
    //             <span class="taskDate" data-id="${formattedDate}"></span><br>
    //         `;
    //
    //     const event = {
    //         title: name,
    //         start: formattedDate,
    //         id: formattedDate,
    //     };
    //
    //     const existingEvent = calendar.getEventById(formattedDate);
    //     if (existingEvent) {
    //         existingEvent.setProp('title', name);
    //         entry.querySelector('.taskDate').textContent = formattedDate.toLocaleDateString();
    //     } else {
    //         calendar.addEvent(event);
    //     }
    //
    //     infoList.appendChild(entry);
    //     userInfoForm.reset();
    //
    //     const deleteButton = entry.querySelector('.deleteButton');
    //     deleteButton.addEventListener('click', () => {
    //         const eventToRemove = calendar.getEventById(formattedDate);
    //         if (eventToRemove) {
    //             eventToRemove.remove();
    //         }
    //
    //         infoList.removeChild(entry);
    //     });
    //
    //     customPrompt.style.display = 'none';
    // }

    /** PRESSING EDIT ENTER FUNCTIONS **/
    // editEventNameInput.addEventListener('keydown', (event) => {
    //     if (event.key === 'Enter') {
    //
    //         name = editEventNameInput.value;
    //
    //         for (let i = 0; i < dateList.length; i++) {
    //             if (currentID === dateList[i]) {
    //                 localID = currentID;
    //                 break;
    //             }
    //         }
    //
    //         const existingEvent = calendar.getEventById(localID);
    //         existingEvent.setProp('title', name);
    //
    //         document.getElementById('infoList').innerHTML = `
    //                 <button class="deleteButton">x</button>
    //                 <span contenteditable="true">${name}</span>
    //                 <span class="taskDate" data-id="${localID}"></span><br>
    //             `;
    //
    //         customEditPrompt.style.display = 'none';
    //     }
    // });

    // editCancelButton.addEventListener('click', () => {
    //     customEditPrompt.style.display = 'none';
    // });

    // editConfirmButton.addEventListener('click', () => {
    //     name = editEventNameInput.value;
    //
    //     for (let i = 0; i < dateList.length; i++) {
    //         if (currentID === dateList[i]) {
    //             localID = currentID;
    //             const existingEvent = calendar.getEventById(localID);
    //             existingEvent.setProp('title', name);
    //
    //             document.getElementById('infoList').innerHTML = `
    //                     <button class="deleteButton">x</button>
    //                     <span contenteditable="true">${name}</span>
    //                     <span class="taskDate" data-id="${currentID}"></span><br>
    //                 `;
    //         }
    //         customEditPrompt.style.display = 'none';
    //     }
    // });


    /** PRESSING ENTER FUNCTIONS **/
    // nameInput.addEventListener('keydown', (event) => {
    //     name = nameInput.value;
    //     if (event.key === 'Enter') {
    //         event.preventDefault();
    //         handleFormSubmit();
    //     }
    // });
    //
    // eventNameInput.addEventListener('keydown', (event) => {
    //     name = eventNameInput.value;
    //     if (event.key === 'Enter') {
    //         event.preventDefault();
    //         handleFormSubmit();
    //     }
    // });


    /** BUTTON FUNCTIONS **/
    // confirmButton.addEventListener('click', () => {
    //     name = eventNameInput.value
    //     handleFormSubmit();
    // });
    //
    // cancelButton.addEventListener('click', () => {
    //     customPrompt.style.display = 'none';
    // });
    //
    // submitButton.addEventListener('click', () => {
    //     name = nameInput.value
    //     handleFormSubmit();
    // });


    // when user hits enter or button when creating an event
    // it creates an id for that event and adds it to a list

    // when the user later clicks an event to edit it
    // get the value of the event clicked
    // after they hit enter or button --> go through list
    // if currentID = list id then that's the new id
    //


    /** HOVER FUNCTIONS **/
    // function handleEventMouseEnter(info) {
    //     const eventId = info.event.id;
    //     const correspondingTask = document.querySelector(`.taskDate[data-id="${eventId}"]`);
    //     if (correspondingTask) {
    //         correspondingTask.parentNode.classList.add('highlighted');
    //     }
    // }
    // function handleEventMouseLeave(info) {
    //     const eventId = info.event.id;
    //     const correspondingTask = document.querySelector(`.taskDate[data-id="${eventId}"]`);
    //     if (correspondingTask) {
    //         correspondingTask.parentNode.classList.remove('highlighted');
    //     }
    // }

    /*** DARK MODE ***/

    /** CREATE CALENDAR **/
    // document.addEventListener('DOMContentLoaded', function() {
    //     calendar.render();
    // });

    const [events, setEvents] = useState([]);

    const handleSelect = (info) => {
        const { start, end } = info;
        const eventNamePrompt = prompt("Enter, event name");
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
            <h2>Projects</h2>
            <p>Content...</p>
        </div>
        <div id="main">
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
                        <input type="text" id="name" name="name"/>
                            <button type="button" id="submitButton">Submit</button>
                    </form>

                    {/*<div id="displayInfo">*/}
                    {/*    <h2>Tasks:</h2>*/}
                    {/*    <ul id="infoList"></ul>*/}
                    {/*</div>*/}
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
