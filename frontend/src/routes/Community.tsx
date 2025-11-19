import { Card, CardContent, Grid, Typography } from '@mui/material';
import SectionHeader from '../components/SectionHeader';
import { events } from '../data/mockData';

const Community = () => (
    <div>
        <SectionHeader
            title="Community & Events"
            subtitle="Clothing swaps, pop-ups, and collaborations that invite everyone into the circle."
        />
        <Grid container spacing={3}>
            {events.map((event) => (
                <Grid item xs={12} md={6} key={event.title}>
                    <Card>
                        <CardContent>
                            <Typography variant="h6">{event.title}</Typography>
                            <Typography color="text.secondary">{event.date} · {event.location}</Typography>
                            <Typography mt={1}>{event.description}</Typography>
                        </CardContent>
                    </Card>
                </Grid>
            ))}
        </Grid>
    </div>
);

export default Community;