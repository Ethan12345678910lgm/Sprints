import { AppBar, Toolbar, IconButton, Box, Button, Stack } from '@mui/material';
import { ShoppingBag, Heart, UserRound } from 'lucide-react';
import { Link as RouterLink, useNavigate } from 'react-router-dom';
import Logo from './Logo';
import { useAuth } from '../context/AuthContext';
import { useCart } from '../context/CartContext';

const Navbar = () => {
    const { user, logout } = useAuth();
    const { items } = useCart();
    const navigate = useNavigate();

    return (
        <AppBar position="sticky" color="inherit" elevation={0} sx={{ borderBottom: '1px solid #e7e1d5' }}>
            <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
                <Box component={RouterLink} to="/" sx={{ textDecoration: 'none', color: 'inherit' }}>
                    <Logo variant="horizontal" />
                </Box>
                <Stack direction="row" spacing={1} alignItems="center">
                    {['Shop', 'About', 'Sustainability', 'Journal', 'Community'].map((label) => (
                        <Button key={label} component={RouterLink} to={`/${label.toLowerCase()}`} color="inherit">
                            {label}
                        </Button>
                    ))}
                </Stack>
                <Stack direction="row" spacing={1} alignItems="center">
                    <IconButton onClick={() => navigate('/cart')} aria-label="Cart">
                        <ShoppingBag />
                        {items.length > 0 && (
                            <Box sx={{ ml: 0.5, fontSize: 12, color: 'primary.main' }}>{items.length}</Box>
                        )}
                    </IconButton>
                    <IconButton onClick={() => navigate('/shop')} aria-label="Wishlist">
                        <Heart />
                    </IconButton>
                    {user ? (
                        <Button startIcon={<UserRound />} onClick={logout} color="primary" variant="contained">
                            Logout
                        </Button>
                    ) : (
                        <Button startIcon={<UserRound />} component={RouterLink} to="/auth/login" color="primary" variant="outlined">
                            Login
                        </Button>
                    )}
                </Stack>
            </Toolbar>
        </AppBar>
    );
};

export default Navbar;