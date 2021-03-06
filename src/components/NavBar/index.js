import React from "react";
import "./style.css";

function NavBar() {
    return (
        <header>
            <h2>Molly Rendon</h2>
            <nav>
                <ul className="flex-row">
                    <li>
                        <a href="#about">
                            About Me
                        </a>
                    </li>
                    <li>
                        <a href="#projects">
                            Projects
                        </a>
                    </li>
                    <li>
                        <a href="https://docs.google.com/document/d/1pQxaddgBOhvvxxMEOjtdm7lLBO16eaRig9MCLJnXGME/edit?usp=sharing">Resume</a>
                    </li>
                    <li>
                        <a href="#contact">
                            Contact Me
                        </a>
                    </li>

                </ul>
            </nav>
        </header>
    );
}


export default NavBar;