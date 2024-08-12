import { useState, createContext, ReactNode, SetStateAction } from 'react';

export type ContextTypes = {
  signInFlag: boolean

  signInMdFlag: boolean
  signUpMdFlag: boolean
  signInOpen: () => void
  signUpOpen: () => void
};

// Contextオブジェクトを生成する
export const CommonContext = createContext<ContextTypes | undefined>(undefined);

// 生成したContextオブジェクトのProviderを定義する
export const CommonProvider = ({ children }: { children: ReactNode }) => {
  // SignIn の状態を保持
  const [signInFlag, setSignInFlag] = useState(false);

  // SignIn, SignOut のモーダル表示、非表示
  const [signInMdFlag, setSignInMdFlag] = useState(false);
  const signInOpen = () => setSignInMdFlag(!signInMdFlag);
  const [signUpMdFlag, setSignUpMdFlag] = useState(false);
  const signUpOpen = () => setSignUpMdFlag(!signUpMdFlag);

  return (
    <CommonContext.Provider value={{
      signInFlag,
      signInMdFlag,
      signInOpen,
      signUpMdFlag,
      signUpOpen
    }}>
      {children}
    </CommonContext.Provider>
  );
}
