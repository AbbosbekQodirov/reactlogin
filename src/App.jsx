import { useContext, useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import { Context } from "./context/AuthContext";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const { user, ready } = useContext(Context);

  return (
    <>
      {/* {ready && ( */}
        <BrowserRouter>
          <ToastContainer />
          <Navbar />

          <Routes>
            {user && <Route path="/" element={<Home />} />}
            {!user && <Route path="/" element={<Navigate to="/login" />} />}
            {user && <Route path="/login" element={<Navigate to="/" />} />}
            {user && <Route path="/signup" element={<Navigate to="/" />} />}
            {!user && <Route path="/login" element={<Login />} />}
            {!user && <Route path="/signup" element={<Signup />} />}
          </Routes>
        </BrowserRouter>
      {/* )} */}
    </>
  );
}

export default App;
