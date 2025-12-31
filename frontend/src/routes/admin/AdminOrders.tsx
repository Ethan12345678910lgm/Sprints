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
    Button,
    Chip,
    TextField,
    InputAdornment,
    Alert
} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import { useMemo, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAppData } from '../../context/AppDataContext';

type OrderStatus = 'Pending' | 'Shipped' | 'Delivered';

const AdminOrders = () => {
    const { orders, updateOrderStatus } = useAppData();
    const navigate = useNavigate();
    const [statusFilter, setStatusFilter] = useState<'all' | OrderStatus>('all');
    const [query, setQuery] = useState('');

    const statusCounts = useMemo(
        () =>
            orders.reduce(
                (acc, order) => {
                    acc[order.status] += 1;
                    return acc;
                },
                { Pending: 0, Shipped: 0, Delivered: 0 }
            ),
        [orders]
    );

    const filteredOrders = useMemo(
        () =>
            orders
                .filter((order) => (statusFilter === 'all' ? true : order.status === statusFilter))
                .filter((order) => {
                    if (!query) return true;
                    return (
                        order.id.toLowerCase().includes(query.toLowerCase()) ||
                        order.customer.toLowerCase().includes(query.toLowerCase()) ||
                        order.email.toLowerCase().includes(query.toLowerCase())
                    );
                })
                .sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()),
        [orders, query, statusFilter]
    );

    return (
        <Card>
            <CardContent>
                <Stack spacing={2} mb={3}>
                    <Stack direction={{ xs: 'column', sm: 'row' }} justifyContent="space-between" alignItems="center">
                        <Typography variant="h5" fontWeight={800}>
                            Manage orders
                        </Typography>
                        <TextField
                            size="small"
                            placeholder="Search by order ID, name, or email"
                            value={query}
                            onChange={(event) => setQuery(event.target.value)}
                            InputProps={{
                                startAdornment: (
                                    <InputAdornment position="start">
                                        <SearchIcon fontSize="small" />
                                    </InputAdornment>
                                )
                            }}
                        />
                    </Stack>
                    <Stack direction={{ xs: 'column', sm: 'row' }} spacing={1} alignItems={{ xs: 'flex-start', sm: 'center' }}>
                        <Typography variant="subtitle2" color="text.secondary">
                            Filter by status
                        </Typography>
                        <Stack direction="row" spacing={1} flexWrap="wrap">
                            {['all', 'Pending', 'Shipped', 'Delivered'].map((status) => (
                                <Chip
                                    key={status}
                                    label={status === 'all' ? `All (${orders.length})` : `${status} (${statusCounts[status as keyof typeof statusCounts]})`}
                                    color={statusFilter === status ? 'secondary' : 'default'}
                                    onClick={() => setStatusFilter(status as typeof statusFilter)}
                                    variant={statusFilter === status ? 'filled' : 'outlined'}
                                />
                            ))}
                        </Stack>
                    </Stack>
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
                        {filteredOrders.map((order) => (
                            <TableRow key={order.id} hover>
                                <TableCell>{order.id}</TableCell>
                                <TableCell>{order.customer}</TableCell>
                                <TableCell>R{order.total}</TableCell>
                                <TableCell>
                                    <Select
                                        size="small"
                                        value={order.status}
                                        onChange={(event) => updateOrderStatus(order.id, event.target.value as OrderStatus)}
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
                {filteredOrders.length === 0 && (
                    <Alert severity="info" sx={{ mt: 2 }}>
                        No orders match your filters yet.
                    </Alert>
                )}
            </CardContent>
        </Card>
    );
};

export default AdminOrders;