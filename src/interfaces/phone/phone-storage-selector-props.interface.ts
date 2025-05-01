import { PhoneStorageOption } from '@/types/phone/phone-storage-option.type';

export type IPhoneStorageSelectorProps = {
    options: PhoneStorageOption[];
    selected: string | null;
    onSelect: (value: string) => void;
};
