import { IconPensil } from '@/components/ui/Icons';
import { Colors } from '@/constants/colors';
import { stylesGLobal } from '@/constants/styles';
import { typographyGlobal } from '@/constants/typography';
import { useProfileUser } from '@/hooks/useProfileUser';
import { ActivityIndicator, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function ProfileSettings() {
	const { user, loading, error } = useProfileUser();

	if (loading) {
		return (
			<View style={[stylesGLobal.container, styles.center]}>
				<ActivityIndicator size='large' color={Colors.textDisabled} />
			</View>
		);
	}

	if (error) {
		return (
			<View style={[stylesGLobal.container, styles.center]}>
				<Text style={typographyGlobal.textBase}>Error: {error}</Text>
			</View>
		);
	}

	if (!user) {
		return (
			<View style={[stylesGLobal.container, styles.center]}>
				<Text style={typographyGlobal.textBase}>User not found</Text>
			</View>
		);
	}

	return (
		<View style={[stylesGLobal.container]}>
			<Text style={[typographyGlobal.titleH1, styles.mb32]}>Profile settings</Text>

			{/* Profile user wrapper */}
			<View style={[styles.userWrapper, styles.mb32]}>
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

			{/* Profile settings list */}
			<View style={[styles.settingsList]}>
				{/* Registration data */}
				<View style={[styles.settingsItem]}>
					<Text style={[typographyGlobal.titleH3Tight]}>Registration date:</Text>
					<Text style={[typographyGlobal.textBase]}>{user?.registrationDate}</Text>
				</View>
			</View>
		</View>
	);
}

export const styles = StyleSheet.create({
	center: {
		alignItems: 'center',
		justifyContent: 'center',
	},
	userWrapper: {
		flexDirection: 'row',
		alignItems: 'center',
		gap: 10,
		paddingTop: 14,
		paddingRight: 20,
		paddingBottom: 14,
		paddingLeft: 20,
		borderRadius: 15,
		backgroundColor: Colors.itemBackground,
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
	settingsList: {
		gap: 15,
	},
	settingsItem: {
		flexDirection: 'row',
		gap: 10,
	},
	mb32: {
		marginBottom: 32,
	},
});
