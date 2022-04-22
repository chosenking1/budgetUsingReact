import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import MyApp from "./MyApp";
import App from "./App";


ReactDOM.render( < React.StrictMode >
    <App/>
</React.StrictMode>,
    document.getElementById('root')
);



const Index = () => {
    return (
        <div>
            <label className="name-label" htmlFor="name">Name</label>
            <input id = "name" type="text" name = "name"/>
            <button style={{backgroundColor : "blue", color:"White"}}>Click Me</button>
        </div>
    );
};

export default Index;
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals