import React from "react";
import "./Homepage.css";
import { Link } from "react-router-dom";
const Homepage = () => {
  return (
    <div className="relative flex flex-col h-screen overflow-hidden animate-gradient">
      <div className="absolute inset-0 z-0 bubble-background"></div>

      <nav className="flex justify-between items-center p-6 bg-transparent border-none z-10">
        <div className="flex-1"></div>
        <div className="space-x-4">
          <Link to="/login">
            <button className="px-9 py-4  bg-blue-500 text-white  hover:bg-blue-600 rounded-2xl">
              Login
            </button>
          </Link>
          <Link to="/signup">
            <button className="px-8 py-4 bg-green-500 text-white hover:bg-green-600 rounded-2xl">
              Sign Up
            </button>
          </Link>
        </div>
      </nav>

      <div className="flex flex-col items-center justify-center flex-grow text-center z-10">
        <h1 className="text-5xl font-bold mb-8 text-gray-800">StartAlign</h1>
        <p className="text-2xl text-black-700 mb-8 max-w-xl leading-relaxed font-bold">
          Align your journey with the stars. <br /> The best platform to
          organize and <br /> track your tasks.
        </p>
      </div>

      <footer className="bg-gray-800 text-white text-center py-4 z-10">
        StartAlign@appPatient
      </footer>
    </div>
  );
};

export default Homepage;
