import {
    Card,
    CardContent,
    Typography,
    Table,
    TableHead,
    TableRow,
    TableCell,
    TableBody,
    MenuItem,
    Select,
    Stack,
    Button
} from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { useAppData } from '../../context/AppDataContext';

const AdminOrders = () => {
    const { orders, updateOrderStatus } = useAppData();
    const navigate = useNavigate();

    return (
        <Card>
            <CardContent>
                <Stack direction={{ xs: 'column', sm: 'row' }} justifyContent="space-between" alignItems="center" mb={2}>
                    <Typography variant="h5" fontWeight={800}>
                        Manage orders
                    </Typography>
                </Stack>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell>ID</TableCell>
                            <TableCell>Customer</TableCell>
                            <TableCell>Total</TableCell>
                            <TableCell>Status</TableCell>
                            <TableCell>Actions</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {orders.map((order) => (
                            <TableRow key={order.id} hover>
                                <TableCell>{order.id}</TableCell>
                                <TableCell>{order.customer}</TableCell>
                                <TableCell>R{order.total}</TableCell>
                                <TableCell>
                                    <Select
                                        size="small"
                                        value={order.status}
                                        onChange={(event) => updateOrderStatus(order.id, event.target.value as any)}
                                    >
                                        {['Pending', 'Shipped', 'Delivered'].map((status) => (
                                            <MenuItem key={status} value={status}>
                                                {status}
                                            </MenuItem>
                                        ))}
                                    </Select>
                                </TableCell>
                                <TableCell>
                                    <Button onClick={() => navigate(`/admin/orders/${order.id}`)}>View</Button>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </CardContent>
        </Card>
    );
};

export default AdminOrders;