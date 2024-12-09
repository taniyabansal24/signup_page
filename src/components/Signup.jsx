import React, { useState } from "react";
import image from "../assets/signup_page_img-removebg.png";
import logo from "../assets/signup_img2-removebg.png";

const Signup = () => {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password === confirmPassword) {
      alert("Sign-up successful!");
    } else {
      alert("Passwords do not match!");
    }
  };

  return (
    <div className="flex h-[92vh] w-full p-[20px] items-center font-roboto gap-11">
      <div className="right w-[50%] flex items-center flex-col  h-[79%]">
        <h1 className="text-[#255CFF] text-4xl font-bold ">Invest in the Future of Cinema</h1>
        <img src={image} alt="" className="w-[50%] mb-8"/>
        <h2 className="text-[34px] text-center text-[#01289F] font-medium ">Trade for Entertainment Success with <br /> FilmyFunds Marketplace!</h2>
        <div className="flex gap-5 mt-8 items-center ">
          <p className="text-[#255CFF] text-xl">Want to create an Account ?</p>
          <button className="bg-[#255CFF] rounded-full text-white px-4 py-1">Sign up</button>
        </div>
      </div>
      <div className="left w-[50%] h-[79%]">
        <img src={logo} className="w-[10%]" alt="" />
        <h1 className="text-4xl mt-[40px] font-semibold mb-2">Set your Password</h1>
        <hr className="bg-[#255CFF] w-[19rem] h-[3px]"/>
        <div>
          <form
            onSubmit={handleSubmit}
            className=" py-6 max-w-md w-full"
          >
            {/* Email Input */}
            <div className="mb-4">
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Email-ID
              </label>
              <input
                type="email"
                id="email"
                placeholder="Enter your email"
                className="w-full px-4 py-1 border rounded-md focus:ring-2 focus:ring-blue-500 outline-none"
                required
              />
            </div>

            {/* Password Input */}
            <div className="mb-4 relative">
              <label
                htmlFor="password"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Password
              </label>
              <input
                type={showPassword ? "text" : "password"}
                id="password"
                placeholder="Enter your password"
                className="w-full px-4 py-1 border rounded-md focus:ring-2 focus:ring-blue-500 outline-none"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              <button
                type="button"
                className="absolute right-3 top-[71%] transform -translate-y-1/2 text-gray-500"
                onClick={togglePasswordVisibility}
              >
                {showPassword ? "👁️" : "👁️‍🗨️"}
              </button>
            </div>

            {/* Confirm Password Input */}
            <div className="mb-4 relative">
              <label
                htmlFor="confirmPassword"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Re-enter Password
              </label>
              <input
                type={showPassword ? "text" : "password"}
                id="confirmPassword"
                placeholder="Re-enter your password"
                className="w-full px-4 py-1 border rounded-md focus:ring-2 focus:ring-blue-500 outline-none"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                required
              />
              <button
                type="button"
                className="absolute right-3 top-[71%] transform -translate-y-1/2 text-gray-500"
                onClick={togglePasswordVisibility}
              >
                {showPassword ? "👁️" : "👁️‍🗨️"}
              </button>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="bg-[#255CFF] rounded-full text-white px-6 py-1 hover:bg-blue-600 transition-colors"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Signup;
