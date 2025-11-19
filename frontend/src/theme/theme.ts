import { createTheme } from '@mui/material/styles';

// Brand-driven theme for Ubuntu Threads
const theme = createTheme({
    palette: {
        primary: { main: '#6E4B32' }, // Earth Brown
        secondary: { main: '#7D8B52' }, // Olive Green
        background: {
            default: '#F9F7F2',
            paper: '#DCC7A1'
        },
        info: { main: '#3A5F69' }
    },
    typography: {
        fontFamily: '"Open Sans", "Helvetica", "Arial", sans-serif',
        h1: { fontFamily: '"Poppins", sans-serif' },
        h2: { fontFamily: '"Poppins", sans-serif' },
        h3: { fontFamily: '"Poppins", sans-serif' },
        h4: { fontFamily: '"Poppins", sans-serif' },
        h5: { fontFamily: '"Poppins", sans-serif' },
        button: { textTransform: 'none', fontWeight: 600 }
    },
    shape: {
        borderRadius: 14
    },
    components: {
        MuiButton: {
            styleOverrides: {
                root: {
                    boxShadow: '0 8px 18px rgba(110,75,50,0.18)'
                }
            }
        }
    }
});

export default theme;