import Head from 'next/head';
import Image from 'next/image';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import { ClipLoader } from 'react-spinners';
import PhoneCardItem from '@/componentes/PhoneCardItem';
import { getPhoneById } from '@/services/phoneService';
import type { PhoneDetail } from '@/types/phone.types';

const DEFAULT_IMAGE = '/default-phone-card.jpg';

/**
 * Página de detalle para un teléfono específico.
 * Permite seleccionar color y almacenamiento con cambios dinámicos de imagen y precio.
 */
export default function PhoneDetailPage() {
    const router = useRouter();
    const { id } = router.query;
    const [phone, setPhone] = useState<PhoneDetail | null>(null);
    const [selectedColor, setSelectedColor] = useState<string | null>(null);
    const [selectedStorage, setSelectedStorage] = useState<string | null>(null);

    useEffect(() => {
        const fetchPhone = async () => {
            if (typeof id !== 'string') return;

            try {
                const data = await getPhoneById(id);

                setPhone(data);
                setSelectedColor(data.colorOptions?.[0]?.name ?? null);
                setSelectedStorage(data.storageOptions?.[0]?.capacity ?? null);
            } catch {
                setPhone(null);
            }
        };

        void fetchPhone();
    }, [id]);

    if (!phone) {
        return <ClipLoader size={40} color="#333" speedMultiplier={1} />;
    }

    const currentImage =
        phone.colorOptions.find((opt) => opt.name === selectedColor)
            ?.imageUrl || DEFAULT_IMAGE;
    const currentPrice =
        phone.storageOptions.find((opt) => opt.capacity === selectedStorage)
            ?.price ?? phone.basePrice;

    return (
        <main>
            <Head>
                <title>{`${phone.brand} ${phone.name} - Catálogo de Teléfonos`}</title>
                <meta
                    name="description"
                    content={`${phone.brand} ${phone.name}: características, precios y opciones disponibles.`}
                />
            </Head>

            <h1>
                {phone.brand} {phone.name}
            </h1>

            <Image
                src={currentImage}
                alt={`Imagen del modelo ${phone.brand} ${phone.name}`}
                width={300}
                height={400}
                loading="lazy"
            />

            <p>Precio: {currentPrice} €</p>

            <section>
                <h3>Color:</h3>
                <div>
                    {phone.colorOptions.map((color) => (
                        <button
                            key={color.name}
                            onClick={() => setSelectedColor(color.name)}
                            aria-label={color.name}
                            title={color.name}
                        />
                    ))}
                </div>
            </section>

            <section>
                <h3>Almacenamiento:</h3>
                <select
                    value={selectedStorage ?? ''}
                    onChange={(e) => setSelectedStorage(e.target.value)}
                >
                    {phone.storageOptions.map((opt) => (
                        <option key={opt.capacity} value={opt.capacity}>
                            {opt.capacity}
                        </option>
                    ))}
                </select>
            </section>

            <section>
                <h2>Productos similares</h2>
                <div>
                    {phone.similarProducts.map((product) => (
                        <PhoneCardItem key={product.id} {...product} />
                    ))}
                </div>
            </section>
        </main>
    );
}
