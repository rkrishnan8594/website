import React, { useContext } from 'react';
import { ThemeContext, Theme } from 'context/theme';
import styles from './LightSwitch.module.scss';

export function LightSwitch(): JSX.Element {
    const { theme, toggleTheme } = useContext(ThemeContext);

    return (
        <div className={styles.container}>
            <label className={styles.switch}>
                <input
                    className={styles.switchInput}
                    type="checkbox"
                    onChange={() => toggleTheme(theme)}
                    checked={theme === Theme.Dark}
                />
                <div className={styles.slider}></div>
            </label>
        </div>
    );
}
