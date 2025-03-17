import React from "react";
import { useCustomer } from "../contexts/CustomerContext";

const CustomerList = () => {
  const { customers, deleteCustomer } = useCustomer();

  const handleView = (customer) => {
    alert(
      `Customer Details:\n\nName: ${customer.fullName}\nEmail: ${customer.email}\nPhone: ${customer.phoneNumber}\nType: ${customer.customerType}`
    );
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-md overflow-x-auto">
      <h2 className="text-xl font-semibold text-purple-800 mb-4">Customer List</h2>
      <table className="w-full border-collapse">
        <thead>
          <tr className="bg-gray-100">
            <th className="px-4 py-3 text-left">Profile Picture</th>
            <th className="px-4 py-3 text-left">Name</th>
            <th className="px-4 py-3 text-left">Email</th>
            <th className="px-4 py-3 text-left">Phone</th>
            <th className="px-4 py-3 text-left">Type</th>
            <th className="px-4 py-3 text-center">Actions</th>
          </tr>
        </thead>
        <tbody>
          {customers.map((customer) => (
            <tr key={customer.id} className="border-t">
              <td className="px-4 py-3">
                {customer.profilePicture && (
                  <img
                    src={customer.profilePicture}
                    alt="Profile"
                    className="w-12 h-12 rounded-full object-cover"
                  />
                )}
              </td>
              <td className="px-4 py-3 whitespace-nowrap">{customer.fullName}</td>
              <td className="px-4 py-3 whitespace-nowrap">{customer.email}</td>
              <td className="px-4 py-3 whitespace-nowrap">{customer.phoneNumber}</td>
              <td className="px-4 py-3 whitespace-nowrap">{customer.customerType}</td>
              <td className="px-4 py-3 flex justify-center space-x-2">
                <button
                  onClick={() => handleView(customer)}
                  className="bg-purple-600 text-white px-3  text-xs  py-3 rounded-lg"
                >
                  View
                </button>
                <button
                  onClick={() => deleteCustomer(customer.id)}
                  className="bg-red-600 text-white text-xs px-3 py-3 rounded-lg"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CustomerList;
