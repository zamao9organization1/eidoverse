import EventsTabs from '@/components/ui/events/EventsTabs';
import ProfileButton from '@/components/ui/ProfileButton';
import { Colors } from '@/constants/colors';
import { stylesGLobal } from '@/constants/styles';
import { typographyGlobal } from '@/constants/typography';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function Events() {
	return (
		<View style={[styles.container]}>
			{/* Profile button */}
			<ProfileButton />

			<View style={[stylesGLobal.container]}>
				{/* Title wrapper */}
				<View style={[styles.titleWrapper]}>
					<Text style={[typographyGlobal.titleH1]}>Events & competitions</Text>
					<Text style={[typographyGlobal.textBase]}>
						Join community events and compete with other Eido creators.
					</Text>
				</View>

				{/* Tabs With All Content of Events*/}
				<EventsTabs />
			</View>
		</View>
	);
}

export const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: Colors.mainBackground,
	},
	titleWrapper: {
		gap: 8,
		paddingLeft: 15,
		paddingRight: 30,
		marginTop: 120,
		marginBottom: 32,
	},
});
