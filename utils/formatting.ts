/**
 * Formats number with spaces (e.g., 1234567 → "1 234 567")
 */
export const formatNumberWithSpaces = (num: number): string => {
	if (!Number.isFinite(num)) return '0';

	const isNegative = num < 0;
	const absoluteNum = Math.abs(num);
	const formatted = absoluteNum.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ');
	return isNegative ? `-${formatted}` : formatted;
};

/* Formats a number:
 	- up to 99,999 → with spaces: 1 356, 99 999
	- from 100,000 → abbreviated: 100k, 1.5M, 2.3B, 1.2T
*/
export const formatNumberWithSpacesOrAbbr = (num: number): string => {
	if (!Number.isFinite(num)) return '0';

	// Processing negative numbers
	const isNegative = num < 0;
	const absoluteNum = Math.abs(num);

	if (absoluteNum < 100_000) {
		const formatted = formatNumberWithSpaces(absoluteNum);
		return isNegative ? `-${formatted}` : formatted;
	}

	// Abbreviations for large numbers
	const suffixes = [
		{ value: 1_000_000_000_000, suffix: 'T' },
		{ value: 1_000_000_000, suffix: 'B' },
		{ value: 1_000_000, suffix: 'M' },
		{ value: 1_000, suffix: 'k' },
	];

	for (const { value, suffix } of suffixes) {
		if (absoluteNum >= value) {
			const shortened = absoluteNum / value;
			// Round to 1 decimal place if the number is not an integer
			const formatted =
				shortened % 1 === 0
					? String(Math.round(shortened))
					: shortened.toFixed(1).replace(/\.0+$/, ''); // removing unnecessary zeros
			return isNegative ? `-${formatted}${suffix}` : `${formatted}${suffix}`;
		}
	}

	const fallback = formatNumberWithSpaces(absoluteNum);
	return isNegative ? `-${fallback}` : fallback;
};
