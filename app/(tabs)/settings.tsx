import { stylesGLobal } from '@/constants/styles';
import { typographyGlobal } from '@/constants/typography';
import { StyleSheet, Text, View } from 'react-native';

export default function Settings() {
	return (
		<View style={[stylesGLobal.container]}>
			<Text style={[typographyGlobal.titleH1, styles.mt48]}>Settings</Text>
		</View>
	);
}

export const styles = StyleSheet.create({
	mt48: {
		marginTop: 48,
	},
});
