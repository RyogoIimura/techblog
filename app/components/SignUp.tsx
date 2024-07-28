import React, { useState } from "react";

const SignUp: () => React.JSX.Element = () => {

  return (
    <div>
      <form
        className="w-full max-w-sm mx-auto px-4 py-2"
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
  );
};

export default SignUp;
