import { useState } from 'react';
import { Card, CardContent, Stack, TextField, Typography, Button } from '@mui/material';
import toast from 'react-hot-toast';
import { useAuth } from '../../context/AuthContext';

const AccountProfile = () => {
    const { user } = useAuth();
    const [profile, setProfile] = useState({
        name: user?.name ?? '',
        email: user?.email ?? '',
        address: '22 Loop St, Cape Town',
        city: 'Cape Town',
        postal: '8001'
    });

    const save = () => {
        toast.success('Profile updated');
    };

    return (
        <Card>
            <CardContent>
                <Typography variant="h5" fontWeight={800} gutterBottom>
                    Profile details
                </Typography>
                <Stack spacing={2} maxWidth={540}>
                    <TextField
                        label="Full name"
                        value={profile.name}
                        onChange={(event) => setProfile({ ...profile, name: event.target.value })}
                    />
                    <TextField
                        label="Email"
                        value={profile.email}
                        onChange={(event) => setProfile({ ...profile, email: event.target.value })}
                        type="email"
                    />
                    <TextField
                        label="Shipping address"
                        value={profile.address}
                        onChange={(event) => setProfile({ ...profile, address: event.target.value })}
                    />
                    <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2}>
                        <TextField
                            label="City"
                            value={profile.city}
                            onChange={(event) => setProfile({ ...profile, city: event.target.value })}
                            fullWidth
                        />
                        <TextField
                            label="Postal code"
                            value={profile.postal}
                            onChange={(event) => setProfile({ ...profile, postal: event.target.value })}
                            fullWidth
                        />
                    </Stack>
                    <Button variant="contained" onClick={save} sx={{ alignSelf: 'flex-start' }}>
                        Save changes
                    </Button>
                </Stack>
            </CardContent>
        </Card>
    );
};

export default AccountProfile;