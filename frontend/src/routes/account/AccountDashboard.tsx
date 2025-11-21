import { Card, CardContent, Grid, Stack, Typography, Button, Chip } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import { useAppData } from '../../context/AppDataContext';
import { useCart } from '../../context/CartContext';

const AccountDashboard = () => {
    const { user } = useAuth();
    const { orders, wishlist } = useAppData();
    const { items } = useCart();
    const navigate = useNavigate();

    const myOrders = user ? orders.filter((order) => order.email === user.email) : orders;

    const tiles = [
        { label: 'Orders placed', value: myOrders.length, onClick: () => navigate('/account/orders') },
        { label: 'Wishlist items', value: wishlist.length, onClick: () => navigate('/account/wishlist') },
        { label: 'Bag items', value: items.length, onClick: () => navigate('/cart') }
    ];

    return (
        <Stack spacing={3}>
            <Stack spacing={1}>
                <Typography variant="overline" color="secondary">
                    Welcome back
                </Typography>
                <Typography variant="h4" fontWeight={800}>
                    Hi {user?.name ?? 'friend'}
                </Typography>
                <Typography color="text.secondary">
                    Manage your Ubuntu Threads journey – track orders, update details, and plan your next capsule.
                </Typography>
            </Stack>
            <Grid container spacing={3}>
                {tiles.map((tile) => (
                    <Grid item xs={12} sm={4} key={tile.label}>
                        <Card onClick={tile.onClick} sx={{ cursor: 'pointer', borderRadius: 3 }}>
                            <CardContent>
                                <Typography variant="subtitle2" color="text.secondary">
                                    {tile.label}
                                </Typography>
                                <Typography variant="h4" fontWeight={800}>
                                    {tile.value}
                                </Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                ))}
            </Grid>
            <Card>
                <CardContent>
                    <Stack direction={{ xs: 'column', md: 'row' }} spacing={3} alignItems="center">
                        <Stack spacing={1} flex={1}>
                            <Typography variant="h6" fontWeight={800}>
                                Sustainably cared for
                            </Typography>
                            <Typography color="text.secondary">
                                Swap, repair, and recycle your pieces with our concierge. We log the lifecycle of each garment
                                you purchase.
                            </Typography>
                            <Stack direction="row" spacing={1}>
                                <Chip label="Repair credits" color="secondary" />
                                <Chip label="Community mending" />
                            </Stack>
                        </Stack>
                        <Button variant="contained" onClick={() => navigate('/community')}>
                            Book a care session
                        </Button>
                    </Stack>
                </CardContent>
            </Card>
        </Stack>
    );
};

export default AccountDashboard;