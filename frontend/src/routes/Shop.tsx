import { useEffect, useMemo, useState } from 'react';
import { Grid, CircularProgress, Box, Stack, Typography, Alert } from '@mui/material';
import ProductCard from '../components/ProductCard';
import FilterBar from '../components/FilterBar';
import { useAppData } from '../context/AppDataContext';

const Shop = () => {
    const { products } = useAppData();
    const [loading, setLoading] = useState(true);
    const [category, setCategory] = useState('all');
    const [size, setSize] = useState('all');
    const [priceRange, setPriceRange] = useState<number[]>([400, 2000]);
    const [sort, setSort] = useState('newest');

    useEffect(() => {
        const timer = setTimeout(() => setLoading(false), 400);
        return () => clearTimeout(timer);
    }, []);

    const filtered = useMemo(() => {
        return products
            .filter((p) =>
                category === 'all'
                    ? true
                    : p.tags.includes(category) || p.materials.toLowerCase().includes(category) || p.category === category
            )
            .filter((p) => (size === 'all' ? true : p.sizes.includes(size)))
            .filter((p) => p.price >= priceRange[0] && p.price <= priceRange[1])
            .sort((a, b) => {
                if (sort === 'price-asc') return a.price - b.price;
                if (sort === 'price-desc') return b.price - a.price;
                if (sort === 'newest') return new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime();
                return 0;
            });
    }, [category, products, size, priceRange, sort]);

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
            <FilterBar
                category={category}
                onCategory={setCategory}
                size={size}
                onSize={setSize}
                priceRange={priceRange}
                onPriceRange={setPriceRange}
                sort={sort}
                onSort={setSort}
            />
            {loading ? (
                <Stack alignItems="center" justifyContent="center" py={6}>
                    <CircularProgress />
                </Stack>
            ) : filtered.length === 0 ? (
                <Alert severity="info">No products match your filters yet.</Alert>
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