import styles from './buttom.module.scss'
import React, { ButtonHTMLAttributes } from 'react';

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement>;

const Button: React.FC<ButtonProps> = ({ children, ...rest }) => (
  <button className={styles.container} type="button" {...rest}>
    {children}
  </button>
);

export default Button;
