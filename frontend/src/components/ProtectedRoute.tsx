import { type ReactElement } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

    export const ProtectedRoute = ({ children, adminOnly = false }: { children: ReactElement; adminOnly?: boolean }) => {
        const { user } = useAuth();
        const location = useLocation();

        if (!user) {
            return <Navigate to={adminOnly ? '/admin/login' : '/auth/login'} replace state={{ from: location.pathname }} />;
        }

        if (adminOnly && user.role !== 'admin') {
            return <Navigate to="/admin/login" replace />;
        }

        return children;
};