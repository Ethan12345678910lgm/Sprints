import { Box, Grid, Card, CardContent, Typography, Stack, Divider, Chip } from '@mui/material';
import { Leaf, Recycle, HandHeart, MapPin, HeartHandshake } from 'lucide-react';
import SectionHeader from '../components/SectionHeader';

const highlights = [
    { icon: Leaf, title: 'Locally sourced', copy: 'Cotton, hemp, and bamboo from regional suppliers.' },
    { icon: HandHeart, title: 'Ethically produced', copy: 'Partnering with artisan co-ops with fair wages.' },
    { icon: Recycle, title: 'Low-impact dyes', copy: 'Small-batch dyeing minimizes water and chemical use.' }
];

const partners = [
    {
        name: 'Khayelitsha Sewing Circle',
        focus: 'Community tailoring co-op',
        location: 'Khayelitsha, Cape Town',
        impact: '18 women-led micro businesses share equipment, training, and living-wage orders from Ubuntu Threads.',
        specialties: ['Pattern cutting', 'Small-batch runs', 'Skill development'],
    },
    {
        name: 'Woodstock Dye Studio',
        focus: 'Low-impact dye lab',
        location: 'Woodstock, Cape Town',
        impact: 'Solar-assisted kettles and reclaimed-water rinses keep every drop in circulation during dyeing.',
        specialties: ['Natural pigments', 'Water recapture', 'Colour matching'],
    },
    {
        name: 'Garden Route Fibre Collective',
        focus: 'Regenerative growers',
        location: 'George & Knysna',
        impact: 'Family farms transition fallow land to hemp and bamboo, boosting soil health and rural livelihoods.',
        specialties: ['Regenerative farming', 'Traceable fibres', 'Community reinvestment'],
    },
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
                <Stack direction="row" spacing={1} alignItems="center" mb={1}>
                    <HeartHandshake size={22} />
                    <Typography variant="h5" fontWeight={700}>Partnerships</Typography>
                </Stack>
                <Typography mb={2}>
                    We collaborate with local makers who mirror our Ubuntu values—supporting livelihoods, protecting ecosystems,
                    and keeping production traceable every step of the way.
                </Typography>
                <Grid container spacing={2}>
                    {partners.map((partner) => (
                        <Grid item xs={12} md={4} key={partner.name}>
                            <Card variant="outlined" sx={{ height: '100%' }}>
                                <CardContent>
                                    <Stack direction="row" spacing={1} alignItems="center" mb={1}>
                                        <MapPin size={18} />
                                        <Typography variant="subtitle2" color="text.secondary">{partner.location}</Typography>
                                    </Stack>
                                    <Typography variant="h6" fontWeight={700}>{partner.name}</Typography>
                                    <Typography variant="subtitle1" color="text.secondary" gutterBottom>
                                        {partner.focus}
                                    </Typography>
                                    <Divider sx={{ my: 1 }} />
                                    <Typography variant="body2" mb={2}>{partner.impact}</Typography>
                                    <Stack direction="row" spacing={1} flexWrap="wrap" rowGap={1}>
                                        {partner.specialties.map((specialty) => (
                                            <Chip key={specialty} label={specialty} size="small" color="success" variant="outlined" />
                                        ))}
                                    </Stack>
                                </CardContent>
                            </Card>
                        </Grid>
                    ))}
                </Grid>
            </CardContent>
        </Card>
    </Box>
);

export default Sustainability;