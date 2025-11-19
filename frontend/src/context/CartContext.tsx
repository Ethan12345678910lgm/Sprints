import { createContext, useContext, useState, ReactNode } from 'react';
import toast from 'react-hot-toast';
import { Product } from '../data/mockData';

type CartItem = { product: Product; quantity: number };

interface CartContextValue {
    items: CartItem[];
    addItem: (product: Product) => void;
    removeItem: (id: number) => void;
    updateQuantity: (id: number, qty: number) => void;
    clear: () => void;
}

const CartContext = createContext<CartContextValue | undefined>(undefined);

export const CartProvider = ({ children }: { children: ReactNode }) => {
    const [items, setItems] = useState<CartItem[]>([]);

    const addItem = (product: Product) => {
        setItems((prev) => {
            const existing = prev.find((i) => i.product.id === product.id);
            if (existing) {
                return prev.map((i) =>
                    i.product.id === product.id ? { ...i, quantity: i.quantity + 1 } : i
                );
            }
            return [...prev, { product, quantity: 1 }];
        });
        toast.success(`${product.name} added to bag`);
    };

    const removeItem = (id: number) => {
        setItems((prev) => prev.filter((i) => i.product.id !== id));
    };

    const updateQuantity = (id: number, qty: number) => {
        const normalizedQty = Number.isFinite(qty) && qty > 0 ? qty : 1;
        setItems((prev) => prev.map((i) => (i.product.id === id ? { ...i, quantity: normalizedQty } : i)));
    };

    const clear = () => setItems([]);

    return (
        <CartContext.Provider value={{ items, addItem, removeItem, updateQuantity, clear }}>
            {children}
        </CartContext.Provider>
    );
};

export const useCart = () => {
    const ctx = useContext(CartContext);
    if (!ctx) throw new Error('CartContext missing');
    return ctx;
};