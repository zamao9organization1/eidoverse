import { useFonts } from 'expo-font';
import { Stack } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import { useEffect } from 'react';

SplashScreen.preventAutoHideAsync(); // Preventing automatic hiding of the splash screen

export default function RootLayout() {
	const [loaded] = useFonts({
		'Nunito-Regular': require('../assets/fonts/Nunito-Regular.ttf'),
		'Nunito-SemiBold': require('../assets/fonts/Nunito-SemiBold.ttf'),
		'Nunito-ExtraBold': require('../assets/fonts/Nunito-ExtraBold.ttf'),
	}); // Fonts

	useEffect(() => {
		if (loaded) {
			SplashScreen.hideAsync(); //  Hiding of the splash screen
		}
	}, [loaded]);

	if (!loaded) {
		return null; // Show custom loader while loading fonts
	}

	return <Stack />;
}
