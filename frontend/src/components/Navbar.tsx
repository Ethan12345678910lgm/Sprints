import {
    AppBar,
    Toolbar,
    IconButton,
    Box,
    Button,
    Stack,
    Menu,
    MenuItem,
    Avatar,
    Typography,
    Divider
} from '@mui/material';
import { ShoppingBag, Heart, UserRound } from 'lucide-react';
import { Link as RouterLink, useNavigate } from 'react-router-dom';
import { useState, type MouseEvent } from 'react';
import Logo from './Logo';
import { useAuth } from '../context/AuthContext';
import { useCart } from '../context/CartContext';

const Navbar = () => {
    const { user, logout } = useAuth();
    const { items } = useCart();
    const navigate = useNavigate();
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

    const handleMenu = (event: MouseEvent<HTMLElement>) => setAnchorEl(event.currentTarget);
    const closeMenu = () => setAnchorEl(null);

    const navLinks = [
        { label: 'Shop', href: '/shop' },
        { label: 'About', href: '/about' },
        { label: 'Sustainability', href: '/sustainability' },
        { label: 'Journal', href: '/journal' },
        { label: 'Contact', href: '/contact' }
    ];

    return (
        <AppBar position="sticky" color="inherit" elevation={0} sx={{ borderBottom: '1px solid #e7e1d5' }}>
            <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
                <Box component={RouterLink} to="/" sx={{ textDecoration: 'none', color: 'inherit' }}>
                    <Logo variant="horizontal" />
                </Box>

                            <Stack direction="row" spacing={{ xs: 0.5, md: 1 }} alignItems="center">
                                {navLinks.map((link) => (
                                    <Button key={link.label} component={RouterLink} to={link.href} color="inherit">
                                        {link.label}
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
                                    <IconButton onClick={() => navigate('/account/wishlist')} aria-label="Wishlist">
                                        <Heart />
                                    </IconButton>
                                    {user ? (
                                        <>
                                            <Button
                                                startIcon={<UserRound />}
                                                onClick={handleMenu}
                                                color="primary"
                                                variant="contained"
                                                aria-controls={anchorEl ? 'account-menu' : undefined}
                                                aria-haspopup="true"
                                            >
                                                {user.name}
                                            </Button>
                                            <Menu
                                                id="account-menu"
                                                anchorEl={anchorEl}
                                                open={Boolean(anchorEl)}
                                                onClose={closeMenu}
                                                anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
                                            >
                                                <Box px={2} py={1} display="flex" alignItems="center" gap={1.5}>
                                                    <Avatar>{user.name.charAt(0).toUpperCase()}</Avatar>
                                                    <Box>
                                                        <Typography fontWeight={700}>{user.name}</Typography>
                                                        <Typography variant="body2" color="text.secondary">
                                                            {user.email}
                                                        </Typography>
                                                    </Box>
                                                </Box>
                                                <Divider />
                                                <MenuItem onClick={() => navigate('/account')}>Account dashboard</MenuItem>
                                                <MenuItem onClick={() => navigate('/account/orders')}>Orders</MenuItem>
                                                <MenuItem onClick={() => navigate('/account/wishlist')}>Wishlist</MenuItem>
                                                <Divider />
                                                {user.role === 'admin' && (
                                                    <MenuItem onClick={() => navigate('/admin')}>Admin console</MenuItem>
                                                )}
                                                <MenuItem
                                                    onClick={() => {
                                                        closeMenu();
                                                        logout();
                                                        navigate('/');
                                                    }}
                                                >
                                                    Sign out
                                                </MenuItem>
                                            </Menu>
                                        </>
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