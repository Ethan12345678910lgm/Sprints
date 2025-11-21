import {
    Card,
    CardContent,
    Typography,
    Table,
    TableHead,
    TableRow,
    TableCell,
    TableBody,
    Button,
    Stack
} from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { useAppData } from '../../context/AppDataContext';

const AdminProducts = () => {
    const { products } = useAppData();
    const navigate = useNavigate();

    return (
        <Card>
            <CardContent>
                <Stack direction={{ xs: 'column', sm: 'row' }} justifyContent="space-between" alignItems="center" mb={2}>
                    <div>
                        <Typography variant="h5" fontWeight={800}>
                            Manage products
                        </Typography>
                        <Typography color="text.secondary">Edit and add capsule pieces.</Typography>
                    </div>
                    <Button variant="contained" onClick={() => navigate('/admin/products/new')}>
                        Add product
                    </Button>
                </Stack>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell>Name</TableCell>
                            <TableCell>Price</TableCell>
                            <TableCell>Stock</TableCell>
                            <TableCell>Status</TableCell>
                            <TableCell>Actions</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {products.map((product) => (
                            <TableRow key={product.id} hover>
                                <TableCell>{product.name}</TableCell>
                                <TableCell>R{product.price}</TableCell>
                                <TableCell>{product.stock}</TableCell>
                                <TableCell>{product.status}</TableCell>
                                <TableCell>
                                    <Button onClick={() => navigate(`/admin/products/${product.id}/edit`)}>Edit</Button>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </CardContent>
        </Card>
    );
};

export default AdminProducts;