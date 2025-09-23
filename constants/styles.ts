import { Dimensions, StyleSheet } from 'react-native';
import { Colors } from './colors';
const { width, height } = Dimensions.get('window');

export const stylesGLobal = StyleSheet.create({
	container: {
		flex: 1,
		paddingTop: 140,
		paddingRight: 30,
		paddingBottom: 32,
		paddingLeft: 15,
		backgroundColor: Colors.mainBackground,
	},
	dividingLine: {
		flex: 1,
		borderBottomWidth: 1,
		borderBlockColor: Colors.itemBackground,
		borderStyle: 'solid',
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

	// Tabs
	tabsWrapper: {
		padding: 6,
		marginBottom: 10,
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
});
