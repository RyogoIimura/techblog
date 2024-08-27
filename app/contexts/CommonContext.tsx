import { useState, createContext, ReactNode, SetStateAction, Dispatch } from 'react';

export type userType = {
  username?: string | undefined
  email: string | undefined
  password: string | undefined
};

export type ContextTypes = {
  signInFlag: boolean
  setSignInFlag: Dispatch<SetStateAction<boolean>>

  signInMdFlag: boolean
  signInOpen: () => void
  signUpMdFlag: boolean
  signUpOpen: () => void
};

// Contextオブジェクトを生成する
export const CommonContext = createContext<ContextTypes>({
    signInFlag: false,
    setSignInFlag: () => {},

    signInMdFlag: false,
    signInOpen: () => {},
    signUpMdFlag: false,
    signUpOpen: () => {}
});

// 生成したContextオブジェクトのProviderを定義する
export const CommonProvider = ({ children }: { children: ReactNode }) => {
  // SignIn の状態を保持
  const [signInFlag, setSignInFlag] = useState<boolean>(false);

  // SignIn, SignUp のモーダル表示、非表示
  const [signInMdFlag, setSignInMdFlag] = useState(false);
  const signInOpen = () => setSignInMdFlag(!signInMdFlag);
  const [signUpMdFlag, setSignUpMdFlag] = useState(false);
  const signUpOpen = () => setSignUpMdFlag(!signUpMdFlag);

  return (
    <CommonContext.Provider value={{
      signInFlag,
      setSignInFlag,

      signInMdFlag,
      signInOpen,
      signUpMdFlag,
      signUpOpen
    }}>
      {children}
    </CommonContext.Provider>
  );
}
