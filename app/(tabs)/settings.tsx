import SettingsTabs from '@/components/ui/settings/SettingsTabs';
import { Colors } from '@/constants/colors';
import { stylesGLobal } from '@/constants/styles';
import { typographyGlobal } from '@/constants/typography';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function Settings() {
	return (
		<View style={[stylesGLobal.container]}>
			<Text style={[typographyGlobal.titleH1, styles.title]}>Settings</Text>

			<View style={{ flex: 1 }}>
				<SettingsTabs />
			</View>
		</View>
	);
}

export const styles = StyleSheet.create({
	settingsWrapper: {
		gap: 20,
		paddingTop: 14,
		paddingRight: 20,
		paddingBottom: 14,
		paddingLeft: 20,
		borderRadius: 15,
		backgroundColor: Colors.itemBackground,
	},
	settingsList: {
		gap: 14,
	},
	settingsItem: {
		flexDirection: 'row',
		alignItems: 'center',
		gap: 20,
		flexShrink: 0,
	},
	title: {
		marginTop: 48,
		marginBottom: 32,
		paddingLeft: 15,
		paddingRight: 30,
	},
});
