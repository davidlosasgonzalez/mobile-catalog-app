import Image from 'next/image';
import Link from 'next/link';

import styles from './BackButton.module.scss';

/**
 * Navigation button to return to the homepage.
 */
export default function BackHomeButton() {
    return (
        <Link href="/" className={styles.back} aria-label="Go back to home">
            <Image
                src="/back-icon.svg"
                alt=""
                width={16}
                height={16}
                className={styles.icon}
            />
            <span>Back</span>
        </Link>
    );
}
