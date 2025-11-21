import { createContext, useContext, useMemo, useState, type ReactNode } from 'react';
import toast from 'react-hot-toast';
import { Product, products as seedProducts, orders as seedOrders, customers as seedCustomers, Order } from '../data/mockData';

export type WishlistItem = Product;

interface OrderLineInput {
    product: Product;
    quantity: number;
    size?: string;
}

interface AppDataContextValue {
    products: Product[];
    orders: Order[];
    customers: typeof seedCustomers;
    wishlist: WishlistItem[];
    addProduct: (input: Partial<Product>) => void;
    updateProduct: (id: number, input: Partial<Product>) => void;
    updateOrderStatus: (id: string, status: Order['status']) => void;
    createOrder: (input: { customer: string; email: string; address: string; lines: OrderLineInput[] }) => Order;
    addToWishlist: (product: Product) => void;
    removeFromWishlist: (id: number) => void;
}

const AppDataContext = createContext<AppDataContextValue | undefined>(undefined);

export const AppDataProvider = ({ children }: { children: ReactNode }) => {
    const [products, setProducts] = useState<Product[]>(seedProducts);
    const [orders, setOrders] = useState<Order[]>(seedOrders);
    const [customers, setCustomers] = useState(seedCustomers);
    const [wishlist, setWishlist] = useState<WishlistItem[]>([]);

    const addProduct = (input: Partial<Product>) => {
        const nextId = Math.max(...products.map((p) => p.id)) + 1;
        const newProduct: Product = {
            id: nextId,
            name: input.name ?? 'New Ubuntu Piece',
            slug: (input.slug || input.name || `product-${nextId}`).toString().replace(/\s+/g, '-').toLowerCase(),
            description: input.description ?? 'Newly added style from the studio.',
            price: Number(input.price ?? 0),
            sizes: input.sizes ?? ['S', 'M', 'L'],
            materials: input.materials ?? 'Organic fibres',
            collectionName: input.collectionName ?? 'Studio Capsule',
            tags: input.tags ?? ['new'],
            images: input.images && input.images.length > 0 ? input.images : [
                'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=800&q=80'
            ],
            category: input.category ?? 'tops',
            stock: Number(input.stock ?? 0),
            status: input.status ?? 'draft',
            createdAt: input.createdAt ?? new Date().toISOString().split('T')[0]
        };
        setProducts((prev) => [...prev, newProduct]);
        toast.success('Product saved to showroom');
    };

    const updateProduct = (id: number, input: Partial<Product>) => {
        setProducts((prev) => prev.map((product) => (product.id === id ? { ...product, ...input } : product)));
        toast.success('Product updated');
    };

    const updateOrderStatus = (id: string, status: Order['status']) => {
        setOrders((prev) => prev.map((order) => (order.id === id ? { ...order, status } : order)));
        toast.success(`Order ${id} marked as ${status}`);
    };

    const createOrder = (input: { customer: string; email: string; address: string; lines: OrderLineInput[] }): Order => {
        const total = input.lines.reduce((sum, line) => sum + line.product.price * line.quantity, 0);
        const newOrder: Order = {
            id: `ORD-${orders.length + 104}`,
            customer: input.customer,
            email: input.email,
            address: input.address,
            total,
            status: 'Pending',
            createdAt: new Date().toISOString().split('T')[0],
            items: input.lines.map((line) => ({ productId: line.product.id, quantity: line.quantity, size: line.size }))
        };

        setOrders((prev) => [...prev, newOrder]);
        setCustomers((prev) => {
            const existing = prev.find((customer) => customer.email === input.email);
            if (existing) {
                return prev.map((customer) =>
                    customer.email === input.email
                        ? { ...customer, orders: [...customer.orders, newOrder.id] }
                        : customer
                );
            }
            return [
                ...prev,
                { id: `C-${prev.length + 1}`, name: input.customer, email: input.email, orders: [newOrder.id] }
            ];
        });
        toast.success('Order placed successfully');
        return newOrder;
    };

    const addToWishlist = (product: Product) => {
        setWishlist((prev) => {
            if (prev.some((item) => item.id === product.id)) {
                toast('Already saved to wishlist');
                return prev;
            }
            toast.success('Saved to wishlist');
            return [...prev, product];
        });
    };

    const removeFromWishlist = (id: number) => {
        setWishlist((prev) => prev.filter((item) => item.id !== id));
        toast('Removed from wishlist');
    };

    const value = useMemo(
        () => ({
            products,
            orders,
            customers,
            wishlist,
            addProduct,
            updateProduct,
            updateOrderStatus,
            createOrder,
            addToWishlist,
            removeFromWishlist
        }),
        [products, orders, customers, wishlist]
    );

    return <AppDataContext.Provider value={value}>{children}</AppDataContext.Provider>;
};

export const useAppData = () => {
    const ctx = useContext(AppDataContext);
    if (!ctx) throw new Error('AppDataContext missing');
    return ctx;
};