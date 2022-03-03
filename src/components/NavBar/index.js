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