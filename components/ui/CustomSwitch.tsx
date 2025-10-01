// components/ui/CustomSwitch.tsx
import { stylesGLobal } from '@/constants/styles';
import React from 'react';
import { Pressable, View } from 'react-native';

interface CustomSwitchProps {
	value: boolean;
	onValueChange: (value: boolean) => void;
}

export default function CustomSwitch({ value, onValueChange }: CustomSwitchProps) {
	return (
		<Pressable
			style={[
				stylesGLobal.track,
				value ? stylesGLobal.trackOn : stylesGLobal.trackOff,
				{ flexShrink: 0 },
			]}
			onPress={() => onValueChange(!value)}
			accessibilityRole='switch'
			accessibilityState={{ checked: value }}
		>
			<View style={stylesGLobal.thumb} />
		</Pressable>
	);
}
