import "./App.css";
import News from "./components/News/News";
import { useState, useEffect } from "react";
import { Route, Routes } from "react-router-dom";

function App() {
    return (
        <div className="App">
            <News></News>
        </div>
    );
}

export default App;
