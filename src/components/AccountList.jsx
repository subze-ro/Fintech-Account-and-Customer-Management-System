import React from "react";
import { useAccount } from "../contexts/AccountContext";
import { useCustomer } from "../contexts/CustomerContext";

const AccountList = () => {
  const { accounts } = useAccount();
  const { customers } = useCustomer();

  const getCustomerName = (customerId) => {
    const customer = customers.find((c) => c.id === customerId);
    return customer ? customer.fullName : "Unknown";
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-xl font-semibold text-purple-800 mb-4">Account List</h2>
      <table className="w-full">
        <thead>
          <tr>
            <th className="text-left">Account Number</th>
            <th className="text-left">Customer Name</th>
            <th className="text-left">Account Type</th>
            <th className="text-left">Balance</th>
            <th className="text-left">Status</th>
          </tr>
        </thead>
        <tbody>
          {accounts.map((account) => (
            <tr key={account.id}>
              <td>{account.accountNumber}</td>
              <td>{getCustomerName(account.customerId)}</td>
              <td>{account.accountType}</td>
              <td>${account.balance.toFixed(2)}</td>
              <td>{account.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AccountList;