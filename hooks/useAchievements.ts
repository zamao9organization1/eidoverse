import { useEffect, useState } from 'react';

export interface Achievement {
	id: number;
	title: string;
	date: string;
	description: string;
	isDone: boolean;
}

export const useAchievements = () => {
	const [achievements, setAchievements] = useState<Achievement[]>([]);
	const [loading, setLoading] = useState<boolean>(true);

	useEffect(() => {
		const fetchAchievements = async () => {
			try {
				setLoading(true);

				const response = await fetch('http://10.0.2.2:3001/achievements');
				if (!response.ok) {
					throw new Error(`HTTP error! status: ${response.status}`);
				}

				let data: Achievement[] = await response.json();

				// Shown only isDone: true
				data = data.filter((item) => item.isDone === true);

				// Newest first
				data.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

				setAchievements(data);
			} catch (error) {
				console.error('Error loading achievements:', error);
			} finally {
				setLoading(false);
			}
		};

		fetchAchievements();
	}, []); // Запускаем один раз при монтировании

	return { achievements, loading };
};
