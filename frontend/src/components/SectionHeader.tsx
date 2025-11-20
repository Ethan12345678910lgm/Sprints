import { Box, Typography, Stack, Divider } from '@mui/material';

const SectionHeader = ({ title, subtitle }: { title: string; subtitle?: string }) => (
    <Stack direction="row" alignItems="flex-start" spacing={2} mb={3} divider={<Divider orientation="vertical" flexItem />}>
        <Box>
            <Typography
                variant="overline"
                color="secondary"
                sx={{ letterSpacing: 2, textTransform: 'uppercase', display: 'block' }}
            >
                Highlight
            </Typography>
            <Typography variant="h4" fontWeight={800} gutterBottom>
                {title}
            </Typography>
        </Box>
        {subtitle && (
            <Typography variant="body1" color="text.secondary" maxWidth={480}>
                {subtitle}
            </Typography>
        )}
    </Stack>
);

export default SectionHeader;
