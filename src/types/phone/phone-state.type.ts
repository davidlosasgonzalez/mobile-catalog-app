import { Phone } from './phone.type';

export type PhoneState = {
    phones: Phone[];
    loading: boolean;
    error: string | null;
};
