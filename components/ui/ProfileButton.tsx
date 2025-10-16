import { Colors } from '@/constants/colors';
import { useProfileContextMenu } from '@/hooks/useProfileContextMenu';
import { StyleSheet, TouchableOpacity, View } from 'react-native';
import { IconProfile } from './Icons';

export default function ProfileButton() {
	const { visible, toggleMenu } = useProfileContextMenu();

	const handleMenuButtonPress = () => {
		toggleMenu();
	};

	return (
		<>
			{/* Profile button wrapper */}
			<View style={[styles.buttonWrapper]}>
				{/* Profile button */}
				<TouchableOpacity
					onPress={handleMenuButtonPress}
					style={[styles.button, visible && styles.buttonIsActive]}
				>
					<IconProfile
						stroke={visible ? Colors.mainBackground : Colors.text}
						fill={visible ? Colors.mainBackground : Colors.text}
						size={24}
					/>
				</TouchableOpacity>
			</View>
		</>
	);
}

export const styles = StyleSheet.create({
	buttonWrapper: {
		position: 'absolute',
		zIndex: 800,
		top: 30,
		right: 30,
		padding: 6,
		borderRadius: 15,
		backgroundColor: Colors.itemBackground,
	},
	button: {
		justifyContent: 'center',
		alignItems: 'center',
		width: 40,
		height: 40,
		borderRadius: 10,
	},
	buttonIsActive: {
		backgroundColor: Colors.title,
	},
});
