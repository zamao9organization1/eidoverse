import { useEffect, useState } from 'react';

interface RawLeaderboardEntry {
	id: number;
	rank: number;
	userName: string;
	rating: number;
	ratingChange: number;
}

export interface LeaderboardEntry {
	id: number;
	rank: number;
	userName: string;
	rating: string;
	ratingChange: number;
}

export interface LeaderboardData {
	leaderboard: LeaderboardEntry[];
	error: string | null;
	loading: boolean;
}

// Formats raw rating string (e.g., "9847") into a human-readable format with space separators (e.g., "9 847")
export const formatRating = (rating: string | number): string => {
	const num = typeof rating === 'string' ? parseInt(rating, 10) : rating;

	if (isNaN(num) || num === null || num === undefined) {
		return '0';
	}

	return num.toLocaleString('ru-RU'); // → "9 847"
};

export const useLeaderboard = (): LeaderboardData => {
	const [leaderboard, setLeaderboard] = useState<LeaderboardEntry[]>([]);
	const [loading, setLoading] = useState<boolean>(true);
	const [error, setError] = useState<string | null>(null);

	useEffect(() => {
		const fetchLeaderboard = async () => {
			setLoading(true);
			setError(null);

			try {
				const response = await fetch('http://10.0.2.2:3001/leaderboard');
				if (!response.ok) {
					throw new Error(`HTTP error! status: ${response.status}`);
				}

				const rawData: RawLeaderboardEntry[] = await response.json();
				const formattedData = rawData.map((entry) => ({
					...entry,
					rating: formatRating(entry.rating),
				}));

				setLeaderboard(formattedData);
			} catch (err) {
				const errorMessage = err instanceof Error ? err.message : 'Unknown error';
				console.error('Error loading leaderboard:', errorMessage);
				setError(errorMessage);
			} finally {
				setLoading(false);
			}
		};

		fetchLeaderboard();
	}, []);

	return { leaderboard, loading, error };
};
