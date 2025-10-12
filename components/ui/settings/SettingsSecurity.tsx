import { Colors } from '@/constants/colors';
import { sessionTimeoutOptions } from '@/constants/options';
import { stylesGLobal } from '@/constants/styles';
import { typographyGlobal } from '@/constants/typography';
import { useState } from 'react';
import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import CustomPicker from '../CustomPicker';
import CustomSwitch from '../CustomSwitch';
import { IconLogOut, IconSecurity } from '../Icons';

export default function SettingsSecurity() {
	// Switchers
	const [authentication, setAuthentication] = useState<boolean>(false); // Switcher for authentication
	const [loginAlert, setLoginAlert] = useState<boolean>(false); // Switcher for lagin alert

	// Pickers
	const [sessionTimeout, setSetsessionTimeout] = useState<string>('15min'); // Picker for sission timeout

	const lastActivity = '2 minutes ago'; // Ladt activity

	return (
		<ScrollView style={[styles.scrollWprapper]}>
			<View style={[stylesGLobal.settingsContainer]}>
				{/* Container header */}
				<View style={[stylesGLobal.settingsContainerHeader]}>
					<IconSecurity fill={Colors.text} stroke={Colors.text} size={40} />
					<Text style={[typographyGlobal.titleH2]}>Security</Text>
				</View>

				{/* Settings items */}

				{/* Two-Factor authentication */}
				<View style={[stylesGLobal.settingsItem]}>
					{/* Item content */}
					<View style={[stylesGLobal.settingsItemContent]}>
						<Text style={[typographyGlobal.textBase]}>Two-Factor authentication</Text>
						<Text style={[typographyGlobal.textSm]}>
							Add an extra layer of security to your account.
						</Text>
					</View>

					{/* Item switcher */}
					<View style={[styles.badgeWrapper]}>
						<CustomSwitch value={authentication} onValueChange={setAuthentication} />
						{/* Recommendation badge */}
						<View style={[stylesGLobal.recommendationBadge]}>
							<Text style={[typographyGlobal.titleCaption, { color: Colors.red }]}>
								Recommended
							</Text>
						</View>
					</View>
				</View>

				{/* Session timeout */}
				<View style={[stylesGLobal.settingsItem]}>
					{/* Item content */}
					<View style={[stylesGLobal.settingsItemContent]}>
						<Text style={[typographyGlobal.textBase]}>Session timeout</Text>
						<Text style={[typographyGlobal.textSm]}>Automatically log out after inactivity.</Text>
					</View>

					{/* Item picker */}
					<CustomPicker
						options={sessionTimeoutOptions}
						value={sessionTimeout}
						onChange={setSetsessionTimeout}
						placeholder={sessionTimeout}
						width={120}
					/>
				</View>

				{/* Login alert */}
				<View style={[stylesGLobal.settingsItem]}>
					{/* Item content */}
					<View style={[stylesGLobal.settingsItemContent]}>
						<Text style={[typographyGlobal.textBase]}>Login alert</Text>
						<Text style={[typographyGlobal.textSm]}>Get notified of new device logins.</Text>
					</View>

					{/* Item switcher */}
					<CustomSwitch value={loginAlert} onValueChange={setLoginAlert} />
				</View>

				{/* Dividing line */}
				<View style={[stylesGLobal.dividingLine]}></View>

				{/* Device management */}
				<Text style={[typographyGlobal.titleH2]}>Device management</Text>

				{/* Device item (current) */}
				<View style={[styles.currentDeviceItem]}>
					{/* Item header */}
					<View style={{ flexDirection: 'row' }}>
						<Text style={[typographyGlobal.textBase, { color: Colors.green }]}>Android 6g</Text>
						{/* Status badge */}
						<View style={[stylesGLobal.statusBadge, { marginLeft: 'auto' }]}>
							<Text style={[typographyGlobal.titleCaption, { color: Colors.green }]}>Current</Text>
						</View>
					</View>

					{/* Address */}
					<Text style={[typographyGlobal.textSm, { color: Colors.green }]}>San Francisco, CA</Text>

					{/* Activity */}
					<Text style={[typographyGlobal.textSm, { color: Colors.green }]}>
						Last active: {lastActivity}
					</Text>
				</View>

				{/* Device item */}
				<View style={[styles.deviceItem]}>
					{/* Item header */}
					<View style={{ flexDirection: 'row' }}>
						<Text style={[typographyGlobal.textBase]}>Android 6g</Text>
						{/* Revoke button */}
						<TouchableOpacity style={[styles.revokeButton]}>
							<Text style={[typographyGlobal.titleCaption, { color: Colors.red }]}>Revoke</Text>
							<IconLogOut fill={Colors.red} stroke={Colors.red} size={16} />
						</TouchableOpacity>
					</View>

					{/* Address */}
					<Text style={[typographyGlobal.textSm]}>San Francisco, CA</Text>

					{/* Activity */}
					<Text style={[typographyGlobal.textSm]}>Last active: {lastActivity}</Text>
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
	badgeWrapper: {
		gap: 8,
		justifyContent: 'flex-end',
	},
	deviceItem: {
		gap: 4,
		paddingVertical: 20,
		paddingHorizontal: 14,
		borderRadius: 15,
		borderWidth: 1,
		borderColor: Colors.itemBackground,
	},
	currentDeviceItem: {
		gap: 4,
		paddingVertical: 20,
		paddingHorizontal: 14,
		borderRadius: 15,
		backgroundColor: Colors.statusBadge,
		borderWidth: 1,
		borderColor: 'rgba(50, 169, 86, 0.3)',
	},
	revokeButton: {
		flexDirection: 'row',
		gap: 4,
		alignItems: 'center',
		justifyContent: 'center',
		height: 24,
		marginLeft: 'auto',
		paddingLeft: 8,
		paddingRight: 4,
		borderRadius: 6,
		borderWidth: 1,
		borderColor: Colors.red,
	},
});
