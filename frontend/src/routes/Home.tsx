import { useMemo, useState } from 'react';
import {
    Avatar,
    Box,
    Button,
    Card,
    Chip,
    Divider,
    Grid,
    LinearProgress,
    Stack,
    Typography,
    useTheme,
    TextField
} from '@mui/material';
import { useNavigate } from 'react-router-dom';
import SectionHeader from '../components/SectionHeader';
import { products, events } from '../data/mockData';
import toast from 'react-hot-toast';

const paletteBadges = {
    dawn: ['#F8E9DD', '#F7D1BA', '#B5775A'],
    harbor: ['#E5EEF5', '#CADAE6', '#547FA7'],
    garden: ['#E8F2E7', '#CFE5D1', '#5B8C6E']
};

type CapsuleTheme = {
    id: 'dawn' | 'harbor' | 'garden';
    title: string;
    description: string;
    tags: string[];
    productIds: number[];
};

type Sustainability = {
    title: string;
    subtitle: string;
    progress: number;
};

const capsuleThemes: CapsuleTheme[] = [
    {
        id: 'dawn',
        title: 'Sunrise Rituals',
        description: 'Soft terracotta layers that glow with the first light over Table Mountain.',
        tags: ['meditative', 'slow living', 'drift silhouettes'],
        productIds: [1, 2]
    },
    {
        id: 'harbor',
        title: 'Harbor Lines',
        description: 'Salt-air tailoring inspired by the working harbor and sea spray.',
        tags: ['structured', 'linen', 'coastal'],
        productIds: [3, 4]
    },
    {
        id: 'garden',
        title: 'Garden City',
        description: 'Utility pieces for market days, urban hikes, and rooftop gatherings.',
        tags: ['modular', 'utility', 'recycled'],
        productIds: [5, 6]
    }
];

const sustainabilityFocus: Sustainability[] = [
    {
        title: 'Traceable fibres',
        subtitle: 'Linen, hemp, and recycled cotton with farm-level transparency.',
        progress: 92
    },
    {
        title: 'Artisan equity',
        subtitle: 'Co-op wages, training stipends, and long-term maker partnerships.',
        progress: 84
    },
    {
        title: 'Circular practices',
        subtitle: 'Repair credits, swaps, and low-impact dyes in every run.',
        progress: 78
    }
];

const experiences = [
    {
        eyebrow: 'Digital concierge',
        title: 'Book a 15-min fit session',
        description: 'Meet a stylist over video to tailor your capsule to your climate and rituals.',
        action: (navigate: ReturnType<typeof useNavigate>) => navigate('/community'),
        cta: 'Meet the stylist'
    },
    {
        eyebrow: 'Community studio',
        title: 'Join our mending circles',
        description: 'Learn visible mending and dye techniques from our co-op artisans every Thursday.',
        action: (navigate: ReturnType<typeof useNavigate>) => navigate('/journal'),
        cta: 'View the schedule'
    }
];

const Home = () => {
    const navigate = useNavigate();
    const theme = useTheme();
    const featured = products.slice(0, 3);

    const [activeTheme, setActiveTheme] = useState<'dawn' | 'harbor' | 'garden'>('dawn');
    const [activeMood, setActiveMood] = useState<'daytime' | 'evening'>('daytime');
    const [newsletterEmail, setNewsletterEmail] = useState('');

    const recommendedProducts = useMemo(() => {
        const themeProducts = products.filter((product) =>
            capsuleThemes.find((themeOption) => themeOption.id === activeTheme)?.productIds.includes(product.id)
        );

        if (activeMood === 'evening') {
            return themeProducts.slice().reverse();
        }

        return themeProducts;
    }, [activeMood, activeTheme]);

    return (
        <Box>
            <Grid container spacing={4} alignItems="stretch">
                <Grid item xs={12} md={7}>
                    <Card
                        sx={{
                            p: 4,
                            height: '100%',
                            bgcolor: 'rgba(255,255,255,0.6)',
                            backdropFilter: 'blur(8px)',
                            boxShadow: '0 20px 80px rgba(0,0,0,0.08)',
                            borderRadius: 4,
                            border: '1px solid',
                            borderColor: 'divider'
                        }}
                    >
                        <Stack spacing={3} divider={<Divider flexItem />}>
                            <Box>
                                <Chip label="New drop" color="secondary" variant="filled" sx={{ mb: 2 }} />
                                <Typography variant="h3" fontWeight={800} gutterBottom>
                                    Ubuntu Threads: Cape Dawn capsule
                                </Typography>
                                <Typography variant="body1" color="text.secondary" maxWidth={680}>
                                    Locally crafted layers designed for sea breezes, sunrise rituals, and market days.
                                    Every piece is cut in small batches with full traceability to our makers.
                                </Typography>
                            </Box>

                            <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2} alignItems="center">
                                <Avatar sx={{ bgcolor: theme.palette.secondary.light, width: 56, height: 56 }}>CT</Avatar>
                                <Box>
                                    <Typography variant="subtitle1" fontWeight={700}>
                                        Cape Town maker co-op
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">
                                        14 artisans · 3 natural fibre mills · 100% living wages
                                    </Typography>
                                </Box>
                                <Divider orientation="vertical" flexItem sx={{ display: { xs: 'none', sm: 'block' } }} />
                                <Stack direction="row" spacing={1} flexWrap="wrap">
                                    {paletteBadges[activeTheme].map((tone) => (
                                        <Box
                                            key={tone}
                                            sx={{
                                                width: 36,
                                                height: 36,
                                                borderRadius: '50%',
                                                bgcolor: tone,
                                                border: '1px solid rgba(0,0,0,0.08)'
                                            }}
                                        />
                                    ))}
                                </Stack>
                            </Stack>

                            <Grid container spacing={2} alignItems="stretch">
                                {featured.map((product) => (
                                    <Grid item xs={12} sm={4} key={product.id}>
                                        <Card
                                            variant="outlined"
                                            sx={{ p: 2, height: '100%', borderRadius: 3, display: 'flex', flexDirection: 'column', gap: 1.5 }}
                                        >
                                            <Chip label={product.collectionName} size="small" color="secondary" />
                                            <Typography variant="h6" fontWeight={800}>
                                                {product.name}
                                            </Typography>
                                            <Typography variant="body2" color="text.secondary">
                                                {product.description}
                                            </Typography>
                                            <Stack direction="row" spacing={1} alignItems="center" mt="auto">
                                                <Button
                                                    size="small"
                                                    variant="contained"
                                                    onClick={() => navigate(`/shop/${product.slug}`)}
                                                >
                                                    View
                                                </Button>
                                                <Button
                                                    size="small"
                                                    variant="text"
                                                    onClick={() => toast.success(`${product.name} saved to your capsule`)}
                                                >
                                                    Save
                                                </Button>
                                            </Stack>
                                        </Card>
                                    </Grid>
                                ))}
                            </Grid>
                        </Stack>
                    </Card>
                </Grid>

                <Grid item xs={12} md={5}>
                    <Card
                        sx={{
                            p: 4,
                            height: '100%',
                            borderRadius: 4,
                            border: '1px solid',
                            borderColor: 'divider',
                            background: 'linear-gradient(135deg, rgba(255,255,255,0.92), rgba(235,219,197,0.35))'
                        }}
                    >
                        <Stack spacing={3}>
                            <SectionHeader
                                title="Build your capsule"
                                subtitle="Choose a palette and mood to curate looks from the studio."
                            />

                            <Stack direction="row" spacing={1} flexWrap="wrap">
                                {capsuleThemes.map((themeOption) => (
                                    <Chip
                                        key={themeOption.id}
                                        label={themeOption.title}
                                        color={themeOption.id === activeTheme ? 'primary' : 'default'}
                                        onClick={() => setActiveTheme(themeOption.id)}
                                    />
                                ))}
                            </Stack>

                            <Stack direction="row" spacing={1}>
                                {(['daytime', 'evening'] as const).map((mood) => (
                                    <Button
                                        key={mood}
                                        variant={activeMood === mood ? 'contained' : 'outlined'}
                                        onClick={() => setActiveMood(mood)}
                                    >
                                        {mood === 'daytime' ? 'Daylight ease' : 'Evening gatherings'}
                                    </Button>
                                ))}
                            </Stack>

                            <Stack spacing={2}>
                                {recommendedProducts.map((product) => (
                                    <Card key={product.id} variant="outlined" sx={{ p: 2, borderRadius: 3 }}>
                                        <Stack direction="row" justifyContent="space-between" alignItems="center" spacing={2}>
                                            <Box>
                                                <Typography variant="subtitle1" fontWeight={700}>
                                                    {product.name}
                                                </Typography>
                                                <Typography variant="body2" color="text.secondary">
                                                    {product.materials} · {product.tags.slice(0, 2).join(' · ')}
                                                </Typography>
                                            </Box>
                                            <Stack direction="row" spacing={1}>
                                                <Button size="small" onClick={() => navigate(`/shop/${product.slug}`)}>
                                                    Details
                                                </Button>
                                                <Button
                                                    size="small"
                                                    variant="contained"
                                                    onClick={() => toast.success(`${product.name} added to cart`)}
                                                >
                                                    Add
                                                </Button>
                                            </Stack>
                                        </Stack>
                                    </Card>
                                ))}
                            </Stack>
                        </Stack>
                    </Card>
                </Grid>
            </Grid>

            <Box mt={8}>
                <SectionHeader
                    title="Sustainability metrics"
                    subtitle="Every capsule tracks fibre origins, maker equity, and circular services."
                />
                <Grid container spacing={2}>
                    {sustainabilityFocus.map((item) => (
                        <Grid item xs={12} md={4} key={item.title}>
                            <Card variant="outlined" sx={{ p: 3, borderRadius: 4, height: '100%' }}>
                                <Typography variant="subtitle1" fontWeight={800} gutterBottom>
                                    {item.title}
                                </Typography>
                                <Typography variant="body2" color="text.secondary" gutterBottom>
                                    {item.subtitle}
                                </Typography>
                                <LinearProgress
                                    variant="determinate"
                                    value={item.progress}
                                    sx={{ height: 10, borderRadius: 5, mt: 2 }}
                                />
                                <Typography variant="body2" color="text.secondary" mt={1}>
                                    {item.progress}% of goal
                                </Typography>
                            </Card>
                        </Grid>
                    ))}
                </Grid>
            </Box>

            <Box mt={8}>
                <SectionHeader
                    title="Studio gatherings"
                    subtitle="Join our Cape Town community for swaps, workshops, and night markets."
                />
                <Grid container spacing={3}>
                    {events.slice(0, 3).map((event) => (
                        <Grid item xs={12} md={4} key={event.title}>
                            <Card variant="outlined" sx={{ p: 3, borderRadius: 4, height: '100%' }}>
                                <Stack spacing={1}>
                                    <Typography variant="overline" color="secondary">
                                        {event.date}
                                    </Typography>
                                    <Typography variant="h6" fontWeight={800}>
                                        {event.title}
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">
                                        {event.description}
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">
                                        {event.venue} · {event.location}
                                    </Typography>
                                    <Button
                                        variant="contained"
                                        onClick={() => toast.success(`Saved ${event.title} to your calendar`)}
                                    >
                                        Save my spot
                                    </Button>
                                </Stack>
                            </Card>
                        </Grid>
                    ))}
                </Grid>
            </Box>

            <Box mt={8}>
                <SectionHeader
                    title="Concierge + studio access"
                    subtitle="Choose a service to personalize your capsule and connect with the co-op."
                />
                <Grid container spacing={3}>
                    {experiences.map((experience) => (
                        <Grid item xs={12} md={6} key={experience.title}>
                            <Card
                                sx={{
                                    p: 3,
                                    height: '100%',
                                    borderRadius: 4,
                                    border: '1px solid',
                                    borderColor: 'divider',
                                    background: 'linear-gradient(135deg, rgba(255,255,255,0.92), rgba(235,219,197,0.35))'
                                }}
                            >
                                <Typography variant="overline" color="secondary">
                                    {experience.eyebrow}
                                </Typography>
                                <Typography variant="h6" fontWeight={800} gutterBottom>
                                    {experience.title}
                                </Typography>
                                <Typography variant="body1" color="text.secondary" mb={2}>
                                    {experience.description}
                                </Typography>
                                <Button variant="contained" color="primary" onClick={() => experience.action(navigate)}>
                                    {experience.cta}
                                </Button>
                            </Card>
                        </Grid>
                    ))}
                </Grid>
            </Box>

            <Box mt={8}>
                <SectionHeader
                    title="Join the Ubuntu Threads list"
                    subtitle="Get capsule drops, maker stories, and studio events in your inbox."
                />
                <Card sx={{ p: 3, borderRadius: 4, border: '1px solid', borderColor: 'divider' }}>
                    <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2} alignItems={{ xs: 'flex-start', sm: 'center' }}>
                        <TextField
                            label="Email"
                            type="email"
                            value={newsletterEmail}
                            onChange={(event) => setNewsletterEmail(event.target.value)}
                            fullWidth
                        />
                        <Button
                            variant="contained"
                            size="large"
                            onClick={() => {
                                toast.success('You are on the list for the next drop');
                                setNewsletterEmail('');
                            }}
                        >
                            Sign up
                        </Button>
                    </Stack>
                </Card>
            </Box>
        </Box>
    );
};

export default Home;
