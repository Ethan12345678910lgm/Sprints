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
import { ProtectedRoute } from './components/ProtectedRoute';
import Contact from './routes/Contact';
import AccountDashboard from './routes/account/AccountDashboard';
import AccountProfile from './routes/account/AccountProfile';
import AccountOrders from './routes/account/AccountOrders';
import AccountOrderDetail from './routes/account/AccountOrderDetail';
import Wishlist from './routes/account/Wishlist';
import AdminLogin from './routes/admin/AdminLogin';
import AdminDashboard from './routes/admin/AdminDashboard';
import AdminProducts from './routes/admin/AdminProducts';
import AdminProductForm from './routes/admin/AdminProductForm';
import AdminOrders from './routes/admin/AdminOrders';
import AdminOrderDetail from './routes/admin/AdminOrderDetail';
import AdminCustomers from './routes/admin/AdminCustomers';

function App() {
    return (
        <Box sx={{ background: 'linear-gradient(145deg, #f9f7f2 0%, #f4eddf 55%, #efe4d3 100%)', minHeight: '100vh' }}>
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
                    <Route path="/contact" element={<Contact />} />
                    <Route path="/auth/login" element={<Login />} />
                    <Route path="/auth/register" element={<Register />} />
                    <Route path="/cart" element={<CartPage />} />
                    <Route path="/checkout" element={<Checkout />} />

                    <Route
                        path="/account"
                        element={
                            <ProtectedRoute>
                                <AccountDashboard />
                            </ProtectedRoute>
                        }
                    />
                    <Route
                        path="/account/profile"
                        element={
                            <ProtectedRoute>
                                <AccountProfile />
                            </ProtectedRoute>
                        }
                    />
                    <Route
                        path="/account/orders"
                        element={
                            <ProtectedRoute>
                                <AccountOrders />
                            </ProtectedRoute>
                        }
                    />
                    <Route
                        path="/account/orders/:id"
                        element={
                            <ProtectedRoute>
                                <AccountOrderDetail />
                            </ProtectedRoute>
                        }
                    />
                    <Route
                        path="/account/wishlist"
                        element={
                            <ProtectedRoute>
                                <Wishlist />
                            </ProtectedRoute>
                        }
                    />

                    <Route path="/admin/login" element={<AdminLogin />} />
                    <Route
                        path="/admin"
                        element={
                            <ProtectedRoute adminOnly>
                                <AdminDashboard />
                            </ProtectedRoute>
                        }
                    />
                    <Route
                        path="/admin/products"
                        element={
                            <ProtectedRoute adminOnly>
                                <AdminProducts />
                            </ProtectedRoute>
                        }
                    />
                    <Route
                        path="/admin/products/new"
                        element={
                            <ProtectedRoute adminOnly>
                                <AdminProductForm />
                            </ProtectedRoute>
                        }
                    />
                    <Route
                        path="/admin/products/:id/edit"
                        element={
                            <ProtectedRoute adminOnly>
                                <AdminProductForm />
                            </ProtectedRoute>
                        }
                    />
                    <Route
                        path="/admin/orders"
                        element={
                            <ProtectedRoute adminOnly>
                                <AdminOrders />
                            </ProtectedRoute>
                        }
                    />
                    <Route
                        path="/admin/orders/:id"
                        element={
                            <ProtectedRoute adminOnly>
                                <AdminOrderDetail />
                            </ProtectedRoute>
                        }
                    />
                    <Route
                        path="/admin/customers"
                        element={
                            <ProtectedRoute adminOnly>
                                <AdminCustomers />
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