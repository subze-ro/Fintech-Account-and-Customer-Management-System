import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./contexts/AuthContext";
import { CustomerProvider } from "./contexts/CustomerContext";
import { AccountProvider } from "./contexts/AccountContext";
import { TransactionProvider } from "./contexts/TransactionContext";
import LandingPage from "./pages/LandingPage";
import SignupPage from "./pages/SignupPage";
import LoginPage from "./pages/LoginPage";
import Dashboard from "./pages/Dashboard";
import CustomerPage from "./pages/CustomerPage";
import AccountPage from "./pages/AccountPage";
import TransactionPage from "./pages/TransactionPage";
import ProtectedRoute from "./components/ProtectedRoute";

function App() {
  return (
    <AuthProvider>
      <CustomerProvider>
        <AccountProvider>
          <TransactionProvider>
            <Router>
              <Routes>
                <Route path="/" element={<LandingPage />} /> {/* Landing Page */}
                <Route path="/signup" element={<SignupPage />} /> {/* Signup Page */}
                <Route path="/login" element={<LoginPage />} /> {/* Login Page */}
                <Route element={<ProtectedRoute />}>
                  <Route path="/dashboard" element={<Dashboard />} /> {/* Dashboard */}
                  <Route path="/customers" element={<CustomerPage />} /> {/* Customer Page */}
                  <Route path="/accounts" element={<AccountPage />} /> {/* Account Page */}
                  <Route path="/transactions" element={<TransactionPage />} /> {/* Transaction Page */}
                </Route>
              </Routes>
            </Router>
          </TransactionProvider>
        </AccountProvider>
      </CustomerProvider>
    </AuthProvider>
  );
}

export default App;