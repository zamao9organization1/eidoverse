// app/(tabs)/_layout.tsx
import { IconHome, IconWallet } from '@/components/ui/Icons';
import VerticalTabBar from '@/components/ui/verticalTabBar';
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
		</Tabs>
	);
}
