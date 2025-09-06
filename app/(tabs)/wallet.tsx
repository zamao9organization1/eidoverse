import { stylesGLobal } from '@/constants/styles';
import { typographyGlobal } from '@/constants/typography';
import { Text, View } from 'react-native';

export default function Wallet() {
	return (
		<View style={[stylesGLobal.container]}>
			<Text style={[typographyGlobal.titleH1]}>Wallet</Text>
		</View>
	);
}
