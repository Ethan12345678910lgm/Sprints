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
    useTheme
} from '@mui/material';
import { useNavigate } from 'react-router-dom';
import SectionHeader from '../components/SectionHeader';
import { products, events } from '../data/mockData';

const paletteBadges = {
    dawn: ['#F8E9DD', '#F7D1BA', '#B5775A'],
    harbor: ['#E5EEF5', '#CADAE6', '#547FA7'],
    garden: ['#E8F2E7', '#CFE5D1', '#5B8C6E']
};

const Home = () => {
    const navigate = useNavigate();
    const theme = useTheme();
    const featured = products.slice(0, 3);

    const capsuleThemes = [
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
            description: 'Utility layers for market runs and rooftop gardens.',
            tags: ['modular', 'textured', 'botanical'],
            productIds: [2, 4]
        }
    ];

    const journeyMoments = [
        {
            title: 'Fiber sourcing',
            subtitle: 'Traceable hemp, linen, and bamboo from certified farms.',
            progress: 92
        },
        {
            title: 'Co-op craftsmanship',
            subtitle: '8 maker circles across Khayelitsha and Woodstock.',
            progress: 86
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
            action: () => navigate('/community'),
            cta: 'Meet the stylist'
        },
        {
            eyebrow: 'Community studio',
            title: 'Join our mending circles',
            description: 'Learn visible mending and dye techniques from our co-op artisans every Thursday.',
            action: () => navigate('/journal'),
            cta: 'View the schedule'
        }
    ];

    const [activeTheme, setActiveTheme] = useState<'dawn' | 'harbor' | 'garden'>('dawn');
    const [activeMood, setActiveMood] = useState<'daytime' | 'evening'>('daytime');

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
                            backgroundImage: 'linear-gradient(135deg, rgba(255,255,255,0.9), rgba(244,237,223,0.9))'
                        }}
                    >
                        <Stack spacing={2} height="100%">
                            <Typography variant="overline" color="secondary" sx={{ letterSpacing: 2 }}>
                                Ubuntu Threads
                            </Typography>
                            <Typography variant="h2" fontWeight={800} lineHeight={1.1}>
                                New-era capsule dressing rooted in Cape Town light.
                            </Typography>
                            <Typography variant="body1" color="text.secondary">
                                Modular pieces crafted with local co-ops, regenerative fibres, and circular care. Build a
                                wardrobe that moves from sunrise rituals to evening markets without changing your ethos.
                            </Typography>
                            <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2}>
                                <Button variant="contained" color="primary" size="large" onClick={() => navigate('/shop')}>
                                    Shop the Capsule
                                </Button>
                                <Button variant="text" size="large" onClick={() => navigate('/about')}>
                                    Explore our story →
                                </Button>
                            </Stack>
                            <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2} mt="auto">
                                <Card sx={{ flex: 1, p: 2, borderRadius: 3, boxShadow: 'none', bgcolor: '#0f172a', color: 'white' }}>
                                    <Typography variant="subtitle2" color="#cbd5f5">
                                        Impact snapshot
                                    </Typography>
                                    <Typography variant="h5" fontWeight={800}>
                                        18.3k garments kept in rotation
                                    </Typography>
                                    <Typography variant="body2" color="#e2e8f0">
                                        through swaps, repairs, and take-back programs.
                                    </Typography>
                                </Card>
                                <Card sx={{ flex: 1, p: 2, borderRadius: 3, boxShadow: 'none', bgcolor: 'white' }}>
                                    <Typography variant="subtitle2" color="text.secondary">
                                        Maker network
                                    </Typography>
                                    <Stack direction="row" spacing={2} alignItems="center" mt={1}>
                                        <Avatar sx={{ bgcolor: theme.palette.secondary.light, color: '#0f172a' }}>8</Avatar>
                                        <Box>
                                            <Typography variant="body1" fontWeight={700}>
                                                co-op studios
                                            </Typography>
                                            <Typography variant="body2" color="text.secondary">
                                                spanning Khayelitsha, Woodstock, and the Atlantic Seaboard.
                                            </Typography>
                                        </Box>
                                    </Stack>
                                </Card>
                            </Stack>
                        </Stack>
                    </Card>
                </Grid>
                <Grid item xs={12} md={5}>
                    <Card
                        sx={{
                            p: 3,
                            height: '100%',
                            borderRadius: 4,
                            border: '1px solid',
                            borderColor: 'divider',
                            backgroundImage: 'radial-gradient(circle at 20% 20%, rgba(255,255,255,0.65), transparent 45%), radial-gradient(circle at 80% 0%, rgba(235,219,197,0.6), transparent 50%)'
                        }}
                    >
                        <Typography variant="subtitle1" color="secondary" gutterBottom>
                            Live lookbook feed
                        </Typography>
                        <Stack spacing={3}>
                            {featured.map((product) => (
                                <Card
                                    key={product.id}
                                    onClick={() => navigate(`/product/${product.id}`)}
                                    sx={{
                                        p: 2,
                                        borderRadius: 3,
                                        cursor: 'pointer',
                                        display: 'grid',
                                        gridTemplateColumns: '72px 1fr',
                                        alignItems: 'center',
                                        gap: 2,
                                        transition: 'transform 0.2s ease, box-shadow 0.2s ease',
                                        '&:hover': {
                                            transform: 'translateY(-4px)',
                                            boxShadow: '0 20px 45px rgba(0,0,0,0.08)'
                                        }
                                    }}
                                >
                                    <Box
                                        component="img"
                                        src={product.images[0]}
                                        alt={product.name}
                                        sx={{
                                            width: '100%',
                                            height: 72,
                                            objectFit: 'cover',
                                            borderRadius: 2,
                                            border: '1px solid',
                                            borderColor: 'divider'
                                        }}
                                    />
                                    <Box>
                                        <Typography fontWeight={700}>{product.name}</Typography>
                                        <Typography variant="body2" color="text.secondary">
                                            {product.collectionName}
                                        </Typography>
                                        <Stack direction="row" spacing={1} mt={1}>
                                            {product.tags.slice(0, 2).map((tag) => (
                                                <Chip key={tag} label={tag} size="small" color="secondary" variant="outlined" />
                                            ))}
                                        </Stack>
                                    </Box>
                                </Card>
                            ))}
                        </Stack>
                    </Card>
                </Grid>
            </Grid>

            <Box mt={8}>
                <SectionHeader
                    title="Compose your capsule in real-time"
                    subtitle="Choose the mood and we’ll surface silhouettes and materials that travel from rituals to gatherings."
                />
                <Grid container spacing={3}>
                    <Grid item xs={12} md={7}>
                        <Card sx={{ p: 3, borderRadius: 4, border: '1px solid', borderColor: 'divider' }}>
                            <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2} flexWrap="wrap" mb={2}>
                                {capsuleThemes.map((themeOption) => (
                                    <Chip
                                        key={themeOption.id}
                                        label={themeOption.title}
                                        color={activeTheme === themeOption.id ? 'primary' : 'default'}
                                        onClick={() => setActiveTheme(themeOption.id as typeof activeTheme)}
                                        sx={{ fontWeight: 700, px: 1.5 }}
                                    />
                                ))}
                                <Divider flexItem orientation="vertical" />
                                {(['daytime', 'evening'] as const).map((mode) => (
                                    <Chip
                                        key={mode}
                                        label={mode === 'daytime' ? 'Daylight ease' : 'Evening glow'}
                                        color={activeMood === mode ? 'secondary' : 'default'}
                                        onClick={() => setActiveMood(mode)}
                                        sx={{ fontWeight: 700, px: 1.5 }}
                                    />
                                ))}
                            </Stack>
                            <Stack spacing={2}>
                                <Stack direction="row" spacing={1}>
                                    {paletteBadges[activeTheme].map((tone, index) => (
                                        <Box
                                            key={tone}
                                            sx={{
                                                bgcolor: tone,
                                                width: 48,
                                                height: 24,
                                                borderRadius: 2,
                                                border: '1px solid',
                                                borderColor: 'divider',
                                                boxShadow: index === 1 ? '0 8px 16px rgba(0,0,0,0.08)' : 'none'
                                            }}
                                        />
                                    ))}
                                </Stack>
                                {recommendedProducts.map((product) => (
                                    <Card key={product.id} sx={{ p: 2, borderRadius: 3, border: '1px solid', borderColor: 'divider' }}>
                                        <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2} alignItems="center">
                                            <Box
                                                component="img"
                                                src={product.images[0]}
                                                alt={product.name}
                                                sx={{ width: 140, height: 120, objectFit: 'cover', borderRadius: 3 }}
                                            />
                                            <Box flex={1}>
                                                <Typography variant="h6" fontWeight={800}>
                                                    {product.name}
                                                </Typography>
                                                <Typography variant="body2" color="text.secondary">
                                                    {product.description}
                                                </Typography>
                                                <Stack direction="row" spacing={1} mt={1}>
                                                    {product.tags.map((tag) => (
                                                        <Chip key={tag} label={tag} size="small" color="secondary" variant="outlined" />
                                                    ))}
                                                </Stack>
                                            </Box>
                                            <Box textAlign="right">
                                                <Typography variant="body1" fontWeight={700}>
                                                    R{product.price}
                                                </Typography>
                                                <Button size="small" onClick={() => navigate(`/product/${product.id}`)}>
                                                    View details
                                                </Button>
                                            </Box>
                                        </Stack>
                                    </Card>
                                ))}
                            </Stack>
                        </Card>
                    </Grid>
                    <Grid item xs={12} md={5}>
                        <Card
                            sx={{
                                p: 3,
                                borderRadius: 4,
                                bgcolor: '#0f172a',
                                color: 'white',
                                height: '100%',
                                display: 'flex',
                                flexDirection: 'column',
                                gap: 3
                            }}
                        >
                            <Typography variant="overline" sx={{ color: '#a5b4fc', letterSpacing: 2 }}>
                                Maker journey
                            </Typography>
                            <Stack spacing={3}>
                                {journeyMoments.map((moment) => (
                                    <Box key={moment.title}>
                                        <Typography variant="subtitle1" fontWeight={800}>
                                            {moment.title}
                                        </Typography>
                                        <Typography variant="body2" color="#cbd5e1" mb={1}>
                                            {moment.subtitle}
                                        </Typography>
                                        <LinearProgress
                                            value={moment.progress}
                                            variant="determinate"
                                            sx={{
                                                height: 10,
                                                borderRadius: 999,
                                                backgroundColor: 'rgba(255,255,255,0.12)',
                                                '& .MuiLinearProgress-bar': {
                                                    background: 'linear-gradient(90deg, #a5b4fc, #fca5a5)'
                                                }
                                            }}
                                        />
                                    </Box>
                                ))}
                            </Stack>
                            <Button variant="contained" color="secondary" onClick={() => navigate('/sustainability')}>
                                Explore full transparency
                            </Button>
                        </Card>
                    </Grid>
                </Grid>
            </Box>

            <Box mt={8}>
                <SectionHeader
                    title="Community experiences in motion"
                    subtitle="From promenade swaps to co-op takeovers, find the next moment to meet the makers."
                />
                <Grid container spacing={3}>
                    {events.map((event) => (
                        <Grid item xs={12} md={6} key={event.title}>
                            <Card
                                sx={{
                                    p: 3,
                                    borderRadius: 3,
                                    border: '1px solid',
                                    borderColor: 'divider',
                                    position: 'relative',
                                    overflow: 'hidden'
                                }}
                            >
                                <Box
                                    sx={{
                                        position: 'absolute',
                                        inset: 0,
                                        background: 'radial-gradient(circle at 10% 20%, rgba(220,199,161,0.15), transparent 35%)'
                                    }}
                                />
                                <Stack spacing={1} position="relative">
                                    <Typography variant="overline" color="secondary">
                                        {event.location}
                                    </Typography>
                                    <Typography variant="h6" fontWeight={800}>
                                        {event.title}
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">
                                        {event.description}
                                    </Typography>
                                    <Stack direction="row" spacing={2} alignItems="center" mt={1}>
                                        <Chip label={event.date} color="primary" variant="outlined" />
                                        <Typography variant="body2">{event.venue}</Typography>
                                    </Stack>
                                    <Button onClick={() => navigate('/community')} sx={{ alignSelf: 'flex-start' }}>
                                        View details
                                    </Button>
                                </Stack>
                            </Card>
                        </Grid>
                    ))}
                </Grid>
            </Box>

            <Box mt={8}>
                <SectionHeader
                    title="Immersive wardrobe services"
                    subtitle="Tap into concierge care that keeps your pieces in rotation longer."
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
                                <Button variant="contained" color="primary" onClick={experience.action}>
                                    {experience.cta}
                                </Button>
                            </Card>
                        </Grid>
                    ))}
                </Grid>
            </Box>
        </Box>
    );
};

export default Home;
