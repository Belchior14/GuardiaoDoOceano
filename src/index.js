import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import { Home, NavBar } from "./Components";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ShowAllEvents } from "./Components/eventos/allEvents";



const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/GuardiaoDoOceano" element={<Home />} />
        <Route path="/GuardiaoDoOceano/eventos" element={<ShowAllEvents/>} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
