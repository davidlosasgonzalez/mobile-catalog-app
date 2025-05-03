import Head from 'next/head';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { ClipLoader } from 'react-spinners';

import styles from './PhoneDetailPage.module.scss';

import PhoneColorSelector from '@/components/PhoneDetail/PhoneColorSelector/PhoneColorSelector';
import PhoneStorageSelector from '@/components/PhoneDetail/PhoneStorageSelector/PhoneStorageSelector';
import PhoneSpecifications from '@/components/PhoneSpecifications/PhoneSpecifications';
import BackHomeButton from '@/components/shared/BackButton/BackButton';
import PhoneCardList from '@/components/shared/PhoneCard/PhoneCardList/PhoneCardList';
import { AppDispatch } from '@/redux/config/store';
import { addToCart } from '@/redux/slices/cartSlice';
import { getPhoneById } from '@/services/phoneService';
import { PhoneDetail } from '@/types/phone/phone-detail.type';

const DEFAULT_IMAGE = '/default-phone-card.jpg';

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
        return (
            <div className={styles['phone-detail__loader']}>
                <div className={styles['phone-detail__loader-spinner']}>
                    <ClipLoader size={40} color="#333" speedMultiplier={1} />
                    <span>Loading phone details...</span>
                </div>
            </div>
        );
    }

    const currentImage =
        phone.colorOptions.find((opt) => opt.name === selectedColor)
            ?.imageUrl || DEFAULT_IMAGE;

    const currentPrice =
        phone.storageOptions.find((opt) => opt.capacity === selectedStorage)
            ?.price ?? phone.basePrice;

    return (
        <main className={styles['phone-detail']}>
            <Head>
                <title>{`${phone.brand} ${phone.name} - Phone Details`}</title>
                <meta
                    name="description"
                    content={`${phone.brand} ${phone.name}: features, prices and options available.`}
                />
            </Head>

            <BackHomeButton />

            <div className={styles['phone-detail__content-wrapper']}>
                <article className={styles['phone-detail__container']}>
                    <section className={styles['phone-detail__image-section']}>
                        <div className={styles['phone-detail__image-wrapper']}>
                            <Image
                                src={`/api/image-proxy?url=${encodeURIComponent(currentImage || DEFAULT_IMAGE)}`}
                                alt={`${phone.brand} ${phone.name} model image`}
                                className={styles['phone-detail__image']}
                                fill
                                priority
                            />
                        </div>
                    </section>

                    <section className={styles['phone-detail__info']}>
                        <h2 className={styles['phone-detail__title']}>
                            {phone.name}
                        </h2>

                        <p className={styles['phone-detail__price']}>
                            {currentPrice} eur
                        </p>

                        <PhoneStorageSelector
                            options={phone.storageOptions}
                            selected={selectedStorage}
                            onSelect={setSelectedStorage}
                        />

                        <PhoneColorSelector
                            options={phone.colorOptions}
                            selectedColor={selectedColor}
                            onSelect={setSelectedColor}
                        />

                        <button
                            onClick={handleAddToCart}
                            disabled={!selectedColor || !selectedStorage}
                            className={styles['phone-detail__add-to-cart']}
                        >
                            Add to Cart
                        </button>
                    </section>
                </article>

                <PhoneSpecifications phone={phone} />

                <section className={styles['phone-detail__similar']}>
                    <h3 className={styles['phone-detail__similar-title']}>
                        Similar items
                    </h3>
                    <PhoneCardList phones={phone.similarProducts} />
                </section>
            </div>
        </main>
    );
}
