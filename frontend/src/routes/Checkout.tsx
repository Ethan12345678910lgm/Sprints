import { useState } from 'react';
import { Box, Button, Card, CardContent, Stack, TextField, Typography, Divider, List, ListItem, ListItemText } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';
import { useCart } from '../context/CartContext';
import { useAppData } from '../context/AppDataContext';
import { useAuth } from '../context/AuthContext';

const Checkout = () => {
    const { items, clear } = useCart();
    const { createOrder } = useAppData();
    const { user } = useAuth();
    const navigate = useNavigate();
    const [form, setForm] = useState({
        name: user?.name ?? '',
        email: user?.email ?? '',
        address: '22 Loop St',
        city: 'Cape Town'
    });

    const subtotal = items.reduce((sum, item) => sum + item.product.price * item.quantity, 0);

    const submit = () => {
        if (!form.name || !form.email || !form.address) {
            toast.error('Please fill in your details');
            return;
        }
        const order = createOrder({
            customer: form.name,
            email: form.email,
            address: `${form.address}, ${form.city}`,
            lines: items.map((item) => ({ product: item.product, quantity: item.quantity }))
        });
        clear();
        navigate(`/account/orders/${order.id}`);
    };

    return (
        <Box maxWidth={720} mx="auto">
            <Typography variant="h4" fontWeight={700} gutterBottom>
                Checkout
            </Typography>
            <Typography color="text.secondary" mb={3}>
                No live payment is processed. Enter any details to preview the experience.
            </Typography>
            <Stack spacing={3}>
                <Card variant="outlined">
                    <CardContent>
                        <Typography variant="h6" fontWeight={700} gutterBottom>
                            Shipping details
                        </Typography>
                        <Stack spacing={2}>
                            <TextField
                                label="Full name"
                                value={form.name}
                                onChange={(event) => setForm({ ...form, name: event.target.value })}
                            />
                            <TextField
                                label="Email"
                                value={form.email}
                                onChange={(event) => setForm({ ...form, email: event.target.value })}
                            />
                            <TextField
                                label="Address"
                                value={form.address}
                                onChange={(event) => setForm({ ...form, address: event.target.value })}
                            />
                            <TextField
                                label="City"
                                value={form.city}
                                onChange={(event) => setForm({ ...form, city: event.target.value })}
                            />
                        </Stack>
                    </CardContent>
                </Card>
                <Card variant="outlined">
                    <CardContent>
                        <Typography variant="h6" fontWeight={700} gutterBottom>
                            Order summary
                        </Typography>
                        <List>
                            {items.map((item) => (
                                <ListItem key={item.product.id} disableGutters secondaryAction={<Typography>Qty {item.quantity}</Typography>}>
                                    <ListItemText primary={item.product.name} secondary={`R${item.product.price}`} />
                                </ListItem>
                            ))}
                        </List>
                        <Divider sx={{ my: 2 }} />
                        <Typography variant="subtitle1">Subtotal: R{subtotal}</Typography>
                        <Typography variant="body2" color="text.secondary">
                            Payment simulated. Use any card details in test mode.
                        </Typography>
                        <Button fullWidth variant="contained" sx={{ mt: 3 }} onClick={submit} disabled={items.length === 0}>
                            Pay R{subtotal || 0}
                        </Button>
                    </CardContent>
                </Card>
            </Stack>
        </Box>
    );
};

export default Checkout;