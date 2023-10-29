import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";

import { BrowserRouter,Routes, Route } from "react-router-dom";
import Header from "./routs/Header";
import Services from "./routs/Services";
import About from "./routs/About";
import Contact from "./routs/Contact";
import SignUp from "./routs/SignUp";
import LogIn from "./routs/LogIn";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}>
        <Route path="header" element={<Header />} />
        <Route path="services" element={<Services />} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />
        <Route path="signUp" element={<SignUp />} />
        <Route path="logIn" element={<LogIn />} />
      </Route>
    </Routes>
  </BrowserRouter>,
);