import React from "react";
import {useForm} from 'react-hook-form'
import { useTransaction } from "../contexts/TransactionContext";
import { useAccount } from "../contexts/AccountContext";

const TransactionForm = () => {
  const { register, handleSubmit, reset } = useForm();
  const { addTransaction } = useTransaction();
  const { accounts } = useAccount();

  const onSubmit = (data) => {
    const newTransaction = {
      ...data,
      id: Date.now(),
      amount: parseFloat(data.amount),
      dateOfTransaction: new Date().toISOString(),
    };
    addTransaction(newTransaction);
    reset();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="bg-white p-6 rounded-lg shadow-md mb-8">
      <h2 className="text-xl font-semibold text-purple-800 mb-4">Record Transaction</h2>
      <select
        {...register("accountId")}
        className="w-full p-2 mb-4 border rounded"
      >
        <option value="">Select Account</option>
        {accounts.map((account) => (
          <option key={account.id} value={account.id}>
            {account.accountNumber}
          </option>
        ))}
      </select>
      <select
        {...register("transactionType")}
        className="w-full p-2 mb-4 border rounded"
      >
        <option value="Deposit">Deposit</option>
        <option value="Withdrawal">Withdrawal</option>
        <option value="Transfer">Transfer</option>
        <option value="Loan Payment">Loan Payment</option>
      </select>
      <input
        {...register("amount")}
        type="number"
        placeholder="Amount"
        className="w-full p-2 mb-4 border rounded"
      />
      <select
        {...register("status")}
        className="w-full p-2 mb-4 border rounded"
      >
        <option value="Pending">Pending</option>
        <option value="Approved">Approved</option>
        <option value="Rejected">Rejected</option>
      </select>
      <button type="submit" className="bg-purple-600 text-white p-2 rounded">
        Record Transaction
      </button>
    </form>
  );
};

export default TransactionForm;