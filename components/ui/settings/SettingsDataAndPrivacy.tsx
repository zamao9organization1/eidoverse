import { Colors } from '@/constants/colors';
import { stylesGLobal } from '@/constants/styles';
import { typographyGlobal } from '@/constants/typography';
import { useState } from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import CustomSwitch from '../CustomSwitch';
import { IconDataAndPrivacy } from '../Icons';

export default function SettingsDataAndPrivacy() {
	// Switchers
	const [appUsage, setAppUsage] = useState<boolean>(false); // Switcher for app usage
	const [deviceSignals, setDeviceSignals] = useState<boolean>(false); // Switcher for divice signals
	const [locationAccess, setLocationAccess] = useState<boolean>(false); // Switcher for location access
	const [motionSensors, setMotionSensors] = useState<boolean>(false); // Switcher for motion sensors
	const [voicePresence, setVoicePresence] = useState<boolean>(false); // Switcher for voice presence
	const [personalInsights, setPersonalInsights] = useState<boolean>(false); // Switcher for personal insights

	return (
		<ScrollView style={[styles.scrollWprapper]}>
			<View style={[stylesGLobal.settingsContainer]}>
				{/* Container header */}
				<View style={[stylesGLobal.settingsContainerHeader]}>
					<IconDataAndPrivacy fill={Colors.text} stroke={Colors.text} size={40} />
					<Text style={[typographyGlobal.titleH2]}>Data & privacy</Text>
				</View>

				{/* Settings items */}

				{/* App usage */}
				<View style={[stylesGLobal.settingsItem]}>
					{/* Item content */}
					<View style={[stylesGLobal.settingsItemContent]}>
						<Text style={[typographyGlobal.textBase]}>App usage</Text>
						<Text style={[typographyGlobal.textSm]}>
							Foreground apps, session length, notifications.
						</Text>
					</View>

					{/* Item switcher */}
					<CustomSwitch value={appUsage} onValueChange={setAppUsage} />
				</View>

				{/* Device signals */}
				<View style={[stylesGLobal.settingsItem]}>
					{/* Item content */}
					<View style={[stylesGLobal.settingsItemContent]}>
						<Text style={[typographyGlobal.textBase]}>Device signals</Text>
						<Text style={[typographyGlobal.textSm]}>
							Battery, network type, performance metrics.
						</Text>
					</View>

					{/* Item switcher */}
					<CustomSwitch value={deviceSignals} onValueChange={setDeviceSignals} />
				</View>

				{/* Location (consent per OS) */}
				<View style={[stylesGLobal.settingsItem]}>
					{/* Item content */}
					<View style={[stylesGLobal.settingsItemContent]}>
						<Text style={[typographyGlobal.textBase]}>Location (consent per OS)</Text>
						<Text style={[typographyGlobal.textSm]}>
							Approximate movement patterns. No precise history sold.
						</Text>
					</View>

					{/* Item switcher */}
					<CustomSwitch value={locationAccess} onValueChange={setLocationAccess} />
				</View>

				{/* Motion sensors */}
				<View style={[stylesGLobal.settingsItem]}>
					{/* Item content */}
					<View style={[stylesGLobal.settingsItemContent]}>
						<Text style={[typographyGlobal.textBase]}>Motion sensors</Text>
						<Text style={[typographyGlobal.textSm]}>
							Steps, motion patterns; no raw gyroscope streams.
						</Text>
					</View>

					{/* Item switcher */}
					<CustomSwitch value={motionSensors} onValueChange={setMotionSensors} />
				</View>

				{/* Voice presence */}
				<View style={[stylesGLobal.settingsItem]}>
					{/* Item content */}
					<View style={[stylesGLobal.settingsItemContent]}>
						<Text style={[typographyGlobal.textBase]}>Voice presence</Text>
						<Text style={[typographyGlobal.textSm]}>Activity level only (no audio recording).</Text>
					</View>

					{/* Item switcher */}
					<CustomSwitch value={voicePresence} onValueChange={setVoicePresence} />
				</View>

				{/* Personal insights via chat */}
				<View style={[stylesGLobal.settingsItem]}>
					{/* Item content */}
					<View style={[stylesGLobal.settingsItemContent]}>
						<Text style={[typographyGlobal.textBase]}>Personal insights via chat</Text>
						<Text style={[typographyGlobal.textSm]}>
							Voluntary Q&A used to train your AI clone.
						</Text>
					</View>

					{/* Item switcher */}
					<CustomSwitch value={personalInsights} onValueChange={setPersonalInsights} />
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
});
