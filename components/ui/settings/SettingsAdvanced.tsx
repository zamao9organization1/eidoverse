import { Colors } from '@/constants/colors';
import { stylesGLobal } from '@/constants/styles';
import { typographyGlobal } from '@/constants/typography';
import { useState } from 'react';
import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import CustomSwitch from '../CustomSwitch';
import {
	IconAdvanced,
	IconChat,
	IconDataAndPrivacy,
	IconHelp,
	IconLink,
	IconList,
	IconNetwork,
	IconReport,
	IconSecurity,
} from '../Icons';

export default function SettingsAdvanced() {
	// Switcher
	const [developerMode, setDeveloperMode] = useState<boolean>(false); // Switcher for developer mode
	const [debugLogs, setDebugLogs] = useState<boolean>(false); // Switcher for debug logs
	const [betaTesting, setBetaTesting] = useState<boolean>(false); // Switcher for beta testing

	return (
		<ScrollView style={[styles.scrollWprapper]}>
			<View style={[stylesGLobal.settingsContainer]}>
				{/* Container header */}
				<View style={[stylesGLobal.settingsContainerHeader]}>
					<IconAdvanced fill={Colors.text} stroke={Colors.text} size={40} />
					<Text style={[typographyGlobal.titleH2]}>Advanced </Text>
				</View>

				{/* Developer options */}
				<Text style={[typographyGlobal.titleH3]}>Developer options</Text>

				{/* Settings items */}

				{/* Developer mode */}
				<View style={[stylesGLobal.settingsItem]}>
					{/* Item content */}
					<View style={[stylesGLobal.settingsItemContent]}>
						<Text style={[typographyGlobal.textBase]}>Developer mode</Text>
						<Text style={[typographyGlobal.textSm]}>Enable debugging features and logs.</Text>
					</View>

					{/* Item switcher */}
					<CustomSwitch value={developerMode} onValueChange={setDeveloperMode} />
				</View>

				{/* Debug logs */}
				<View style={[stylesGLobal.settingsItem]}>
					{/* Item content */}
					<View style={[stylesGLobal.settingsItemContent]}>
						<Text style={[typographyGlobal.textBase]}>Debug logs</Text>
						<Text style={[typographyGlobal.textSm]}>Show detailed application logs.</Text>
					</View>

					{/* Item switcher */}
					<CustomSwitch value={debugLogs} onValueChange={setDebugLogs} />
				</View>

				{/* Dividing line */}
				<View style={[stylesGLobal.dividingLine]}></View>

				{/* Beta program */}
				<Text style={[typographyGlobal.titleH3]}>Beta program</Text>

				{/* Join beta testing */}
				<View style={[stylesGLobal.settingsItem]}>
					{/* Item content */}
					<View style={[stylesGLobal.settingsItemContent]}>
						<Text style={[typographyGlobal.textBase]}>Join beta testing</Text>
						<Text style={[typographyGlobal.textSm]}>Get early access to new features.</Text>
					</View>

					{/* Item switcher */}
					<CustomSwitch value={betaTesting} onValueChange={setBetaTesting} />
				</View>

				{/* Dividing line */}
				<View style={[stylesGLobal.dividingLine]}></View>

				{/* Legal & documentation */}
				<Text style={[typographyGlobal.titleH3]}>Legal & documentation</Text>

				{/* Link list */}
				<View style={[styles.linksList]}>
					{/* Link items */}

					{/* Terms of service */}
					<View style={[styles.linkItems]}>
						{/* Link label */}
						<View style={[styles.linkLabel]}>
							<IconList stroke={Colors.text} fill={Colors.text} size={24} />
							<Text style={[typographyGlobal.textBase]}>Terms of service</Text>
						</View>

						{/* Link button */}
						<TouchableOpacity style={[styles.linkButton]}>
							<IconLink fill={Colors.text} stroke={Colors.text} size={24} />
						</TouchableOpacity>
					</View>

					{/* Privacy policy */}
					<View style={[styles.linkItems]}>
						{/* Link label */}
						<View style={[styles.linkLabel]}>
							<IconSecurity stroke={Colors.text} fill={Colors.text} size={24} />
							<Text style={[typographyGlobal.textBase]}>Privacy policy</Text>
						</View>

						{/* Link button */}
						<TouchableOpacity style={[styles.linkButton]}>
							<IconLink fill={Colors.text} stroke={Colors.text} size={24} />
						</TouchableOpacity>
					</View>

					{/* Reward terms */}
					<View style={[styles.linkItems]}>
						{/* Link label */}
						<View style={[styles.linkLabel]}>
							<IconDataAndPrivacy stroke={Colors.text} fill={Colors.text} size={24} />
							<Text style={[typographyGlobal.textBase]}>Reward terms</Text>
						</View>

						{/* Link button */}
						<TouchableOpacity style={[styles.linkButton]}>
							<IconLink fill={Colors.text} stroke={Colors.text} size={24} />
						</TouchableOpacity>
					</View>

					{/* Open source licenses */}
					<View style={[styles.linkItems]}>
						{/* Link label */}
						<View style={[styles.linkLabel]}>
							<IconNetwork stroke={Colors.text} fill={Colors.text} size={24} />
							<Text style={[typographyGlobal.textBase]}>Open source licenses</Text>
						</View>

						{/* Link button */}
						<TouchableOpacity style={[styles.linkButton]}>
							<IconLink fill={Colors.text} stroke={Colors.text} size={24} />
						</TouchableOpacity>
					</View>
				</View>

				{/* Dividing line */}
				<View style={[stylesGLobal.dividingLine]}></View>

				{/* Contact & support */}
				<Text style={[typographyGlobal.titleH3]}>Contact & support</Text>

				{/* Link list */}
				<View style={[styles.linksList]}>
					{/* Link items */}

					{/* Submit feedback */}
					<View style={[styles.linkItems]}>
						{/* Link label */}
						<View style={[styles.linkLabel]}>
							<IconChat stroke={Colors.text} fill={Colors.text} size={24} />
							<Text style={[typographyGlobal.textBase]}>Submit feedback</Text>
						</View>

						{/* Link button */}
						<TouchableOpacity style={[styles.linkButton]}>
							<IconLink fill={Colors.text} stroke={Colors.text} size={24} />
						</TouchableOpacity>
					</View>

					{/* Contact support team */}
					<View style={[styles.linkItems]}>
						{/* Link label */}
						<View style={[styles.linkLabel]}>
							<IconHelp stroke={Colors.text} fill={Colors.text} size={24} />
							<Text style={[typographyGlobal.textBase]}>Contact support team</Text>
						</View>

						{/* Link button */}
						<TouchableOpacity style={[styles.linkButton]}>
							<IconLink fill={Colors.text} stroke={Colors.text} size={24} />
						</TouchableOpacity>
					</View>

					{/* Report a bug */}
					<View style={[styles.linkItems]}>
						{/* Link label */}
						<View style={[styles.linkLabel]}>
							<IconReport stroke={Colors.text} fill={Colors.text} size={24} />
							<Text style={[typographyGlobal.textBase]}>Report a bug</Text>
						</View>

						{/* Link button */}
						<TouchableOpacity style={[styles.linkButton]}>
							<IconLink fill={Colors.text} stroke={Colors.text} size={24} />
						</TouchableOpacity>
					</View>
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
	linksList: {
		gap: 10,
	},
	linkItems: {
		flexDirection: 'row',
		gap: 14,
		alignItems: 'center',
	},
	linkLabel: {
		flex: 1,
		flexDirection: 'row',
		alignItems: 'center',
		gap: 4,
	},
	linkButton: {
		alignItems: 'center',
		justifyContent: 'center',
		width: 34,
		height: 34,
		borderRadius: 6,
		borderWidth: 1,
		borderColor: Colors.itemBackground,
		backgroundColor: Colors.itemBackground,
	},
});
