import { Card, CardContent, Grid, Typography } from '@mui/material';
import SectionHeader from '../components/SectionHeader';

const Admin = () => (
    <div>
        <SectionHeader title="Admin Overview" subtitle="Mock dashboard for orders and inventory." />
        <Grid container spacing={3}>
            <Grid item xs={12} md={4}>
                <Card>
                    <CardContent>
                        <Typography variant="h6">Orders</Typography>
                        <Typography variant="h4">18</Typography>
                    </CardContent>
                </Card>
            </Grid>
            <Grid item xs={12} md={4}>
                <Card>
                    <CardContent>
                        <Typography variant="h6">Revenue</Typography>
                        <Typography variant="h4">R32,400</Typography>
                    </CardContent>
                </Card>
            </Grid>
            <Grid item xs={12} md={4}>
                <Card>
                    <CardContent>
                        <Typography variant="h6">Inventory</Typography>
                        <Typography variant="h4">42 items</Typography>
                    </CardContent>
                </Card>
            </Grid>
        </Grid>
    </div>
);

export default Admin;