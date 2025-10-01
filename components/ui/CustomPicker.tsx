// components/ui/CustomSelect.tsx
import { IconArrowDown } from '@/components/ui/Icons';
import { Colors } from '@/constants/colors';
import { typographyGlobal } from '@/constants/typography';
import React, { useState } from 'react';
import { DimensionValue, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

interface Option {
	label: string;
	value: string;
}

// Props expected by the CustomPicker component
interface CustomSelectProps {
	options: Option[]; // List of available options
	value: string; // Currently selected value (controlled by parent)
	onChange: (value: string) => void; // Callback to update the selected value
	placeholder?: string; // Fallback text when no value is selected
	width?: DimensionValue; // width
}

export default function CustomPicker({
	options,
	value,
	onChange,
	placeholder = 'Select...',
	width = null,
}: CustomSelectProps) {
	// Internal state to toggle dropdown visibility
	const [visible, setVisible] = useState(false);

	return (
		<View style={[styles.container, { width }]}>
			{/* Main button that toggles the dropdown */}
			<TouchableOpacity style={[styles.picker]} onPress={() => setVisible(!visible)}>
				{/* Selected option */}
				<Text style={[typographyGlobal.textBaseTight, styles.pickerText]}>
					{value ? options.find((opt) => opt.value === value)?.label || value : placeholder}
				</Text>

				{/* Dropdown icon */}
				<View style={[styles.arrow, visible && styles.arrowRotated]}>
					<IconArrowDown fill={Colors.text} stroke={Colors.text} size={24} />
				</View>
			</TouchableOpacity>

			{visible && (
				<>
					{/* Dropdown */}
					<View style={[styles.dropdown]}>
						{options.map((option) => (
							<TouchableOpacity
								key={option.value}
								style={[styles.option]}
								onPress={() => {
									onChange(option.value);
									setVisible(false);
								}}
							>
								{/* Options text for dropdown */}
								<Text style={[typographyGlobal.textBaseTight]}>{option.label}</Text>
							</TouchableOpacity>
						))}
					</View>
				</>
			)}
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		marginLeft: 'auto',
	},
	picker: {
		height: 34,
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'center',
		borderRadius: 4,
		borderWidth: 1,
		borderColor: Colors.itemBackground,
		backgroundColor: Colors.inputBackground,
		overflow: 'hidden',
	},
	pickerText: {
		flex: 1,
		textAlign: 'center',
	},
	arrow: {
		width: 34,
		height: 34,
		marginLeft: 'auto',
		alignItems: 'center',
		justifyContent: 'center',
		backgroundColor: Colors.buttonBackground,
		borderBottomRightRadius: 2,
		borderTopRightRadius: 2,
	},
	arrowRotated: {
		transform: [{ rotate: '180deg' }],
	},
	dropdown: {
		position: 'absolute',
		zIndex: 10,
		top: 38,
		left: 0,
		right: 0,
		backgroundColor: Colors.inputBackground,
		borderWidth: 1,
		borderColor: Colors.itemBackground,
		borderRadius: 4,
	},
	option: {
		alignItems: 'center',
		gap: 8,
		paddingVertical: 8,
		paddingHorizontal: 4,
	},
});
