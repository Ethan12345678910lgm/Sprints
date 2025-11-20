import { useEffect, useMemo, useState } from 'react';
import { Grid, CircularProgress, Box, Stack, Typography } from '@mui/material';
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

    const filtered = useMemo(
        () =>
            items
                .filter((p) =>
                    category === 'all'
                        ? true
                        : p.tags.includes(category) || p.materials.toLowerCase().includes(category)
                )
                .sort((a, b) => {
                    if (sort === 'price-asc') return a.price - b.price;
                    if (sort === 'price-desc') return b.price - a.price;
                    return 0;
                }),
        [category, items, sort]
    );

    return (
        <Box>
            <Stack spacing={2} mb={2} alignItems="flex-start">
                <Typography variant="overline" color="text.secondary">
                    Curated pieces
                </Typography>
                <Typography variant="h4" fontWeight={800} color="text.primary">
                    Shop the collection
                </Typography>
                <Typography variant="body1" color="text.secondary" maxWidth={680}>
                    Thoughtfully made staples with natural fibres, crafted by co-op partners across Cape Town.
                </Typography>
            </Stack>
            <FilterBar category={category} onCategory={setCategory} sort={sort} onSort={setSort} />
            {loading ? (
                <Stack alignItems="center" justifyContent="center" py={6}>
                    <CircularProgress />
                </Stack>
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
