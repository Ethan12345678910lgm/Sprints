import { useParams } from 'react-router-dom';
import { Card, CardContent, Stack, Typography, Chip, Divider, List, ListItem, ListItemText, Button } from '@mui/material';
import { useAppData } from '../../context/AppDataContext';

const AccountOrderDetail = () => {
    const { id } = useParams();
    const { orders, products } = useAppData();
    const order = orders.find((entry) => entry.id === id);

    if (!order) return <Typography>Order not found</Typography>;

    return (
        <Card>
            <CardContent>
                <Stack direction={{ xs: 'column', sm: 'row' }} justifyContent="space-between" alignItems={{ xs: 'flex-start', sm: 'center' }}>
                    <Stack spacing={0.5}>
                        <Typography variant="h5" fontWeight={800}>
                            {order.id}
                        </Typography>
                        <Typography color="text.secondary">Placed {order.createdAt}</Typography>
                    </Stack>
                    <Chip label={order.status} color="secondary" />
                </Stack>
                <Divider sx={{ my: 2 }} />
                <Typography variant="subtitle2" gutterBottom>
                    Items
                </Typography>
                <List>
                    {order.items.map((item) => {
                        const product = products.find((p) => p.id === item.productId);
                        return (
                            <ListItem key={item.productId} disableGutters secondaryAction={<Typography>Qty {item.quantity}</Typography>}>
                                <ListItemText
                                    primary={product?.name ?? 'Product'}
                                    secondary={`Size ${item.size ?? 'n/a'} · R${product?.price ?? 0}`}
                                />
                            </ListItem>
                        );
                    })}
                </List>
                <Divider sx={{ my: 2 }} />
                <Typography variant="subtitle2">Ship to</Typography>
                <Typography color="text.secondary">{order.customer}</Typography>
                <Typography color="text.secondary">{order.address}</Typography>
                <Typography variant="h6" mt={2}>
                    Total R{order.total}
                </Typography>
                <Button sx={{ mt: 2 }} variant="contained">
                    Request support
                </Button>
            </CardContent>
        </Card>
    );
};

export default AccountOrderDetail;