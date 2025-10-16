import { Colors } from '@/constants/colors';
import { stylesGLobal } from '@/constants/styles';
import { typographyGlobal } from '@/constants/typography';
import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { IconNetwork, IconProfile } from '../Icons';

export default function SettingsProfile() {
	return (
		<ScrollView style={[styles.scrollWprapper]}>
			<View style={[stylesGLobal.settingsContainer]}>
				{/* Container header */}
				<View style={[stylesGLobal.settingsContainerHeader]}>
					<IconProfile fill={Colors.text} stroke={Colors.text} size={40} />
					<Text style={[typographyGlobal.titleH2]}>Profile</Text>
				</View>

				{/* Developer options */}
				<Text style={[typographyGlobal.titleH3]}>Connected accounts</Text>

				{/* Profile settings items */}

				{/* Google */}
				<View style={[styles.profileSettingsItem]}>
					{/* Item label */}
					<View style={[styles.itemLabel]}>
						<IconNetwork fill={Colors.text} stroke={Colors.text} size={24} />
						<Text style={[typographyGlobal.textBase]}>Google</Text>
					</View>

					{/* Item button */}
					<TouchableOpacity style={[stylesGLobal.button]}>
						<Text style={[typographyGlobal.titleH4Tight, { color: Colors.text }]}>Connect</Text>
					</TouchableOpacity>
				</View>

				{/* Apple */}
				<View style={[styles.profileSettingsItem]}>
					{/* Item label */}
					<View style={[styles.itemLabel]}>
						<IconNetwork fill={Colors.text} stroke={Colors.text} size={24} />
						<Text style={[typographyGlobal.textBase]}>Apple</Text>
					</View>

					{/* Item button */}
					<TouchableOpacity style={[stylesGLobal.button]}>
						<Text style={[typographyGlobal.titleH4Tight, { color: Colors.text }]}>Connect</Text>
					</TouchableOpacity>
				</View>

				{/* Discord */}
				<View style={[styles.profileSettingsItem]}>
					{/* Item label */}
					<View style={[styles.itemLabel]}>
						<IconNetwork fill={Colors.text} stroke={Colors.text} size={24} />
						<Text style={[typographyGlobal.textBase]}>Discord</Text>
					</View>

					{/* Item button */}
					<TouchableOpacity style={[stylesGLobal.button]}>
						<Text style={[typographyGlobal.titleH4Tight, { color: Colors.text }]}>Connect</Text>
					</TouchableOpacity>
				</View>

				{/* Twitter */}
				<View style={[styles.profileSettingsItem]}>
					{/* Item label */}
					<View style={[styles.itemLabel]}>
						<IconNetwork fill={Colors.text} stroke={Colors.text} size={24} />
						<Text style={[typographyGlobal.textBase]}>Twitter</Text>
					</View>

					{/* Item button */}
					<TouchableOpacity style={[stylesGLobal.button]}>
						<Text style={[typographyGlobal.titleH4Tight, { color: Colors.text }]}>Connect</Text>
					</TouchableOpacity>
				</View>

				{/* Dividing line */}
				<View style={[stylesGLobal.dividingLine]}></View>

				{/* Premium plan */}
				<View style={[styles.profileSettingsItem]}>
					{/* Item label */}
					<Text style={[typographyGlobal.textBase, styles.itemLabel]}>Premium plan</Text>

					{/* Item button */}
					<TouchableOpacity style={[stylesGLobal.button]}>
						<Text style={[typographyGlobal.titleH4Tight, { color: Colors.text }]}>Activate</Text>
					</TouchableOpacity>
				</View>

				{/* Dividing line */}
				<View style={[stylesGLobal.dividingLine]}></View>

				{/* Items wrapper */}
				{/* Profile settings items */}

				{/* Change password */}
				<View style={[styles.profileSettingsItem]}>
					{/* Item label */}
					<Text style={[typographyGlobal.textBase, styles.itemLabel]}>Change password</Text>

					{/* Item button */}
					<TouchableOpacity style={[stylesGLobal.button]}>
						<Text style={[typographyGlobal.titleH4Tight, { color: Colors.text }]}>Change</Text>
					</TouchableOpacity>
				</View>

				{/* Delete account */}
				<View style={[styles.profileSettingsItem]}>
					<Text style={[typographyGlobal.textBase, styles.itemLabel]}>Delete account</Text>

					{/* Item button */}
					<TouchableOpacity style={[stylesGLobal.button, stylesGLobal.buttonRed]}>
						<Text style={[typographyGlobal.titleH4Tight, { color: Colors.red }]}>Delete</Text>
					</TouchableOpacity>
				</View>
			</View>
		</ScrollView>
	);
}

export const styles = StyleSheet.create({
	scrollWprapper: {
		flex: 1,
		paddingLeft: 15,
		paddingRight: 30,
		backgroundColor: Colors.mainBackground,
	},
	profileSettingsItem: {
		flexDirection: 'row',
		alignItems: 'center',
		gap: 10,
	},
	itemLabel: {
		flexGrow: 1,
		flexDirection: 'row',
		alignItems: 'center',
		gap: 4,
	},
});
