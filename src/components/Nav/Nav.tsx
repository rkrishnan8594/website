import React, { useContext } from 'react';
import Link from 'next/link';
import { ThemeContext } from 'context/theme';
import { LightSwitch } from 'components';
import styles from './Nav.module.scss';

export function Nav(): JSX.Element {
    const { theme } = useContext(ThemeContext);

    return (
        <div className={styles.container}>
            <img src={`/logo-${theme}.svg`} alt="RK" width={74} height={24} />
            <div className={styles.links}>
                <Link href="https://www.linkedin.com/in/rowankrishnan/" passHref>
                    <a className={styles.link} target="_blank">
                        <img src={`/linkedin-${theme}.svg`} alt="RK" width={24} height={24} />
                    </a>
                </Link>
                <Link href="https://github.com/rkrishnan8594" passHref>
                    <a className={styles.link} target="_blank">
                        <img src={`/github-${theme}.svg`} alt="RK" width={24} height={24} />
                    </a>
                </Link>
                <LightSwitch />
            </div>
        </div>
    );
}
