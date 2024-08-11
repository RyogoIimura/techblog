'use client';
import { useState } from "react";

import SignUp from "./SignUp";
import SignIn from "./SignIn";
import Header from "./Header";

type CommonUiProps = {
  name: string;
}

const CommonUi = (props: CommonUiProps) => {
  const { name } = props;

  const [signInFlag, setSignInFlag] = useState<boolean>(true);
  const signInOpen = () =>  {
    setSignInFlag(!signInFlag);
    console.log(signInFlag);
  }

  return (
    <>
      <SignUp />
      <SignIn />
      <Header page={name} />
      <div>Hello World!</div>
    </>
  )
};

export default CommonUi;