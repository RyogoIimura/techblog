import React, { useState } from "react";

const SignUp: () => React.JSX.Element = () => {

  return (
    <div className="absolute top-0 left-0">
      <div className="w-screen h-screen relative">
        <div className="w-screen h-screen bg-black opacity-50"></div>
        <form
          className="max-w-792 px-1 bg-white rounded-3xl absolute top-1/2 left-1/2 transform translate-x-[-50%] translate-y-[-50%]"
        >
          <p>Sign Up</p>

          <div>
            <label htmlFor='name'>Name</label>
            <input
              className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight
          focus:outline-none"
              type="text"
              name='name'
              placeholder="Enter your name"
            />
          </div>

          <div>
            <label htmlFor='email'>Email</label>
            <input
              className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight
          focus:outline-none"
              type="text"
              name='email'
              placeholder="Enter your email"
            />
          </div>

          <div>
            <label htmlFor='password '>Password </label>
            <input
              className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight
          focus:outline-none"
              type="text"
              name='password'
              placeholder="Enter your password"
            />
          </div>

          <button
            className="duration-150 flex-shrink-0 bg-blue-500 hover:bg-blue-700 border-blue-500 hover:border-blue-700 text-sm border-4 text-white py-1 px-2 rounded"
            type="submit"
          >
            Sign Up
          </button>

          <div>
            <p>Already  have an account ?</p>
            <button>Sign in</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
