import CustomPicker from '@/components/ui/CustomPicker';
import { IconLink } from '@/components/ui/Icons';
import { Colors } from '@/constants/colors';
import { stylesGLobal } from '@/constants/styles';
import { typographyGlobal } from '@/constants/typography';
import React, { useState } from 'react';
import { Pressable, ScrollView, StyleSheet, Text, View } from 'react-native';

const dataExportOptions = [
	{
		label: 'json',
		value: 'json',
	},
	{
		label: 'csv',
		value: 'csv',
	},
];

const deleteCloneOption = [
	{
		label: 'with warning',
		value: 'with warning',
	},
	{
		label: 'confirmation',
		value: 'confirmation',
	},
];

const microphoneActivityLvlOptions = [
	{
		label: 'not recording',
		value: 'not recording',
	},
	{
		label: 'just measuring',
		value: 'just measuring',
	},
];

const appUsageOptions = [
	{
		label: 'screen time',
		value: 'screen time',
	},
	{
		label: 'foreground activity',
		value: 'foreground activity',
	},
];

export default function Settings() {
	// Local state: manages dark theme toggle
	const [checked, setChecked] = useState<boolean>(true);

	const [dataAndPrivacy, setDataAndPrivacy] = useState(''); // Data picker
	const [deleteClone, setDeleteClone] = useState(''); // Delete my clone picker
	const [micActLvl, setMicActLvl] = useState(''); // Microphone activity level
	const [appUsage, setAppUsage] = useState(''); // App usage

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
								options={deleteCloneOption}
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
							<Pressable
								style={[
									stylesGLobal.track,
									checked ? stylesGLobal.trackOn : stylesGLobal.trackOff,
									{ flexShrink: 0 },
								]}
								onPress={() => setChecked(!checked)} // переключатель не закрывает меню
								accessibilityRole='switch'
								accessibilityState={{ checked }}
								accessibilityLabel='Переключить темную тему'
							>
								<View style={stylesGLobal.thumb} />
							</Pressable>
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
							<Pressable
								style={[
									stylesGLobal.track,
									checked ? stylesGLobal.trackOn : stylesGLobal.trackOff,
									{ flexShrink: 0 },
								]}
								onPress={() => setChecked(!checked)} // переключатель не закрывает меню
								accessibilityRole='switch'
								accessibilityState={{ checked }}
								accessibilityLabel='Переключить темную тему'
							>
								<View style={stylesGLobal.thumb} />
							</Pressable>
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
					<View style={[styles.refferalLink]}>
						<Text style={[typographyGlobal.textBase, { flexGrow: 1 }]}>GUBW94UL</Text>

						<View
							style={{
								justifyContent: 'center',
								alignItems: 'center',
								marginLeft: 'auto',
							}}
						>
							<IconLink fill={Colors.text} stroke={Colors.text} size={24} />
						</View>
					</View>
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
	refferalLink: {
		flexDirection: 'row',
		alignItems: 'center',
		gap: 8,
		height: 40,
		paddingRight: 8,
		paddingLeft: 10,
		borderRadius: 6,
		borderWidth: 1,
		borderColor: Colors.itemBackground,
		backgroundColor: Colors.inputBackground,
	},
	mt48: {
		marginTop: 48,
	},
	mb32: {
		marginBottom: 32,
	},
});
