import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import Home from "./components/Home.jsx";
import Header from "./components/Header.jsx"
import "./App.css";

export default function App() {
  return (
    <>
      <Header key="1" />
      <Outlet />
    </>
  );
}
