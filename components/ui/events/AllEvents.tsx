import { Colors } from '@/constants/colors';
import { eventsFilterOptions } from '@/constants/options';
import { stylesGLobal } from '@/constants/styles';
import { typographyGlobal } from '@/constants/typography';
import { EventsDifficulty, EventsStatus, useEvents } from '@/hooks/useEvents';
import { usePagination } from '@/hooks/usePagination';
import { formatNumberWithSpacesOrAbbr } from '@/utils/formatting';
import { useFocusEffect } from '@react-navigation/native';
import { useCallback, useMemo, useState } from 'react';
import {
	ActivityIndicator,
	Alert,
	ScrollView,
	StyleSheet,
	Text,
	TouchableOpacity,
	View,
} from 'react-native';
import { IconClock, IconFriends, IconPrice } from '../Icons';
import Pagination from '../Pagination';

// A custom type that combines all possible filter values
type EventsFilterValue = 'all' | EventsStatus;

// Colors for event status badges
const STATUS_COLOR_MAP: Record<EventsStatus, { background: string; text: string }> = {
	upcoming: {
		background: Colors.blueBadge,
		text: Colors.blue,
	},
	active: {
		background: Colors.greenBadge,
		text: Colors.green,
	},
	joined: {
		background: 'transparent',
		text: Colors.textDisabled,
	},
};

// Colors for difficulty level badges
const DIFFICULTY_COLOR_MAP: Record<EventsDifficulty, { background: string; text: string }> = {
	easy: {
		background: Colors.itemBackground,
		text: Colors.text,
	},
	medium: {
		background: Colors.orangeBadge,
		text: Colors.orange,
	},
	hard: {
		background: Colors.redBadge,
		text: Colors.red,
	},
};

// Returns badge colors based on type and value
const getBadgeStyle = (
	type: 'status' | 'difficulty',
	value: EventsStatus | EventsDifficulty
): { background: string; text: string } => {
	// Check the status and return its color
	if (type === 'status' && value in STATUS_COLOR_MAP) {
		return STATUS_COLOR_MAP[value as EventsStatus];
	}
	// Check the complexity match and return its colors
	if (type === 'difficulty' && value in DIFFICULTY_COLOR_MAP) {
		return DIFFICULTY_COLOR_MAP[value as EventsDifficulty];
	}
	// Default color if the value is not recognized
	return { background: Colors.mainBackground, text: Colors.textDisabled };
};

export default function AllEvents() {
	// We get event data through a custom hook
	const { events, loading, error, registerForEvent } = useEvents();
	const ITEMS_PER_PAGE = 10;

	// The current state of the event filter.
	const [statusFilterItem, setStatusFilterItem] = useState<EventsFilterValue>('all');

	// A list of events filtered by the selected status.
	const filteredEvents = useMemo(() => {
		return statusFilterItem === 'all'
			? events // We show all events.
			: events.filter((element) => element.status === statusFilterItem); // Only those whose status matches the selected filter.
	}, [events, statusFilterItem]);

	// Pagination
	const {
		currentItems,
		currentPage,
		totalPages,
		goToFirstPage,
		goToPrevPage,
		goToNextPage,
		goToLastPage,
	} = usePagination(filteredEvents, ITEMS_PER_PAGE);

	useFocusEffect(
		useCallback(() => {
			setStatusFilterItem('all');
			goToFirstPage();
		}, [])
	);

	// Show a loading indicator while the data is being loaded
	if (loading) {
		return (
			<View style={[stylesGLobal.container, styles.scrollWrapper, { paddingTop: 20 }]}>
				<ActivityIndicator size='large' color={Colors.text} />
			</View>
		);
	}

	// Show an error message if the request fails
	if (error) {
		return (
			<View style={[stylesGLobal.container, styles.scrollWrapper, { paddingTop: 20 }]}>
				<Text style={[typographyGlobal.textBase]}>Failed to load events: {error}</Text>
			</View>
		);
	}

	return (
		<ScrollView style={[styles.scrollWrapper]}>
			{/* Filter list */}
			<View style={[styles.statusFilterList]}>
				{/* Filter item */}
				{eventsFilterOptions.map((element) => (
					<TouchableOpacity
						style={[
							styles.statusFilterItem,
							statusFilterItem === element.value && styles.statusFilterItemIsActive,
						]}
						key={element.value}
						onPress={() => {
							setStatusFilterItem(element.value);
							goToFirstPage();
						}}
					>
						<Text
							style={[
								typographyGlobal.textBaseTight,
								{ color: Colors.textDisabled },
								statusFilterItem === element.value && { color: Colors.title },
							]}
						>
							{element.label}
						</Text>
					</TouchableOpacity>
				))}
			</View>

			{/* Events list */}
			{filteredEvents.length === 0 ? (
				<Text style={[typographyGlobal.textBase, { marginTop: 20 }]}>
					No events found. Try changing the filter or check back later.
				</Text>
			) : (
				<View
					key={statusFilterItem}
					style={[styles.eventsList, totalPages > 1 && { marginBottom: 0 }]}
				>
					{/* Events items */}
					{currentItems.map((element) => {
						// Getting colors through mappings — cleaner and safer
						const statusColors = getBadgeStyle('status', element.status);
						const difficultyColors = getBadgeStyle('difficulty', element.difficulty);
						const isJoined = element.status === 'joined';
						const upcomingEvent = element.status === 'upcoming';

						// Define text for the timer
						const timerText =
							element.status === 'upcoming'
								? `Starts in ${element.daysUntilStart} day${
										element.daysUntilStart === '1' ? '' : 's'
								  }`
								: `${element.daysRemaining} day${element.daysRemaining === '1' ? '' : 's'} left`;

						return (
							<View style={[styles.eventsItem]} key={element.id}>
								{/* Item header */}
								<View style={[styles.itemHeader]}>
									<Text style={[typographyGlobal.titleH3]}>{element.title}</Text>
									{/* Item description */}
									<Text style={[typographyGlobal.textSm, styles.itemDescription]}>
										{element.description}
									</Text>
								</View>

								{/* Badges list */}
								<View style={[styles.badgesList]}>
									{/* Status */}
									<View style={[stylesGLobal.badges, { backgroundColor: statusColors.background }]}>
										<Text style={[typographyGlobal.titleCaption, { color: statusColors.text }]}>
											{element.status}
										</Text>
									</View>

									{/* Difficulty */}
									<View
										style={[stylesGLobal.badges, { backgroundColor: difficultyColors.background }]}
									>
										<Text style={[typographyGlobal.titleCaption, { color: difficultyColors.text }]}>
											{element.difficulty}
										</Text>
									</View>
								</View>

								{/* Information list */}
								<View style={[styles.informationList]}>
									{/* Information items */}
									{/* Start date */}
									<View style={[styles.rowItem]}>
										<Text style={[typographyGlobal.textSmTight, { color: Colors.textDisabled }]}>
											{element.addedDate}
										</Text>
									</View>

									{/* Participants */}
									<View style={[styles.rowItem]}>
										<IconFriends
											fill={Colors.textDisabled}
											stroke={Colors.textDisabled}
											size={18}
										/>
										<Text style={[typographyGlobal.textSmTight, { color: Colors.textDisabled }]}>
											{formatNumberWithSpacesOrAbbr(element.participants)}
										</Text>
									</View>

									{/* Days until start / days remaining */}
									<View style={[styles.rowItem]}>
										<IconClock fill={Colors.textDisabled} stroke={Colors.textDisabled} size={18} />
										<Text style={[typographyGlobal.textSmTight, { color: Colors.textDisabled }]}>
											{timerText}
										</Text>
									</View>
								</View>

								{/* Dividing line */}
								<View style={[stylesGLobal.dividingLine]}></View>

								<View style={[styles.itemFooter]}>
									{/* Price */}
									<View style={[stylesGLobal.price, { flex: 1 }]}>
										<IconPrice stroke={Colors.green} fill={Colors.green} size={18} />
										<Text style={[typographyGlobal.titleCaption, { color: Colors.green }]}>
											{formatNumberWithSpacesOrAbbr(element.price)} EIDO
										</Text>
									</View>

									{/* Button */}
									{!upcomingEvent &&
										(!isJoined ? (
											// Button register
											<TouchableOpacity
												style={[stylesGLobal.button]}
												onPress={() => registerForEvent(element.id)}
												disabled={loading}
											>
												{loading ? (
													<ActivityIndicator size='small' color={Colors.text} />
												) : (
													<Text style={[typographyGlobal.titleH4Tight, { color: Colors.text }]}>
														Register
													</Text>
												)}
											</TouchableOpacity>
										) : (
											// Button start
											<TouchableOpacity
												style={[stylesGLobal.button, stylesGLobal.eventsButtonStart]}
												onPress={() => {
													// Переход к экрану заданий (пример)
													// navigation.navigate('EventTasks', { eventId: element.id });
													Alert.alert(
														'Info',
														'You are already registered. Go to your events to start!'
													);
												}}
											>
												<Text style={[typographyGlobal.titleH4Tight, { color: Colors.green }]}>
													Start
												</Text>
											</TouchableOpacity>
										))}
								</View>
							</View>
						);
					})}
				</View>
			)}

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

	// Status filter
	statusFilterList: {
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'center',
		gap: 14,
		marginTop: 20,
	},
	statusFilterItem: {
		alignItems: 'center',
		justifyContent: 'center',
		height: 34,
		paddingHorizontal: 14,
	},
	statusFilterItemIsActive: {
		borderBottomWidth: 1,
		borderColor: Colors.title,
	},

	// Events
	eventsList: {
		gap: 10,
		marginTop: 20,
		marginBottom: 60,
	},
	eventsItem: {
		gap: 20,
		paddingHorizontal: 20,
		paddingVertical: 14,
		borderRadius: 15,
		backgroundColor: Colors.itemBackground,
	},
	itemHeader: {
		gap: 8,
	},
	itemDescription: {
		minHeight: 50,
		color: Colors.text,
	},
	itemFooter: {
		flexDirection: 'row',
		alignItems: 'center',
		gap: 14,
		minHeight: 34,
	},

	// Badges
	badgesList: {
		flexDirection: 'row',
		alignItems: 'center',
		gap: 14,
	},

	// Information
	informationList: {
		flexDirection: 'row',
		alignItems: 'center',
		gap: 14,
	},

	rowItem: {
		flexDirection: 'row',
		alignItems: 'center',
		gap: 4,
	},
});
