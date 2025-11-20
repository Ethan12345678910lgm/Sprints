import { Box, Button, Dialog, DialogActions, DialogContent, DialogTitle, Divider, Stack, Typography } from '@mui/material';
import { MapPin, Navigation2 } from 'lucide-react';
import type { Event } from '../data/mockData';

interface EventMapDialogProps {
    event: Event | null;
    onClose: () => void;
}

const buildEmbedUrl = (latitude: number, longitude: number) => {
    const delta = 0.01;
    const left = longitude - delta;
    const right = longitude + delta;
    const top = latitude + delta;
    const bottom = latitude - delta;

    return `https://www.openstreetmap.org/export/embed.html?bbox=${left}%2C${bottom}%2C${right}%2C${top}&layer=mapnik&marker=${latitude}%2C${longitude}`;
};

const buildExternalUrl = (latitude: number, longitude: number) =>
    `https://www.openstreetmap.org/?mlat=${latitude}&mlon=${longitude}#map=15/${latitude}/${longitude}`;

const EventMapDialog = ({ event, onClose }: EventMapDialogProps) => {
    if (!event) return null;

    const embedUrl = buildEmbedUrl(event.latitude, event.longitude);
    const externalUrl = buildExternalUrl(event.latitude, event.longitude);

    return (
        <Dialog open onClose={onClose} maxWidth="md" fullWidth>
            <DialogTitle>
                <Stack direction="row" spacing={1} alignItems="center">
                    <MapPin size={20} />
                    <Typography variant="h6">{event.title}</Typography>
                </Stack>
            </DialogTitle>
            <DialogContent dividers>
                <Stack spacing={1} mb={2}>
                    <Typography variant="subtitle2" color="text.secondary">
                        {event.date}
                    </Typography>
                    <Typography variant="body1">{event.location}</Typography>
                    <Typography variant="body2" color="text.secondary">
                        {event.venue}
                    </Typography>
                </Stack>
                <Divider sx={{ mb: 2 }} />
                <Box
                    sx={{
                        borderRadius: 2,
                        overflow: 'hidden',
                        boxShadow: '0 20px 40px rgba(0,0,0,0.12)',
                        border: '1px solid #e6e1d8'
                    }}
                >
                    <Box
                        component="iframe"
                        src={embedUrl}
                        title={`${event.title} map`}
                        sx={{ width: '100%', height: 380, border: 0 }}
                        allowFullScreen
                        loading="lazy"
                    />
                </Box>
                <Stack direction={{ xs: 'column', sm: 'row' }} spacing={1.5} mt={2}>
                    <Button
                        startIcon={<Navigation2 size={18} />}
                        variant="outlined"
                        color="info"
                        href={externalUrl}
                        target="_blank"
                        rel="noreferrer"
                    >
                        Open full map
                    </Button>
                    <Button onClick={onClose} variant="text">
                        Close
                    </Button>
                </Stack>
            </DialogContent>
            <DialogActions>
                <Typography variant="body2" color="text.secondary" sx={{ flexGrow: 1 }}>
                    Real-time OpenStreetMap embed (drag to explore)
                </Typography>
            </DialogActions>
        </Dialog>
    );
};

export default EventMapDialog;
