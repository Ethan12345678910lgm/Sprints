import { Box, Button, Grid, IconButton, Stack, TextField, Typography } from '@mui/material';
import { Facebook, Instagram, Linkedin } from 'lucide-react';
import { Link as RouterLink } from 'react-router-dom';
import Logo from './Logo';

const socialLinks = [
    { icon: Facebook, label: 'Facebook', href: '#' },
    { icon: Instagram, label: 'Instagram', href: '#' },
    { icon: Linkedin, label: 'LinkedIn', href: '#' }
];

const navigation = {
    explore: [
        { label: 'Sustainability', to: '/sustainability' },
        { label: 'Community', to: '/community' },
        { label: 'Shop', to: '/shop' }
    ],
    support: [
        { label: 'FAQs', to: '#' },
        { label: 'Shipping', to: '#' },
        { label: 'Contact', to: '#' }
    ]
};

const Footer = () => (
    <Box
        component="footer"
        sx={{
            mt: 8,
            pt: { xs: 6, md: 8 },
            pb: 5,
            background:
                'radial-gradient(circle at 12% 24%, rgba(74, 136, 118, 0.35), transparent 30%), radial-gradient(circle at 80% 18%, rgba(188, 156, 93, 0.25), transparent 32%), linear-gradient(135deg, #0f201d 0%, #0f2f2c 45%, #0e2334 100%)',
            color: 'white',
            borderTopLeftRadius: { xs: 24, md: 32 },
            borderTopRightRadius: { xs: 24, md: 32 },
            boxShadow: '0 -20px 60px rgba(0,0,0,0.25)'
        }}
    >
        <Grid container spacing={{ xs: 4, md: 6 }} maxWidth="lg" margin="auto" px={{ xs: 3, sm: 4 }}>
            <Grid item xs={12} md={4}>
                <Stack spacing={1.75} maxWidth={360}>
                    <Logo variant="stacked" />
                    <Typography variant="body2" color="rgba(255,255,255,0.82)">
                        Ubuntu Threads designs sustainable staples rooted in Cape Town and crafted with community.
                    </Typography>
                    <Stack direction="row" spacing={1}>
                        {socialLinks.map(({ icon: Icon, label, href }) => (
                            <IconButton
                                key={label}
                                component="a"
                                href={href}
                                aria-label={label}
                                sx={{
                                    bgcolor: 'rgba(255,255,255,0.1)',
                                    color: 'white',
                                    border: '1px solid rgba(255,255,255,0.2)',
                                    '&:hover': { bgcolor: 'rgba(255,255,255,0.2)' }
                                }}
                            >
                                <Icon size={18} />
                            </IconButton>
                        ))}
                    </Stack>
                </Stack>
            </Grid>

            <Grid item xs={12} md={4}>
                <Stack spacing={1.5}>
                    <Typography variant="h6">Stay in the loop</Typography>
                    <Typography variant="body2" color="rgba(255,255,255,0.82)">
                        Monthly updates on drops, community events, and sustainability notes.
                    </Typography>
                    <Stack direction={{ xs: 'column', sm: 'row' }} spacing={1.5}>
                        <TextField
                            size="small"
                            placeholder="Email address"
                            variant="filled"
                            fullWidth
                            InputProps={{
                                sx: {
                                    bgcolor: 'rgba(255,255,255,0.14)',
                                    borderRadius: 2,
                                    color: 'white',
                                    backdropFilter: 'blur(8px)',
                                    input: { paddingY: 1.5 }                                }
                            }}
                        />
                        <Button
                            variant="contained"
                            color="secondary"
                            sx={{
                                px: 3,
                                boxShadow: '0 12px 30px rgba(0,0,0,0.22)',
                                borderRadius: 2,
                                bgcolor: '#d9b169',
                                color: '#0c201c',
                                '&:hover': { bgcolor: '#cba45f' }
                            }}
                        >
                            Join
                        </Button>
                    </Stack>
                </Stack>
            </Grid>

            <Grid item xs={12} md={4}>
                <Grid container spacing={2}>
                    <Grid item xs={6}>
                        <Typography variant="h6" gutterBottom>
                            Explore
                        </Typography>
                        <Stack spacing={1.2}>
                            {navigation.explore.map((item) => (
                                <Button
                                    key={item.label}
                                    component={RouterLink}
                                    to={item.to}
                                    color="inherit"
                                    variant="text"
                                    sx={{
                                        justifyContent: 'flex-start',
                                        px: 0,
                                        color: 'rgba(255,255,255,0.86)',
                                        '&:hover': { color: 'white' }
                                    }}
                                >
                                    {item.label}
                                </Button>
                            ))}
                        </Stack>
                    </Grid>
                    <Grid item xs={6}>
                        <Typography variant="h6" gutterBottom>
                            Support
                        </Typography>
                        <Stack spacing={1.2}>
                            {navigation.support.map((item) => (
                                <Button
                                    key={item.label}
                                    component={item.to.startsWith('/') ? RouterLink : undefined}
                                    to={item.to.startsWith('/') ? item.to : undefined}
                                    color="inherit"
                                    variant="text"
                                    sx={{
                                        justifyContent: 'flex-start',
                                        px: 0,
                                        color: 'rgba(255,255,255,0.86)',
                                        '&:hover': { color: 'white' }
                                    }}
                                >
                                    {item.label}
                                </Button>
                            ))}
                        </Stack>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
        <Grid
            container
            maxWidth="lg"
            margin="auto"
            px={{ xs: 3, sm: 4 }}
            mt={5}
            alignItems="center"
            justifyContent="space-between"
        >
            <Typography variant="body2" color="rgba(255,255,255,0.72)">
                © {new Date().getFullYear()} Ubuntu Threads. Built with Ubuntu values.
            </Typography>
            <Stack direction="row" spacing={2}>
                <Button color="inherit" variant="text" size="small" sx={{ px: 0, color: 'rgba(255,255,255,0.82)' }}>
                    Privacy
                </Button>
                <Button color="inherit" variant="text" size="small" sx={{ px: 0, color: 'rgba(255,255,255,0.82)' }}>
                    Terms
                </Button>
            </Stack>
        </Grid>
    </Box>
);

export default Footer;
