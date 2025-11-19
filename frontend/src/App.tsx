import { Container, Box } from '@mui/material';
import { Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './routes/Home';
import Shop from './routes/Shop';
import ProductDetail from './routes/ProductDetail';
import About from './routes/About';
import Sustainability from './routes/Sustainability';
import Journal from './routes/Journal';
import JournalArticle from './routes/JournalArticle';
import Community from './routes/Community';
import Login from './routes/Login';
import Register from './routes/Register';
import CartPage from './routes/CartPage';
import Checkout from './routes/Checkout';
import Admin from './routes/Admin';
import { ProtectedRoute } from './components/ProtectedRoute';

function App() {
    return (
        <Box sx={{ backgroundColor: '#F9F7F2', minHeight: '100vh' }}>
            <Navbar />
            <Container maxWidth="lg" sx={{ py: 4 }}>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/shop" element={<Shop />} />
                    <Route path="/product/:id" element={<ProductDetail />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/sustainability" element={<Sustainability />} />
                    <Route path="/journal" element={<Journal />} />
                    <Route path="/journal/:slug" element={<JournalArticle />} />
                    <Route path="/community" element={<Community />} />
                    <Route path="/auth/login" element={<Login />} />
                    <Route path="/auth/register" element={<Register />} />
                    <Route path="/cart" element={<CartPage />} />
                    <Route path="/checkout" element={<Checkout />} />
                    <Route
                        path="/admin"
                        element={
                            <ProtectedRoute>
                                <Admin />
                            </ProtectedRoute>
                        }
                    />
                </Routes>
            </Container>
            <Footer />
        </Box>
    );
}

export default App;