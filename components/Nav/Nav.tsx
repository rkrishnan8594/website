import Image from 'next/image';
import Link from 'next/link';
import styles from './Nav.module.scss';

export function Nav(): JSX.Element {
    return (
        <div className={styles.container}>
            <Image src="/logo.svg" alt="RK" width={74} height={24} />
            <p className={styles.links}>
                <Link href="https://www.linkedin.com/in/rowankrishnan/" passHref>
                    resume
                </Link>
                ,{' '}
                <Link href="https://www.linkedin.com/in/rowankrishnan/" passHref>
                    linkedin
                </Link>
                ,{' '}
                <Link href="https://github.com/rkrishnan8594" passHref>
                    github
                </Link>
            </p>
        </div>
    );
}
