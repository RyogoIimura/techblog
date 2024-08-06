'use client'
import Image from "next/image";
import PenLogo from '../../public/images/pen_logo.svg';
import UserLogo from '../../public/images/user_logo.svg';
import React, { useState } from "react";

import { poppins } from "../utils/fonts";

type HeaderProps = {
  page: string
};

const Header = (props: HeaderProps) => {
  const { page } = props;
  const buttonChoice = (name: string, hidden: boolean = false) => {
    if( name === 'Create'){
      return (
        <button className={`
          w-fit
          h-fit
          bg-[#383838]
          border-[1px]
          border-[#383838]
          rounded-[57px]
          pl-[36px]
          pr-[18px]
          py-[6px]
          my-auto
          relative

          md:ml-[24px]
        `}>
          <Image
            className={`
              w-[14px]
              h-auto
              absolute
              top-[50%]
              left-[18px]
              transform
              translate-y-[-50%]
            `}
            src={PenLogo}
            alt="PenLogo"
          />
          <p className={`
            ${poppins.className}
            text-white
            text-[14px]

            md:text-[14px]
          `}>Create</p>
        </button>
      )
    }
    if( name === 'Sign In'){
      return (
        <button className={`
          w-fit
          h-fit
          bg-[#d9d9d9]
          border-[1px]
          border-[#383838]
          rounded-[57px]
          px-[28px]
          py-[6px]

          md:my-auto
          md:ml-[24px]
          ${hidden ? 'hidden md:block' : ''}
        `}>
          <p className={`
            ${poppins.className}
            text-[#383838]
            text-[14px]

            md:text-[14px]
          `}>Sign In</p>
        </button>
      )
    }
    if( name === 'Publish'){
      return (
        <button className={`
          w-fit
          h-fit
          bg-[#18A0FB]
          border-[1px]
          border-[#18A0FB]
          rounded-[57px]
          px-[28px]
          py-[6px]
          my-auto

          md:ml-[24px]
        `}>
          <p className={`
            ${poppins.className}
            text-[#000]
            text-[14px]

            md:text-[14px]
          `}>Publish</p>
        </button>
      )
    }
    if( name === 'Logout'){
      return (
        <button className={`
          w-fit
          h-fit

          md:my-auto
          md:ml-[48px]
          ${hidden ? 'hidden md:block' : ''}
        `}>
          <Image
            className={`
              w-[48px]
              h-auto
            `}
            src={UserLogo}
            alt="UserLogo"
          />
        </button>
      )
    }
  }
  const headerButtonChange = () => {
    if( page === 'Write Blog'){
      return [ buttonChoice('Publish'), buttonChoice('Sign In', true) ]
    } else if ( page === 'Profile'){
      return [ buttonChoice('Create'), buttonChoice('Logout', true) ]
    } else {
      return [ buttonChoice('Create'), buttonChoice('Sign In', true) ]
    }
  }
  const navButtonChange = () => {
    if( page === 'Write Blog'){
      return [ buttonChoice('Publish'), buttonChoice('Sign In') ]
    } else if ( page === 'Profile'){
      return [ buttonChoice('Create'), buttonChoice('Logout') ]
    } else {
      return [ buttonChoice('Create'), buttonChoice('Sign In') ]
    }
  }

  const [nav, setNav] = useState<boolean>(false);
  const navOpen = () => {
    setNav(!nav);
    if (nav) {
      console.log('close')
    } else {
      console.log('open')
    }
  }

  return (
    <>
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
            <button className={`
              w-fit
              h-fit
              bg-[#383838]
              border-[1px]
              border-[#383838]
              rounded-[57px]
              px-[28px]
              py-[6px]
              hidden

              md:my-auto
              md:block
            `}>
              <p className={`
                ${poppins.className}
                text-white
                text-[14px]

                md:text-[14px]
                md:block
              `}>Home</p>
            </button>
            {headerButtonChange()}
          </div>
        </div>
      </div>
      <div
        className={`
          fixed
          z-105
          top-0
          right-0
          h-[180px]
          pl-[30px]
          pr-[74px]
          pt-[20px]
          pb-[30px]
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
        <button className={`
          w-fit
          h-fit
          bg-[#383838]
          border-[1px]
          border-[#383838]
          rounded-[57px]
          px-[28px]
          py-[6px]

          md:my-auto
        `}>
          <p className={`
            ${poppins.className}
            text-white
            text-[14px]

            md:text-[14px]
            md:block
          `}>Home</p>
        </button>
        {navButtonChange()}
      </div>
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
