import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Box, Grid, Typography, Chip, Button, Stack, Card, CardContent } from '@mui/material';
import { fetchProduct } from '../services/apiClient';
import { Product } from '../data/mockData';
import { useCart } from '../context/CartContext';

const ProductDetail = () => {
    const { id } = useParams();
    const [product, setProduct] = useState<Product | null>(null);
    const { addItem } = useCart();

    useEffect(() => {
        if (id) {
            fetchProduct(id).then((data) => setProduct(data));
        }
    }, [id]);

    if (!product) return <Typography>Loading...</Typography>;

    return (
        <Grid container spacing={4}>
            <Grid item xs={12} md={6}>
                <Card>
                    <CardContent>
                        <img src={product.image} alt={product.name} style={{ width: '100%', borderRadius: 12 }} />
                    </CardContent>
                </Card>
            </Grid>
            <Grid item xs={12} md={6}>
                <Typography variant="h3" fontWeight={800} gutterBottom>
                    {product.name}
                </Typography>
                <Typography variant="h5" color="primary" gutterBottom>
                    R{product.price}
                </Typography>
                <Typography mb={2}>{product.description}</Typography>
                <Stack direction="row" spacing={1} mb={2}>
                    {product.tags.map((tag) => (
                        <Chip key={tag} label={tag} color="secondary" />
                    ))}
                </Stack>
                <Typography variant="subtitle1">Materials: {product.materials}</Typography>
                <Typography variant="subtitle1">Sizes: {product.sizes.join(', ')}</Typography>
                <Typography mt={2}>
                    Crafted with local artisans; each piece is tagged with the maker collective for traceability.
                </Typography>
                <Stack direction="row" spacing={2} mt={3}>
                    <Button variant="contained" onClick={() => addItem(product)}>
                        Add to bag
                    </Button>
                    <Button variant="outlined">Add to favourites</Button>
                </Stack>
            </Grid>
        </Grid>
    );
};

export default ProductDetail;