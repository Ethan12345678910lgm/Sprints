import { useState, type FormEvent } from 'react';
import { Box, Button, Card, CardContent, Grid, Stack, TextField, Typography, Alert } from '@mui/material';
import toast from 'react-hot-toast';

const Contact = () => {
    const [values, setValues] = useState({ name: '', email: '', message: '' });
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = (event: FormEvent) => {
        event.preventDefault();
        if (!values.name || !values.email || !values.message) {
            toast.error('Please complete all fields');
            return;
        }
        setSubmitted(true);
        toast.success('Message sent – we will reply within 24 hours');
    };

    return (
        <Grid container spacing={4}>
            <Grid item xs={12} md={7}>
                <Card>
                    <CardContent>
                        <Typography variant="h5" fontWeight={800} gutterBottom>
                            Contact & Help
                        </Typography>
                        <Typography color="text.secondary" mb={3}>
                            Reach our concierge for styling, order questions, or community partnerships. We respond within 24
                            hours.
                        </Typography>
                        <Box component="form" onSubmit={handleSubmit} noValidate>
                            <Stack spacing={2}>
                                <TextField
                                    label="Name"
                                    value={values.name}
                                    onChange={(event) => setValues({ ...values, name: event.target.value })}
                                    required
                                />
                                <TextField
                                    label="Email"
                                    type="email"
                                    value={values.email}
                                    onChange={(event) => setValues({ ...values, email: event.target.value })}
                                    required
                                />
                                <TextField
                                    label="Message"
                                    value={values.message}
                                    onChange={(event) => setValues({ ...values, message: event.target.value })}
                                    multiline
                                    rows={4}
                                    required
                                />
                                <Button type="submit" variant="contained" size="large">
                                    Send message
                                </Button>
                            </Stack>
                        </Box>
                        {submitted && <Alert severity="success" sx={{ mt: 2 }}>We received your note.</Alert>}
                    </CardContent>
                </Card>
            </Grid>
            <Grid item xs={12} md={5}>
                <Card sx={{ height: '100%', background: '#0f172a', color: 'white' }}>
                    <CardContent>
                        <Typography variant="overline" color="secondary.light">
                            Studio support
                        </Typography>
                        <Typography variant="h6" fontWeight={800} gutterBottom>
                            FAQ snapshots
                        </Typography>
                        <Stack spacing={2} color="rgba(255,255,255,0.85)">
                            <Box>
                                <Typography fontWeight={700}>Shipping & delivery</Typography>
                                <Typography variant="body2">Within SA: 2-4 days · Global: 7-10 days.</Typography>
                            </Box>
                            <Box>
                                <Typography fontWeight={700}>Alterations & repairs</Typography>
                                <Typography variant="body2">Book a mending slot via community studio.</Typography>
                            </Box>
                            <Box>
                                <Typography fontWeight={700}>Returns</Typography>
                                <Typography variant="body2">30-day returns, repair-first policy encouraged.</Typography>
                            </Box>
                        </Stack>
                    </CardContent>
                </Card>
            </Grid>
        </Grid>
    );
};

export default Contact;