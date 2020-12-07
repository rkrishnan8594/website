import React, { useContext } from 'react';
import { ThemeContext } from 'context/theme';
import styles from './Heading.module.scss';

type HeadingProps = {
    children: React.ReactNode;
    className: string;
};

export function Heading({ children, className }: HeadingProps): JSX.Element {
    const { theme } = useContext(ThemeContext);

    return <h1 className={`${styles.heading} ${theme}-font ${className}`}>{children}</h1>;
}
