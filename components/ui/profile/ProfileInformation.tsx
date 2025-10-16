import { Colors } from '@/constants/colors';
import { stylesGLobal } from '@/constants/styles';
import { typographyGlobal } from '@/constants/typography';
import { useProfileUser } from '@/hooks/useProfileUser';
import { ActivityIndicator, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import {
	IconAchievements,
	IconCalendar,
	IconChat,
	IconGitHub,
	IconLvl,
	IconNetwork,
	IconPensil,
	IconTwitter,
} from '../Icons';

export default function ProfileInformation() {
	const { user, loading, error } = useProfileUser();

	const userLocation = 'San Francisco, CA';
	const userTwitter = 'digitaldreamer';
	const userGitHub = 'digitaldreamer';

	// Stats
	const daysActiveCount = '127';
	const totalChatsCount = '2 431';
	const eidoLevel = '7';
	const achievementsCount = '24';

	if (loading) {
		return (
			<View style={[stylesGLobal.container, styles.scrollWrapper, { paddingTop: 20 }]}>
				<ActivityIndicator size='large' color={Colors.textDisabled} />
			</View>
		);
	}

	if (error) {
		return (
			<View style={[stylesGLobal.container, styles.scrollWrapper, { paddingTop: 20 }]}>
				<Text style={typographyGlobal.textBase}>Error: {error}</Text>
			</View>
		);
	}

	if (!user) {
		return (
			<View style={[stylesGLobal.container, styles.scrollWrapper, { paddingTop: 20 }]}>
				<Text style={typographyGlobal.textBase}>User not found</Text>
			</View>
		);
	}

	return (
		<ScrollView style={[styles.scrollWrapper]}>
			<View style={[styles.container]}>
				{/* User wrapper */}
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

					{/* User Items */}
					{/* Registration data */}
					<View style={[styles.userItem]}>
						<Text style={[typographyGlobal.textBase]}>Registration date:</Text>
						<Text style={[typographyGlobal.textBase, styles.userItemText]}>
							{user?.registrationDate}
						</Text>
					</View>
				</View>

				{/* Profile list */}
				<View style={[styles.profileList]}>
					{/* Profile item */}
					{/* Bio */}
					<View style={[styles.profileItem]}>
						<Text style={[typographyGlobal.titleH3]}>Bio</Text>
						<Text style={[typographyGlobal.textBase, { color: Colors.textDisabled }]}>
							Exploring the frontiers of AI consciousness and digital evolution. Building the future
							one conversation at a time.
						</Text>
					</View>

					{/* Location */}
					<View style={[styles.profileItem]}>
						<Text style={[typographyGlobal.titleH3]}>Location</Text>
						<View style={[styles.profileItemWithIcon]}>
							<IconNetwork fill={Colors.textDisabled} stroke={Colors.textDisabled} size={24} />
							<Text style={[typographyGlobal.textBase, styles.profileItemText]}>
								{userLocation}
							</Text>
						</View>
					</View>

					{/* Twitter */}
					<View style={[styles.profileItem]}>
						<Text style={[typographyGlobal.titleH3]}>Twitter</Text>
						<View style={[styles.profileItemWithIcon]}>
							<IconTwitter fill={Colors.textDisabled} stroke={Colors.textDisabled} size={24} />
							<Text style={[typographyGlobal.textBase, styles.profileItemText]}>
								@{userTwitter}
							</Text>
						</View>
					</View>

					{/* GitHub */}
					<View style={[styles.profileItem]}>
						<Text style={[typographyGlobal.titleH3]}>GitHub</Text>
						<View style={[styles.profileItemWithIcon]}>
							<IconGitHub fill={Colors.textDisabled} stroke={Colors.textDisabled} size={24} />
							<Text style={[typographyGlobal.textBase, styles.profileItemText]}>{userGitHub}</Text>
						</View>
					</View>

					{/* Dividing line */}
					<View style={[stylesGLobal.dividingLine]}></View>

					{/* Stats */}
					<Text style={[typographyGlobal.titleH3]}>Your stats</Text>

					{/* Stats list */}
					<View style={[styles.statsList]}>
						{/* Stats item */}
						{/* Days active */}
						<View style={[styles.statsItem]}>
							<IconCalendar fill={Colors.text} stroke={Colors.text} size={24} />
							<Text style={[typographyGlobal.textBase]}>Days active</Text>
							<Text style={[typographyGlobal.textBase, styles.statsItemCountText]}>
								{daysActiveCount}
							</Text>
						</View>

						{/* Total chats */}
						<View style={[styles.statsItem]}>
							<IconChat fill={Colors.text} stroke={Colors.text} size={24} />
							<Text style={[typographyGlobal.textBase]}>Total chats</Text>
							<Text style={[typographyGlobal.textBase, styles.statsItemCountText]}>
								{totalChatsCount}
							</Text>
						</View>

						{/* Eido level */}
						<View style={[styles.statsItem]}>
							<IconLvl fill={Colors.text} stroke={Colors.text} size={24} />
							<Text style={[typographyGlobal.textBase]}>Eido level</Text>
							<Text style={[typographyGlobal.textBase, styles.statsItemCountText]}>
								{eidoLevel}
							</Text>
						</View>

						{/* Achievements */}
						<View style={[styles.statsItem]}>
							<IconAchievements fill={Colors.text} stroke={Colors.text} size={24} />
							<Text style={[typographyGlobal.textBase]}>Achievements</Text>
							<Text style={[typographyGlobal.textBase, styles.statsItemCountText]}>
								{achievementsCount}
							</Text>
						</View>
					</View>
				</View>
			</View>
		</ScrollView>
	);
}

export const styles = StyleSheet.create({
	scrollWrapper: {
		flex: 1,
		paddingLeft: 15,
		paddingRight: 30,
		backgroundColor: Colors.mainBackground,
	},
	container: {
		gap: 20,
		marginBottom: 60,
	},

	// User wrapper
	userWrapper: {
		gap: 14,
		paddingHorizontal: 20,
		paddingVertical: 14,
		marginTop: 20,
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
	userItemText: {
		color: Colors.textDisabled,
	},

	// Profile list
	profileList: {
		gap: 20,
		paddingHorizontal: 20,
		paddingVertical: 14,
		borderRadius: 15,
		backgroundColor: Colors.itemBackground,
	},
	profileItem: {
		gap: 8,
	},
	profileItemWithIcon: {
		flexDirection: 'row',
		alignItems: 'center',
		gap: 4,
	},
	profileItemText: {
		color: Colors.textDisabled,
	},

	// Stats
	statsList: {
		gap: 14,
	},
	statsItem: {
		flexDirection: 'row',
		alignItems: 'center',
		gap: 8,
	},
	statsItemCountText: {
		width: 90,
		marginLeft: 'auto',
		textAlign: 'right',
		color: Colors.textDisabled,
	},
});
