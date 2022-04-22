import React from 'react';
import MyButton from "./components/MyButton";
import "./components/MyApp.css"
import ProfileCard from "./components/ProfileCard";

const MyApp = () => {
    return (
        < div className = "myapp-container">
            <ProfileCard username = "ujay" hobby = "sleeping"/>
            <ProfileCard username = "abiodun" hobby = "drumming"/>
            {/*<ProfileCard username = "Hope" hobby = "drumming"/>*/}
        </div>
    );
};

export default MyApp;