import styles from './PhoneSpecifications.module.scss';

import { PhoneDetailProps } from '@/interfaces/phone/phone-details-props.interdace';

/**
 * Displays a table with the phone's technical specifications.
 *
 * @param phone - The phone object containing detailed specifications
 */
export default function PhoneSpecifications({ phone }: PhoneDetailProps) {
    return (
        <section className={styles['specs']} aria-labelledby="specs-heading">
            <h3 id="specs-heading" className={styles['specs__title']}>
                Specifications
            </h3>

            <table className={styles['specs__table']}>
                <caption className="sr-only">
                    Technical specifications of the phone
                </caption>
                <tbody>
                    {[
                        ['Brand', phone.brand],
                        ['Model', phone.name],
                        ['Description', phone.description],
                        ['Screen', phone.specs.screen],
                        ['Resolution', phone.specs.resolution],
                        ['Processor', phone.specs.processor],
                        ['Main Camera', phone.specs.mainCamera],
                        ['Selfie Camera', phone.specs.selfieCamera],
                        ['Battery', phone.specs.battery],
                        ['OS', phone.specs.os],
                        ['Refresh Rate', phone.specs.screenRefreshRate],
                    ].map(([label, value]) => (
                        <tr key={label} className={styles['specs__row']}>
                            <th
                                scope="row"
                                className={styles['specs__cell--label']}
                            >
                                {label}
                            </th>
                            <td className={styles['specs__cell']}>{value}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </section>
    );
}
