import { useState } from 'react';
import { Avatar, Button, Card, CardActions, CardContent, Chip, Grid, Stack, Typography } from '@mui/material';
import { CalendarDays, MapPin, Navigation2 } from 'lucide-react';
import SectionHeader from '../components/SectionHeader';
import EventMapDialog from '../components/EventMapDialog';
import { events, type Event } from '../data/mockData';

const Community = () => {
    const [selectedEvent, setSelectedEvent] = useState<Event | null>(null);

    return (
        <Stack spacing={3}>
            <SectionHeader
                title="Community & Events"
                subtitle="Clothing swaps, pop-ups, and collaborations that invite everyone into the circle."
            />
            <Grid container spacing={3}>
                {events.map((event) => (
                    <Grid item xs={12} md={6} key={event.title}>
                        <Card
                            sx={{
                                height: '100%',
                                display: 'flex',
                                flexDirection: 'column',
                                background: 'linear-gradient(135deg, #ffffff 0%, #f6f1e8 100%)',
                                boxShadow: '0 18px 35px rgba(0,0,0,0.08)',
                                border: '1px solid #efe6d9'
                            }}
                        >
                            <CardContent sx={{ flexGrow: 1 }}>
                                <Stack direction="row" spacing={2} alignItems="center">
                                    <Avatar sx={{ bgcolor: '#3a5f69', width: 44, height: 44 }}>
                                        {event.title[0]}
                                    </Avatar>
                                    <div>
                                        <Typography variant="h6" fontWeight={700} gutterBottom>
                                            {event.title}
                                        </Typography>
                                        <Stack direction="row" spacing={1} flexWrap="wrap">
                                            <Chip size="small" icon={<CalendarDays size={16} />} label={event.date} />
                                            <Chip size="small" icon={<MapPin size={16} />} label={event.location} />
                                        </Stack>
                                    </div>
                                </Stack>
                                <Typography mt={2} color="text.secondary">
                                    {event.description}
                                </Typography>
                                <Typography variant="body2" mt={1} color="text.secondary">
                                    Venue: {event.venue}
                                </Typography>
                            </CardContent>
                            <CardActions sx={{ p: 2, pt: 0, justifyContent: 'space-between' }}>
                                <Button
                                    variant="contained"
                                    endIcon={<Navigation2 size={18} />}
                                    onClick={() => setSelectedEvent(event)}
                                >
                                    View on map
                                </Button>
                                <Button variant="text" onClick={() => setSelectedEvent(event)}>
                                    Directions
                                </Button>
                            </CardActions>
                        </Card>
                    </Grid>
                ))}
            </Grid>
            <EventMapDialog event={selectedEvent} onClose={() => setSelectedEvent(null)} />
        </Stack>
    );
};

export default Community;
