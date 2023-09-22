"use client";
import FramerMotion from "@/components/FramerMotion";
import axiosClient from "@/utils/axios";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const RegistrationForm = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    country: "",
    email: "",
    password: "",
    password_confirmation: "",
  });
  const router = useRouter();

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = {
      email: formData.email,
      name: formData.firstName,
      lastName: formData.lastName,
      country: formData.country,
      password: formData.password,
      password_confirmation: formData.password_confirmation,
    };
    try {
      const res = await axiosClient.post("/register", data);
      localStorage.setItem("ACCESS_TOKEN", res.data.token);
      router.push(`/my-account/?username=123`);
      toast.success("You have successfully registered with Simplifi Networks!");
    } catch (errors) {
      console.log("log errors from heere " + errors);
      toast.error(`Subscription failed. ${errors.response.data.errors.email}`);
    }
  };

  return (
    <FramerMotion>
      <div className="min-h-screen flex items-center justify-center bg-gray-100 py-18">
        <div className="max-w-md w-full p-6 bg-white rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold mb-4">Register an Account</h2>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label htmlFor="firstName" className="block mb-1 font-medium">
                Email *
              </label>
              <input
                type="text"
                name="email"
                className="w-full p-2 border rounded-md focus:outline-none focus:border-blue-500"
                placeholder="Enter Email"
                value={formData.email}
                onChange={handleInputChange}
                required
              />
            </div>
            <div className="mb-4">
              <label htmlFor="firstName" className="block mb-1 font-medium">
                First Name *
              </label>
              <input
                type="text"
                name="firstName"
                className="w-full p-2 border rounded-md focus:outline-none focus:border-blue-500"
                placeholder="Enter your first name"
                value={formData.firstName}
                onChange={handleInputChange}
                required
              />
            </div>
            <div className="mb-4">
              <label htmlFor="lastName" className="block mb-1 font-medium">
                Last Name *
              </label>
              <input
                type="text"
                name="lastName"
                className="w-full p-2 border rounded-md focus:outline-none focus:border-blue-500"
                placeholder="Enter your last name"
                value={formData.lastName}
                onChange={handleInputChange}
                required
              />
            </div>
            <div className="mb-4">
              <label htmlFor="lastName" className="block mb-1 font-medium">
                Password *
              </label>
              <input
                type="password"
                name="password"
                className="w-full p-2 border rounded-md focus:outline-none focus:border-blue-500"
                placeholder="Enter your last name"
                value={formData.password}
                onChange={handleInputChange}
                required
              />
            </div>
            <div className="mb-4">
              <label htmlFor="lastName" className="block mb-1 font-medium">
                Confirm Password *
              </label>
              <input
                type="password"
                name="password_confirmation"
                className="w-full p-2 border rounded-md focus:outline-none focus:border-blue-500"
                placeholder="Enter your last name"
                value={formData.password_confirmation}
                onChange={handleInputChange}
                required
              />
            </div>
            <div className="mb-6">
              <label className="block mb-2 font-medium">Select Country</label>
              <div>
                <label className="flex items-center">
                  <input
                    type="radio"
                    value="Kenya"
                    name="country"
                    checked={true}
                    onChange={handleInputChange}
                    className="mr-2"
                  />
                  Kenya
                </label>
                <label className="flex items-center">
                  <input
                    type="radio"
                    value="Uganda"
                    name="country"
                    onChange={handleInputChange}
                    className="mr-2"
                  />
                  Uganda
                </label>
              </div>
            </div>
            <button
              type="submit"
              className="w-full py-2 px-4 text-white bg-blue-500 rounded-md hover:bg-blue-600 focus:outline-none focus:shadow-outline-blue active:bg-blue-700"
            >
              Register
            </button>
          </form>
        </div>
      </div>
    </FramerMotion>
  );
};

export default RegistrationForm;
