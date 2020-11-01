import styles from './Page.module.scss';

export const Page = ({ children }) => {
    return <div className={styles.container}>{children}</div>;
};
