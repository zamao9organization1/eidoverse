import { useFonts } from 'expo-font';
import { Stack } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import { useEffect } from 'react';
import { SafeAreaView, StatusBar } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

SplashScreen.preventAutoHideAsync(); // Preventing automatic hiding of the splash screen

export default function RootLayout() {
	// Fonts
	const [loaded] = useFonts({
		'Nunito-Regular': require('../assets/fonts/Nunito-Regular.ttf'),
		'Nunito-SemiBold': require('../assets/fonts/Nunito-SemiBold.ttf'),
		'Nunito-ExtraBold': require('../assets/fonts/Nunito-ExtraBold.ttf'),
	});

	const insets = useSafeAreaInsets();

	useEffect(() => {
		if (loaded) {
			SplashScreen.hideAsync(); //  Hiding of the splash screen
		}
	}, [loaded]);

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
			</SafeAreaView>
		</>
	);
}
