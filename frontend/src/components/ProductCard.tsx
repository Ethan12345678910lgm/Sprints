import {
    Box,
    Button,
    Card,
    CardActions,
    CardContent,
    CardMedia,
    Chip,
    Stack,
    Typography
} from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import { Product } from '../data/mockData';
import { useCart } from '../context/CartContext';

const FALLBACK_IMAGE = 'https://placehold.co/600x400?text=Ubuntu+Threads';

const ProductCard = ({ product }: { product: Product }) => {
    const { addItem } = useCart();
    const coverImage = product.images[0] ?? FALLBACK_IMAGE;

    return (
        <Card
            sx={{
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                overflow: 'hidden',
                borderRadius: 3,
                boxShadow: '0 18px 48px rgba(0,0,0,0.08)',
                border: '1px solid #eee2d3',
                background: 'linear-gradient(180deg, #ffffff 0%, #f7f1e6 100%)'
            }}
        >
            <Box sx={{ position: 'relative' }}>
                <CardMedia component="img" height="240" image={coverImage} alt={product.name} sx={{ objectFit: 'cover' }} />
                <Chip
                    label={product.collectionName}
                    color="secondary"
                    size="small"
                    sx={{ position: 'absolute', top: 14, left: 14, bgcolor: '#f2f5eb', color: '#3a5f69' }}
                />
                <Box
                    sx={{
                        position: 'absolute',
                        bottom: 12,
                        right: 12,
                        bgcolor: 'rgba(0,0,0,0.72)',
                        color: 'white',
                        px: 1.5,
                        py: 0.5,
                        borderRadius: 2,
                        fontWeight: 700
                    }}
                >
                    R{product.price}
                </Box>
            </Box>
            <CardContent sx={{ flexGrow: 1 }}>
                <Typography variant="h6" gutterBottom>
                    {product.name}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    {product.collectionName} · {product.materials}
                </Typography>
                <Stack direction="row" spacing={1} mt={2} flexWrap="wrap">
                    {product.tags.slice(0, 3).map((tag) => (
                        <Chip key={tag} label={tag} size="small" variant="outlined" />
                    ))}
                </Stack>
            </CardContent>
            <CardActions sx={{ p: 2, pt: 0 }}>
                <Button component={RouterLink} to={`/product/${product.id}`} variant="outlined" fullWidth>
                    Details
                </Button>
                <Button variant="contained" fullWidth onClick={() => addItem(product)}>
                    Add
                </Button>
            </CardActions>
        </Card>
    );
};

export default ProductCard;
