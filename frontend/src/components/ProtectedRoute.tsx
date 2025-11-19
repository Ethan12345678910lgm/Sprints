import { type ReactElement } from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

export const ProtectedRoute = ({ children }: { children: ReactElement }) => {
    const { user } = useAuth();
    if (!user) return <Navigate to="/auth/login" replace />;
    return children;
};