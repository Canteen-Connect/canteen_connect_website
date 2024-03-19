import React from "react";
import { Link } from "react-router-dom";
const Login = () => {
  return (
    <div className="bg-white">
      <div className="container mx-auto py-12">
        <h1 className="text-3xl font-semibold text-yellow-400 mb-8 text-center">
          Login
        </h1>
        <div className="max-w-md mx-auto border border-gray-300 rounded-md p-6">
          <form className="grid grid-cols-1 gap-y-6">
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700"
              >
                Email Address
              </label>
              <input
                type="email"
                name="email"
                id="email"
                className="mt-1 p-2 block w-full border-gray-300 rounded-md"
                placeholder="Your Email Address"
              />
            </div>
            <div>
              <label
                htmlFor="password"
                className="block text-sm font-medium text-gray-700"
              >
                Password
              </label>
              <input
                type="password"
                name="password"
                id="password"
                className="mt-1 p-2 block w-full border-gray-300 rounded-md"
                placeholder="Your Password"
              />
            </div>
            <div className="text-sm">
              <a href="#" className="text-yellow-400 hover:text-yellow-500">
                Forgot your password?
              </a>
            </div>
            <div>
              <button
                type="submit"
                className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-yellow-400 hover:bg-yellow-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-400"
              >
                Login
              </button>
            </div>
          </form>
          <div className="mt-6 text-sm text-center">
            <p className="text-gray-700">
              Don't have an account yet?{" "}
              <Link to="/register" className="text-yellow-400 hover:text-yellow-500">
                Register here
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
