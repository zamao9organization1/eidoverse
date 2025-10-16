import { Colors } from '@/constants/colors';
import { stylesGLobal } from '@/constants/styles';
import { typographyGlobal } from '@/constants/typography';
import { useAchievements } from '@/hooks/useAchievements';
import { usePagination } from '@/hooks/usePagination';
import { ActivityIndicator, ScrollView, StyleSheet, Text, View } from 'react-native';
import Pagination from '../Pagination';

export default function ProfileAchievements() {
	const { achievements, loading } = useAchievements();

	const {
		currentItems,
		currentPage,
		totalPages,
		goToFirstPage,
		goToPrevPage,
		goToNextPage,
		goToLastPage,
	} = usePagination(achievements, 10);

	if (loading) {
		return (
			<View style={[styles.scrollWrapper, { paddingTop: 20 }]}>
				<ActivityIndicator size='large' color={Colors.text} />
			</View>
		);
	}

	return (
		<ScrollView style={[styles.scrollWrapper]}>
			{/* Achievements list */}
			<View style={[styles.achievementsList, totalPages > 1 && { marginBottom: 0 }]}>
				{/* Achievements item */}
				{currentItems.length > 0 ? (
					currentItems.map((element) => (
						<View style={[styles.achievementsItem]} key={element.id}>
							{/* Item header */}
							<View style={[styles.itemHeader]}>
								<Text style={[typographyGlobal.textBaseTight]}>{element.title}</Text>
								<Text
									style={[
										typographyGlobal.textSm,
										{ marginLeft: 'auto', color: Colors.textDisabled },
									]}
								>
									{element.date}
								</Text>
							</View>

							{/* Dividing line */}
							<View style={[stylesGLobal.dividingLine]}></View>

							{/* Item description */}
							<Text style={[typographyGlobal.titleH3, { minHeight: 44 }]}>
								{element.description}
							</Text>
						</View>
					))
				) : (
					<Text style={[typographyGlobal.textBase]}>No achievements earned yet</Text>
				)}
			</View>

			{/* Pagination */}
			{totalPages > 1 && (
				<Pagination
					currentPage={currentPage}
					totalPages={totalPages}
					goToFirst={goToFirstPage}
					goToPrev={goToPrevPage}
					goToNext={goToNextPage}
					goToLast={goToLastPage}
				/>
			)}
		</ScrollView>
	);
}

export const styles = StyleSheet.create({
	scrollWrapper: {
		flex: 1,
		paddingLeft: 15,
		paddingRight: 30,
		backgroundColor: Colors.mainBackground,
	},

	// Achievements list
	achievementsList: {
		gap: 10,
		marginTop: 20,
		marginBottom: 60,
	},
	achievementsItem: {
		gap: 14,
		paddingHorizontal: 20,
		paddingVertical: 14,
		borderRadius: 15,
		backgroundColor: Colors.itemBackground,
	},
	itemHeader: {
		flexDirection: 'row',
		alignItems: 'center',
		gap: 14,
	},
	itemDescription: {
		minHeight: 44,
	},
});
