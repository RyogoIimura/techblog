import styles from "./page.module.css";

import SignUp from "./components/SignUp";
import SignIn from "./components/SignIn";
import Header from "./components/Header";

export default function Home() {
  return (
    <>
      <SignUp />
      <SignIn />
      <Header page='Home' />
      <div>Hello World!</div>
    </>
  );
}
