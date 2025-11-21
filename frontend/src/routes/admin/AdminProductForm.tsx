import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { Card, CardContent, Stack, TextField, Typography, Button, MenuItem } from '@mui/material';
import { useAppData } from '../../context/AppDataContext';

const AdminProductForm = () => {
    const { id } = useParams();
    const { products, addProduct, updateProduct } = useAppData();
    const navigate = useNavigate();
    const editingProduct = products.find((product) => product.id === Number(id));

    const [form, setForm] = useState({
        name: editingProduct?.name ?? '',
        price: editingProduct?.price ?? 0,
        materials: editingProduct?.materials ?? '',
        category: editingProduct?.category ?? 'tops',
        status: editingProduct?.status ?? 'draft',
        stock: editingProduct?.stock ?? 0
    });

    useEffect(() => {
        if (editingProduct) {
            setForm({
                name: editingProduct.name,
                price: editingProduct.price,
                materials: editingProduct.materials,
                category: editingProduct.category,
                status: editingProduct.status,
                stock: editingProduct.stock
            });
        }
    }, [editingProduct]);

    const submit = () => {
        if (editingProduct) {
            updateProduct(editingProduct.id, {
                ...editingProduct,
                ...form
            });
        } else {
            addProduct(form);
        }
        navigate('/admin/products');
    };

    return (
        <Card>
            <CardContent>
                <Typography variant="h5" fontWeight={800} gutterBottom>
                    {editingProduct ? 'Edit product' : 'Add product'}
                </Typography>
                <Stack spacing={2} maxWidth={520}>
                    <TextField
                        label="Name"
                        value={form.name}
                        onChange={(event) => setForm({ ...form, name: event.target.value })}
                    />
                    <TextField
                        label="Price"
                        type="number"
                        value={form.price}
                        onChange={(event) => setForm({ ...form, price: Number(event.target.value) })}
                    />
                    <TextField
                        label="Materials"
                        value={form.materials}
                        onChange={(event) => setForm({ ...form, materials: event.target.value })}
                    />
                    <TextField
                        select
                        label="Category"
                        value={form.category}
                        onChange={(event) => setForm({ ...form, category: event.target.value })}
                    >
                        {['tops', 'outerwear', 'dresses', 'bottoms'].map((option) => (
                            <MenuItem key={option} value={option}>
                                {option}
                            </MenuItem>
                        ))}
                    </TextField>
                    <TextField
                        select
                        label="Status"
                        value={form.status}
                        onChange={(event) => setForm({ ...form, status: event.target.value as 'active' | 'draft' })}
                    >
                        {['active', 'draft'].map((option) => (
                            <MenuItem key={option} value={option}>
                                {option}
                            </MenuItem>
                        ))}
                    </TextField>
                    <TextField
                        label="Stock"
                        type="number"
                        value={form.stock}
                        onChange={(event) => setForm({ ...form, stock: Number(event.target.value) })}
                    />
                    <Button variant="contained" onClick={submit} sx={{ alignSelf: 'flex-start' }}>
                        Save
                    </Button>
                </Stack>
            </CardContent>
        </Card>
    );
};

export default AdminProductForm;