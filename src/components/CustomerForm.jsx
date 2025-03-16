import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useCustomer } from "../contexts/CustomerContext";

const CustomerForm = () => {
  const { register, handleSubmit, reset } = useForm();
  const { addCustomer } = useCustomer();
  const [profilePicture, setProfilePicture] = useState("");

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setProfilePicture(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const onSubmit = (data) => {
    const newCustomer = {
      ...data,
      id: Date.now(),
      profilePicture: profilePicture,
    };
    addCustomer(newCustomer);
    reset();
    setProfilePicture("");
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="bg-white p-6 rounded-lg shadow-md mb-8">
      <h2 className="text-xl font-semibold text-purple-800 mb-4">Add Customer</h2>
      <input
        {...register("fullName")}
        placeholder="Full Name"
        className="w-full p-2 mb-4 border rounded"
      />
      <input
        {...register("email")}
        placeholder="Email"
        className="w-full p-2 mb-4 border rounded"
      />
      <input
        {...register("phoneNumber")}
        placeholder="Phone Number"
        className="w-full p-2 mb-4 border rounded"
      />
      <input
        {...register("dateOfRegistration")}
        type="date"
        className="w-full p-2 mb-4 border rounded"
      />
      <select
        {...register("customerType")}
        className="w-full p-2 mb-4 border rounded"
      >
        <option value="Individual">Individual</option>
        <option value="Business">Business</option>
      </select>
      <input
        type="file"
        onChange={handleFileChange}
        className="w-full p-2 mb-4 border rounded"
      />
      <button type="submit" className="bg-purple-600 text-white p-2 rounded">
        Add Customer
      </button>
    </form>
  );
};

export default CustomerForm;