import React, {useState} from 'react';
import Login from "./components/authentication/Login";
import Register from "./components/authentication/Register";
import "./authentication.css"
// import register from "./components/authentication/Register";

const Authentication = () => {
    const [auth, setAuth] = useState("login")
    const [alert, setAlert] = useState({ishow: false, status:"", message:""})

    const switchHandler = () => {
        if (auth === "login"){
            setAuth("register")
        }
        else {
            setAuth("login")
        }
    }
    return (
        <div className="auth-container">
            <div className="auth-body">
                <div style={{display:"flex", justifyContent:"space-between"}}>{alert.ishow && <div className="alert" style={alert.status === "error" ?
                    {backgroundColor:"red"}:{backgroundColor:"teal"}}>{alert.message }</div>}

                    <button onClick={switchHandler}>{auth === "login" ? "Register" : "Login"}</button>
                </div>

            {auth === "login" ? <Login setAlert ={setAlert}/>:<Register setAlert = {setAlert}/>}

                {/*<Register/>*/}

            </div>
        </div>
    );
};

export default Authentication;