import React from "react";
import { CustomerProvider } from './contexts/CustomerContext'
import { AccountProvider } from "./contexts/AccountContext";
import { TransactionProvider } from "./contexts/TransactionContext";
import MainPage from "./pages/MainPage";

function App() {
  return (
    <CustomerProvider>
      <AccountProvider>
        <TransactionProvider>
          <div className="min-h-screen bg-purple-50">
            <MainPage />
          </div>
        </TransactionProvider>
      </AccountProvider>
    </CustomerProvider>
  );
}

export default App;