import Head from 'next/head';
import Image from 'next/image';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { ClipLoader } from 'react-spinners';
import PhoneCardItem from '@/componentes/PhoneCard/PhoneCardItem';
import PhoneColorSelector from '@/componentes/PhoneDetail/PhoneColorSelector';
import PhoneStorageSelector from '@/componentes/PhoneDetail/PhoneStorageSelector';
import type { AppDispatch } from '@/redux/config/store';
import { addToCart } from '@/redux/slices/cartSlice';
import { getPhoneById } from '@/services/phoneService';
import type { PhoneDetail } from '@/types/phone/phone-detail.type';

const DEFAULT_IMAGE = '/default-phone-card.jpg';

/**
 * Página de detalle para un teléfono específico.
 * Muestra información del producto, permite seleccionar color y almacenamiento,
 * y muestra una lista de productos similares.
 */
export default function PhoneDetailPage() {
    const router = useRouter();
    const { id } = router.query;
    const [phone, setPhone] = useState<PhoneDetail | null>(null);
    const [selectedColor, setSelectedColor] = useState<string | null>(null);
    const [selectedStorage, setSelectedStorage] = useState<string | null>(null);
    const dispatch: AppDispatch = useDispatch();

    const handleAddToCart = () => {
        if (!selectedColor || !selectedStorage || !phone) return;

        dispatch(
            addToCart({
                id: phone.id,
                brand: phone.brand,
                name: phone.name,
                imageUrl: currentImage,
                color: selectedColor,
                storage: selectedStorage,
                price: currentPrice,
                quantity: 1,
            }),
        );

        void router.push('/cart');
    };

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
                <title>{`${phone.brand} ${phone.name} - Phone Details`}</title>
                <meta
                    name="description"
                    content={`${phone.brand} ${phone.name}: features, prices and options available.`}
                />
            </Head>

            <h1>
                {phone.brand} {phone.name}
            </h1>

            <Image
                src={currentImage}
                alt={`${phone.brand} ${phone.name} model image`}
                width={300}
                height={400}
                loading="lazy"
            />

            <p>Price: {currentPrice} €</p>

            <PhoneColorSelector
                options={phone.colorOptions}
                onSelect={setSelectedColor}
            />

            <PhoneStorageSelector
                options={phone.storageOptions}
                selected={selectedStorage}
                onSelect={setSelectedStorage}
            />

            <button
                onClick={handleAddToCart}
                disabled={!selectedColor || !selectedStorage}
            >
                Añadir al carrito
            </button>

            <section>
                <h2>Productos similares</h2>
                <div>
                    {phone.similarProducts.length > 0 ? (
                        phone.similarProducts.map((product) => (
                            <PhoneCardItem key={product.id} {...product} />
                        ))
                    ) : (
                        <p>No similar products available.</p>
                    )}
                </div>
            </section>
        </main>
    );
}
