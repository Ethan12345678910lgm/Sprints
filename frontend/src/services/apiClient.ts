import axios from 'axios';
import { products, articles, Product, Article } from '../data/mockData';

type RawProduct = Partial<Product> & {
    price?: number | string;
    image?: string;
    images?: unknown;
    tags?: unknown;
    sizes?: unknown;
    collection?: string;
};

const api = axios.create({ baseURL: 'http://localhost:8080/api' });

const normalizeProduct = (raw: RawProduct): Product => ({
    id: Number(raw.id ?? 0),
    name: raw.name ?? '',
    slug: raw.slug ?? '',
    description: raw.description ?? '',
    price: typeof raw.price === 'number' ? raw.price : Number(raw.price ?? 0),
    sizes: Array.isArray(raw.sizes) ? raw.sizes.map(String) : [],
    materials: raw.materials ?? '',
    collectionName: raw.collectionName ?? raw.collection ?? '',
    tags: Array.isArray(raw.tags) ? raw.tags.map(String) : [],
    images: Array.isArray(raw.images)
        ? raw.images.map(String)
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

export async function fetchArticles(): Promise<Article[]> {
    try {
        const { data } = await api.get('/journal');
        return Array.isArray(data) ? data : [];
    } catch (error) {
        return articles;
    }
}

export default api;