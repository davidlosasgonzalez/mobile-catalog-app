import styles from './PhoneSpecifications.module.scss';

import { PhoneDetailProps } from '@/interfaces/phone/phone-details-props.interdace';

/**
 * Muestra una tabla con las especificaciones técnicas del teléfono.
 *
 * @param phone - Objeto que contiene los datos del teléfono y sus especificaciones detalladas
 */
export default function PhoneSpecifications({ phone }: PhoneDetailProps) {
    return (
        <section className={styles['specs']}>
            <h3 className={styles['specs__title']}>Specifications</h3>

            <table className={styles['specs__table']}>
                <tbody>
                    <tr className={styles['specs__row']}>
                        <th className={styles['specs__cell--label']}>Brand</th>
                        <td className={styles['specs__cell']}>{phone.brand}</td>
                    </tr>
                    <tr className={styles['specs__row']}>
                        <th className={styles['specs__cell--label']}>Model</th>
                        <td className={styles['specs__cell']}>{phone.name}</td>
                    </tr>
                    <tr className={styles['specs__row']}>
                        <th className={styles['specs__cell--label']}>
                            Description
                        </th>
                        <td className={styles['specs__cell']}>
                            {phone.description}
                        </td>
                    </tr>
                    <tr className={styles['specs__row']}>
                        <th className={styles['specs__cell--label']}>Screen</th>
                        <td className={styles['specs__cell']}>
                            {phone.specs.screen}
                        </td>
                    </tr>
                    <tr className={styles['specs__row']}>
                        <th className={styles['specs__cell--label']}>
                            Resolution
                        </th>
                        <td className={styles['specs__cell']}>
                            {phone.specs.resolution}
                        </td>
                    </tr>
                    <tr className={styles['specs__row']}>
                        <th className={styles['specs__cell--label']}>
                            Processor
                        </th>
                        <td className={styles['specs__cell']}>
                            {phone.specs.processor}
                        </td>
                    </tr>
                    <tr className={styles['specs__row']}>
                        <th className={styles['specs__cell--label']}>
                            Main Camera
                        </th>
                        <td className={styles['specs__cell']}>
                            {phone.specs.mainCamera}
                        </td>
                    </tr>
                    <tr className={styles['specs__row']}>
                        <th className={styles['specs__cell--label']}>
                            Selfie Camera
                        </th>
                        <td className={styles['specs__cell']}>
                            {phone.specs.selfieCamera}
                        </td>
                    </tr>
                    <tr className={styles['specs__row']}>
                        <th className={styles['specs__cell--label']}>
                            Battery
                        </th>
                        <td className={styles['specs__cell']}>
                            {phone.specs.battery}
                        </td>
                    </tr>
                    <tr className={styles['specs__row']}>
                        <th className={styles['specs__cell--label']}>OS</th>
                        <td className={styles['specs__cell']}>
                            {phone.specs.os}
                        </td>
                    </tr>
                    <tr className={styles['specs__row']}>
                        <th className={styles['specs__cell--label']}>
                            Refresh Rate
                        </th>
                        <td className={styles['specs__cell']}>
                            {phone.specs.screenRefreshRate}
                        </td>
                    </tr>
                </tbody>
            </table>
        </section>
    );
}
