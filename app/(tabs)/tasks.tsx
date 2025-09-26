import TasksTabs from '@/components/ui/TasksTabs';
import { Colors } from '@/constants/colors';
import { stylesGLobal } from '@/constants/styles';
import { typographyGlobal } from '@/constants/typography';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function Tasks() {
	return (
		<View style={[styles.container]}>
			<View style={[stylesGLobal.container]}>
				<Text style={[typographyGlobal.titleH1, styles.mt48, styles.mb32]}>Tasks</Text>

				{/* Tabs With All Content of Tasks */}
				<TasksTabs />
			</View>
		</View>
	);
}

export const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: Colors.mainBackground,
	},
	mt48: {
		marginTop: 48,
	},
	mb32: {
		marginBottom: 32,
	},
});
