import { Box, Typography, Grid, Card, CardContent, Stack, Chip } from '@mui/material';
import SectionHeader from '../components/SectionHeader';

const storyHighlights = [
    {
        title: 'The Spark',
        accent: '#c58b3a',
        highlight: 'Cape Town beginnings',
        description:
            'Born in Cape Town, Ubuntu Threads started as a community circle mending garments. The idea evolved into a sustainable label that keeps artisans at the center.'
    },
    {
        title: 'Mission',
        accent: '#3a7462',
        highlight: 'Craft with purpose',
        description:
            'We create locally made apparel that honors people and planet, connecting customers to the makers behind each piece.'
    },
    {
        title: 'Vision & Values',
        accent: '#8a6236',
        highlight: 'Guided by Ubuntu',
        description:
            'Ubuntu guides us: shared humanity, transparency, circular design, and celebrating African creativity.'
    },
    {
        title: 'Community Impact',
        accent: '#2f5a58',
        highlight: 'Prosper together',
        description:
            'We collaborate with sewing co-ops, provide training, and reinvest a portion of profits into artisan-led education.'
    }
];

const About = () => (

                <Box
                    sx={{
                        position: 'relative',
                        overflow: 'hidden',
                        p: { xs: 3, md: 6 },
                        borderRadius: { xs: 3, md: 4 },
                        background: 'linear-gradient(145deg, #f3ebdb 0%, #f8f3e7 55%, #efe2c7 100%)',
                        boxShadow: '0 25px 60px rgba(0,0,0,0.08)'
                    }}
                >
                    <Box
                        sx={{
                            position: 'absolute',
                            inset: 0,
                            background: 'radial-gradient(circle at 15% 20%, rgba(203, 157, 88, 0.16), transparent 35%), radial-gradient(circle at 85% 10%, rgba(62, 104, 90, 0.14), transparent 32%)'
                        }}
                    />
                    <Box position="relative">
                        <SectionHeader title="Our Story" subtitle="I am because we are – the spirit behind Ubuntu Threads." />
                        <Typography variant="body1" color="text.secondary" maxWidth={840} mb={4}>
                            Every collection is a collaboration with the people who make it possible. We honor their skills with thoughtful design,
                            long-lasting fabrics, and fair partnerships that keep Ubuntu at the heart of our work.
                        </Typography>
                        <Grid container spacing={3}>
                            {storyHighlights.map(({ title, accent, highlight, description }) => (
                                <Grid item xs={12} md={6} key={title}>
                                    <Card
                                        sx={{
                                            height: '100%',
                                            borderRadius: 3,
                                            border: `1px solid ${accent}20`,
                                            background: 'rgba(255,255,255,0.92)',
                                            boxShadow: '0 18px 32px rgba(0,0,0,0.08)',
                                            transition: 'transform 200ms ease, box-shadow 200ms ease',
                                            '&:hover': {
                                                transform: 'translateY(-6px)',
                                                boxShadow: '0 24px 48px rgba(0,0,0,0.12)'
                                            }
                                        }}
                                    >
                                        <CardContent sx={{ p: { xs: 3, md: 3.5 } }}>
                                            <Stack direction="row" alignItems="center" spacing={1.5} mb={1.5}>
                                                <Box sx={{ width: 12, height: 12, borderRadius: '50%', bgcolor: accent }} />
                                                <Typography variant="h6" fontWeight={800} color="text.primary">
                                                    {title}
                                                </Typography>
                                                <Chip label={highlight} size="small" sx={{ bgcolor: `${accent}14`, color: '#3a3325' }} />
                                            </Stack>
                                            <Typography variant="body1" color="text.secondary" lineHeight={1.7}>
                                                {description}
                                            </Typography>
                                        </CardContent>
                                    </Card>
                                </Grid>
                            ))}
                        </Grid>
    </Box>
</Box>
);

export default About;