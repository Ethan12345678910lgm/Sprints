import { createContext, useContext, useState, ReactNode } from 'react';
import toast from 'react-hot-toast';

export type User = { email: string; name: string } | null;

interface AuthContextValue {
    user: User;
    login: (email: string, _password: string) => Promise<void>;
    register: (email: string, _password: string) => Promise<void>;
    logout: () => void;
}

const AuthContext = createContext<AuthContextValue | undefined>(undefined);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
    const [user, setUser] = useState<User>(null);

    const login = async (email: string) => {
        setUser({ email, name: email.split('@')[0] });
        toast.success('Welcome back to Ubuntu Threads');
    };

    const register = async (email: string) => {
        setUser({ email, name: email.split('@')[0] });
        toast.success('Account created, rooted in community');
    };

    const logout = () => {
        setUser(null);
        toast('See you soon – keep weaving community');
    };

    return (
        <AuthContext.Provider value={{ user, login, register, logout }}>{children}</AuthContext.Provider>
    );
};

export const useAuth = () => {
    const ctx = useContext(AuthContext);
    if (!ctx) throw new Error('AuthContext missing');
    return ctx;
};