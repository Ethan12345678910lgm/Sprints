import { Box, Button, Card, CardContent, Stack, TextField, Typography } from '@mui/material';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const Register = () => {
    const { register } = useAuth();
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const submit = async () => {
        await register(email, password);
        navigate('/');
    };

    return (
        <Box maxWidth={480} mx="auto">
            <Card>
                <CardContent>
                    <Typography variant="h5" fontWeight={700} gutterBottom>
                        Create account
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
                            Join Ubuntu Threads
                        </Button>
                    </Stack>
                </CardContent>
            </Card>
        </Box>
    );
};

export default Register;