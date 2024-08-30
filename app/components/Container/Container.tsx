import React, { ReactNode, CSSProperties } from 'react';
import styles from './container.module.css'

type Props = {
  children: ReactNode;
  className?: string;
  style?: CSSProperties;
};

export const Container = ({ children , className ,style}:Props) => {
  return (
    <div className={`${styles.container} ${className || ''}`} style={style}>
      {children}
    </div>
  );
};