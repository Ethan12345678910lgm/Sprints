import { createContext, useContext, useState, ReactNode } from 'react';
import toast from 'react-hot-toast';
import { adminCredentials } from '../data/mockData';

export type User = { email: string; name: string; role: 'customer' | 'admin' } | null;

interface AuthContextValue {
    user: User;
    login: (email: string, _password: string) => Promise<void>;
    register: (name: string, email: string, _password: string) => Promise<void>;
    loginAdmin: (email: string, password: string) => Promise<void>;
    logout: () => void;
}

const AuthContext = createContext<AuthContextValue | undefined>(undefined);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
    const [user, setUser] = useState<User>(null);

    const login = async (email: string) => {
        setUser({ email, name: email.split('@')[0], role: 'customer' });
        toast.success('Welcome back to Ubuntu Threads');
    };

        const register = async (name: string, email: string) => {
            setUser({ email, name, role: 'customer' });
            toast.success('Account created, rooted in community');
        };

        const loginAdmin = async (email: string, password: string) => {
            if (email === adminCredentials.email && password === adminCredentials.password) {
                setUser({ email, name: 'Admin', role: 'admin' });
                toast.success('Admin access granted');
                return;
            }
            toast.error('Invalid admin credentials');
            throw new Error('Unauthorized');
        };

        const logout = () => {
            setUser(null);
            toast('See you soon – keep weaving community');
        };

        return (
        <AuthContext.Provider value={{ user, login, register, loginAdmin, logout }}>
            {children}
        </AuthContext.Provider>
    );
    };

    export const useAuth = () => {
        const ctx = useContext(AuthContext);
        if (!ctx) throw new Error('AuthContext missing');
        return ctx;
};