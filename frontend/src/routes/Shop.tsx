import { useEffect, useMemo, useState } from 'react';
import { Grid, CircularProgress, Box, Stack, Typography, Alert, Chip, Paper } from '@mui/material';
import ProductCard from '../components/ProductCard';
import FilterBar, { DEFAULT_PRICE_RANGE } from '../components/FilterBar';
import { useAppData } from '../context/AppDataContext';

const Shop = () => {
    const { products } = useAppData();
    const [loading, setLoading] = useState(true);
    const [category, setCategory] = useState('all');
    const [size, setSize] = useState('all');
    const [priceRange, setPriceRange] = useState<number[]>([...DEFAULT_PRICE_RANGE]);
    const [sort, setSort] = useState('newest');

    useEffect(() => {
        const timer = window.setTimeout(() => setLoading(false), 400);
        return () => window.clearTimeout(timer);
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

    const handleResetFilters = () => {
        setCategory('all');
        setSize('all');
        setPriceRange([...DEFAULT_PRICE_RANGE]);
        setSort('newest');
    };

    return (
        <Box>
            <Paper
                elevation={0}
                sx={{
                    p: { xs: 3, md: 4 },
                    mb: 3,
                    borderRadius: 4,
                    background: 'linear-gradient(135deg, #f5ede1 0%, #fffaf4 60%, #f1f7f2 100%)',
                    border: '1px solid #ecdecd'
                }}
            >
                <Stack spacing={2.5} alignItems="flex-start">
                    <Stack spacing={1}>
                        <Chip label="Curated pieces" size="small" color="secondary" variant="outlined" sx={{ fontWeight: 700 }} />
                        <Typography variant="h4" fontWeight={800} color="text.primary">
                            Shop the collection
                        </Typography>
                        <Typography variant="body1" color="text.secondary" maxWidth={720}>
                            Thoughtfully made staples with natural fibres, crafted by co-op partners across Cape Town. Tailor your search with filters that highlight the fabrics and fits you love most.
                        </Typography>
                    </Stack>
                    <Stack direction={{ xs: 'column', md: 'row' }} spacing={2} width="100%">
                        <Paper
                            elevation={0}
                            sx={{
                                flex: 1,
                                p: 2,
                                borderRadius: 3,
                                border: '1px solid #e7d8c6',
                                backgroundColor: '#ffffffcc',
                                backdropFilter: 'blur(2px)'
                            }}
                        >
                            <Typography variant="subtitle2" color="text.secondary">
                                Showing
                            </Typography>
                            <Typography variant="h5" fontWeight={800}>
                                {filtered.length} of {products.length} pieces
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                Natural fibres · Made in SA · Small batches
                            </Typography>
                        </Paper>
                        <Paper
                            elevation={0}
                            sx={{
                                flex: 1,
                                p: 2,
                                borderRadius: 3,
                                border: '1px solid #e7d8c6',
                                backgroundColor: '#ffffffcc',
                                display: 'flex',
                                justifyContent: 'space-between',
                                alignItems: 'center'
                            }}
                        >
                            <Stack spacing={0.5}>
                                <Typography variant="subtitle2" color="text.secondary">
                                    Currently filtering
                                </Typography>
                                <Typography variant="body1" fontWeight={700}>
                                    Category: {category === 'all' ? 'Any' : category}
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    Sizes: {size === 'all' ? 'Any' : size} · Price: R{priceRange[0]} – R{priceRange[1]}
                                </Typography>
                            </Stack>
                            <Chip label="Refresh filters" variant="outlined" onClick={handleResetFilters} />
                        </Paper>
                    </Stack>
                </Stack>
            </Paper>

            <FilterBar
                category={category}
                onCategory={setCategory}
                size={size}
                onSize={setSize}
                priceRange={priceRange}
                onPriceRange={setPriceRange}
                sort={sort}
                onSort={setSort}
                onReset={handleResetFilters}
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
