import classNames from "classnames";
import React from "react";
import styles from "./Button.module.css";

interface Props {
  type: string;
  onClick: () => void;
  children?: React.ReactNode;
}

const Button  = (props: Props) => {
  return (
    <button className={classNames(styles.button, props.type === 'primary' ? styles.primary : styles.default)} onClick={props.onClick}>
      {props.children}
    </button>
  );
};

export default Button;
