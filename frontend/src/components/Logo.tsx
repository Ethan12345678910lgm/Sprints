import { Box, Typography } from '@mui/material';

interface LogoProps {
    variant?: 'horizontal' | 'stacked' | 'icon';
    size?: number;
}

/**
 * Logo component following the woven "U" guideline.
 * - Maintain safe space equal to half the height on all sides.
 * - Minimum size: 24px height for digital use.
 */
const Logo = ({ variant = 'horizontal', size = 36 }: LogoProps) => {
    const icon = (
        <Box
            sx={{
                width: size,
                height: size,
                borderRadius: 8,
                background: 'linear-gradient(135deg, #6E4B32, #7D8B52)',
                display: 'grid',
                placeItems: 'center',
                color: '#F9F7F2',
                fontWeight: 700,
                fontFamily: 'Poppins'
            }}
        >
            U
        </Box>
    );

    if (variant === 'icon') return icon;

    return (
        <Box display="flex" alignItems="center" gap={1}>
            {icon}
            <Box>
                <Typography variant="h6" sx={{ fontWeight: 700, lineHeight: 1 }}>
                    Ubuntu Threads
                </Typography>
                {variant === 'stacked' && (
                    <Typography variant="caption" color="secondary.main">
                        I am because we are
                    </Typography>
                )}
            </Box>
        </Box>
    );
};

export default Logo;