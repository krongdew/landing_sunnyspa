import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from './pages/Home';
import Services from './pages/Services'
import Book from "./pages/Book";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/Services" element={<Services/>}/>
          <Route path="/Book" element={<Book/>}/>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
