// app/(tabs)/_layout.tsx
import { IconHome, IconSettings, IconTasks, IconWallet } from '@/components/ui/Icons';
import VerticalTabBar from '@/components/ui/VerticalTabBar';
import { Colors } from '@/constants/colors';
import { Tabs } from 'expo-router';

export default function TabsLayout() {
	return (
		<Tabs
			// Connecting a custom tab bar
			tabBar={(props) => <VerticalTabBar {...props} />}
			// Remove the header
			screenOptions={{
				headerShown: false,
			}}
		>
			{/* Tab "Home" */}
			<Tabs.Screen
				name='index'
				options={{
					tabBarIcon: ({ focused }) => (
						<IconHome
							stroke={focused === true ? Colors.mainBackground : Colors.text}
							fill={focused === true ? Colors.mainBackground : Colors.text}
						/>
					),
				}}
			/>

			{/* Tab "Wallet" */}
			<Tabs.Screen
				name='wallet'
				options={{
					tabBarIcon: ({ focused }) => (
						<IconWallet
							stroke={focused === true ? Colors.mainBackground : Colors.text}
							fill={focused === true ? Colors.mainBackground : Colors.text}
						/>
					),
				}}
			/>

			{/* Tab "Tasks" */}
			<Tabs.Screen
				name='tasks'
				options={{
					tabBarIcon: ({ focused }) => (
						<IconTasks
							stroke={focused === true ? Colors.mainBackground : Colors.text}
							fill={focused === true ? Colors.mainBackground : Colors.text}
						/>
					),
				}}
			/>

			{/* Tab "Settings" */}
			<Tabs.Screen
				name='settings'
				options={{
					tabBarIcon: ({ focused }) => (
						<IconSettings
							stroke={focused === true ? Colors.mainBackground : Colors.text}
							fill={focused === true ? Colors.mainBackground : Colors.text}
						/>
					),
				}}
			/>

			{/* Tab "Profile" */}
			<Tabs.Screen
				name='profile'
				options={{
					tabBarIcon: () => null, // Hide tab icon
					tabBarButton: () => null, // Hide tab button in the default tab bar
				}}
			/>

			{/* Tab "Help center" */}
			<Tabs.Screen
				name='helpCenter'
				options={{
					tabBarIcon: () => null, // Hide tab icon
					tabBarButton: () => null, // Hide tab button in the default tab bar
				}}
			/>
		</Tabs>
	);
}
