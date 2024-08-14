'use client';
import React, { useState, useContext } from "react";

import FormInput from "./FormInput";
import { poppins } from "../utils/fonts";
import { CommonContext } from "../contexts/CommonContext";

const SignUp = ():React.JSX.Element => {
  const context = useContext(CommonContext);
  const { signInFlag, setSignInFlag, setUser, signInOpen, signUpMdFlag, signUpOpen } = context;

  // form の打ち込んだテキストを参照
  const [ inputName, setInputName ] = useState<string>('');
  const [ inputEmail, setInputEmail ] = useState<string>('');
  const [ inputPass, setInputPass ] = useState<string>('');
  const handleSignUp = (e: React.FormEvent) => {
    e.preventDefault();

    setUser({
      username: inputName,
      email: inputEmail,
      password: inputPass,
    })
    setSignInFlag(!signInFlag)
    // console.log(inputName, inputEmail, inputPass)
    signUpOpen()
  }

  return (
    <>
      {signUpMdFlag ? (
        <div className="absolute top-0 left-0 z-115">
          <div className="w-screen h-screen relative">
            <div
              className="w-screen h-screen bg-black opacity-50 hidden md:block"
              onClick={() => signUpOpen()}
            ></div>
            <form
              className="
              bg-white
              w-full
              box-border
              px-[calc(100vw*(32/750))]
              pt-[calc(100vw*(258/750))]
              pb-[calc(100vw*(430/750))]

              md:w-fit
              md:rounded-[14px]
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
                text-[calc(100vw*(60/750))]

                md:text-3xl
                `}>Sign Up</p>

              <div className={`w-full mt-[calc(100vw*(64/750))] md:w-[470px] md:mt-[36px]`}>
                <FormInput role='name' input={inputName} setInput={setInputName} />
              </div>
              <div className={`w-full mt-[calc(100vw*(34/750))] md:w-[470px] md:mt-[14px]`}>
                <FormInput role='email' input={inputEmail} setInput={setInputEmail} />
              </div>
              <div className={`w-full mt-[calc(100vw*(34/750))] md:w-[470px] md:mt-[14px]`}>
                <FormInput role='password' input={inputPass} setInput={setInputPass} />
              </div>

              <div className="
                w-[100%]
                flex
                justify-center
                mt-[calc(100vw*(86/750))]

                md:mt-[36px]
              ">
                <button
                  className={`
                    bg-[#3094d2]
                    rounded-[calc(100vw*(47/750))]
                    px-[calc(100vw*(72/750))]
                    py-[calc(100vw*(18/750))]

                    md:rounded-[58px]
                    md:px-[42px]
                    md:py-[14px]
                  `}
                  type="submit"
                  onClick={handleSignUp}
                >
                  <p className={`
                    ${poppins.className}
                    text-white
                    text-[calc(100vw*(38/750))]

                    md:text-[20px]
                  `}
                  >Sign Up</p>
                </button>
              </div>

              <div>
                <p className={`
                  ${poppins.className}
                  text-center
                  font-semibold
                  text-[calc(100vw*(30/750))]
                  mt-[calc(100vw*(64/750))]

                  md:text-[12px]
                  md:mt-[16px]
                `}
                >Already  have an account ?&nbsp;
                  <span
                    className="text-[#3094d2] cursor-pointer"
                    onClick={() => {
                      signInOpen()
                      signUpOpen()
                    }}
                    >Sign In
                  </span>
                </p>
              </div>

              <button className={`
                  fixed
                  top-0
                  right-0
                  w-[74px]
                  h-[74px]
                  flex
                  justify-center

                  md:hidden
                `}
                aria-label='nav close'
                onClick={() => signUpOpen()}
              >
                <div className={`
                  w-[36px]
                  h-[24px]
                  my-auto
                  relative
                `}>
                  <div className={`
                      w-[100%]
                      h-[3px]
                      bg-black
                      absolute
                      left-0
                      top-[calc(50%-1.5px)]
                      rotate-[45deg]
                    `}
                  ></div>
                  <div className={`
                      w-[100%]
                      h-[3px]
                      bg-black
                      absolute
                      left-0
                      bottom-[calc(50%-1.5px)]
                      rotate-[-45deg]
                    `}
                  ></div>
                </div>
              </button>
            </form>
          </div>
        </div>
      ) : (<></>)}
    </>
  );
};

export default SignUp;
