import { Card, CardContent, Grid, Stack, Typography, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { useAppData } from '../../context/AppDataContext';

const AdminDashboard = () => {
    const { products, orders } = useAppData();
    const navigate = useNavigate();
    const revenue = orders.reduce((sum, order) => sum + order.total, 0);

    const tiles = [
        { label: 'Total products', value: products.length, action: () => navigate('/admin/products') },
        { label: 'Total orders', value: orders.length, action: () => navigate('/admin/orders') },
        { label: 'Approx revenue', value: `R${revenue}`, action: () => navigate('/admin/orders') }
    ];

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
                    <Grid item xs={12} md={4} key={tile.label}>
                        <Card onClick={tile.action} sx={{ cursor: 'pointer', borderRadius: 3 }}>
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
        </Stack>
    );
};

export default AdminDashboard;