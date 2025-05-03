import Image from 'next/image';
import Link from 'next/link';

import styles from './BackButton.module.scss';

/**
 * Botón de navegación para volver a la página principal.
 */
export default function BackHomeButton() {
    return (
        <Link href="/" className={styles.back}>
            <Image
                src="/back-icon.svg"
                alt="Back"
                width={16}
                height={16}
                className={styles.icon}
            />
            <span>Back</span>
        </Link>
    );
}
