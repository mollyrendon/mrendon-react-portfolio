import React from "react";
import "./style.css";
import MyPhoto from "../../img/mollyrendonphoto.jpg";


function MainPage() {
    return (
        <div>
            <img src={MyPhoto} className="main-photo" alt="My face"></img>
        </div>
    );
}

export default MainPage;