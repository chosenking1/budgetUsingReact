import {useState} from "react";

import React from 'react';

const Register = ({setAlert}) => {
    const [userDetails, setUserDetails] = useState({username:"", email:"",password:""})
    const handleUserInput = (e) => {
      setUserDetails({...userDetails, [e.target.name] : e.target.value})
    }

    const handleRegistration = () => {
        let {username, email} = userDetails
      //check if all field have values
      let isFieldsIncomplete = Object.keys(userDetails).some((detail) => detail ===" ")
        if(isFieldsIncomplete){
            setAlert({ishow: true, status:"error", message:"field Incomplete"})

            return
        }
        // validate email is email
        let validRegex = /^[a-zA-Z0-9.!#$%&'+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)$/;
        let isEmailCorrect =email.match(validRegex)

        if (!isEmailCorrect){
            setAlert({ishow:true, status:"error", message:"Email Incorrect" })

            return
        }
        //validate username doesnt exist

        try{
       let usersRepository = JSON.parse(localStorage.getItem("users"))
        let isUserExist = usersRepository.some((user) => user.username === username)
        if (isUserExist){
            setAlert({ishow:true, status:"error", message:"Username Already Exists" })

            return
        }
        let newUsersRepository = [userDetails, ...usersRepository]
            localStorage.setItem("users", JSON.stringify(newUsersRepository))
            setAlert({ishow:true, status:"success", message:"Registration Successful" })
        }
        catch (error){
            localStorage.setItem("users", JSON.stringify([userDetails]))
            setAlert({ishow:true, status:"success", message:"Registration Successful" })
        }

    }

    return (
        <div className="auth-register">
            <label>Username</label>
            <input name="username" onChange={handleUserInput}/>
            <label>Email</label>
            <input name="email" onChange={handleUserInput}/>
            <label>Password</label>
            <input name="password" onChange={handleUserInput}/>
            <button onClick={handleRegistration}>Register</button>
        </div>
    );
};

export default Register;