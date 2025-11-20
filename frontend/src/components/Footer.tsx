import { Box, Button, Grid, IconButton, Stack, TextField, Typography } from '@mui/material';
import { Facebook, Instagram, Linkedin } from 'lucide-react';
import { Link as RouterLink } from 'react-router-dom';
import Logo from './Logo';

const socialLinks = [
    { icon: Facebook, label: 'Facebook', href: '#' },
    { icon: Instagram, label: 'Instagram', href: '#' },
    { icon: Linkedin, label: 'LinkedIn', href: '#' }
];

const Footer = () => (
    <Box
        component="footer"
        sx={{
            mt: 8,
            pt: 6,
            pb: 4,
            background: 'linear-gradient(120deg, #0f1e1b 0%, #123a3a 50%, #0f2b36 100%)',
            color: 'white'
        }}
    >
        <Grid container spacing={4} maxWidth="lg" margin="auto" px={{ xs: 3, sm: 4 }}>
            <Grid item xs={12} md={4}>
                <Stack spacing={1.5} maxWidth={360}>
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
                                    bgcolor: 'rgba(255,255,255,0.08)',
                                    color: 'white',
                                    border: '1px solid rgba(255,255,255,0.16)',
                                    '&:hover': { bgcolor: 'rgba(255,255,255,0.16)' }
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
                                    bgcolor: 'rgba(255,255,255,0.12)',
                                    borderRadius: 2,
                                    color: 'white'
                                }
                            }}
                        />
                        <Button
                            variant="contained"
                            color="secondary"
                            sx={{
                                px: 3,
                                boxShadow: '0 10px 25px rgba(0,0,0,0.18)',
                                borderRadius: 2
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
                            <Button component={RouterLink} to="/sustainability" color="inherit" variant="text">
                                Sustainability
                            </Button>
                            <Button component={RouterLink} to="/community" color="inherit" variant="text">
                                Community
                            </Button>
                            <Button component={RouterLink} to="/shop" color="inherit" variant="text">
                                Shop
                            </Button>
                        </Stack>
                    </Grid>
                    <Grid item xs={6}>
                        <Typography variant="h6" gutterBottom>
                            Support
                        </Typography>
                        <Stack spacing={1.2}>
                            <Button color="inherit" variant="text">
                                FAQs
                            </Button>
                            <Button color="inherit" variant="text">
                                Shipping
                            </Button>
                            <Button color="inherit" variant="text">
                                Contact
                            </Button>
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
                <Button color="inherit" variant="text" size="small">
                    Privacy
                </Button>
                <Button color="inherit" variant="text" size="small">
                    Terms
                </Button>
            </Stack>
        </Grid>
    </Box>
);

export default Footer;
