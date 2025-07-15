import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Footer from "./components/Footer";

import DashboardPage from "./components/DashboardPage";
import Details from "./components/Details";
import About from "./components/AboutPage";
import NotFound from "./components/NotFound";
import ModifyList from "./components/ModifyList";

import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <header className="App-header">
        <Navbar />
      </header>
      <div className="App">
        <Sidebar />

        <Routes>
          <Route path="/" element={<DashboardPage />} />
          <Route path="/details/:id" element={<Details />} />
          <Route path="/about" element={<About />} />
          <Route path="*" element={<NotFound />} />
        </Routes>

        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
