import { PhoneStorageOption } from '@/types/phone/phone-storage-option.type';

export interface IPhoneStorageSelectorProps {
    options: PhoneStorageOption[];
    selected: string | null;
    onSelect: (value: string) => void;
}
