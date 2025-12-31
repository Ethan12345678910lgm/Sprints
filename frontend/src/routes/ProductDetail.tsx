import { useEffect, useMemo, useState } from 'react';
import { useParams } from 'react-router-dom';
import {
    Grid,
    Typography,
    Chip,
    Button,
    Stack,
    Card,
    CardContent,
    Divider,
    FormControl,
    InputLabel,
    MenuItem,
    Select,
    TextField,
    Box
} from '@mui/material';
import { Product } from '../data/mockData';
import { useCart } from '../context/CartContext';
import { useAppData } from '../context/AppDataContext';

const ProductDetail = () => {
    const { id } = useParams();
    const { products, addToWishlist } = useAppData();
    const [product, setProduct] = useState<Product | null>(null);
    const [loading, setLoading] = useState(true);
    const [quantity, setQuantity] = useState(1);
    const [size, setSize] = useState('');
    const { addItem } = useCart();

    useEffect(() => {
        if (!id) return;
        setLoading(true);
        const timer = window.setTimeout(() => {
            const found = products.find((p) => p.id === Number(id)) ?? null;
            setProduct(found);
            setSize(found?.sizes?.[0] ?? '');
            setLoading(false);
        }, 300);
        return () => window.clearTimeout(timer);
    }, [id, products]);

const related = useMemo(() => {
    if (!product) return [];
    return products.filter((p) => p.id !== product.id && p.collectionName === product.collectionName).slice(0, 3);
}, [product, products]);

if (loading) return <Typography>Loading...</Typography>;
if (!product) return <Typography>Product not found.</Typography>;

return (
        <Grid container spacing={4} alignItems="flex-start">
            <Grid item xs={12} md={6}>
                <Card>
                    <CardContent>
                        <img
                            src={product.images[0] ?? 'https://placehold.co/800x600?text=Ubuntu+Threads'}
                            alt={product.name}
                            style={{ width: '100%', borderRadius: 12 }}
                        />
                    </CardContent>
                </Card>
                <Card sx={{ mt: 3 }}>
                    <CardContent>
                        <Typography variant="subtitle1" fontWeight={700} gutterBottom>
                            Materials & care
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            {product.materials} · Low-impact dyes · Machine wash cold · Line dry. Each piece is tagged with the
                            maker collective and repair instructions.
                        </Typography>
                    </CardContent>
                </Card>
            </Grid>
            <Grid item xs={12} md={6}>
                <Typography variant="overline" color="secondary">
                    {product.collectionName}
                </Typography>
                <Typography variant="h3" fontWeight={800} gutterBottom>
                    {product.name}
                </Typography>
                <Typography variant="h5" color="primary" gutterBottom>
                    R{product.price}
                </Typography>
                <Typography mb={2}>{product.description}</Typography>
                    <Stack direction="row" spacing={1} mb={2} flexWrap="wrap">
                        {product.tags.map((tag) => (
                            <Chip key={tag} label={tag} color="secondary" />
                        ))}
                    </Stack>
                        <Typography variant="subtitle1" gutterBottom>
                            Sizes
                        </Typography>
                                <FormControl fullWidth size="small" sx={{ mb: 2 }}>
                                    <InputLabel id="size-select-label">Choose a size</InputLabel>
                                    <Select
                                        labelId="size-select-label"
                                        label="Choose a size"
                                        value={size}
                                        onChange={(event) => setSize(event.target.value)}
                                    >
                                        {product.sizes.map((s) => (
                                            <MenuItem key={s} value={s}>
                                                {s}
                                            </MenuItem>
                                        ))}
                                    </Select>
                                </FormControl>
                                <TextField
                                    label="Quantity"
                                    type="number"
                                    value={quantity}
                                    onChange={(event) => setQuantity(Math.max(1, Number(event.target.value)))}
                                    inputProps={{ min: 1 }}
                                    size="small"
                                    sx={{ width: 160, mb: 2 }}
                                />
                                <Stack direction="row" spacing={2} mt={1} flexWrap="wrap">
                                    <Button
                                        variant="contained"
                                        onClick={() => {
                                            Array.from({ length: quantity }).forEach(() => addItem(product));
                                        }}
                                    >
                                        Add to Bag
                                    </Button>
                                    <Button variant="outlined" onClick={() => addToWishlist(product)}>
                                        Add to Wishlist
                                    </Button>
                                </Stack>
                                <Divider sx={{ my: 3 }} />
                                <Typography variant="subtitle1" fontWeight={700} gutterBottom>
                                    Traceability
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    Crafted with local artisans; each piece is tagged with the maker collective for traceability. We publish the
                                    carbon, water, and labour footprint for every drop.
                                </Typography>
                                {related.length > 0 && (
                                    <Box mt={3}>
                                        <Typography variant="h6" gutterBottom>
                                            Complete the look
                                        </Typography>
                                        <Stack direction="row" spacing={2} flexWrap="wrap">
                                            {related.map((item) => (
                                                <Chip
                                                    key={item.id}
                                                    label={`${item.name} · R${item.price}`}
                                                    onClick={() => {
                                                        setProduct(item);
                                                        setSize(item.sizes[0] ?? '');
                                                        setQuantity(1);
                                                    }}
                                                    variant="outlined"
                                                />
                                            ))}
                                        </Stack>
                                    </Box>
                                )}
            </Grid>
        </Grid>
        );
        };

        export default ProductDetail;