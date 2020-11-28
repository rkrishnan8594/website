import Image from 'next/image';
import Link from 'next/link';
import styles from './Nav.module.scss';

export function Nav(): JSX.Element {
    return (
        <div className={styles.container}>
            <Image src="/logo.svg" alt="RK" width={74} height={24} />
            <div className={styles.links}>
                <Link href="https://www.linkedin.com/in/rowankrishnan/" passHref>
                    <a className={styles.link} target="_blank">
                        <Image src="/linkedin.svg" alt="RK" width={24} height={24} />
                    </a>
                </Link>
                <Link href="https://github.com/rkrishnan8594" passHref>
                    <a className={styles.link} target="_blank">
                        <Image src="/github.svg" alt="RK" width={24} height={24} />
                    </a>
                </Link>
            </div>
        </div>
    );
}
