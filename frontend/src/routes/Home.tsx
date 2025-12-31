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
import { ArrowForward, AutoAwesome, CheckCircle, Forest, Handshake, LocalShipping, RestartAlt } from '@mui/icons-material';
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

const heroStats = [
    { label: 'Pieces tailored this month', value: '112', detail: 'Cape Town studio' },
    { label: 'Average delivery', value: '48h', detail: 'carbon-neutral dispatch' },
    { label: 'Repairs covered', value: 'Lifetime', detail: 'annual mending credit' }
];

const studioAssurances = [
    {
        title: '48h Cape dispatch',
        description: 'Carbon-neutral delivery from our Woodstock studio with SMS tracking updates.',
        icon: LocalShipping
    },
    {
        title: 'Lifetime repairs',
        description: 'Annual mending credit and visible repair options to keep every piece in rotation.',
        icon: RestartAlt
    },
    {
        title: 'Traceable fibres',
        description: 'QR-coded bolts from Western Cape farms and fully auditable dye houses.',
        icon: Forest
    }
];

const moodNotes: Record<'daytime' | 'evening', { title: string; bullets: string[] }> = {
    daytime: {
        title: 'Daylight ease',
        bullets: [
            'Breathable linens layered for co-working and coastal walks.',
            'Sunrise palette anchored in clay, sand, and aloe greens.',
            'Packable silhouettes that dress up with a single accessory.'
        ]
    },
    evening: {
        title: 'Evening gatherings',
        bullets: [
            'Structured layers with contrast stitching and corozo buttons.',
            'Rooftop-friendly warmth with recycled knits and soft lining.',
            'Details built for movement: side vents, cuff tabs, and hidden pockets.'
        ]
    }
};

const processMoments = [
    {
        label: '1. Fit guidance',
        detail: 'Share your climate, routines, and fit notes for a curated shortlist within 24h.',
        badge: 'Concierge'
    },
    {
        label: '2. Make & finish',
        detail: 'Each piece is pressed, labeled with maker initials, and paired with care cards.',
        badge: 'Studio'
    },
    {
        label: '3. Delivery & aftercare',
        detail: 'Carbon-neutral courier, repair credits, and seasonal refresh reminders.',
        badge: 'Care'
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
                                <Stack direction={{ xs: 'column', sm: 'row' }} spacing={1.5} mt={2}>
                                    <Button
                                        variant="contained"
                                        size="large"
                                        endIcon={<ArrowForward />}
                                        onClick={() => navigate('/shop')}
                                    >
                                        Shop the capsule
                                    </Button>
                                    <Button
                                        variant="text"
                                        size="large"
                                        color="secondary"
                                        endIcon={<ArrowForward />}
                                        onClick={() => navigate('/sustainability')}
                                        sx={{ textTransform: 'none', fontWeight: 700 }}
                                    >
                                        Explore our process
                                    </Button>
                                </Stack>
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

                            <Stack direction={{ xs: 'column', md: 'row' }} spacing={2}>
                                {heroStats.map((stat) => (
                                    <Card
                                        key={stat.label}
                                        variant="outlined"
                                        sx={{
                                            p: 2,
                                            flex: 1,
                                            borderRadius: 3,
                                            background: 'linear-gradient(135deg, rgba(255,255,255,0.9), rgba(234,221,201,0.55))'
                                        }}
                                    >
                                        <Stack direction="row" spacing={1.5} alignItems="center">
                                            <Avatar sx={{ bgcolor: 'primary.light', color: 'primary.dark' }}>
                                                <CheckCircle />
                                            </Avatar>
                                            <Box>
                                                <Typography variant="subtitle2" color="text.secondary">
                                                    {stat.label}
                                                </Typography>
                                                <Typography variant="h6" fontWeight={800}>
                                                    {stat.value}
                                                </Typography>
                                                <Typography variant="body2" color="text.secondary">
                                                    {stat.detail}
                                                </Typography>
                                            </Box>
                                        </Stack>
                                    </Card>
                                ))}
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
                                    <Card
                                        key={product.id}
                                        variant="outlined"
                                        sx={{
                                            p: 2,
                                            borderRadius: 3,
                                            background: 'linear-gradient(135deg, rgba(255,255,255,0.95), rgba(228,217,199,0.45))',
                                            borderColor: 'divider'
                                        }}
                                    >
                                        <Stack direction="row" justifyContent="space-between" alignItems="center" spacing={2}>
                                            <Box>
                                                <Typography variant="subtitle1" fontWeight={800}>
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

            <Box mt={6}>
                <SectionHeader
                    title="Studio guarantees"
                    subtitle="Every order includes care, transparency, and support from real humans."
                />
                <Grid container spacing={2}>
                    {studioAssurances.map((assurance) => {
                        const Icon = assurance.icon;
                        return (
                            <Grid item xs={12} md={4} key={assurance.title}>
                                <Card variant="outlined" sx={{ p: 3, borderRadius: 4, height: '100%' }}>
                                    <Stack direction="row" spacing={2} alignItems="flex-start">
                                        <Avatar sx={{ bgcolor: 'secondary.light', color: 'secondary.dark' }}>
                                            <Icon />
                                        </Avatar>
                                        <Stack spacing={0.5}>
                                            <Typography variant="subtitle1" fontWeight={800}>
                                                {assurance.title}
                                            </Typography>
                                            <Typography variant="body2" color="text.secondary">
                                                {assurance.description}
                                            </Typography>
                                        </Stack>
                                    </Stack>
                                </Card>
                            </Grid>
                        );
                    })}
                </Grid>
            </Box>

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
                    title="Capsule moodboard"
                    subtitle="See how the current palette translates into lived-in outfits."
                />
                <Grid container spacing={3}>
                    <Grid item xs={12} md={7}>
                        <Card sx={{ p: 3, borderRadius: 4, border: '1px solid', borderColor: 'divider' }}>
                            <Stack spacing={2}>
                                <Stack direction="row" spacing={1} alignItems="center">
                                    <Avatar sx={{ bgcolor: paletteBadges[activeTheme][1], color: 'white' }}>
                                        <AutoAwesome />
                                    </Avatar>
                                    <Box>
                                        <Typography variant="subtitle1" fontWeight={800}>
                                            {capsuleThemes.find((item) => item.id === activeTheme)?.title}
                                        </Typography>
                                        <Typography variant="body2" color="text.secondary">
                                            {moodNotes[activeMood].title}
                                        </Typography>
                                    </Box>
                                </Stack>
                                <Divider />
                                <Stack spacing={1.5}>
                                    {moodNotes[activeMood].bullets.map((note) => (
                                        <Stack key={note} direction="row" spacing={1.5} alignItems="flex-start">
                                            <Chip
                                                size="small"
                                                label={activeMood === 'daytime' ? 'Soft light' : 'After dusk'}
                                                color={activeMood === 'daytime' ? 'primary' : 'secondary'}
                                                variant="outlined"
                                            />
                                            <Typography variant="body2" color="text.secondary">
                                                {note}
                                            </Typography>
                                        </Stack>
                                    ))}
                                </Stack>
                            </Stack>
                        </Card>
                    </Grid>
                    <Grid item xs={12} md={5}>
                        <Card
                            sx={{
                                p: 3,
                                borderRadius: 4,
                                height: '100%',
                                border: '1px solid',
                                borderColor: 'divider',
                                background: 'linear-gradient(135deg, rgba(255,255,255,0.95), rgba(233,222,202,0.45))'
                            }}
                        >
                            <Stack spacing={2}>
                                <Typography variant="overline" color="secondary">
                                    Studio rhythm
                                </Typography>
                                {processMoments.map((moment) => (
                                    <Stack
                                        key={moment.label}
                                        direction="row"
                                        spacing={1.5}
                                        alignItems="flex-start"
                                        sx={{
                                            p: 1.5,
                                            borderRadius: 3,
                                            border: '1px dashed',
                                            borderColor: 'divider',
                                            backgroundColor: 'rgba(255,255,255,0.65)'
                                        }}
                                    >
                                        <Chip label={moment.badge} size="small" color="secondary" variant="outlined" />
                                        <Box>
                                            <Typography variant="subtitle2" fontWeight={700}>
                                                {moment.label}
                                            </Typography>
                                            <Typography variant="body2" color="text.secondary">
                                                {moment.detail}
                                            </Typography>
                                        </Box>
                                    </Stack>
                                ))}
                                <Button
                                    variant="contained"
                                    startIcon={<Handshake />}
                                    onClick={() => navigate('/contact')}
                                >
                                    Talk to our studio team
                                </Button>
                            </Stack>
                        </Card>
                    </Grid>
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
                <Card
                    sx={{
                        p: 3,
                        borderRadius: 4,
                        border: '1px solid',
                        borderColor: 'divider',
                        background: 'linear-gradient(135deg, rgba(255,255,255,0.95), rgba(233,221,203,0.5))',
                        boxShadow: '0 12px 40px rgba(0,0,0,0.06)'
                    }}
                >
                    <Stack spacing={2}>
                        <Stack direction="row" spacing={1.5} alignItems="center">
                            <Avatar sx={{ bgcolor: 'secondary.light', color: 'secondary.dark' }}>
                                <AutoAwesome />
                            </Avatar>
                            <Box>
                                <Typography fontWeight={800}>Stay ahead of each capsule drop</Typography>
                                <Typography variant="body2" color="text.secondary">
                                    Two emails a month, featuring maker notes, new rituals, and workshop invites.
                                </Typography>
                            </Box>
                        </Stack>

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
                    </Stack>
                </Card>
            </Box>
        </Box>
    );
};

export default Home;
