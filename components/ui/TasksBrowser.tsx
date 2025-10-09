import { Colors } from '@/constants/colors';
import { stylesGLobal } from '@/constants/styles';
import { typographyGlobal } from '@/constants/typography';
import { usePagination } from '@/hooks/usePagination';
import { useTasks } from '@/hooks/useTasks';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { IconSuccess } from './Icons';
import Pagination from './Pagination';

interface TasksListProps {
	tabFilter: boolean | null; // null = all, true = done only
}

export default function TasksList({ tabFilter }: TasksListProps) {
	// Fetch all tasks (no filter) from API
	const { tasks, loading } = useTasks(tabFilter);
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
			<View style={[styles.container]}>
				<Text style={[typographyGlobal.textBase]}>Loading...</Text>
			</View>
		);
	}

	// If no tasks exist after loading — show empty state
	if (tasks.length === 0) {
		return (
			<View style={[styles.container]}>
				<Text style={[typographyGlobal.textBase]}>There is no tasks yet...</Text>
			</View>
		);
	}

	return (
		<ScrollView contentContainerStyle={[styles.scrollView]}>
			<View style={[styles.container]}>
				{/* Tasks List */}
				<View style={[styles.tasksList]}>
					{currentItems.map((element) => (
						// Tasks Item Wrapper
						<View style={[styles.tasksItemWrapper]} key={element.id}>
							{/* Tasks Item */}
							<View
								style={[styles.tasksItem, element.isDone === true && styles.tasksItemTransparent]}
							>
								{/* Tasks Item Header */}
								<View style={[styles.tasksItemHeader]}>
									{/* Tasks Item Title */}
									<Text
										style={[
											typographyGlobal.textBaseTight,
											styles.tasksItemTitle,
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
										styles.tasksItemDescription,
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
					<Pagination
						currentPage={currentPage}
						totalPages={totalPages}
						goToFirst={goToFirstPage}
						goToPrev={goToPrevPage}
						goToNext={goToNextPage}
						goToLast={goToLastPage}
					/>
				)}
			</View>
		</ScrollView>
	);
}

export const styles = StyleSheet.create({
	scrollView: {
		flexGrow: 1,
		paddingBottom: 60,
		backgroundColor: Colors.mainBackground,
	},
	container: {
		flex: 1,
		backgroundColor: Colors.mainBackground,
		paddingTop: 32,
	},
	tasksList: {
		gap: 10,
	},
	tasksItemWrapper: {
		padding: 6,
		borderRadius: 15,
		backgroundColor: Colors.itemBackground,
	},
	tasksItem: {
		gap: 14,
		backgroundColor: Colors.itemBackground,
		padding: 14,
		borderRadius: 10,
	},
	tasksItemTransparent: {
		backgroundColor: 'transparent',
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
	tasksItemTitle: {
		flex: 1,
	},
	tasksItemDescription: {
		minHeight: 66,
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
});
