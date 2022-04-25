import "./components/MyApp.css"
import React from "react";
import Budget from "./Budget";
import Authentication from "./Authentication";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import store from "./redux/store";
import {Provider} from "react-redux";

function App() {

    return (
        <Provider store={store}>
        <div className="app-container">
            {/*<Budget/>*/}
            <Router>
                <Switch>
                    <Route exact path="/">
                        <Authentication/>
                    </Route>
                    <Route path="/dashboard/:identity">
                        <Budget/>
                    </Route>
                </Switch>
            </Router>
        </div>
        </Provider>
    )
}

export default App;