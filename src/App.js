import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Navbar from "./components/Navbar";
import WrappedRouter from "./utils/Router";

const App = () => {
    return (
        <Router>
            <Navbar>
                <WrappedRouter />
            </Navbar>
        </Router>
    );
};

export default App;
