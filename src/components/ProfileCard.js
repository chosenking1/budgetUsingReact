import React, {useState} from 'react';
import image from "../assets/logo.svg"
import "./ProfileCard.css"

const ProfileCard = (props) => {
let {username, hobby} = props
    const handleclick = () => {
        let newObject = {username: `Mr ${username}`,hobby:`My ${hobby}` }
        setState({...state, ...newObject})
        // alert(props.username + " " + props.hobby)
    }

    const [state, setState] = useState({username:username, hobby:hobby})

    return (
        <div className= "profile-card">
            <img src ={image} alt="profile card" className="profile-card-avatar"/>

            <div className="details-container">
                <div className="firstname-details">
                    <p>name</p>
                    <h1>{state.username}</h1>
                </div>
                <div className="hobby-details">
                    <p>Hobby</p>
                    <h1>{state.hobby}</h1>
                </div>
            </div>
            <button onClick={handleclick}>Click Me</button>
        </div>
    );
};

export default ProfileCard;