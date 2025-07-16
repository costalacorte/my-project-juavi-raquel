import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import { ToastContainer, Bounce } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

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

        <ToastContainer
          position="top-center"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick={false}
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="colored"
          transition={Bounce}
        />

        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
