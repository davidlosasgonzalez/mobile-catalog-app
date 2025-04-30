import Head from 'next/head';
import PhoneCard from '@/componentes/PhoneCard';

// TODO: cambiar por llamada a API.
const mockPhones = [
    {
        name: 'iPhone 15',
        brand: 'Apple',
        price: '999€',
        image: '/fake-img-1.jpg',
    },
    {
        name: 'Galaxy S23',
        brand: 'Samsung',
        price: '899€',
        image: '/fake-img-2.jpg',
    },
];

export default function HomePage() {
    return (
        <>
            <Head>
                <title>Catálogo de Teléfonos</title>
                <meta
                    name="description"
                    content="Visualiza y gestiona teléfonos móviles"
                />
            </Head>

            <section>
                <h2>Catálogo de Teléfonos</h2>
                <p>Aquí se mostrará la lista de teléfonos disponibles.</p>

                <div className="phone-grid">
                    {mockPhones.map((phone, index) => (
                        <PhoneCard key={index} {...phone} />
                    ))}
                </div>
            </section>
        </>
    );
}
