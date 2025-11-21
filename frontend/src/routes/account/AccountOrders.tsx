import { Card, CardContent, Stack, Typography, Chip, Button, Grid } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { useAppData } from '../../context/AppDataContext';
import { useAuth } from '../../context/AuthContext';

const AccountOrders = () => {
    const { orders } = useAppData();
    const { user } = useAuth();
    const navigate = useNavigate();
    const myOrders = user ? orders.filter((order) => order.email === user.email) : orders;

    return (
        <Stack spacing={2}>
            <Typography variant="h5" fontWeight={800} gutterBottom>
                Order history
            </Typography>
            <Grid container spacing={2}>
                {myOrders.map((order) => (
                    <Grid item xs={12} md={6} key={order.id}>
                        <Card>
                            <CardContent>
                                <Stack direction="row" justifyContent="space-between" alignItems="center">
                                    <Stack spacing={0.5}>
                                        <Typography variant="subtitle1" fontWeight={700}>
                                            {order.id}
                                        </Typography>
                                        <Typography color="text.secondary">
                                            {order.createdAt} · Total R{order.total}
                                        </Typography>
                                        <Chip label={order.status} color="secondary" size="small" />
                                    </Stack>
                                    <Button onClick={() => navigate(`/account/orders/${order.id}`)}>View details</Button>
                                </Stack>
                            </CardContent>
                        </Card>
                    </Grid>
                ))}
            </Grid>
        </Stack>
    );
};

export default AccountOrders;