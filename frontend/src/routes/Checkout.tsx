import { Box, Button, Card, CardContent, Stack, TextField, Typography } from '@mui/material';
import toast from 'react-hot-toast';

const CheckoutForm = () => (
    <Card variant="outlined">
        <CardContent>
            <Typography gutterBottom>Payment details (demo)</Typography>
            <Stack spacing={2}>
                <TextField label="Cardholder name" fullWidth autoComplete="cc-name" />
                <TextField label="Card number" fullWidth autoComplete="cc-number" />
                <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2}>
                    <TextField label="Expiry" fullWidth autoComplete="cc-exp" placeholder="MM/YY" />
                    <TextField label="CVC" fullWidth autoComplete="cc-csc" />
                </Stack>
            </Stack>
            <Button
                fullWidth
                variant="contained"
                sx={{ mt: 3 }}
                onClick={() => toast.success('Demo payment succeeded (test mode)')}
            >
                Pay R1200
            </Button>
        </CardContent>
    </Card>
);

const Checkout = () => (
    <Box maxWidth={520} mx="auto">
        <Typography variant="h4" fontWeight={700} gutterBottom>
            Checkout
        </Typography>
        <Typography color="text.secondary" mb={3}>
            No live payment is processed. Enter any details to preview the experience.
        </Typography>
        <CheckoutForm />
    </Box>
);

export default Checkout;