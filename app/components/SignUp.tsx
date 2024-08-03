'use client';
import React, { useState } from "react";

import { poppins } from "../utils/fonts";

const SignUp: () => React.JSX.Element = () => {
  const signIn = () => {
    console.log('signIn open');
  }

  return (
    <div className="absolute top-0 left-0">
      <div className="w-screen h-screen relative">
        <div className="w-screen h-screen bg-black opacity-50 hidden md:block"></div>
        <form
          className="
          bg-white
          w-full
          box-border
          px-[calc(100vw*(15/350))]
          pt-[calc(100vw*(120/350))]
          pb-[calc(100vw*(200/350))]

          md:w-fit
          md:rounded-2xl
          md:absolute
          md:top-1/2
          md:left-1/2
          md:transform
          md:translate-x-[-50%]
          md:translate-y-[-50%]
          md:px-[50px]
          md:pt-[28px]
          md:pb-[12px]"
        >
          <p className={`
            ${poppins.className}
            font-semibold
            w-fit
            mx-auto
            relative
            underline
            text-[calc(100vw*(27/350))]

            md:text-3xl
            `}>Sign Up</p>

          <div className="
            w-full
            mt-[calc(100vw*(38/350))]

            md:w-[470px]
            md:mt-[14px]
          ">
            <label htmlFor='name' className={`
              ${poppins.className}
              w-fit
              text-[calc(100vw*(15/350))]
              mx-[calc(100vw*(6/350))]

              md:text-[18px]
              md:mx-[8px]
            `}>Name</label>
            <input
              className="
                bg-[#e3e3e3]
                rounded-2xl
                border-[1px]
                border-black
                placeholder-[#5b5b5b]
                w-[100%]
                mt-[calc(100vw*(9/350))]
                px-[calc(100vw*(10/350))]
                py-[calc(100vw*(8/350))]

                md:mt-[6px]
                md:px-[10px]
                md:py-[15px]
              "
              type="text"
              name='name'
              placeholder="Enter your name"
            />
          </div>

          <div className="
            w-full
            mt-[calc(100vw*(23/350))]

            md:w-[470px]
            md:mt-[14px]
          ">
            <label htmlFor='email' className={`
              ${poppins.className}
              w-fit
              text-[calc(100vw*(15/350))]
              mx-[calc(100vw*(6/350))]

              md:text-[18px]
              md:mx-[8px]
            `}>Email</label>
            <input
              className="
                bg-[#e3e3e3]
                rounded-2xl
                border-[1px]
                border-black
                placeholder-[#5b5b5b]
                w-[100%]
                mt-[calc(100vw*(9/350))]
                px-[calc(100vw*(10/350))]
                py-[calc(100vw*(8/350))]

                md:mt-[6px]
                md:px-[10px]
                md:py-[15px]
              "
              type="text"
              name='email'
              placeholder="Enter your email"
            />
          </div>

          <div className="
            w-full
            mt-[calc(100vw*(23/350))]

            md:w-[470px]
            md:mt-[14px]
          ">
            <label htmlFor='password' className={`
              ${poppins.className}
              w-fit
              text-[calc(100vw*(15/350))]
              mx-[calc(100vw*(6/350))]

              md:text-[18px]
              md:mx-[8px]
            `}>Password </label>
            <input
              className="
                bg-[#e3e3e3]
                rounded-2xl
                border-[1px]
                border-black
                placeholder-[#5b5b5b]
                w-[100%]
                mt-[calc(100vw*(9/350))]
                px-[calc(100vw*(10/350))]
                py-[calc(100vw*(8/350))]

                md:mt-[6px]
                md:px-[10px]
                md:py-[15px]
              "
              type="text"
              name='password'
              placeholder="Enter your password"
            />
          </div>

          <div className="
            w-[100%]
            flex
            justify-center
            mt-[36px]
          ">
            <button
              className="
                text-white
                bg-[#3094d2]
                rounded-[calc(100vw*(47/350))]
                text-[calc(100vw*(16/350))]
                px-[calc(100vw*(28/350))]
                py-[calc(100vw*(10/350))]

                md:rounded-[58px]
                md:text-[20px]
                md:px-[42px]
                md:py-[14px]
              "
              type="submit"
            >
              Sign Up
            </button>
          </div>

          <div>
            <p className={`
              ${poppins.className}
              text-center
              font-semibold
              text=[calc(100vw*(12/350))]
              mt-[calc(100vw*(26/350))]

              md:text=[12px]
              md:mt-[16px]
            `}
            >Already  have an account ? <span className="text-[#3094d2]" onClick={signIn}>Sign in</span></p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
