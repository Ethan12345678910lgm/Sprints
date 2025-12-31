import { Card, CardContent, Grid, Stack, Typography, Button, Chip, LinearProgress } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { useAppData } from '../../context/AppDataContext';

const AdminDashboard = () => {
    const { products, orders } = useAppData();
    const navigate = useNavigate();
    const revenue = orders.reduce((sum, order) => sum + order.total, 0);
    const pending = orders.filter((order) => order.status === 'Pending').length;
    const delivered = orders.filter((order) => order.status === 'Delivered').length;
    const shipped = orders.filter((order) => order.status === 'Shipped').length;
    const averageOrderValue = orders.length ? Math.round(revenue / orders.length) : 0;
    const monthToDateRevenue = orders
        .filter((order) => {
            const created = new Date(order.createdAt);
            const now = new Date();
            return created.getMonth() === now.getMonth() && created.getFullYear() === now.getFullYear();
        })
        .reduce((sum, order) => sum + order.total, 0);

    const tiles = [
        { label: 'Total products', value: products.length, action: () => navigate('/admin/products') },
        { label: 'Total orders', value: orders.length, action: () => navigate('/admin/orders') },
        { label: 'Approx revenue', value: `R${revenue.toLocaleString()}`, action: () => navigate('/admin/orders') },
        { label: 'Avg order value', value: `R${averageOrderValue.toLocaleString()}`, action: () => navigate('/admin/orders') },
        { label: 'Open orders', value: pending, action: () => navigate('/admin/orders') },
        { label: 'MTD revenue', value: `R${monthToDateRevenue.toLocaleString()}`, action: () => navigate('/admin/orders') }    ];

    return (
        <Stack spacing={3}>
            <Stack direction={{ xs: 'column', md: 'row' }} justifyContent="space-between" alignItems="center">
                <div>
                    <Typography variant="overline" color="secondary">
                        Admin control
                    </Typography>
                    <Typography variant="h4" fontWeight={800}>
                        Dashboard
                    </Typography>
                </div>
                <Button variant="outlined" onClick={() => navigate('/')}>
                    Return to site
                </Button>
            </Stack>
            <Grid container spacing={3}>
                {tiles.map((tile) => (
                    <Grid item xs={12} sm={6} md={4} key={tile.label}>
                        <Card onClick={tile.action} sx={{ cursor: 'pointer', borderRadius: 3, height: '100%' }}>
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
                    <Typography variant="subtitle1" fontWeight={700} gutterBottom>
                        Quick links
                    </Typography>
                    <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2}>
                        <Button variant="contained" onClick={() => navigate('/admin/products/new')}>
                            Add product
                        </Button>
                        <Button variant="outlined" onClick={() => navigate('/admin/orders')}>
                            Manage orders
                        </Button>
                        <Button variant="outlined" onClick={() => navigate('/admin/customers')}>
                            View customers
                        </Button>
                    </Stack>
                </CardContent>
            </Card>
            <Card>
                <CardContent>
                    <Stack
                        direction={{ xs: 'column', md: 'row' }}
                        justifyContent="space-between"
                        spacing={2}
                        alignItems="center"
                    >
                        <div>
                            <Typography variant="subtitle1" fontWeight={700} gutterBottom>
                                Fulfilment momentum
                            </Typography>
                            <Typography color="text.secondary">
                                Track how quickly orders are moving through the pipeline this month.
                            </Typography>
                        </div>
                        <Stack direction="row" spacing={1} flexWrap="wrap" justifyContent={{ xs: 'flex-start', md: 'flex-end' }}>
                            <Chip label={`Pending ${pending}`} color="warning" />
                            <Chip label={`Shipped ${shipped}`} color="info" />
                            <Chip label={`Delivered ${delivered}`} color="success" />
                        </Stack>
                    </Stack>
                    <Stack spacing={2} mt={3}>
                        <Stack spacing={1}>
                            <Typography variant="body2">Delivery progress</Typography>
                            <LinearProgress
                                variant="determinate"
                                value={orders.length ? Math.round((delivered / orders.length) * 100) : 0}
                                sx={{ height: 10, borderRadius: 5 }}
                            />
                            <Typography variant="caption" color="text.secondary">
                                {orders.length ? Math.round((delivered / orders.length) * 100) : 0}% of orders delivered
                            </Typography>
                        </Stack>
                        <Stack spacing={1}>
                            <Typography variant="body2">Shipment readiness</Typography>
                            <LinearProgress
                                variant="determinate"
                                value={orders.length ? Math.round(((shipped + delivered) / orders.length) * 100) : 0}
                                color="secondary"
                                sx={{ height: 10, borderRadius: 5 }}
                            />
                            <Typography variant="caption" color="text.secondary">
                                {orders.length ? Math.round(((shipped + delivered) / orders.length) * 100) : 0}% shipped or delivered
                            </Typography>
                        </Stack>
                    </Stack>
                </CardContent>
            </Card>
        </Stack>
    );
};

export default AdminDashboard;