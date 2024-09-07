'use client';

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
      <SignIn />
    </CommonProvider>
  )
};

export default CommonUi;