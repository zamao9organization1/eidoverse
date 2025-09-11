import { Colors } from '@/constants/colors';
import { paddings } from '@/constants/paddings';
import { stylesGLobal } from '@/constants/styles';
import { typographyGlobal } from '@/constants/typography';
import { usePagination } from '@/hooks/usePagination';
import { useTasks } from '@/hooks/useTasks';
import {
	createMaterialTopTabNavigator,
	MaterialTopTabBarProps,
} from '@react-navigation/material-top-tabs';
import React from 'react';
import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import {
	IconArrowLeft,
	IconArrowRight,
	IconDoubleArrowLeft,
	IconDoubleArrowRight,
	IconSuccess,
} from './icons';

const Tab = createMaterialTopTabNavigator();

// All Tasks
function AllTasks() {
	// Fetch all tasks (no filter) from API
	const { tasks, loading } = useTasks(null);
	// Initialize pagination: split `tasks` into pages of 6 items each
	const {
		currentItems,
		currentPage,
		totalPages,
		goToFirstPage,
		goToLastPage,
		goToPrevPage,
		goToNextPage,
	} = usePagination(tasks, 6);

	// While loading — show loading state
	if (loading) {
		return (
			<View style={[styles.container, styles.pt32]}>
				<Text style={[typographyGlobal.textBase]}>Loading...</Text>
			</View>
		);
	}

	// If no tasks exist after loading — show empty state
	if (tasks.length === 0) {
		return (
			<View style={[styles.container, styles.pt32]}>
				<Text style={[typographyGlobal.textBase]}>There is no tasks yet...</Text>
			</View>
		);
	}

	return (
		<ScrollView contentContainerStyle={{ flexGrow: 1 }}>
			<View style={[styles.container, styles.pt32]}>
				{/* Tasks List */}
				<View style={[styles.tasksList]}>
					{currentItems.map((element) => (
						// Tasks Item Wrapper
						<View style={[styles.tasksItemWrapper]} key={element.id}>
							{/* Tasks Item */}
							<View
								style={[
									stylesGLobal.roundedLg,
									paddings.s14,
									styles.tasksItem,
									element.isDone === true && styles.tasksItemTransparent,
								]}
							>
								{/* Tasks Item Header */}
								<View style={[styles.tasksItemHeader]}>
									{/* Tasks Item Title */}
									<Text
										style={[
											typographyGlobal.textBaseTight,
											{ flex: 1 },
											element.isDone === true && { color: Colors.textDisabled },
										]}
									>
										{element.groupName}
									</Text>

									{/* Tasks Item ( Counter/Icon ) */}
									{element.isDone === false ? (
										<Text style={[typographyGlobal.textSmTight, styles.tasksItemHeaderRight]}>
											{element.progress}
										</Text>
									) : (
										<IconSuccess stroke={Colors.textDisabled} />
									)}
								</View>

								{/* Dividing Line */}
								<View style={[stylesGLobal.dividingLine]}></View>

								{/* Tasks Item Description */}
								<Text
									style={[
										typographyGlobal.titleH3,
										{ minHeight: 66 },
										element.isDone === true && { color: Colors.textDisabled },
									]}
								>
									{element.description}
								</Text>

								{/* Tasks Item Footer */}
								<View style={[styles.tasksItemFooter]}>
									{/* Tasks Item Price */}
									<Text
										style={[
											typographyGlobal.titleCaption,
											styles.tasksItemPrice,
											element.isDone === true && { color: Colors.textDisabled },
										]}
									>
										{element.price}
									</Text>

									{/* Tasks Item Date */}
									<Text style={[typographyGlobal.textSmTight, styles.tasksDate]}>
										{element.date}
									</Text>
								</View>
							</View>
						</View>
					))}
				</View>

				{/* Pagination */}
				{totalPages > 1 && (
					<View style={[stylesGLobal.rounded, paddings.s6, stylesGLobal.paginationWrapper]}>
						<View style={[stylesGLobal.roundedLg, paddings.s6, stylesGLobal.pagination]}>
							{/* Go to First page */}
							<TouchableOpacity
								style={[
									currentPage === 1
										? stylesGLobal.paginationButtonIsDisabled
										: stylesGLobal.paginationButton,
								]}
								onPress={goToFirstPage}
								disabled={currentPage === 1}
							>
								<IconDoubleArrowLeft fill={currentPage === 1 ? Colors.textDisabled : Colors.text} />
							</TouchableOpacity>
							{/* Go to Previous page */}
							<TouchableOpacity
								style={[
									currentPage === 1
										? stylesGLobal.paginationButtonIsDisabled
										: stylesGLobal.paginationButton,
								]}
								onPress={goToPrevPage}
								disabled={currentPage === 1}
							>
								<IconArrowLeft fill={currentPage === 1 ? Colors.textDisabled : Colors.text} />
							</TouchableOpacity>
							{/* Pagination counter */}
							<View style={[stylesGLobal.paginationButton, stylesGLobal.paginationCounter]}>
								<Text style={[typographyGlobal.textBaseTight]}>
									{currentPage} | {totalPages}
								</Text>
							</View>
							{/* Go to Next page */}
							<TouchableOpacity
								style={[
									currentPage === totalPages
										? stylesGLobal.paginationButtonIsDisabled
										: stylesGLobal.paginationButton,
								]}
								onPress={goToNextPage}
								disabled={currentPage === totalPages}
							>
								<IconArrowRight
									fill={currentPage === totalPages ? Colors.textDisabled : Colors.text}
								/>
							</TouchableOpacity>
							{/* Go to Last page */}
							<TouchableOpacity
								style={[
									currentPage === totalPages
										? stylesGLobal.paginationButtonIsDisabled
										: stylesGLobal.paginationButton,
								]}
								onPress={goToLastPage}
								disabled={currentPage === totalPages}
							>
								<IconDoubleArrowRight
									fill={currentPage === totalPages ? Colors.textDisabled : Colors.text}
								/>
							</TouchableOpacity>
						</View>
					</View>
				)}
			</View>
		</ScrollView>
	);
}

// Done Tasks
function DoneTasks() {
	// Fetch only COMPLETED tasks (filterDone = true)
	const { tasks, loading } = useTasks(true);
	// Initialize pagination: split completed tasks into pages of 6 items each
	const {
		currentItems,
		currentPage,
		totalPages,
		goToFirstPage,
		goToLastPage,
		goToPrevPage,
		goToNextPage,
	} = usePagination(tasks, 6);

	// Show loading state while data is being fetched
	if (loading) {
		return (
			<View style={[styles.container, styles.pt32]}>
				<Text style={[typographyGlobal.textBase]}>Loading...</Text>
			</View>
		);
	}

	// Show empty state if no completed tasks exist (after loading finishes)
	if (tasks.length === 0) {
		return (
			<View style={[styles.container, styles.pt32]}>
				<Text style={[typographyGlobal.textBase]}>There is no tasks yet...</Text>
			</View>
		);
	}

	return (
		<ScrollView contentContainerStyle={{ flexGrow: 1 }}>
			<View style={[styles.container, styles.pt32]}>
				{/* Tasks List */}
				<View style={[styles.tasksList]}>
					{currentItems.map((element) => (
						// Tasks Item Wrapper
						<View style={[styles.tasksItemWrapper]} key={element.id}>
							{/* Tasks Item */}
							<View
								style={[
									stylesGLobal.roundedLg,
									paddings.s14,
									styles.tasksItem,
									element.isDone === true && styles.tasksItemTransparent,
								]}
							>
								{/* Tasks Item Header */}
								<View style={[styles.tasksItemHeader]}>
									{/* Tasks Item Title */}
									<Text
										style={[
											typographyGlobal.textBaseTight,
											{ flex: 1 },
											element.isDone === true && { color: Colors.textDisabled },
										]}
									>
										{element.groupName}
									</Text>

									{/* Tasks Item ( Counter/Icon ) */}
									{element.isDone === false ? (
										<Text style={[typographyGlobal.textSmTight, styles.tasksItemHeaderRight]}>
											{element.progress}
										</Text>
									) : (
										<IconSuccess stroke={Colors.textDisabled} />
									)}
								</View>

								{/* Dividing Line */}
								<View style={[stylesGLobal.dividingLine]}></View>

								{/* Tasks Item Description */}
								<Text
									style={[
										typographyGlobal.titleH3,
										{ minHeight: 66 },
										element.isDone === true && { color: Colors.textDisabled },
									]}
								>
									{element.description}
								</Text>

								{/* Tasks Item Footer */}
								<View style={[styles.tasksItemFooter]}>
									{/* Tasks Item Price */}
									<Text
										style={[
											typographyGlobal.titleCaption,
											styles.tasksItemPrice,
											element.isDone === true && { color: Colors.textDisabled },
										]}
									>
										{element.price}
									</Text>

									{/* Tasks Item Date */}
									<Text style={[typographyGlobal.textSmTight, styles.tasksDate]}>
										{element.date}
									</Text>
								</View>
							</View>
						</View>
					))}
				</View>

				{/* Pagination */}
				{totalPages > 1 && (
					<View style={[stylesGLobal.rounded, paddings.s6, stylesGLobal.paginationWrapper]}>
						<View style={[stylesGLobal.roundedLg, paddings.s6, stylesGLobal.pagination]}>
							{/* Go to First page */}
							<TouchableOpacity
								style={[
									currentPage === 1
										? stylesGLobal.paginationButtonIsDisabled
										: stylesGLobal.paginationButton,
								]}
								onPress={goToFirstPage}
								disabled={currentPage === 1}
							>
								<IconDoubleArrowLeft fill={currentPage === 1 ? Colors.textDisabled : Colors.text} />
							</TouchableOpacity>
							{/* Go to Previous page */}
							<TouchableOpacity
								style={[
									currentPage === 1
										? stylesGLobal.paginationButtonIsDisabled
										: stylesGLobal.paginationButton,
								]}
								onPress={goToPrevPage}
								disabled={currentPage === 1}
							>
								<IconArrowLeft fill={currentPage === 1 ? Colors.textDisabled : Colors.text} />
							</TouchableOpacity>
							{/* Pagination counter */}
							<View style={[stylesGLobal.paginationButton, stylesGLobal.paginationCounter]}>
								<Text style={[typographyGlobal.textBaseTight]}>
									{currentPage} | {totalPages}
								</Text>
							</View>
							{/* Go to Next page */}
							<TouchableOpacity
								style={[
									currentPage === totalPages
										? stylesGLobal.paginationButtonIsDisabled
										: stylesGLobal.paginationButton,
								]}
								onPress={goToNextPage}
								disabled={currentPage === totalPages}
							>
								<IconArrowRight
									fill={currentPage === totalPages ? Colors.textDisabled : Colors.text}
								/>
							</TouchableOpacity>
							{/* Go to Last page */}
							<TouchableOpacity
								style={[
									currentPage === totalPages
										? stylesGLobal.paginationButtonIsDisabled
										: stylesGLobal.paginationButton,
								]}
								onPress={goToLastPage}
								disabled={currentPage === totalPages}
							>
								<IconDoubleArrowRight
									fill={currentPage === totalPages ? Colors.textDisabled : Colors.text}
								/>
							</TouchableOpacity>
						</View>
					</View>
				)}
			</View>
		</ScrollView>
	);
}

// Custom Tabs
function TabsOnPage(props: MaterialTopTabBarProps) {
	const { state, navigation } = props;

	const onPress = (index: number) => {
		navigation.navigate(state.routes[index].name);
	};

	return (
		// Tabs Wrapper
		<View style={[stylesGLobal.tabs, stylesGLobal.rounded, paddings.s6, styles.mb10]}>
			{/* Tabs */}
			<View style={[stylesGLobal.tabs, stylesGLobal.roundedLg, paddings.s6, styles.tabsContainer]}>
				{state.routes.map((route, index) => {
					const isActive = state.index === index;
					const label = route.name === 'Home' ? 'All' : 'Done';

					return (
						// Tab
						<TouchableOpacity
							key={route.key}
							style={[stylesGLobal.tab, isActive && stylesGLobal.tabIsActive]}
							onPress={() => onPress(index)}
						>
							<Text
								style={[
									typographyGlobal.textBase,
									typographyGlobal.titleH3Tight,
									isActive && { color: Colors.mainBackground },
								]}
							>
								{label}
							</Text>
						</TouchableOpacity>
					);
				})}
			</View>
		</View>
	);
}

export default function TasksTabs() {
	return (
		<Tab.Navigator
			tabBar={(props) => <TabsOnPage {...props} />}
			screenOptions={{
				animationEnabled: false, // Animation swipes off
				swipeEnabled: false, // Swipes Off
			}}
		>
			<Tab.Screen name='Home' component={AllTasks} options={{ tabBarLabel: 'All' }} />
			<Tab.Screen name='Settings' component={DoneTasks} options={{ tabBarLabel: 'Done' }} />
		</Tab.Navigator>
	);
}

export const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: Colors.mainBackground,
	},
	tabsContainer: {
		flexDirection: 'row',
		gap: 10,
		minHeight: 52,
	},
	tab: {
		textAlign: 'center',
		color: Colors.mainBackground,
	},
	tasksList: {
		gap: 10,
	},
	tasksItemWrapper: {
		padding: 6,
		borderRadius: 15,
		backgroundColor: Colors.itemBackground,
	},
	tasksItemTransparent: {
		backgroundColor: 'transparent',
	},
	tasksItem: {
		gap: 14,
		backgroundColor: Colors.itemBackground,
	},
	tasksItemHeader: {
		minHeight: 24,
		alignItems: 'center',
		flexDirection: 'row',
		gap: 10,
	},
	tasksItemHeaderRight: {
		minWidth: 56,
		textAlign: 'right',
	},
	tasksItemFooter: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
		gap: 10,
		minHeight: 24,
	},
	tasksItemPrice: {
		minWidth: 80,
		color: Colors.green,
	},
	tasksDate: {
		textAlign: 'right',
		minWidth: 80,
	},
	mb10: {
		marginBottom: 10,
	},
	pt32: {
		paddingTop: 32,
	},
});
