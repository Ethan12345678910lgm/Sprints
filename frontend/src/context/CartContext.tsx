import { createContext, useContext, useState, ReactNode } from 'react';
import toast from 'react-hot-toast';
import { Product } from '../data/mockData';

type CartItem = { product: Product; quantity: number };

interface CartContextValue {
    items: CartItem[];
    addItem: (product: Product) => void;
    removeItem: (id: string) => void;
    updateQuantity: (id: string, qty: number) => void;
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

    const removeItem = (id: string) => {
        setItems((prev) => prev.filter((i) => i.product.id !== id));
    };

    const updateQuantity = (id: string, qty: number) => {
        setItems((prev) => prev.map((i) => (i.product.id === id ? { ...i, quantity: qty } : i)));
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