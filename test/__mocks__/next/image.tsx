/**
 * @file Mock para el componente <Image /> de Next.js.
 * Este mock permite que las pruebas se ejecuten correctamente en entornos de testing
 * como JSDOM, evitando errores relacionados con optimización o SSR.
 *
 * Reemplaza <Image> por un <img> estándar.
 */

import React from 'react';

/**
 * Mock simplificado de next/image para entorno de test.
 *
 * @param props - Atributos de una imagen estándar HTML.
 * @returns Un elemento <img> con las propiedades proporcionadas.
 */
const NextImage = (props: React.ImgHTMLAttributes<HTMLImageElement>) => {
    return <img {...props} />;
};

export default NextImage;
