import { ImgHTMLAttributes } from 'react';

/**
 * Mock simplificado de next/image para entorno de test. Este mock permite que
 * las pruebas se ejecuten correctamente reemplazando <Image> por un <img> estándar.
 *
 * @param props - Atributos de una imagen estándar HTML.
 * @returns Un elemento <img> con las propiedades proporcionadas.
 */
const NextImage = (props: ImgHTMLAttributes<HTMLImageElement>) => {
    return <img {...props} />;
};

export default NextImage;
