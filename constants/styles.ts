import { Dimensions, StyleSheet } from 'react-native';
import { Colors } from './colors';
const { width, height } = Dimensions.get('window');

export const stylesGLobal = StyleSheet.create({
	container: {
		position: 'relative',
		flex: 1,
		backgroundColor: Colors.mainBackground,
	},
	dividingLine: {
		flex: 1,
		borderBottomWidth: 1,
		borderBlockColor: Colors.itemBackground,
		borderStyle: 'solid',
	},
	recommendationBadge: {
		paddingVertical: 6,
		paddingHorizontal: 10,
		borderRadius: 6,
		backgroundColor: Colors.recommendationBadge,
	},
	statusBadge: {
		paddingVertical: 6,
		paddingHorizontal: 10,
		borderRadius: 6,
		backgroundColor: Colors.statusBadge,
	},

	badges: {
		paddingVertical: 6,
		paddingHorizontal: 10,
		borderRadius: 6,
	},
	price: {
		flexDirection: 'row',
		alignItems: 'center',
		gap: 4,
	},

	// Border radius
	rounded: {
		borderRadius: 15,
	},
	roundedLg: {
		borderRadius: 10,
	},
	roundedSm: {
		borderRadius: 6,
	},

	// Button
	button: {
		flexShrink: 0,
		alignItems: 'center',
		justifyContent: 'center',
		height: 34,
		minWidth: 90,
		paddingHorizontal: 12,
		borderRadius: 6,
		borderWidth: 1,
		borderColor: Colors.itemBackground,
		backgroundColor: Colors.itemBackground,
	},
	buttonRed: {
		borderColor: Colors.red,
		backgroundColor: 'transparent',
	},
	eventsButtonStart: {
		backgroundColor: Colors.greenBadge,
		borderColor: 'rgba(46, 153, 78, 0.3)',
	},

	// Tabs
	tabsWrapper: {
		padding: 6,
		marginBottom: 4,
		backgroundColor: Colors.itemBackground,
		borderRadius: 15,
	},
	tabs: {
		flexDirection: 'row',
		gap: 10,
		minHeight: 52,
		padding: 6,
		backgroundColor: Colors.itemBackground,
		borderRadius: 10,
	},
	tabsItem: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center',
		paddingTop: 11,
		paddingRight: 16,
		paddingBottom: 11,
		paddingLeft: 16,
		borderRadius: 10,
	},
	tabsItemIsActive: {
		backgroundColor: Colors.title,
	},
	tabsItemActiveText: {
		color: Colors.mainBackground,
	},
	bgTransparent: {
		backgroundColor: 'transparent',
	},

	// Pagination
	paginationWrapper: {
		flexDirection: 'row',
		justifyContent: 'center',
		marginTop: 32,
		gap: 10,
		marginRight: 'auto',
		marginLeft: 'auto',
		marginBottom: 60,
		backgroundColor: Colors.itemBackground,
		borderRadius: 15,
		padding: 6,
	},
	pagination: {
		flexDirection: 'row',
		justifyContent: 'center',
		width: 312,
		gap: 10,
		marginRight: 'auto',
		marginLeft: 'auto',
		backgroundColor: Colors.itemBackground,
		borderRadius: 10,
		padding: 6,
	},
	paginationButton: {
		width: 40,
		height: 40,
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: Colors.itemBackground,
		borderRadius: 10,
	},
	paginationButtonIsDisabled: {
		backgroundColor: 'transparent',
	},
	paginationCounter: {
		width: 100,
		height: 40,
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: Colors.inputBackground,
		borderRadius: 10,
	},

	// Switcher
	track: {
		flexDirection: 'row',
		justifyContent: 'flex-start',
		width: 44,
		height: 24,
		borderRadius: 15,
		padding: 2,
		marginLeft: 'auto',
	},
	trackOn: {
		backgroundColor: Colors.blue,
		justifyContent: 'flex-end',
	},
	trackOff: {
		backgroundColor: Colors.itemBackground,
	},
	thumb: {
		width: 20,
		height: 20,
		borderRadius: 50,
		backgroundColor: Colors.title,
	},

	// Settings
	settingsContainer: {
		gap: 20,
		marginTop: 16,
		marginBottom: 60,
		paddingVertical: 20,
		paddingHorizontal: 14,
		borderRadius: 15,
		backgroundColor: Colors.itemBackground,
	},
	settingsContainerHeader: {
		flexDirection: 'row',
		alignItems: 'center',
		gap: 10,
	},
	settingsItem: {
		flexDirection: 'row',
		alignItems: 'flex-start',
		gap: 14,
	},
	settingsItemContent: {
		flexShrink: 1,
		gap: 4,
	},
});
