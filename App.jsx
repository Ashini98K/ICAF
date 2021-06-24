import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Login from "./src/IT19135830/Login/Login";


function App() {
        return (
        <div>
                <Router>
                        <Login/>
                </Router>

        </div>
        )
}

export default App