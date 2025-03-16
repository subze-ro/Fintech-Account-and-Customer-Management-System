import React from "react";
import { useTransaction } from "../contexts/TransactionContext";
import { useAccount } from "../contexts/AccountContext";
import { useCustomer } from "../contexts/CustomerContext";

const TransactionList = () => {
  const { transactions } = useTransaction();
  const { accounts } = useAccount();
  const { customers } = useCustomer();

  const getAccountNumber = (accountId) => {
    const account = accounts.find((a) => a.id === accountId);
    return account ? account.accountNumber : "Unknown";
  };

  const getCustomerName = (accountId) => {
    const account = accounts.find((a) => a.id === accountId);
    if (!account) return "Unknown";
    const customer = customers.find((c) => c.id === account.customerId);
    return customer ? customer.fullName : "Unknown";
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-xl font-semibold text-purple-800 mb-4">Transaction List</h2>
      <table className="w-full">
        <thead>
          <tr>
            <th className="text-left">Account Number</th>
            <th className="text-left">Customer Name</th>
            <th className="text-left">Transaction Type</th>
            <th className="text-left">Amount</th>
            <th className="text-left">Status</th>
          </tr>
        </thead>
        <tbody>
          {transactions.map((transaction) => (
            <tr key={transaction.id}>
              <td>{getAccountNumber(transaction.accountId)}</td>
              <td>{getCustomerName(transaction.accountId)}</td>
              <td>{transaction.transactionType}</td>
              <td>${transaction.amount.toFixed(2)}</td>
              <td>{transaction.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TransactionList;