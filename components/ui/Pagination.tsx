import { Colors } from '@/constants/colors';
import { stylesGLobal } from '@/constants/styles';
import { typographyGlobal } from '@/constants/typography';
import { Text, TouchableOpacity, View } from 'react-native';
import { IconArrowLeft, IconArrowRight, IconDoubleArrowLeft, IconDoubleArrowRight } from './Icons';

interface PaginationProps {
	currentPage: number;
	totalPages: number;
	goToFirst: () => void;
	goToPrev: () => void;
	goToNext: () => void;
	goToLast: () => void;
}

export default function Pagination({
	currentPage,
	totalPages,
	goToFirst,
	goToPrev,
	goToNext,
	goToLast,
}: PaginationProps) {
	// Do not render pagination if pages <= 1
	if (totalPages <= 1) {
		return null;
	}

	return (
		<View style={[stylesGLobal.paginationWrapper]}>
			<View style={[stylesGLobal.pagination]}>
				{/* Go to First page */}
				<TouchableOpacity
					style={[
						stylesGLobal.paginationButton,
						currentPage === 1 && stylesGLobal.paginationButtonIsDisabled,
					]}
					onPress={goToFirst}
					disabled={currentPage === 1}
				>
					<IconDoubleArrowLeft fill={currentPage === 1 ? Colors.textDisabled : Colors.text} />
				</TouchableOpacity>
				{/* Go to Previous page */}
				<TouchableOpacity
					style={[
						stylesGLobal.paginationButton,
						currentPage === 1 && stylesGLobal.paginationButtonIsDisabled,
					]}
					onPress={goToPrev}
					disabled={currentPage === 1}
				>
					<IconArrowLeft fill={currentPage === 1 ? Colors.textDisabled : Colors.text} />
				</TouchableOpacity>
				{/* Pagination counter */}
				<View style={[stylesGLobal.paginationCounter]}>
					<Text style={[typographyGlobal.textBaseTight]}>
						{currentPage} | {totalPages}
					</Text>
				</View>
				{/* Go to Next page */}
				<TouchableOpacity
					style={[
						stylesGLobal.paginationButton,
						currentPage === totalPages && stylesGLobal.paginationButtonIsDisabled,
					]}
					onPress={goToNext}
					disabled={currentPage === totalPages}
				>
					<IconArrowRight fill={currentPage === totalPages ? Colors.textDisabled : Colors.text} />
				</TouchableOpacity>
				{/* Go to Last page */}
				<TouchableOpacity
					style={[
						stylesGLobal.paginationButton,
						currentPage === totalPages && stylesGLobal.paginationButtonIsDisabled,
					]}
					onPress={goToLast}
					disabled={currentPage === totalPages}
				>
					<IconDoubleArrowRight
						fill={currentPage === totalPages ? Colors.textDisabled : Colors.text}
					/>
				</TouchableOpacity>
			</View>
		</View>
	);
}
