import * as React from "react";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import logo from "./logo.svg";
import "./App.css";

const App: React.FC = () => {
    return (
    <Router>
        <Switch>
            <Route exact path="/" component={Home} />
        </Switch>
    </Router>
    );
};

export default App;
