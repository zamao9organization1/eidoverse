import { Dimensions, StyleSheet } from 'react-native';
import { Colors } from './colors';
const { width, height } = Dimensions.get('window');

export const stylesGLobal = StyleSheet.create({
	container: {
		flex: 1,
		paddingTop: 140,
		paddingRight: 30,
		paddingBottom: 0,
		paddingLeft: 15,
		backgroundColor: Colors.mainBackground,
	},
	dividingLine: {
		flex: 1,
		borderBottomWidth: 1,
		borderBlockColor: Colors.itemBackground,
		borderStyle: 'solid',
	},

	// BORDER RADIUS
	rounded: {
		borderRadius: 15,
	},
	roundedLg: {
		borderRadius: 10,
	},
	roundedSm: {
		borderRadius: 6,
	},

	// TABS
	tab: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center',
		borderRadius: 10,
		paddingTop: 11,
		paddingRight: 16,
		paddingBottom: 11,
		paddingLeft: 16,
	},
	tabIsActive: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center',
		backgroundColor: Colors.title,
		borderRadius: 10,
	},

	bgTransparent: {
		backgroundColor: 'transparent',
	},

	// PAGINATION
	paginationButton: {
		width: 40,
		height: 40,
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: Colors.itemBackground,
		borderRadius: 10,
	},
	paginationButtonIsDisabled: {
		width: 40,
		height: 40,
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: 'transparent',
		borderRadius: 10,
	},
	paginationCounter: {
		width: 100,
		backgroundColor: Colors.itemBackground,
	},
});
