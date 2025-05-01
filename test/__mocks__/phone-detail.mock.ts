import type { PhoneDetail } from '@/types/phone.types';

/**
 * Mock detallado para pruebas de la vista PhoneDetailPage.
 */
export const mockPhoneDetail: PhoneDetail = {
    id: '123',
    brand: 'Samsung',
    name: 'Galaxy S23',
    basePrice: 799,
    imageUrl: 'https://example.com/galaxy-s23.jpg',
    description: 'Smartphone de alta gama con excelentes prestaciones.',
    rating: 4.5,
    specs: {
        screen: '6.1"',
        resolution: '2340x1080',
        processor: 'Snapdragon 8 Gen 2',
        mainCamera: '50 MP',
        selfieCamera: '12 MP',
        battery: '3900 mAh',
        os: 'Android 13',
        screenRefreshRate: '120Hz',
    },
    colorOptions: [
        {
            name: 'Negro',
            hexCode: '#000000',
            imageUrl: '/mock-black.jpg',
        },
    ],
    storageOptions: [
        {
            capacity: '128GB',
            price: 799,
        },
        {
            capacity: '256GB',
            price: 899,
        },
    ],
    similarProducts: [],
};
