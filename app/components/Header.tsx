'use client'
import React, { useState } from "react";

import { poppins } from "../utils/fonts";
import { HeaderButton } from "./HeaderButton";

type HeaderProps = {
  page: string
};

const Header = (props: HeaderProps) => {
  const { page } = props;
  const headerButtonChange = () => {
    if( page === 'Write Blog'){
      return [ HeaderButton('Home', 'hidden md:block'), HeaderButton('Publish'), HeaderButton('Sign In', 'hidden md:block') ]
    } else if ( page === 'Profile'){
      return [ HeaderButton('Home', 'hidden md:block'), HeaderButton('Create'), HeaderButton('Logout', 'hidden md:block') ]
    } else {
      return [ HeaderButton('Home', 'hidden md:block'), HeaderButton('Create'), HeaderButton('Sign In', 'hidden md:block') ]
    }
  }
  const navButtonChange = () => {
    if( page === 'Write Blog'){
      return [ HeaderButton('Home', 'mx-auto'), HeaderButton('Sign In', 'mx-[auto] mt-[40px]') ]
    } else if ( page === 'Profile'){
      return [ HeaderButton('Home', 'mx-auto'), HeaderButton('Logout', 'mx-[auto] mt-[40px]') ]
    } else {
      return [ HeaderButton('Home', 'mx-auto'), HeaderButton('Sign In', 'mx-[auto] mt-[40px]') ]
    }
  }

  const [nav, setNav] = useState<boolean>(false);
  const navOpen = () => setNav(!nav);

  return (
    <>
      {/* header */}
      <div className={`
        w-full
        fixed
        z-100
        top-0
        left-0
      `}>
        <div className={`
          w-full
          bg-[#d9d9d9]
          relative
          h-[74px]

          md:h-[90px]
        `}
        >
          <p className={`
            ${poppins.className}
            text-[34px]
            text-[#6b6b6b]
            font-semibold
            tracking-[.01em]
            absolute
            top-[50%]
            transform
            translate-y-[-50%]
            left-[calc(100vw*(68/750))]

            md:left-[50px]
          `}>LOGO</p>
          <div className={`
            absolute
            top-[50%]
            right-0
            transform
            translate-y-[-50%]
            flex
            pr-[74px]

            md:x-[450px]
            md:right-[44px]
            md:pr-0
          `}
          >
            {headerButtonChange()}
          </div>
        </div>
      </div>

      {/* nav menu */}
      <div
        className={`
          fixed
          z-105
          top-0
          right-0
          w-[100vw]
          h-[100vh]
          pt-[164px]
          bg-[#d9d9d9]
          flex
          flex-col
          transform
          ${nav ? 'translate-x-[100%] opacity-[0]' : 'translate-x-0 opacity-[1]'}
          md:hidden
        `}
        style={{
          transition: 'opacity .6s cubic-bezier(0.16, 1, 0.3, 1), transform .6s cubic-bezier(0.16, 1, 0.3, 1)'
        }}
      >
        {navButtonChange()}
      </div>

      {/* hamburger */}
      <button className={`
          fixed
          z-110
          top-0
          right-0
          w-[74px]
          h-[74px]
          flex
          justify-center

          md:hidden
        `}
        aria-label='hamburger'
        onClick={() => navOpen()}
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
              ${nav ? 'top-[0]' : 'top-[calc(50%-1.5px)] rotate-[45deg]'}
            `}
            style={{
              transition: 'transform .6s cubic-bezier(0.16, 1, 0.3, 1)'
            }}
          ></div>
          <div className={`
            w-[100%]
            h-[3px]
            bg-black
            absolute
            left-0
            top-[calc(50%-1.5px)]
            ${nav ? 'opacity-[1]' : 'opacity-[0]'}
            `}
            style={{
              transition: 'opacity .6s cubic-bezier(0.16, 1, 0.3, 1)'
            }}>
          </div>
          <div className={`
            w-[100%]
            h-[3px]
            bg-black
            absolute
            left-0
            ${nav ? 'bottom-[0]' : 'bottom-[calc(50%-1.5px)] rotate-[-45deg]'}
            `}
            style={{
              transition: 'transform .6s cubic-bezier(0.16, 1, 0.3, 1)'
            }}></div>
        </div>
      </button>
    </>
  );
};

export default Header;
