import { Box, Button, Card, CardContent, Typography } from '@mui/material';
import { loadStripe } from '@stripe/stripe-js';
import { Elements, CardElement } from '@stripe/react-stripe-js';
import toast from 'react-hot-toast';

const stripePromise = loadStripe('pk_test_demo');

const CheckoutForm = () => (
    <Card variant="outlined">
        <CardContent>
            <Typography gutterBottom>Payment details (demo)</Typography>
            <CardElement options={{ hidePostalCode: true }} />
            <Button
                fullWidth
                variant="contained"
                sx={{ mt: 2 }}
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
        <Elements stripe={stripePromise}>
            <CheckoutForm />
        </Elements>
    </Box>
);

export default Checkout;