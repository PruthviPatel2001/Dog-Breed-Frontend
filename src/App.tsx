import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Header";
import DragAndDropHolder from "./components/DragAndDrop";
import { Route, Routes } from "react-router-dom";
import DogDetails from "./components/DogDetails";
import Home from "./screens/home";
function App() {
  return (
    <div className="">
      <div>
        <Home />
      </div>
    </div>
  );
}

export default App;
