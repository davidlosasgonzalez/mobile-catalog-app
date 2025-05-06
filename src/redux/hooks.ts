import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';

import { RootState, AppDispatch } from './config/store';

/**
 * Hook typed to access the AppDispatch.
 */
export const useAppDispatch: () => AppDispatch = useDispatch;

/**
 * Hook typed to access the RootState.
 */
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
