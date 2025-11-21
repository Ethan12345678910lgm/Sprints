import { Box, Button, Card, CardContent, Stack, TextField, Typography, Link } from '@mui/material';
import { useState } from 'react';
import { useNavigate, Link as RouterLink } from 'react-router-dom';
import toast from 'react-hot-toast';
import { useAuth } from '../context/AuthContext';

const Login = () => {
    const { login } = useAuth();
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const submit = async () => {
        await login(email, password);
        navigate('/account');
    };

    return (
        <Box maxWidth={480} mx="auto">
            <Card>
                <CardContent>
                    <Typography variant="h5" fontWeight={700} gutterBottom>
                        Login
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
                        <Link
                            component="button"
                            variant="body2"
                            onClick={() => toast('Reset link sent to your inbox (demo)')}
                            sx={{ alignSelf: 'flex-start' }}
                        >
                            Forgot password?
                        </Link>
                        <Button variant="contained" onClick={submit} fullWidth>
                            Sign in
                        </Button>
                        <Button component={RouterLink} to="/auth/register">
                            Create account
                        </Button>
                    </Stack>
                </CardContent>
            </Card>
        </Box>
    );
};

export default Login;