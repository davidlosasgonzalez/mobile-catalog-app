import { ImgHTMLAttributes } from 'react';

/**
 * Simplified `next/image mock` for testing environments. This mock allows tests to run correctly by replacing <Image> with a standard <img>.
 *
 * @param props - Attributes of a standard HTML image
 * @returns An <img> element with the provided properties
 */

const NextImage = (props: ImgHTMLAttributes<HTMLImageElement>) => {
    return <img {...props} />;
};

export default NextImage;
