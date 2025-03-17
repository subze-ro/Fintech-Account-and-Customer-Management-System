import React from "react";
import { Link } from "react-router-dom";
import FinImage from "../assets/fin.jpeg"; 

const LandingPage = () => {
  return (
    <div className="min-h-screen flex flex-col md:flex-row bg-gray-100">
      {/* Left Side - Background Image & Intro Section */}
      <div className="relative w-full md:w-1/2 flex justify-center items-center p-10 md:p-16 h-screen">
        {/* Background Image */}
        <div className="absolute inset-0">
      {/* Background Image */}
      <img
        src={FinImage}
        alt="Fintech Management Background"
        className="w-full h-full object-cover opacity-100"
      />
      
      {/* Overlay & Blur Effect */}
      <div className="absolute inset-0 bg-purple-900/70 backdrop-xs"></div>
    </div>

        {/* Intro Content */}
        <div className="relative z-10 text-white text-center max-w-md">
          <h1 className="text-6xl md:text-6xl font-extrabold mb-9 leading-tight  bg-clip-text bg-gradient-to-r text-white uppercase tracking-wide">
            Fintech-Pro
          </h1>
          <h2 className="text-3xl md:text-3xl font-bold mb-6 leading-tight  bg-clip-text bg-gradient-to-r text-white uppercase tracking-wide">
            Empowering Financial Management with Precision & Innovation
          </h2>
          <p className="text-lg font-md text-white mb-6">
            A modern fintech system for managing customers, accounts, and transactions efficiently.
          </p>
        </div>
      </div>

      {/* Right Side - Action Buttons */}
      <div className="w-full md:w-1/2 flex flex-col items-center justify-center space-y-6 p-10 md:p-16">
        <h2 className="text-xl font-thin text-gray-900 mb-4">Get Started Now</h2>
        <Link to="/signup" className="w-full max-w-xs">
          <button className="w-full bg-purple-600 hover:bg-purple-700 text-white font-thin py-3 rounded-lg transition-all transform hover:scale-105 shadow-md">
            Signup
          </button>
        </Link>
        <Link to="/login" className="w-full max-w-xs">
          <button className="w-full bg-purple-600 hover:bg-purple-700 text-white font-thin py-3 rounded-lg transition-all transform hover:scale-105 shadow-md">
            Login
          </button>
        </Link>
      </div>
    </div>
  );
};

export default LandingPage;