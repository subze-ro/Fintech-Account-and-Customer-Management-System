import React from "react";
import { useForm } from "react-hook-form";
import { useAccount } from "../contexts/AccountContext";
import { useCustomer } from "../contexts/CustomerContext";

const AccountForm = () => {
  const { register, handleSubmit, reset } = useForm();
  const { addAccount } = useAccount();
  const { customers } = useCustomer();

  const onSubmit = (data) => {
    const newAccount = {
      ...data,
      id: Date.now(),
      accountNumber: `ACC${Math.floor(Math.random() * 1000000)}`,
      balance: parseFloat(data.balance),
    };
    addAccount(newAccount);
    reset();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="bg-white p-6 rounded-lg shadow-md mb-8">
      <h2 className="text-xl font-semibold text-purple-800 mb-4">Create Account</h2>
      <select
        {...register("customerId")}
        className="w-full p-2 mb-4 border rounded"
      >
        <option value="">Select Customer</option>
        {customers.map((customer) => (
          <option key={customer.id} value={customer.id}>
            {customer.fullName}
          </option>
        ))}
      </select>
      <select
        {...register("accountType")}
        className="w-full p-2 mb-4 border rounded"
      >
        <option value="Savings">Savings</option>
        <option value="Checking">Checking</option>
        <option value="Business">Business</option>
      </select>
      <input
        {...register("balance")}
        type="number"
        placeholder="Initial Balance"
        className="w-full p-2 mb-4 border rounded"
      />
      <select
        {...register("status")}
        className="w-full p-2 mb-4 border rounded"
      >
        <option value="Active">Active</option>
        <option value="Suspended">Suspended</option>
        <option value="Closed">Closed</option>
      </select>
      <button type="submit" className="bg-purple-600 text-white p-2 rounded">
        Create Account
      </button>
    </form>
  );
};

export default AccountForm;