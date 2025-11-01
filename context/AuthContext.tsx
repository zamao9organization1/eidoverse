import React, { createContext, useContext, useEffect, useState } from 'react';

// Shape of authenticated user data
export type AuthUser = {
	id: number;
	name: string;
	email: string;
	registrationDate?: string;
};

// Contract for the authentication context
interface AuthContextType {
	user: AuthUser | null;
	loading: boolean;
	login: (userData: AuthUser) => Promise<void>;
	logout: () => Promise<void>;
	// Future: register(), refreshToken(), etc.
}

// Context to share auth state across the app
const AuthContext = createContext<AuthContextType | undefined>(undefined);

// Key used for persisting user data (e.g., in SecureStore or AsyncStorage)
const USER_DATA_KEY = 'auth_user';

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
	const [user, setUser] = useState<AuthUser | null>(null);
	const [loading, setLoading] = useState(true); // Start with loading = true

	// Restore session on app launch (e.g., from persistent storage)
	useEffect(() => {
		const restoreSession = async () => {
			try {
				// Mock user for demo — replace with actual storage logic later
				const mockUser: AuthUser = {
					id: 123,
					name: 'Jimmi Winchester',
					email: 'blablabla@gmail.com',
					registrationDate: '2025-01-18',
				};
				setUser(mockUser);
			} catch (error) {
				console.warn('No session found');
			} finally {
				setLoading(false);
			}
		};

		restoreSession();
	}, []);

	// Simulates user login (persist user data in real app)
	const login = async (userData: AuthUser) => {
		// TODO: Save to secure storage (e.g., Expo SecureStore)
		// await SecureStore.setItemAsync(USER_DATA_KEY, JSON.stringify(userData));
		setUser(userData);
	};

	// Simulates user logout (clear persisted data in real app)
	const logout = async () => {
		// TODO: Remove from secure storage
		// await SecureStore.deleteItemAsync(USER_DATA_KEY);
		setUser(null);
	};

	// Provide auth state and methods to the component tree
	return (
		<AuthContext.Provider
			value={{
				user,
				loading,
				login,
				logout,
			}}
		>
			{children}
		</AuthContext.Provider>
	);
};

export const useAuth = () => {
	const context = useContext(AuthContext);
	if (!context) {
		throw new Error('useAuth must be used within AuthProvider');
	}
	return context;
};
