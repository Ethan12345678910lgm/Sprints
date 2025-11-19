import axios from 'axios';
import { products, articles, Product } from '../data/mockData';

const api = axios.create({ baseURL: 'http://localhost:8080/api' });

const normalizeProduct = (raw: any): Product => ({
    id: Number(raw.id),
    name: raw.name ?? '',
    slug: raw.slug ?? '',
    description: raw.description ?? '',
    price: typeof raw.price === 'number' ? raw.price : Number(raw.price ?? 0),
    sizes: Array.isArray(raw.sizes) ? raw.sizes : [],
    materials: raw.materials ?? '',
    collectionName: raw.collectionName ?? raw.collection ?? '',
    tags: Array.isArray(raw.tags) ? raw.tags : [],
    images: Array.isArray(raw.images)
        ? raw.images
        : raw.image
            ? [raw.image]
            : []
});

// Fallback logic for demo when backend is not running
export async function fetchProducts(): Promise<Product[]> {
    try {
        const { data } = await api.get('/products');
        return (Array.isArray(data) ? data : []).map(normalizeProduct);
    } catch (error) {
        return products;
    }
}

export async function fetchProduct(id: string): Promise<Product | null> {
    try {
        const { data } = await api.get(`/products/${id}`);
        return normalizeProduct(data);
    } catch (error) {
        return products.find((p) => p.id === Number(id)) ?? null;
    }
}

export async function fetchArticles() {
    try {
        const { data } = await api.get('/journal');
        return data;
    } catch (error) {
        return articles;
    }
}

export default api;