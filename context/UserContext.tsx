import React, { createContext, useContext, useEffect, useState } from 'react';
import { useAuth } from './AuthContext';

export type UserProfile = {
	balance: number;
	cloneLvl: number;
};

interface UserContextType {
	profile: UserProfile | null;
	loading: boolean;
	fetchProfile: () => Promise<void>;
	updateBalance: (newBalance: number) => void;
}

const UserContext = createContext<UserContextType | undefined>(undefined);

export const UserProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
	const { user } = useAuth();
	const [profile, setProfile] = useState<UserProfile | null>(null);
	const [loading, setLoading] = useState(true);

	const fetchProfile = async () => {
		if (!user) {
			setProfile(null);
			setLoading(false);
			return;
		}

		setLoading(true);
		try {
			// ПОЗЖЕ замени на реальный API
			setProfile({
				balance: 3000,
				cloneLvl: 25,
			});
		} catch (error) {
			console.error('Failed to fetch profile', error);
			setProfile(null);
		} finally {
			setLoading(false);
		}
	};

	const updateBalance = (newBalance: number) => {
		setProfile((prev) => (prev ? { ...prev, balance: newBalance } : null));
	};

	useEffect(() => {
		fetchProfile();
	}, [user?.id]);

	return (
		<UserContext.Provider value={{ profile, loading, fetchProfile, updateBalance }}>
			{children}
		</UserContext.Provider>
	);
};

export const useProfile = () => {
	const context = useContext(UserContext);
	if (!context) {
		throw new Error('useProfile must be used within UserProvider');
	}
	return context;
};
