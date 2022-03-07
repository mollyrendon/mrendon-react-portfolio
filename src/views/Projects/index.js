import React from "react";
import "./style.css";

function Projects() {
    return (
        <div className="projects">
            <h1>Projects</h1>
            <h2>DND Generator</h2>
            <p>An application to enhance the experience of DND players by allowing them to create and name a new character with randomized traits to use during gameplay. </p>
            <p>Applications Used:
                <ul>
                    <li>HTML5</li>
                    <li>CSS3</li>
                    <li>JavaScript</li>
                </ul>
            </p>

            <h2>CRM Lite</h2>
            <p>An application that helps businesses track their current and potential customers in an easy and organized manner. It also allows them to plan out their busy work day to maximize their efficiency. </p>
            <p>Applications Used:
                <ul>
                    <li>HTML5</li>
                    <li>Bootstrap</li>
                    <li>JavaScript</li>
                    <li>NodeJS</li>
                    <li>Handlebars</li>
                </ul>
            </p>

            <h2>Eat and Greet</h2>
            <p>An application designed to help users find others in their area based on their food interests. </p>
            <p>Applications Used:
                <ul>
                    <li>React</li>
                    <li>NodeJS</li>
                    <li>ExpressJS</li>
                    <li>MongoDB</li>
                </ul>
            </p>
        </div>
    );
}


export default Projects;