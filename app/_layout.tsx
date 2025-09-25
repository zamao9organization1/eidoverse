import { IconProfile } from '@/components/ui/Icons';
import { ProfileContextMenu } from '@/components/ui/ProfileContextMenu';
import { Colors } from '@/constants/colors';
import { useProfileContextMenu } from '@/hooks/useProfileContextMenu';
import { useFonts } from 'expo-font';
import { Stack } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import { useEffect } from 'react';
import { SafeAreaView, StatusBar, StyleSheet, TouchableOpacity, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

SplashScreen.preventAutoHideAsync(); // Preventing automatic hiding of the splash screen

export default function RootLayout() {
	// Fonts
	const [loaded] = useFonts({
		'Nunito-Regular': require('../assets/fonts/Nunito-Regular.ttf'),
		'Nunito-SemiBold': require('../assets/fonts/Nunito-SemiBold.ttf'),
		'Nunito-ExtraBold': require('../assets/fonts/Nunito-ExtraBold.ttf'),
	});

	// Get safe area insets to avoid notches/status bar
	const insets = useSafeAreaInsets();

	useEffect(() => {
		hideMenu(); // Close ProfileContextMenu after click on other page
	}, []);

	useEffect(() => {
		if (loaded) {
			SplashScreen.hideAsync(); //  Hiding of the splash screen
		}
	}, [loaded]);

	const { visible, toggleMenu, hideMenu } = useProfileContextMenu();

	const handleMenuButtonPress = () => {
		toggleMenu();
	};

	if (!loaded) {
		return null; // Show custom loader while loading fonts
	}

	return (
		<>
			<StatusBar barStyle='light-content' backgroundColor='#020303' />
			<SafeAreaView style={{ flex: 1, paddingTop: insets.top, backgroundColor: '#020303' }}>
				<Stack
					// Remove the header
					screenOptions={{
						headerShown: false,
					}}
				/>

				{/* Profile button wrapper */}
				<View style={[styles.buttonWrapper, { top: insets.top + 30 }]}>
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

				{/* Profile context menu */}
				<ProfileContextMenu visible={visible} onClose={hideMenu} />
			</SafeAreaView>
		</>
	);
}

export const styles = StyleSheet.create({
	buttonWrapper: {
		position: 'absolute',
		zIndex: 900,
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
