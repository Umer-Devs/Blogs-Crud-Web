import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from 'axios'

const Signup = () => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    role: "",
  });

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // Handle form submit
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:3000/signin",formData);
      alert(res.data.message)

    } catch (error) {
      console.log("failed to send sinin data in to backend", error);

    }
  };

  return (
    <section className="flex flex-col min-h-screen bg-dark-blue w-full justify-center items-center">
      <form
        onSubmit={handleSubmit}
        className="flex flex-col items-center space-y-6 bg-secondary-blue p-6 rounded-md max-w-3xl lg:min-w-3xl"
      >
        <h1 className="text-white underline italic">Sign Up</h1>

        <div className="w-full space-y-4">
          <input
            type="text"
            name="username"
            onChange={handleChange}
            value={formData.username}
            className="bg-white w-full h-12 rounded-md outline-none pl-4"
            placeholder="Enter Your Username"
            required
          />

          <input
            type="email"
            name="email"
            onChange={handleChange}
            value={formData.email}
            className="bg-white w-full h-12 rounded-md outline-none pl-4"
            placeholder="Enter Your Email"
            required
          />

          <input
            type="password"
            name="password"
            onChange={handleChange}
            value={formData.password}
            className="bg-white w-full h-12 rounded-md outline-none pl-4"
            placeholder="Enter Your Password"
            required
          />

          <select
            name="role"
            onChange={handleChange}
            value={formData.role}
            className="bg-white w-full h-12 rounded-md outline-none pl-4"
            required
          >
            <option value="">Select Role</option>
            <option value="admin">Admin</option>
            <option value="user">User</option>
          </select>

          <button
            type="submit"
            className="bg-dark-blue w-full py-2 rounded-md text-white cursor-pointer hover:bg-blue-900 transition-all"
          >
            Sign Up
          </button>
        </div>

        <div className="w-full flex justify-end text-white">
          <p>
            Already have an account?{" "}
            <Link to="/login">
              <span className="underline text-primary-light">Login</span>
            </Link>
          </p>
        </div>
      </form>
    </section>
  );
};

export default Signup;
