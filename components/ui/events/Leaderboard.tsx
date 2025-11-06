import { Colors } from '@/constants/colors';
import { stylesGLobal } from '@/constants/styles';
import { typographyGlobal } from '@/constants/typography';
import { useAuth } from '@/context/AuthContext';
import { useLeaderboardWithMe } from '@/hooks/leaderboard/useLeaderboardWithMe';
import React from 'react';
import { ActivityIndicator, ScrollView, StyleSheet, Text, View } from 'react-native';
import { IconAchievements, IconRatingDown, IconRatingUp } from '../Icons';
import Pagination from '../Pagination';

// Renders a trophy icon for top 3 leaderboard positions.
const RankIcon = ({ rank }: { rank: number }) => {
	// Gold
	if (rank === 1) {
		return <IconAchievements fill={Colors.golden} stroke={Colors.golden} size={24} />;
	}
	// Silver
	if (rank === 2) {
		return <IconAchievements fill={Colors.text} stroke={Colors.text} size={24} />;
	}
	// Bronze
	if (rank === 3) {
		return <IconAchievements fill={Colors.bronze} stroke={Colors.bronze} size={24} />;
	}
	return null;
};

// Displays a contextual badge below the username for top 3 players
const RankBadge = ({ rank }: { rank: number }) => {
	if (rank === 1)
		return (
			<View style={[stylesGLobal.badges, { backgroundColor: Colors.goldenBadge }]}>
				<Text style={[typographyGlobal.titleCaption, { color: Colors.golden }]}>champion</Text>
			</View>
		);
	if (rank === 2)
		return (
			<View style={[stylesGLobal.badges, { backgroundColor: Colors.itemBackground }]}>
				<Text style={[typographyGlobal.titleCaption, { color: Colors.text }]}>runner-up</Text>
			</View>
		);
	if (rank === 3)
		return (
			<View style={[stylesGLobal.badges, { backgroundColor: Colors.bronzeBadge }]}>
				<Text style={[typographyGlobal.titleCaption, { color: Colors.bronze }]}>third place</Text>
			</View>
		);
	return null;
};

// Shows rating change with color-coded indicator
const RatingChangeIndicator = ({ change }: { change: number }) => {
	// Green
	if (change > 0) {
		return (
			<View style={styles.itemRatingDifference}>
				<IconRatingUp fill={Colors.green} stroke={Colors.green} size={14} />
				<Text style={[typographyGlobal.textSmTight, { color: Colors.green }]}>+{change}</Text>
			</View>
		);
	}
	// Red
	if (change < 0) {
		return (
			<View style={styles.itemRatingDifference}>
				<IconRatingDown fill={Colors.red} stroke={Colors.red} size={14} />
				<Text style={[typographyGlobal.textSmTight, { color: Colors.red }]}>{change}</Text>
			</View>
		);
	}
	// 0, color disabled
	return <Text style={[typographyGlobal.textSmTight, { color: Colors.textDisabled }]}>0</Text>;
};

export default function Leaderboard() {
	const { user, loading: authLoading } = useAuth(); // ← получаем пользователя
	const ITEM_PER_PAGE = 10;

	// Waiting for session (authorization) to load
	if (authLoading) {
		return (
			<View style={[stylesGLobal.container, styles.scrollWrapper, { paddingTop: 20 }]}>
				<ActivityIndicator size='large' color={Colors.text} />
			</View>
		);
	}

	// If the user is not authorized, we show an error or a placeholder.
	if (!user) {
		return (
			<View style={[stylesGLobal.container, styles.scrollWrapper, { paddingTop: 20 }]}>
				<Text style={[typographyGlobal.textBase]}>Please log in to view the leaderboard</Text>
			</View>
		);
	}

	// useLeaderboardWithMe hook
	const {
		displayItems: currentItems,
		loading,
		error,
		currentPage,
		totalPages,
		goToFirstPage,
		goToPrevPage,
		goToNextPage,
		goToLastPage,
	} = useLeaderboardWithMe(user.id, ITEM_PER_PAGE);

	// While loading — show loading state
	if (loading) {
		return (
			<View style={[stylesGLobal.container, styles.scrollWrapper, { paddingTop: 20 }]}>
				<ActivityIndicator size='large' color={Colors.text} />
			</View>
		);
	}

	// Error loading data
	if (error) {
		return (
			<View style={[stylesGLobal.container, styles.scrollWrapper, { paddingTop: 20 }]}>
				<Text style={[typographyGlobal.textBase]}>Failed to load leaderboard: {error}</Text>
			</View>
		);
	}

	return (
		<ScrollView style={[styles.scrollWrapper]}>
			<Text style={[typographyGlobal.titleH2, styles.title]}>Leaderboard</Text>

			{/* Leaderboard list */}
			<View style={[styles.leaderboardList, totalPages > 1 && { marginBottom: 0 }]}>
				{/* Leaderboard item */}
				{currentItems.map((element, index) => {
					// True if this entry is the current user
					const isMe = element.id === user.id;

					// True for ranks 1–3 (shows icon/badge)
					const isTop3 = element.rank <= 3;

					return (
						<React.Fragment key={element.id}>
							{/* Renders a divider line BEFORE each item except the first one */}
							{index > 0 && <View style={[stylesGLobal.dividingLine]} />}

							<View
								style={[styles.leaderboardItem, isMe && { backgroundColor: Colors.itemBackground }]}
							>
								{/* Item content */}
								<View style={[styles.itemContent]}>
									{/* Icon / rank */}
									{isTop3 ? (
										// If top 3, must be Icon
										<RankIcon rank={element.rank} />
									) : (
										<View style={[styles.itemRankWrapper]}>
											<Text style={[typographyGlobal.titleH4Tight]}>{element.rank}</Text>
										</View>
									)}

									{/* Item user */}
									<View style={[styles.itemUser]}>
										<Text style={[typographyGlobal.textBase]}>{element.userName}</Text>

										{/* Top 3 badges */}
										{isTop3 && <RankBadge rank={element.rank} />}
									</View>

									{/* Item rating */}
									<View style={[styles.itemRating]}>
										<Text style={[typographyGlobal.textBase]}>{element.rating}</Text>
										<RatingChangeIndicator change={element.ratingChange} />
									</View>
								</View>
							</View>
						</React.Fragment>
					);
				})}
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
	title: {
		marginTop: 20,
		marginBottom: 20,
	},

	// Leaderboard list
	leaderboardList: {
		gap: 10,
		paddingHorizontal: 6,
		paddingVertical: 14,
		marginBottom: 60,
		backgroundColor: Colors.itemBackground,
		borderRadius: 15,
	},
	leaderboardItem: {
		flexDirection: 'row',
		alignItems: 'center',
		minHeight: 78,
		gap: 14,
		padding: 14,
		borderRadius: 10,
	},
	itemContent: {
		flexDirection: 'row',
		alignItems: 'center',
		gap: 8,
	},
	itemRankWrapper: {
		flexShrink: 0,
		minWidth: 24,
		height: 24,
		alignItems: 'center',
		justifyContent: 'center',
	},
	itemUser: {
		flex: 1,
		alignItems: 'flex-start',
		gap: 4,
	},
	itemRating: {
		gap: 4,
		alignItems: 'flex-end',
		maxWidth: 60,
		flexShrink: 0,
	},
	itemRatingDifference: {
		flexDirection: 'row',
		alignItems: 'center',
	},
});
