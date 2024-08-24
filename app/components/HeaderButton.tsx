import React, { useState, useContext } from "react";
import Link from "next/link";

import Image from "next/image";
import PenLogo from "../../public/images/pen_logo.svg";
import UserLogo from "../../public/images/user_logo.svg";
import { poppins } from "../utils/fonts";
import { CommonContext } from "../contexts/CommonContext";

export const HeaderButton = (
  name: string,
  button?: string,
  p?: string,
  onClick?: () => void
) => {
  const context = useContext(CommonContext);
  const { signInFlag, setSignInFlag, signInOpen } = context;

  const [logoutMdFlag, setLogoutMdFlag] = useState(false);
  const logoutOpen = () => setLogoutMdFlag(!logoutMdFlag);
  const handleLogout = (e: React.FormEvent) => {
    e.preventDefault();

    setSignInFlag(!signInFlag);
  };

  if (name === "Create") {
    return (
      <Link
        className={`
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
        key="Create"
        href="./create"
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
        <p
          className={`
          ${poppins.className}
          text-white
          text-[14px]

          md:text-[14px]
          ${p}
        `}
        >
          Create
        </p>
      </Link>
    );
  }
  if (name === "Sign In") {
    return (
      <button
        className={`
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
        key="Sign In"
        onClick={() => signInOpen()}
      >
        <p
          className={`
          ${poppins.className}
          text-[#383838]
          text-[14px]

          md:text-[14px]
          ${p}
        `}
        >
          Sign In
        </p>
      </button>
    );
  }
  if (name === "Publish") {
    return (
      <button
        onClick={onClick}
        className={`
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
        key="Publish"
      >
        <p
          className={`
          ${poppins.className}
          text-[#000]
          text-[14px]

          md:text-[14px]
          ${p}
        `}
        >
          Publish
        </p>
      </button>
    );
  }
  if (name === "Logout") {
    return (
      <div
        className={`
          w-fit
          h-fit
          relative

          md:my-auto
          md:ml-[48px]
          ${button}
        `}
      >
        <button
          className={`
            w-fit
            h-fit
          `}
          key="Logout Open"
          onClick={() => logoutOpen()}
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
        {logoutMdFlag ? (
          <div
            className={`
            w-fit
            h-fit
            px-[18px]
            py-[16px]
            bg-[#B3B3B3]
            rounded-[14px]
            absolute
            bottom-0
            left-[50%]
            transform
            translate-x-[-50%]
            translate-y-[calc(100%+6px)]
          `}
          >
            <p
              className={`
              font-[26px]
              font-semibold
              whitespace-nowrap
              text-center
              ${poppins.className}
            `}
            >
              User name
            </p>
            <button
              className={`
                w-fit
                y-fit
                px-[30px]
                py-[4px]
                mt-[10px]
                bg-[rgba(255,49,49,.5)]
                rounded-[32px]
              `}
              key="Logout"
              onClick={handleLogout}
            >
              <p
                className={`
                font-[26px]
                font-semibold
                whitespace-nowrap
                text-center
                ${poppins.className}
              `}
              >
                Logout
              </p>
            </button>
          </div>
        ) : (
          <></>
        )}
      </div>
    );
  }
  if (name === "Home") {
    return (
      <Link
        className={`
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
        key="Home"
        href="./home"
      >
        <p
          className={`
          ${poppins.className}
          text-white
          text-[14px]

          md:block
          ${p}
        `}
        >
          Home
        </p>
      </Link>
    );
  }
};
