import "./App.css";
import Nav from "./components/Nav/Nav";
import News from "./components/News/News";
import { useState, useEffect } from "react";
import { Route, Routes } from "react-router-dom";

function App() {
    return (
        <div className="App">
            <Nav></Nav>
        </div>
    );
}

export default App;
