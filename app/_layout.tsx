import { ProfileContextMenu } from '@/components/ui/ProfileContextMenu';
import { AuthProvider } from '@/context/AuthContext';
import { UserProvider } from '@/context/UserContext';
import { ProfileContextMenuProvider, useProfileContextMenu } from '@/hooks/useProfileContextMenu';
import { useFonts } from 'expo-font';
import { Stack } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import { useEffect } from 'react';
import { SafeAreaView, StatusBar } from 'react-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

SplashScreen.preventAutoHideAsync(); // Preventing automatic hiding of the splash screen

// External component: provider only
export default function RootLayout() {
	return (
		<AuthProvider>
			<UserProvider>
				<ProfileContextMenuProvider>
					<RootLayoutContent />
				</ProfileContextMenuProvider>
			</UserProvider>
		</AuthProvider>
	);
}

function RootLayoutContent() {
	// Fonts
	const [loaded] = useFonts({
		'Nunito-Regular': require('../assets/fonts/Nunito-Regular.ttf'),
		'Nunito-SemiBold': require('../assets/fonts/Nunito-SemiBold.ttf'),
		'Nunito-ExtraBold': require('../assets/fonts/Nunito-ExtraBold.ttf'),
	});

	// Get safe area insets to avoid notches/status bar
	const insets = useSafeAreaInsets();
	const { visible, hideMenu } = useProfileContextMenu();

	useEffect(() => {
		hideMenu();
	}, []);

	useEffect(() => {
		if (loaded) {
			SplashScreen.hideAsync(); //  Hiding of the splash screen
		}
	}, [loaded]);

	if (!loaded) {
		return null; // Show custom loader while loading fonts
	}

	return (
		<GestureHandlerRootView style={{ flex: 1 }}>
			<StatusBar barStyle='light-content' backgroundColor='#020303' />
			<SafeAreaView style={{ flex: 1, paddingTop: insets.top, backgroundColor: '#020303' }}>
				<Stack
					// Remove the header
					screenOptions={{
						headerShown: false,
					}}
				/>
			</SafeAreaView>

			{visible && <ProfileContextMenu visible={visible} onClose={hideMenu} />}
		</GestureHandlerRootView>
	);
}
