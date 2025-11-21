import { Card, CardContent, Grid, Typography, Button, Stack } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { useAppData } from '../../context/AppDataContext';
import { useCart } from '../../context/CartContext';

const Wishlist = () => {
    const { wishlist, removeFromWishlist } = useAppData();
    const { addItem } = useCart();
    const navigate = useNavigate();

    if (wishlist.length === 0) {
        return (
            <Stack spacing={2} alignItems="flex-start">
                <Typography variant="h5" fontWeight={800}>
                    Wishlist
                </Typography>
                <Typography color="text.secondary">No saved pieces yet.</Typography>
                <Button variant="contained" onClick={() => navigate('/shop')}>
                    Browse collection
                </Button>
            </Stack>
        );
    }

    return (
        <Grid container spacing={2}>
            {wishlist.map((product) => (
                <Grid item xs={12} md={6} key={product.id}>
                    <Card>
                        <CardContent>
                            <Stack direction="row" justifyContent="space-between" alignItems="center" spacing={2}>
                                <Stack spacing={0.5}>
                                    <Typography fontWeight={700}>{product.name}</Typography>
                                    <Typography color="text.secondary">R{product.price}</Typography>
                                </Stack>
                                <Stack direction="row" spacing={1}>
                                    <Button
                                        variant="outlined"
                                        onClick={() => {
                                            addItem(product);
                                            removeFromWishlist(product.id);
                                        }}
                                    >
                                        Move to cart
                                    </Button>
                                    <Button variant="text" onClick={() => removeFromWishlist(product.id)}>
                                        Remove
                                    </Button>
                                </Stack>
                            </Stack>
                        </CardContent>
                    </Card>
                </Grid>
            ))}
        </Grid>
    );
};

export default Wishlist;