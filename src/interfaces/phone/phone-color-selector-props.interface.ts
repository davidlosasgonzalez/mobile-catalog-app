import { PhoneColorOption } from '@/types/phone/phone-color-option.type';

export interface IPhoneColorSelectorProps {
    options: PhoneColorOption[];
    selectedColor: string | null;
    onSelect: (colorName: string) => void;
}
