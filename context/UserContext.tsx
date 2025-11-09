import React, { createContext, useContext, useEffect, useState } from 'react';
import { useAuth } from './AuthContext';

export type UserProfile = {
	balance: number;
	cloneLvl: number;
	daysActive: number;
	totalChats: number;
	eidoLvl: number;
	achievements: number;
	completedTasks: number;
	rating: number;
};

interface UserContextType {
	profile: UserProfile | null;
	loading: boolean;
	fetchProfile: () => Promise<void>;
	updateProfile: (partial: Partial<UserProfile>) => void;
}

const getMockProfile = (): UserProfile => ({
	balance: 3000,
	cloneLvl: 25,
	daysActive: 127,
	totalChats: 2431,
	eidoLvl: 7,
	achievements: 24,
	completedTasks: 42,
	rating: 5000,
});

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
			setProfile(getMockProfile());
		} catch (error) {
			console.error('Failed to fetch profile', error);
			setProfile(null);
		} finally {
			setLoading(false);
		}
	};

	const updateProfile = (partial: Partial<UserProfile>) => {
		setProfile((prev) => (prev ? { ...prev, ...partial } : null));
	};

	useEffect(() => {
		let isMounted = true;

		const safeFetchProfile = async () => {
			if (!user) {
				if (isMounted) {
					setProfile(null);
					setLoading(false);
				}
				return;
			}

			if (isMounted) {
				setLoading(true);
			}

			try {
				if (isMounted) {
					setProfile(getMockProfile());
				}
			} catch (error) {
				console.error('Failed to fetch profile', error);
				if (isMounted) {
					setProfile(null);
				}
			} finally {
				if (isMounted) {
					setLoading(false);
				}
			}
		};

		safeFetchProfile();

		return () => {
			isMounted = false;
		};
	}, [user?.id]);

	return (
		<UserContext.Provider value={{ profile, loading, fetchProfile, updateProfile }}>
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
