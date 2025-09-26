import { useEffect, useState } from 'react';

export type UserProfile = {
	name: string;
	email: string;
	registrationDate: string;
};

const fetchProfileUser = async (): Promise<UserProfile> => {
	await new Promise((resolve) => setTimeout(resolve, 500));

	// const response = await apiClient.get('/user/profile');
	// return response.data;

	return {
		name: 'Jimmi Winchester',
		email: 'blablabla@gmail.com',
		registrationDate: '2025-01-18',
	};
};

export const useProfileUser = () => {
	const [user, setUser] = useState<UserProfile | null>(null);
	const [loading, setLoading] = useState<boolean>(true);
	const [error, setError] = useState<string | null>(null);

	useEffect(() => {
		const loadUser = async () => {
			try {
				setLoading(true);
				setError(null);
				const userData = await fetchProfileUser();
				setUser(userData);
			} catch (err) {
				console.error('Failed to load user profile:', err);
				setError('Failed to load user profile');
			} finally {
				setLoading(false);
			}
		};

		loadUser();
	}, []);

	return { user, loading, error };
};
