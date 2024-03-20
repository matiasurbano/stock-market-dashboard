"use client";

import * as styles from "./Button.css";

import { ReactNode } from "react";

interface ButtonProps {
  children: ReactNode;
  className?: string;
  appName: string;
}

export const Button = ({ children, appName }: ButtonProps) => {
  return (
    <button
      className={styles.root}
      onClick={() => alert(`Hello from your ${appName} app!`)}
    >
      {children}
    </button>
  );
};
