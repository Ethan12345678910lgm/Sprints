import { Box, Grid, Typography, TextField, Button, Stack, IconButton } from '@mui/material';
import { Facebook, Instagram, Linkedin } from 'lucide-react';
import { Link as RouterLink } from 'react-router-dom';
import Logo from './Logo';

const Footer = () => (
    <Box sx={{ backgroundColor: '#3A5F69', color: 'white', mt: 6, py: 4 }}>
        <Grid container spacing={4} maxWidth="lg" margin="auto" px={2}>
            <Grid item xs={12} md={4}>
                <Logo variant="stacked" />
                <Typography mt={1} variant="body2">
                    Ubuntu Threads designs sustainable staples rooted in Cape Town and crafted with community.
                </Typography>
            </Grid>
            <Grid item xs={12} md={4}>
                <Typography variant="h6">Stay in the loop</Typography>
                <Stack direction="row" spacing={1} mt={1}>
                    <TextField size="small" placeholder="Email" variant="filled" sx={{ bgcolor: 'white', borderRadius: 1 }} />
                    <Button variant="contained" color="secondary">Join</Button>
                </Stack>
            </Grid>
            <Grid item xs={12} md={4}>
                <Typography variant="h6">Explore</Typography>
                <Stack direction="row" spacing={1} mt={1}>
                    {[Facebook, Instagram, Linkedin].map((Icon) => (
                        <IconButton key={Icon.displayName} color="inherit" component="a" href="#" aria-label="social">
                            <Icon />
                        </IconButton>
                    ))}
                </Stack>
                <Stack mt={2} spacing={1}>
                    <Button component={RouterLink} to="/sustainability" color="inherit">Sustainability</Button>
                    <Button component={RouterLink} to="/community" color="inherit">Community</Button>
                </Stack>
            </Grid>
        </Grid>
    </Box>
);

export default Footer;