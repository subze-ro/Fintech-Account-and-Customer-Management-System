import React from "react";
import { Link } from "react-router-dom";
import TransactionForm from "../components/TransactionForm";
import TransactionList from "../components/TransactionList";

const TransactionPage = ({ handleLogout }) => {
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

      <div className="container mx-auto p-8">
        <h1 className="text-3xl font-bold text-purple-800 mb-8">Transaction Management</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <TransactionForm />
          <TransactionList />
        </div>
      </div>
    </div>
  );
};

export default TransactionPage;
