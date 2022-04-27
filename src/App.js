import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./styles/App.scss";
import { Route, Routes } from "react-router-dom";
import Nav from "./components/Nav";
import Home from "./components/Home";
import MyPics from "./components/MyPics";
function App() {
  return (
    <div className="App">
      <div>
        <Nav />
      </div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/myPic" element={<MyPics />} />
      </Routes>
    </div>
  );
}

export default App;
