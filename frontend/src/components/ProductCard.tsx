import { Card, CardMedia, CardContent, Typography, Stack, Button } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import { Product } from '../data/mockData';
import { useCart } from '../context/CartContext';

const ProductCard = ({ product }: { product: Product }) => {
    const { addItem } = useCart();
    return (
        <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
            <CardMedia component="img" height="200" image={product.image} alt={product.name} />
            <CardContent sx={{ flexGrow: 1 }}>
                <Typography variant="h6">{product.name}</Typography>
                <Typography variant="body2" color="text.secondary">
                    {product.collection} · {product.materials}
                </Typography>
                <Typography variant="subtitle1" mt={1} fontWeight={700}>
                    R{product.price}
                </Typography>
            </CardContent>
            <Stack direction="row" spacing={1} p={2}>
                <Button component={RouterLink} to={`/product/${product.id}`} variant="outlined" fullWidth>
                    Details
                </Button>
                <Button variant="contained" fullWidth onClick={() => addItem(product)}>
                    Add
                </Button>
            </Stack>
        </Card>
    );
};

export default ProductCard;