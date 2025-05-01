import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import type { RootState, AppDispatch } from './config/store';

/**
 * Hook tipado para acceder al AppDispatch.
 */
export const useAppDispatch: () => AppDispatch = useDispatch;

/**
 * Hook tipado para acceder al RootState.
 */
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
