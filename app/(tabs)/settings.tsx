import CustomPicker from '@/components/ui/CustomPicker';
import CustomSwitch from '@/components/ui/CustomSwitch';
import ReferralSection from '@/components/ui/RefferalSection';
import { Colors } from '@/constants/colors';
import {
	appUsageOptions,
	dataExportOptions,
	deleteCloneOptions,
	microphoneActivityLvlOptions,
} from '@/constants/options';
import { stylesGLobal } from '@/constants/styles';
import { typographyGlobal } from '@/constants/typography';
import React, { useState } from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';

export default function Settings() {
	// Pickers
	const [dataAndPrivacy, setDataAndPrivacy] = useState<string>(''); // Data picker
	const [deleteClone, setDeleteClone] = useState<string>(''); // Delete my clone picker
	const [micActLvl, setMicActLvl] = useState<string>(''); // Microphone activity level
	const [appUsage, setAppUsage] = useState<string>(''); // App usage

	// Switchers
	const [anonymizedData, setAnonymizedData] = useState<boolean>(false);
	const [locationTracker, setLocationTracker] = useState<boolean>(false);

	return (
		<View style={[stylesGLobal.container, { paddingBottom: 0 }]}>
			<ScrollView contentContainerStyle={{ paddingBottom: 60 }}>
				<Text style={[typographyGlobal.titleH1, styles.mt48, styles.mb32]}>Settings</Text>

				{/* Settings wrapper */}
				<View style={[styles.settingsWrapper]}>
					{/* Data and privacy title */}
					<Text style={[typographyGlobal.titleH3]}>Data & Privacy</Text>

					{/* Settings list */}
					<View style={[styles.settingsList]}>
						{/* Settings item */}
						<View style={[styles.settingsItem]}>
							<Text style={[typographyGlobal.textBase]}>Data export</Text>
							{/* Settings picker */}
							<CustomPicker
								options={dataExportOptions}
								value={dataAndPrivacy}
								onChange={setDataAndPrivacy}
								placeholder='json'
								width={90}
							/>
						</View>

						{/* Settings item */}
						<View style={[styles.settingsItem]}>
							<Text style={[typographyGlobal.textBase]}>Delete my clone</Text>

							{/* Settings picker */}
							<CustomPicker
								options={deleteCloneOptions}
								value={deleteClone}
								onChange={setDeleteClone}
								placeholder='with warning'
								width={160}
							/>
						</View>

						{/* Settings item */}
						<View style={[styles.settingsItem]}>
							<Text style={[typographyGlobal.textBase]}>Anonymized data usage</Text>

							{/* Switcher */}
							<CustomSwitch value={anonymizedData} onValueChange={setAnonymizedData} />
						</View>
					</View>

					{/* Dividing line */}
					<View style={[stylesGLobal.dividingLine]}></View>

					{/* Background data collection title */}
					<Text style={[typographyGlobal.titleH3]}>Data & Privacy</Text>

					{/* Settings list */}
					<View style={[styles.settingsList]}>
						{/* Settings item */}
						<View style={[styles.settingsItem]}>
							<Text style={[typographyGlobal.textBase]}>Location tracking </Text>

							{/* Switcher */}
							<CustomSwitch value={locationTracker} onValueChange={setLocationTracker} />
						</View>

						{/* Settings item */}
						<View style={[styles.settingsItem]}>
							<Text style={[typographyGlobal.textBase]}>Microphone{'\n'}activity level</Text>

							{/* Settings picker */}
							<CustomPicker
								options={microphoneActivityLvlOptions}
								value={micActLvl}
								onChange={setMicActLvl}
								placeholder='not recording'
								width={170}
							/>
						</View>

						{/* Settings item */}
						<View style={[styles.settingsItem]}>
							<Text style={[typographyGlobal.textBase]}>App usage</Text>

							{/* Settings picker */}
							<CustomPicker
								options={appUsageOptions}
								value={appUsage}
								onChange={setAppUsage}
								placeholder='screen time'
								width={200}
							/>
						</View>
					</View>

					{/* Dividing line */}
					<View style={[stylesGLobal.dividingLine]}></View>

					{/* Refferal link title */}
					<Text style={[typographyGlobal.titleH3]}>Refferal link</Text>

					{/* Refferal link */}
					<ReferralSection referralCode='GUBW94UL' baseUrl='https://eidoverse.app' />
				</View>
			</ScrollView>
		</View>
	);
}

export const styles = StyleSheet.create({
	settingsWrapper: {
		gap: 20,
		paddingTop: 14,
		paddingRight: 20,
		paddingBottom: 14,
		paddingLeft: 20,
		borderRadius: 15,
		backgroundColor: Colors.itemBackground,
	},
	settingsList: {
		gap: 14,
	},
	settingsItem: {
		flexDirection: 'row',
		alignItems: 'center',
		gap: 20,
		flexShrink: 0,
	},
	mt48: {
		marginTop: 48,
	},
	mb32: {
		marginBottom: 32,
	},
});
