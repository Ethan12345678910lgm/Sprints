import { Box, Card, CardContent, Grid, Typography, Stack, Button, TextField } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { useCart } from '../context/CartContext';

const CartPage = () => {
    const { items, updateQuantity, removeItem } = useCart();
    const navigate = useNavigate();
    const total = items.reduce((sum, item) => sum + item.product.price * item.quantity, 0);

    return (
        <Box>
            <Typography variant="h4" fontWeight={700} gutterBottom>
                Your bag
            </Typography>
            <Grid container spacing={3}>
                <Grid item xs={12} md={8}>
                    {items.map((item) => (
                        <Card key={item.product.id} sx={{ mb: 2 }}>
                            <CardContent>
                                <Stack direction="row" spacing={2} alignItems="center">
                                    <img
                                        src={item.product.images[0] ?? 'https://placehold.co/400x400?text=Ubuntu+Threads'}
                                        alt={item.product.name}
                                        width={96}
                                    />
                                    <Box flex={1}>
                                        <Typography variant="h6">{item.product.name}</Typography>
                                        <Typography color="text.secondary">R{item.product.price}</Typography>
                                    </Box>
                                    <TextField
                                        type="number"
                                        label="Qty"
                                        size="small"
                                        value={item.quantity}
                                        onChange={(e) => updateQuantity(item.product.id, Number(e.target.value))}
                                        sx={{ width: 80 }}
                                    />
                                    <Button onClick={() => removeItem(item.product.id)}>Remove</Button>
                                </Stack>
                            </CardContent>
                        </Card>
                    ))}
                </Grid>
                <Grid item xs={12} md={4}>
                    <Card>
                        <CardContent>
                            <Typography variant="h6">Order summary</Typography>
                            <Typography mt={1}>Total: R{total.toFixed(2)}</Typography>
                            <Button variant="contained" fullWidth sx={{ mt: 2 }} onClick={() => navigate('/checkout')}>
                                Checkout
                            </Button>
                        </CardContent>
                    </Card>
                </Grid>
            </Grid>
        </Box>
    );
};

export default CartPage;