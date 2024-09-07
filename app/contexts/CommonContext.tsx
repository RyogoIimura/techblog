import { useState, createContext, ReactNode, SetStateAction, Dispatch } from 'react';

export type ContextTypes = {
  signInMdFlag: boolean
  signInOpen: () => void
};

// Contextオブジェクトを生成する
export const CommonContext = createContext<ContextTypes>({
    signInMdFlag: false,
    signInOpen: () => {}
});

// 生成したContextオブジェクトのProviderを定義する
export const CommonProvider = ({ children }: { children: ReactNode }) => {
  // SignIn, SignUp のモーダル表示、非表示
  const [signInMdFlag, setSignInMdFlag] = useState(false);
  const signInOpen = () => setSignInMdFlag(!signInMdFlag);

  return (
    <CommonContext.Provider value={{
      signInMdFlag,
      signInOpen
    }}>
      {children}
    </CommonContext.Provider>
  );
}
