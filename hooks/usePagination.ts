import { useMemo, useState } from 'react';

export const usePagination = <T>(items: T[], itemsPerPage: number) => {
	// Current page begining from 1
	const [currentPage, setCurrentPage] = useState(1);
	// How many pages
	const totalPages = Math.ceil(items.length / itemsPerPage);
	// Index of the first element on the current page
	const startIndex = (currentPage - 1) * itemsPerPage;
	// End slice index (exclusive)
	const endIndex = startIndex + itemsPerPage;
	// The memoized array of elements on the current page (recalculated only when dependencies change)
	const currentItems = useMemo(
		() => items.slice(startIndex, endIndex),
		[items, startIndex, endIndex]
	);

	// Go to first page
	const goToFirstPage = () => setCurrentPage(1);
	// Go to previous page
	const goToPrevPage = () => setCurrentPage((p) => Math.max(p - 1, 1));
	// Gp to next page
	const goToNextPage = () => setCurrentPage((p) => Math.min(p + 1, totalPages));
	// Go to last page
	const goToLastPage = () => setCurrentPage(totalPages);

	return {
		currentItems,
		currentPage,
		totalPages,
		goToFirstPage,
		goToLastPage,
		goToPrevPage,
		goToNextPage,
		setCurrentPage,
	};
};
