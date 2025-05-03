const TTL_MINUTES = 5;

/**
 * Verifica si una caché es válida en función del tiempo transcurrido desde su almacenamiento.
 *
 * @param timestamp - Fecha y hora ISO en la que se almacenaron los datos en caché.
 * @returns `true` si la caché sigue siendo válida (menos de 5 minutos), `false` en caso contrario.
 */
export const isCacheValid = (timestamp: string): boolean => {
    const cachedTime = new Date(timestamp);
    const now = new Date();

    return now.getTime() - cachedTime.getTime() < TTL_MINUTES * 60 * 1000;
};
