// Format number with space @example formatNumberWithSpaces(1356) → "1 356"
export const formatNumberWithSpaces = (num: number): string => {
	if (!Number.isFinite(num)) return '0';
	return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ');
};
