'use client';

import SignUp from "./SignUp";
import SignIn from "./SignIn";
import Header from "./Header";
import { CommonProvider } from "../contexts/CommonContext";

type CommonUiProps = {
  name: string;
}

const CommonUi = (props: CommonUiProps) => {
  const { name } = props;

  return (
    <CommonProvider>
      <Header page={name} />
      <SignUp />
      <SignIn />
    </CommonProvider>
  )
};

export default CommonUi;