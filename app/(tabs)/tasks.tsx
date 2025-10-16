import ProfileButton from '@/components/ui/ProfileButton';
import TasksTabs from '@/components/ui/tasks/TasksTabs';
import { Colors } from '@/constants/colors';
import { stylesGLobal } from '@/constants/styles';
import { typographyGlobal } from '@/constants/typography';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function Tasks() {
	return (
		<View style={[styles.container]}>
			{/* Profile button */}
			<ProfileButton />

			<View style={[stylesGLobal.container]}>
				<Text style={[typographyGlobal.titleH1, styles.title]}>Tasks</Text>

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
	title: {
		paddingLeft: 15,
		paddingRight: 30,
		marginTop: 120,
		marginBottom: 32,
	},
});
