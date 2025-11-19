import axios from 'axios';
import { products, articles } from '../data/mockData';

const api = axios.create({ baseURL: 'http://localhost:8080/api' });

// Fallback logic for demo when backend is not running
export async function fetchProducts() {
    try {
        const { data } = await api.get('/products');
        return data;
    } catch (error) {
        return products;
    }
}

export async function fetchProduct(id: string) {
    try {
        const { data } = await api.get(`/products/${id}`);
        return data;
    } catch (error) {
        return products.find((p) => p.id === id);
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