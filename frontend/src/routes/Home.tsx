import { Box, Grid, Typography, Button, Card, CardContent, Stack, Chip } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import SectionHeader from '../components/SectionHeader';
import { products } from '../data/mockData';

const Home = () => {
    const navigate = useNavigate();
    const featured = products.slice(0, 3);

    return (
        <Box>
            <Grid container spacing={4} alignItems="center">
                <Grid item xs={12} md={6}>
                    <Typography variant="overline" color="secondary">Ubuntu Threads</Typography>
                    <Typography variant="h2" fontWeight={800} gutterBottom>
                        Connection through craft.
                    </Typography>
                    <Typography variant="body1" color="text.secondary" mb={2}>
                        Sustainable staples inspired by Cape Town light, woven with Ubuntu and crafted by local co-ops.
                    </Typography>
                    <Stack direction="row" spacing={2}>
                        <Button variant="contained" color="primary" onClick={() => navigate('/shop')}>
                            Shop the Capsule
                        </Button>
                        <Button variant="outlined" onClick={() => navigate('/about')}>
                            Explore Our Story
                        </Button>
                    </Stack>
                </Grid>
                <Grid item xs={12} md={6}>
                    <Card sx={{ background: '#DCC7A1', minHeight: 260, p: 2 }}>
                        <CardContent>
                            <Typography variant="h5" fontWeight={700}>Cape Dawn Capsule</Typography>
                            <Typography mt={1}>
                                A limited drop celebrating sunrises over the harbor, dyed with low-impact hues and sewn in Khayelitsha.
                            </Typography>
                            <Stack direction="row" spacing={1} mt={2}>
                                <Chip label="Local artisans" color="secondary" />
                                <Chip label="Natural fibres" color="primary" variant="outlined" />
                            </Stack>
                        </CardContent>
                    </Card>
                </Grid>
            </Grid>

            <Box mt={6}>
                <SectionHeader
                    title="Featured Capsule"
                    subtitle="Three pieces that capture the warmth of Ubuntu and the breeze of the Cape."
                />
                <Grid container spacing={3}>
                    {featured.map((product) => (
                        <Grid item xs={12} md={4} key={product.id}>
                            <Card onClick={() => navigate(`/product/${product.id}`)} sx={{ cursor: 'pointer' }}>
                                <CardContent>
                                    <Typography variant="h6">{product.name}</Typography>
                                    <Typography variant="body2" color="text.secondary">
                                        {product.collectionName}
                                    </Typography>
                                    <Typography variant="subtitle1" mt={1} fontWeight={700}>
                                        R{product.price}
                                    </Typography>
                                </CardContent>
                            </Card>
                        </Grid>
                    ))}
                </Grid>
            </Box>
        </Box>
    );
};

export default Home;