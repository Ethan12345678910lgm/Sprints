import { useState } from 'react';
import { Box, Button, Card, CardContent, Stack, TextField, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';

const AdminLogin = () => {
    const { loginAdmin } = useAuth();
    const navigate = useNavigate();
    const [email, setEmail] = useState('admin@example.com');
    const [password, setPassword] = useState('password');

    const submit = async () => {
        try {
            await loginAdmin(email, password);
            navigate('/admin');
        } catch (error) {
            // toast handled in context
        }
    };

    return (
        <Box maxWidth={480} mx="auto">
            <Card>
                <CardContent>
                    <Typography variant="h5" fontWeight={700} gutterBottom>
                        Admin login
                    </Typography>
                    <Stack spacing={2}>
                        <TextField label="Email" value={email} onChange={(e) => setEmail(e.target.value)} fullWidth />
                        <TextField
                            label="Password"
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            fullWidth
                        />
                        <Button variant="contained" onClick={submit} fullWidth>
                            Sign in
                        </Button>
                        <Typography variant="body2" color="text.secondary">
                            Use admin@example.com / password to access the console.
                        </Typography>
                    </Stack>
                </CardContent>
            </Card>
        </Box>
    );
};

export default AdminLogin;