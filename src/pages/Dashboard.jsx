import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";

const Dashboard = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/"); // Redirect to Landing Page after logout
  };

  return (
    <div className="min-h-screen bg-purple-50 flex flex-col font-thin">
      <nav className="bg-purple-800 p-4 shadow-md">
        <div className="container mx-auto flex justify-between items-center">
          <Link to="/dashboard" className="text-white text-3xl tracking-wide">
            FintechPro
          </Link>
          <div className="space-x-6">
            <Link to="/customers" className="text-white text-lg hover:text-purple-300 transition-all">
              Customers
            </Link>
            <Link to="/accounts" className="text-white text-lg hover:text-purple-300 transition-all">
              Accounts
            </Link>
            <Link to="/transactions" className="text-white text-lg hover:text-purple-300 transition-all">
              Transactions
            </Link>
            <button
              onClick={handleLogout}
              className="bg-red-600 text-white px-5 py-2 rounded-lg hover:bg-red-700 transition-all"
            >
              Log Out
            </button>
          </div>
        </div>
      </nav>
      <div className="flex-grow flex flex-col items-center justify-center text-center p-12">
        <h1 className="text-5xl text-purple-800 mb-6 animate-fade-in">
          Welcome, {user?.email}!
        </h1>
        <div className="bg-white shadow-lg rounded-xl p-10 max-w-3xl w-full">
          <h2 className="text-2xl text-gray-700 mb-6">Manage Your System</h2>
          <div className="flex gap-6 justify-center">
            <Link to="/customers" className="bg-purple-700 text-white py-3 px-6 rounded-lg text-lg shadow-md hover:bg-purple-800 transition-all text-center">
              View Customers
            </Link>
            <Link to="/accounts" className="bg-indigo-600 text-white py-3 px-6 rounded-lg text-lg shadow-md hover:bg-indigo-700 transition-all text-center">
              Manage Accounts
            </Link>
            <Link to="/transactions" className="bg-yellow-500 text-white py-3 px-6 rounded-lg text-lg shadow-md hover:bg-yellow-600 transition-all text-center">
              Process Transactions
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;