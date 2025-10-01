import { StyleSheet } from 'react-native';
import { Colors } from './colors';

export const typographyGlobal = StyleSheet.create({
	// Text
	textBase: {
		fontSize: 16,
		fontWeight: 400,
		lineHeight: 16 * 1.4,
		color: Colors.text,
		flexShrink: 1,
	},
	textBaseTight: {
		fontSize: 16,
		fontWeight: 400,
		lineHeight: 16,
		color: Colors.text,
		flexShrink: 1,
	},
	textSmTight: {
		fontSize: 12,
		fontWeight: 400,
		lineHeight: 12,
		color: Colors.textDisabled,
		flexShrink: 1,
	},

	// Title
	titleH1: {
		fontSize: 25,
		fontWeight: 600,
		lineHeight: 25 * 1.2,
		color: Colors.title,
		flexShrink: 1,
	},
	titleH2: {
		fontSize: 20,
		fontWeight: 600,
		lineHeight: 20 * 1.4,
		color: Colors.title,
		flexShrink: 1,
	},
	titleH3: {
		fontSize: 18,
		fontWeight: 600,
		lineHeight: 18 * 1.4,
		color: Colors.title,
		flexShrink: 1,
	},
	titleH3Tight: {
		fontSize: 18,
		fontWeight: 600,
		lineHeight: 18,
		color: Colors.title,
		flexShrink: 1,
	},
	titleCaption: {
		fontSize: 12,
		fontWeight: 600,
		lineHeight: 12,
		flexShrink: 1,
	},
});
