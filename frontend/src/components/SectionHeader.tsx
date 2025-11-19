import { Box, Typography } from '@mui/material';

const SectionHeader = ({ title, subtitle }: { title: string; subtitle?: string }) => (
    <Box mb={2}>
        <Typography variant="h4" fontWeight={700} gutterBottom>
            {title}
        </Typography>
        {subtitle && (
            <Typography variant="body1" color="text.secondary">
                {subtitle}
            </Typography>
        )}
    </Box>
);

export default SectionHeader;