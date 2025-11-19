import { useEffect, useState } from 'react';
import { Grid, CircularProgress, Box } from '@mui/material';
import ProductCard from '../components/ProductCard';
import FilterBar from '../components/FilterBar';
import { Product } from '../data/mockData';
import { fetchProducts } from '../services/apiClient';

const Shop = () => {
    const [loading, setLoading] = useState(true);
    const [items, setItems] = useState<Product[]>([]);
    const [category, setCategory] = useState('all');
    const [sort, setSort] = useState('featured');

    useEffect(() => {
        fetchProducts().then((data) => {
            setItems(data);
            setLoading(false);
        });
    }, []);

    const filtered = items
        .filter((p) => (category === 'all' ? true : p.tags.includes(category)))
        .sort((a, b) => {
            if (sort === 'price-asc') return a.price - b.price;
            if (sort === 'price-desc') return b.price - a.price;
            return 0;
        });

    return (
        <Box>
            <FilterBar category={category} onCategory={setCategory} sort={sort} onSort={setSort} />
            {loading ? (
                <CircularProgress />
            ) : (
                <Grid container spacing={3}>
                    {filtered.map((product) => (
                        <Grid item xs={12} sm={6} md={4} key={product.id}>
                            <ProductCard product={product} />
                        </Grid>
                    ))}
                </Grid>
            )}
        </Box>
    );
};

export default Shop;