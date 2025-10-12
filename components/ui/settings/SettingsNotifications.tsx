import { Colors } from '@/constants/colors';
import { tasksRemindersOptions } from '@/constants/options';
import { stylesGLobal } from '@/constants/styles';
import { typographyGlobal } from '@/constants/typography';
import { useState } from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import CustomPicker from '../CustomPicker';
import CustomSwitch from '../CustomSwitch';
import { IconNotifications } from '../Icons';

export default function SettingsNotifications() {
	// Switchers
	const [pushNotifications, setPushNotifications] = useState<boolean>(false); // Switcher for push notifications
	const [emailNotifications, setEmailNotifications] = useState<boolean>(false); // Switcher for email notifications
	const [aiUpdates, setAiUpdates] = useState<boolean>(false); // Switcher for ai updates
	const [competitionAlerts, setCompetitionAlerts] = useState<boolean>(false); // Switcher for competition alerts

	// Pickers
	const [tasksReminders, setTasksReminders] = useState<string>('off'); // Picker for tasks reminders

	return (
		<ScrollView style={[styles.scrollWprapper]}>
			<View style={[stylesGLobal.settingsContainer]}>
				{/* Container header */}
				<View style={[stylesGLobal.settingsContainerHeader]}>
					<IconNotifications fill={Colors.text} stroke={Colors.text} size={40} />
					<Text style={[typographyGlobal.titleH2]}>Notifications</Text>
				</View>

				{/* Settings items */}

				{/* Push notifications */}
				<View style={[stylesGLobal.settingsItem]}>
					{/* Item content */}
					<View style={[stylesGLobal.settingsItemContent]}>
						<Text style={[typographyGlobal.textBase]}>Push notifications</Text>
						<Text style={[typographyGlobal.textSm]}>Receive notifications on your device.</Text>
					</View>

					{/* Item switcher */}
					<CustomSwitch value={pushNotifications} onValueChange={setPushNotifications} />
				</View>

				{/* Email notifications */}
				<View style={[stylesGLobal.settingsItem]}>
					{/* Item content */}
					<View style={[stylesGLobal.settingsItemContent]}>
						<Text style={[typographyGlobal.textBase]}>Email notifications</Text>
						<Text style={[typographyGlobal.textSm]}>Receive updates via email.</Text>
					</View>

					{/* Item switcher */}
					<CustomSwitch value={emailNotifications} onValueChange={setEmailNotifications} />
				</View>

				{/* Task reminders */}
				<View style={[stylesGLobal.settingsItem]}>
					{/* Item content */}
					<View style={[stylesGLobal.settingsItemContent]}>
						<Text style={[typographyGlobal.textBase]}>Task reminders</Text>
						<Text style={[typographyGlobal.textSm]}>Get reminded about incomplete tasks.</Text>
					</View>

					{/* Item picker */}
					<CustomPicker
						options={tasksRemindersOptions}
						value={tasksReminders}
						onChange={setTasksReminders}
						placeholder={tasksReminders}
						width={120}
					/>
				</View>

				{/* AI updates */}
				<View style={[stylesGLobal.settingsItem]}>
					{/* Item content */}
					<View style={[stylesGLobal.settingsItemContent]}>
						<Text style={[typographyGlobal.textBase]}>AI updates</Text>
						<Text style={[typographyGlobal.textSm]}>
							Notifications when your clone reaches milestones.
						</Text>
					</View>

					{/* Item switcher */}
					<CustomSwitch value={aiUpdates} onValueChange={setAiUpdates} />
				</View>

				{/* Competition alerts */}
				<View style={[stylesGLobal.settingsItem]}>
					{/* Item content */}
					<View style={[stylesGLobal.settingsItemContent]}>
						<Text style={[typographyGlobal.textBase]}>Competition alerts</Text>
						<Text style={[typographyGlobal.textSm]}>
							Notifications for Eido World events and competitions.
						</Text>
					</View>

					{/* Item switcher */}
					<CustomSwitch value={competitionAlerts} onValueChange={setCompetitionAlerts} />
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
