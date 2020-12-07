import React, { useContext } from 'react';
import { ThemeContext } from 'context/theme';
import styles from './Text.module.scss';

type TextProps = {
    children: React.ReactNode;
    className: string;
};

export function Text({ children, className }: TextProps): JSX.Element {
    const { theme } = useContext(ThemeContext);

    return <p className={`${styles.text} ${theme}-font ${className}`}>{children}</p>;
}
