import React from "react";
import { useCustomer } from "../contexts/CustomerContext";

const CustomerList = () => {
  const { customers } = useCustomer();

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-xl font-semibold text-purple-800 mb-4">Customer List</h2>
      <table className="w-full">
        <thead>
          <tr>
            <th className="text-left">Profile Picture</th>
            <th className="text-left">Name</th>
            <th className="text-left">Email</th>
            <th className="text-left">Phone</th>
            <th className="text-left">Type</th>
          </tr>
        </thead>
        <tbody>
          {customers.map((customer) => (
            <tr key={customer.id} className="border-t">
              <td className="py-2">
                {customer.profilePicture && (
                  <img
                    src={customer.profilePicture}
                    alt="Profile"
                    className="w-10 h-10 rounded-full object-cover"
                  />
                )}
              </td>
              <td className="py-2">{customer.fullName}</td>
              <td className="py-2">{customer.email}</td>
              <td className="py-2">{customer.phoneNumber}</td>
              <td className="py-2">{customer.customerType}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CustomerList;