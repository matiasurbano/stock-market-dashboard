import * as styles from "./Button.css";
import { FC, ReactNode } from "react";

interface ButtonProps {
  children: ReactNode;
  disabled?: boolean;
  handleOnClick?: () => void;
}

export const Button: FC<ButtonProps> = ({
  disabled,
  handleOnClick,
  children,
}) => {
  return (
    <button className={styles.root} disabled={disabled} onClick={handleOnClick}>
      {children}
    </button>
  );
};
