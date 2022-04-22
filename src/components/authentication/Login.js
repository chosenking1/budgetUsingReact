import React, {useState} from 'react';
import {useHistory} from "react-router-dom";
// import budgetBody from "../budget/BudgetBody";
// import Register from "./Register";

    const Login = ({ setAlert }) => {

    let history = useHistory();
    const [userDetails, setUserDetails] = useState({identity :"", password: ""})
        const [user, setUser] = useState({})

    const handleUserInput = (e) => {
    setUserDetails({...userDetails, [e.target.name]: e.target.value})
    }

    const handleLogin = () => {
        let userRepository = JSON.parse(localStorage.getItem("users"))
let user;
        let isValid = userRepository.some((userObject) => {
            let idCheck =( userObject?.email === userDetails.identity ||
        userObject?.username === userDetails?.identity)
            let passwordCheck = userObject.password === userDetails.password
            if (idCheck && passwordCheck) {
                user = userObject
            }

            return idCheck && passwordCheck
            })
        let { identity } = userDetails

            isValid ?
                history.push(`/dashboard/${user.username}/?id=${identity}`) :
                setAlert({ishow: true, status:"error", message:"User Details Incorrect"})

        setTimeout(
            () => setAlert({ishow: false, status: "", message:""}),
            5000)


    }
    return (
        <div className="auth-register">
            <label>Email or Username</label>
            <input name="identity" onChange={handleUserInput}/>

            <label>Password</label>
            <input name="password" onChange={handleUserInput}/>
            <button onClick={handleLogin}>Login</button>
        </div>

    );
};

export default Login;