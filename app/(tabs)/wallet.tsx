import ProfileButton from '@/components/ui/ProfileButton';
import { stylesGLobal } from '@/constants/styles';
import { typographyGlobal } from '@/constants/typography';
import { StyleSheet, Text, View } from 'react-native';

export default function Wallet() {
	return (
		<View style={[stylesGLobal.container]}>
			{/* Profile button */}
			<ProfileButton />

			<Text style={[typographyGlobal.titleH1, styles.title]}>Wallet</Text>
		</View>
	);
}

export const styles = StyleSheet.create({
	title: {
		paddingLeft: 15,
		paddingRight: 30,
		marginTop: 120,
		marginBottom: 32,
	},
});
