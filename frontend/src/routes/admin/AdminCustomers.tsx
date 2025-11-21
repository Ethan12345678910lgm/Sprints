import { Card, CardContent, Typography, List, ListItem, ListItemText, Chip } from '@mui/material';
import { useAppData } from '../../context/AppDataContext';

const AdminCustomers = () => {
    const { customers, orders } = useAppData();

    return (
        <Card>
            <CardContent>
                <Typography variant="h5" fontWeight={800} gutterBottom>
                    Customers
                </Typography>
                <List>
                    {customers.map((customer) => {
                        const totalOrders = customer.orders.length;
                        const latestOrder = orders.find((order) => order.id === customer.orders[0]);
                        return (
                            <ListItem key={customer.id} divider>
                                <ListItemText
                                    primary={customer.name}
                                    secondary={`${customer.email} · ${customer.location ?? 'Remote'}`}
                                />
                                <Chip label={`${totalOrders} orders`} sx={{ mr: 1 }} />
                                {latestOrder && <Chip label={latestOrder.status} color="secondary" />}
                            </ListItem>
                        );
                    })}
                </List>
            </CardContent>
        </Card>
    );
};

export default AdminCustomers;