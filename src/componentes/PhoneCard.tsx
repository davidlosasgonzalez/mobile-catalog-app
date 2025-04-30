import Image from 'next/image';

type PhoneCardProps = {
    name: string;
    brand: string;
    price: string;
    image: string;
};

export default function PhoneCard({
    name,
    brand,
    price,
    image,
}: PhoneCardProps) {
    return (
        <div>
            <Image
                src={image}
                alt={`${brand} ${name}`}
                width={200}
                height={300}
                style={{ objectFit: 'contain' }}
            />
            <h3>
                {brand} {name}
            </h3>
            <p>Precio base: {price}</p>
        </div>
    );
}
