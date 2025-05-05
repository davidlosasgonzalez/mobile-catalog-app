import { PersistConfig } from 'redux-persist';
import { storage } from '@/utils/conditionalStorage';

/**
 * Configuración de persistencia de redux-persist.
 */
const persistConfig: PersistConfig<any> = {
    key: 'root',
    storage,
    whitelist: ['phones'],
};

export default persistConfig;
