import { PersistConfig } from 'redux-persist';

import { storage } from '@/utils/conditionalStorage';

/**
 * Persistence configuration of redux-persist.
 */
const persistConfig: PersistConfig<any> = {
    key: 'root',
    storage,
    whitelist: ['phones'],
};

export default persistConfig;
