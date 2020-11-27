import Image from 'next/image';
import Link from 'next/link';
import { Page } from 'components';
import styles from './Home.module.scss';

export function Home(): JSX.Element {
    return (
        <Page title="Rowan Krishnan">
            <div className={styles.container}>
                <div className={styles.image}>
                    <Image src="/rowan.jpg" alt="Rowan Krishnan" width={120} height={119} />
                </div>
                <div className={styles.content}>
                    <span className={styles.topLine}>
                        <div className={styles.mobileImage}>
                            <Image src="/rowan.jpg" alt="Rowan Krishnan" width={80} height={79} />
                        </div>
                        <h1 className={styles.intro}>Hi, I&apos;m Rowan.</h1>
                    </span>
                    <p className={styles.paragraph}>
                        I build software products and lead engineering teams. For the past three years, I’ve been
                        writing code, designing processes, and growing people at{' '}
                        <Link href="https://www.lola.com/" passHref>
                            Lola.com.
                        </Link>{' '}
                    </p>
                    <p className={styles.paragraph}>
                        Previously, I worked at{' '}
                        <Link href="https://upstatement.com/" passHref>
                            Upstatement
                        </Link>{' '}
                        and{' '}
                        <Link href="https://dockyard.com/" passHref>
                            DockYard
                        </Link>
                        , where I built web applications and user interfaces for clients such as ESPN, Apple, and
                        Zipcar.
                    </p>
                    <p className={styles.paragraph}>
                        These days, I spend a lot of time thinking about managing{' '}
                        <Link href="https://increment.com/remote/leverage-metrics-to-manage-remotely/" passHref>
                            distributed teams
                        </Link>
                        , maintaining{' '}
                        <Link href="https://lethain.com/managing-technical-quality/" passHref>
                            code quality
                        </Link>{' '}
                        in a high-touch system, and writing sound{' '}
                        <Link
                            href="https://stackoverflow.blog/2020/04/06/a-practical-guide-to-writing-technical-specs/"
                            passHref
                        >
                            technical documentation
                        </Link>
                        . Feel free to shoot me an{' '}
                        <Link href="mailto:rowan.krishnan@gmail.com" passHref>
                            email
                        </Link>{' '}
                        if you want to chat about any of those subjects, or if you want to simply get in touch.
                    </p>
                </div>
            </div>
        </Page>
    );
}
