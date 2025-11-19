import { Box, Grid, Card, CardContent, Typography, Stack } from '@mui/material';
import { Leaf, Recycle, HandHeart } from 'lucide-react';
import SectionHeader from '../components/SectionHeader';

const highlights = [
    { icon: Leaf, title: 'Locally sourced', copy: 'Cotton, hemp, and bamboo from regional suppliers.' },
    { icon: HandHeart, title: 'Ethically produced', copy: 'Partnering with artisan co-ops with fair wages.' },
    { icon: Recycle, title: 'Low-impact dyes', copy: 'Small-batch dyeing minimizes water and chemical use.' }
];

const Sustainability = () => (
    <Box>
        <SectionHeader
            title="Sustainability & Process"
            subtitle="From fabric to finish, Ubuntu Threads is intentional about every step."
        />
        <Grid container spacing={3}>
            {highlights.map((item) => (
                <Grid item xs={12} md={4} key={item.title}>
                    <Card>
                        <CardContent>
                            <Stack direction="row" spacing={2} alignItems="center">
                                <item.icon />
                                <Box>
                                    <Typography variant="h6">{item.title}</Typography>
                                    <Typography>{item.copy}</Typography>
                                </Box>
                            </Stack>
                        </CardContent>
                    </Card>
                </Grid>
            ))}
        </Grid>
        <Card sx={{ mt: 3, background: '#E3EAE0' }}>
            <CardContent>
                <Typography variant="h5" fontWeight={700}>Partnerships</Typography>
                <Typography mt={1}>
                    We collaborate with Khayelitsha sewing circles, Woodstock dye studios, and garden collectives to trace impact
                    and celebrate Ubuntu.
                </Typography>
            </CardContent>
        </Card>
    </Box>
);

export default Sustainability;