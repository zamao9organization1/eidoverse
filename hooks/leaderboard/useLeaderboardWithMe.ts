import { useLeaderboard } from '@/hooks/leaderboard/useLeaderboard';
import { usePagination } from '@/hooks/usePagination';
import { useMemo } from 'react';

export const useLeaderboardWithMe = (myUserId: number, itemsPerPage: number) => {
	// Fetch raw leaderboard data (loading, error, and sorted list handled separately)
	const { leaderboard, loading, error } = useLeaderboard();

	// Sort leaderboard by rank to ensure consistent order
	const sorted = useMemo(() => {
		return [...leaderboard].sort((a, b) => a.rank - b.rank);
	}, [leaderboard]);

	// Find the current user's entry in the sorted list
	const myEntry = sorted.find((element) => element.id === myUserId);

	// Apply standard pagination to the full sorted leaderboard
	const pagination = usePagination(sorted, itemsPerPage);

	// Start with the regular paginated items
	let displayItems = pagination.currentItems;

	// If current user exists and is not viewing a hidden last page
	if (myEntry) {
		// Check if the current user is already in the current page
		const isMeInPage = pagination.currentItems.some((element) => element.id === myUserId);

		// Append to bottom of page
		if (!isMeInPage) {
			displayItems = [...pagination.currentItems, myEntry];
		}
	}

	return {
		...pagination,
		displayItems,
		loading,
		error,
	};
};
