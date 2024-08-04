import styles from "./page.module.css";

import SignUp from "./components/SignUp";
import SignIn from "./components/SignIn";
import Header from "./components/Header";

export default function Home() {
  return (
    <>
      <Header page='Profile' />
      <div>Hello World!</div>
      <SignUp />
      <SignIn />
    </>
  );
}
