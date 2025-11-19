import { Box, Typography, Grid, Card, CardContent } from '@mui/material';
import SectionHeader from '../components/SectionHeader';

const About = () => (
    <Box>
        <SectionHeader title="Our Story" subtitle="I am because we are – the spirit behind Ubuntu Threads." />
        <Grid container spacing={3}>
            <Grid item xs={12} md={6}>
                <Card sx={{ background: '#DCC7A1' }}>
                    <CardContent>
                        <Typography variant="h5" fontWeight={700}>The Spark</Typography>
                        <Typography mt={1}>
                            Born in Cape Town, Ubuntu Threads started as a community circle mending garments. The idea evolved into a
                            sustainable label that keeps artisans at the center.
                        </Typography>
                    </CardContent>
                </Card>
            </Grid>
            <Grid item xs={12} md={6}>
                <Card>
                    <CardContent>
                        <Typography variant="h5" fontWeight={700}>Mission</Typography>
                        <Typography mt={1}>
                            We create locally made apparel that honors people and planet, connecting customers to the makers behind
                            each piece.
                        </Typography>
                    </CardContent>
                </Card>
            </Grid>
            <Grid item xs={12} md={6}>
                <Card>
                    <CardContent>
                        <Typography variant="h5" fontWeight={700}>Vision & Values</Typography>
                        <Typography mt={1}>
                            Ubuntu guides us: shared humanity, transparency, circular design, and celebrating African creativity.
                        </Typography>
                    </CardContent>
                </Card>
            </Grid>
            <Grid item xs={12} md={6}>
                <Card>
                    <CardContent>
                        <Typography variant="h5" fontWeight={700}>Community Impact</Typography>
                        <Typography mt={1}>
                            We collaborate with sewing co-ops, provide training, and reinvest a portion of profits into artisan-led
                            education.
                        </Typography>
                    </CardContent>
                </Card>
            </Grid>
        </Grid>
    </Box>
);

export default About;