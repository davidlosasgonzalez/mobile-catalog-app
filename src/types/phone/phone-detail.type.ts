import { PhoneColorOption } from './phone-color-option.type';
import { PhoneStorageOption } from './phone-storage-option.type';
import { Phone } from './phone.type';

export type PhoneDetail = Phone & {
    description: string;
    rating: number;
    specs: {
        screen: string;
        resolution: string;
        processor: string;
        mainCamera: string;
        selfieCamera: string;
        battery: string;
        os: string;
        screenRefreshRate: string;
    };
    colorOptions: PhoneColorOption[];
    storageOptions: PhoneStorageOption[];
    similarProducts: Phone[];
};
