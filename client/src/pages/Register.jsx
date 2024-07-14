import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Register = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch("/api/auth/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!res.ok) {
        const errorData = await res.json();
        throw new Error(errorData.error);
      }

      const data = await res.json();
      console.log(data);

      // Clear the form fields after successful submission
      setFormData({
        name: "",
        email: "",
        password: "",
      });

      alert("User registered successfully!");
      navigate("/login");
    } catch (error) {
      alert(error.message);
      console.error("Error:", error);
    }
  };

  return (
    <div className="max-w-lg p-3 mx-auto flex flex-col justify-center text-center">
      <h1 className="text-center text-3xl font-semibold">SIGN UP</h1>
      <form onSubmit={handleSubmit} className="flex flex-col gap-5">
        <input
          type="text"
          placeholder="Enter your name"
          id="name"
          value={formData.name}
          onChange={handleChange}
          className="bg-gray-200 rounded-lg p-3 mt-7"
        />
        <input
          type="email"
          placeholder="Enter your email"
          id="email"
          value={formData.email}
          onChange={handleChange}
          className="bg-gray-200 rounded-lg p-3 mt-5"
        />
        <input
          type="password"
          placeholder="Enter your password"
          id="password"
          value={formData.password}
          onChange={handleChange}
          className="bg-gray-200 rounded-lg p-3 mt-5"
        />
        <button className="bg-teal-500 p-3 rounded-lg text-white">
          SIGN UP
        </button>
      </form>
      <div className="flex gap-5 mt-2">
        <p>Already have an account?</p>
        <Link to="/login">
          <span className="text-red-500 font-semibold">Sign In</span>
        </Link>
      </div>
    </div>
  );
};

export default Register;
