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
            @@ -66,50 +68,51 @@ const Home = () => {
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
                                @@ -424,30 +427,58 @@ const Home = () => {
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