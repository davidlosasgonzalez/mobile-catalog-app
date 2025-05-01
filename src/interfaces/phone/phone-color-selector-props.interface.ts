import { PhoneColorOption } from '@/types/phone/phone-color-option.type';

export type IPhoneColorSelectorProps = {
    options: PhoneColorOption[];
    onSelect: (colorName: string) => void;
};
