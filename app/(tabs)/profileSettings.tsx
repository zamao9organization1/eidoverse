import { IconNetwork, IconPensil } from '@/components/ui/Icons';
import { Colors } from '@/constants/colors';
import { stylesGLobal } from '@/constants/styles';
import { typographyGlobal } from '@/constants/typography';
import { useProfileUser } from '@/hooks/useProfileUser';
import {
	ActivityIndicator,
	ScrollView,
	StyleSheet,
	Text,
	TouchableOpacity,
	View,
} from 'react-native';

export default function ProfileSettings() {
	const { user, loading, error } = useProfileUser();

	if (loading) {
		return (
			<View style={[stylesGLobal.container, styles.scrollWrapper]}>
				<ActivityIndicator size='large' color={Colors.textDisabled} />
			</View>
		);
	}

	if (error) {
		return (
			<View style={[stylesGLobal.container, styles.scrollWrapper]}>
				<Text style={typographyGlobal.textBase}>Error: {error}</Text>
			</View>
		);
	}

	if (!user) {
		return (
			<View style={[stylesGLobal.container, styles.scrollWrapper]}>
				<Text style={typographyGlobal.textBase}>User not found</Text>
			</View>
		);
	}

	return (
		<ScrollView style={[stylesGLobal.container]} contentContainerStyle={[styles.scrollWrapper]}>
			<Text style={[typographyGlobal.titleH1, styles.title]}>Profile settings</Text>

			<View style={[styles.userWrapper]}>
				{/* Profile user wrapper */}
				<View style={[styles.userHeader]}>
					{/* User image */}
					<View style={[styles.userImage]}></View>

					{/* User date */}
					<View style={[styles.userData]}>
						<Text style={[typographyGlobal.titleH3Tight]}>{user?.name}</Text>
						<Text style={[typographyGlobal.textSmTight]}>{user?.email}</Text>
					</View>

					{/* User edit */}
					<TouchableOpacity style={[styles.userEdit]}>
						<IconPensil stroke={Colors.text} fill={Colors.text} size={24} />
					</TouchableOpacity>
				</View>

				{/* Registration data */}
				<View style={[styles.userItem]}>
					<Text style={[typographyGlobal.textBase]}>Registration date:</Text>
					<Text style={[typographyGlobal.textBase, { color: Colors.textDisabled }]}>
						{user?.registrationDate}
					</Text>
				</View>
			</View>

			{/* Profile settings list */}
			<View style={[styles.profileSettingsList]}>
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
	scrollWrapper: {
		paddingLeft: 15,
		paddingRight: 30,
		paddingBottom: 60,
	},
	title: {
		marginTop: 160,
		marginBottom: 32,
	},
	userWrapper: {
		gap: 14,
		paddingHorizontal: 20,
		paddingVertical: 14,
		marginBottom: 20,
		borderRadius: 15,
		backgroundColor: Colors.itemBackground,
	},
	userHeader: {
		flexDirection: 'row',
		alignItems: 'center',
		gap: 10,
	},
	userImage: {
		position: 'relative',
		alignItems: 'flex-end',
		justifyContent: 'flex-end',
		width: 60,
		height: 60,
		borderRadius: 10,
		backgroundColor: Colors.itemBackground,
	},
	userData: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'flex-start',
		gap: 8,
	},
	userEdit: {
		alignItems: 'center',
		justifyContent: 'center',
		width: 40,
		height: 40,
	},
	userItem: {
		flexDirection: 'row',
		gap: 10,
	},
	profileSettingsList: {
		gap: 20,
		paddingHorizontal: 20,
		paddingVertical: 14,
		borderRadius: 15,
		backgroundColor: Colors.itemBackground,
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
