// components/ReferralSection.tsx
import { Colors } from '@/constants/colors';
import { typographyGlobal } from '@/constants/typography';
import * as Clipboard from 'expo-clipboard';
import React, { useState } from 'react';
import { Alert, Platform, Pressable, StyleSheet, Text, ToastAndroid, View } from 'react-native';
import { IconLink } from './Icons';

interface ReferralSectionProps {
	referralCode: string;
	baseUrl?: string;
}

export default function ReferralSection({
	referralCode,
	baseUrl = 'https://eidoverse.app',
}: ReferralSectionProps) {
	const [copied, setCopied] = useState<boolean>(false);

	const fullUrl = `${baseUrl}/r/${referralCode}`;

	const copyToClipboard = async () => {
		try {
			await Clipboard.setStringAsync(fullUrl);
			setCopied(true);

			// Показать уведомление (можно использовать Toast из expo-toast или Alert)
			if (Platform.OS === 'android') {
				ToastAndroid.show('Ссылка скопирована', ToastAndroid.SHORT);
			} else {
				Alert.alert('Готово', 'Ссылка скопирована');
			}

			setTimeout(() => setCopied(false), 2000);
		} catch (error) {
			console.error('Не удалось скопировать:', error);
			Alert.alert('Ошибка', 'Не удалось скопировать ссылку');
		}
	};

	return (
		<Pressable
			style={[styles.refferalLink, copied === true && styles.refferalLinkIsCopied]}
			onPress={copyToClipboard}
		>
			<Text style={[typographyGlobal.textBase, { flexGrow: 1 }]}>{referralCode}</Text>

			<View style={[styles.icon]}>
				<IconLink fill={Colors.text} stroke={Colors.text} size={24} />
			</View>
		</Pressable>
	);
}

const styles = StyleSheet.create({
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
	refferalLinkIsCopied: {
		opacity: 0.5,
	},
	icon: {
		justifyContent: 'center',
		alignItems: 'center',
		marginLeft: 'auto',
	},
});
