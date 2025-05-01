import Image from 'next/image';
import React from 'react';
import { IPhoneImageProps } from '@/interfaces/phone/phone-image-props.interface';

/**
 * Muestra la imagen principal del teléfono.
 */
export default function PhoneImage({ src, alt }: IPhoneImageProps) {
    return (
        <Image src={src} alt={alt} width={300} height={400} loading="lazy" />
    );
}
