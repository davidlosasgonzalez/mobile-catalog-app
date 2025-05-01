import { CartItem } from '../../types/cart/cart-item.type';

export type ICartItemProps = {
    item: CartItem;
    onRemove: () => void;
    onIncrease: () => void;
    onDecrease: () => void;
};
