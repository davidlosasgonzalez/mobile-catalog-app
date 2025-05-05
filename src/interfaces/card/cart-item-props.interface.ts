import { CartItem } from '../../types/cart/cart-item.type';

export interface ICartItemProps {
    item: CartItem;
    onRemove: () => void;
    onIncrease: () => void;
    onDecrease: () => void;
}
