import React, { useState } from "react";

import Image from "next/image";
import PenLogo from '../../public/images/pen_logo.svg';
import UserLogo from '../../public/images/user_logo.svg';
import { poppins } from "../utils/fonts";


export const HeaderButton = (name: string, button?: string, p?: string) => {

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
          ${button}
        `}
        key='Create'
      >
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
          ${p}
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
          ${button}
        `}
        key='Sign In'
      >
        <p className={`
          ${poppins.className}
          text-[#383838]
          text-[14px]

          md:text-[14px]
          ${p}
        `}>Sign In</p>
      </button>
    )
  }
  if( name === 'Publish'){
    return (
      <button className={`
          ${button}
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
        `}
        key='Publish'
      >
        <p className={`
          ${poppins.className}
          text-[#000]
          text-[14px]

          md:text-[14px]
          ${p}
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
          ${button}
        `}
        key='Logout'
      >
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
  if( name === 'Home'){
    return (
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
          ${button}
        `}
        key='Home'
      >
        <p className={`
          ${poppins.className}
          text-white
          text-[14px]

          md:block
          ${p}
        `}>Home</p>
      </button>
    )
  }
};
