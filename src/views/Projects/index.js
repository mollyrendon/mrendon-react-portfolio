import React from "react";
import "./style.css";

function Projects() {
    return (
        <section id="projects" class="projects-section">
            <div class="project-sections--header">
                <h2 class="section-title">Projects</h2>
            </div>
            <div class="projects-container">
                <a href="https://mollyrendon.github.io/dnd-generator/" class="project-link big">
                    <div class="project project-1">
                        <div class="box">
                            <div>
                                <h3>DND Generator</h3>
                                <p>
                                    An application to enhance the experience of DND players by allowing them to create and name a new character with randomized traits to use during gameplay.
                                </p>
                                <p>Applications Used:  HTML5, Bootstrap, JavaScript, NodeJS, and Handlebars</p>
                            </div>
                        </div>
                    </div>
                </a>
            </div>

            <div class="projects-container">
                <a href="https://glacial-shore-58084.herokuapp.com/" class="project-link small">
                    <div class="project project-2">
                        <div class="box">
                            <div>
                                <h3>CRM Lite</h3>
                                <p>
                                    An application that helps businesses track their current and potential customers in an easy and organized manner. It also allows them to plan out their busy work day to maximize their efficiency.
                                </p>
                                <p>Applications Used:  HTML5, Bootstrap, JavaScript, NodeJS, and Handlebars</p>
                            </div>
                        </div>
                    </div>
                </a>
            </div>

            <div class="projects-container">
                <a href="https://github.com/CTripleF/eat-n-greet" class="project-link small">
                    <div class="project project-2">
                        <div class="box">
                            <div>
                                <h3>Eat N Greet</h3>
                                <p>
                                    An application designed to help users find others in their area based on their food interests.
                                </p>
                                <p>Applications Used:  React, Bootstrap, MongoDB, NodeJS, and Express.js</p>
                            </div>
                        </div>
                    </div>
                </a>
            </div>
        </section>
    );
}


export default Projects;