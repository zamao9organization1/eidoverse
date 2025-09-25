// components/ui/VerticalTabBar.tsx
import { Colors } from '@/constants/colors';
import { BottomTabBarProps } from '@react-navigation/bottom-tabs';
import { useState } from 'react';
import { Pressable, StyleSheet, TouchableOpacity, View } from 'react-native';

export default function VerticalTabBar({ state, descriptors, navigation }: BottomTabBarProps) {
	// Tabs container state
	const [containerIsActive, setContainerIsActive] = useState<boolean>(false);
	// List of tab routes that should be visible in the custom tab bar
	const visibleTabNames = ['index', 'wallet', 'tasks', 'settings'];

	return (
		<TouchableOpacity
			style={[containerIsActive === true ? styles.containerIsActive : styles.container]}
			onPress={() => setContainerIsActive(true)}
		>
			<View style={[styles.navigation]}>
				{state.routes.map((route, index) => {
					// Skip rendering hidden tabs (e.g. profileSettings) in the tab bar
					if (!visibleTabNames.includes(route.name)) return null;

					// Getting screen options (icon, label, availability, etc.)
					const { options } = descriptors[route.key];

					// Index current active tab
					const isActive = state.index === index;
					// The icon that we passed in options.tabBarIcon.
					const Icon = options.tabBarIcon;

					return (
						<Pressable
							key={route.key} // Unique key for React
							accessibilityState={isActive ? { selected: true } : {}} // For accessibility: mark the active tab as 'selected'.
							onPress={() => {
								const event = navigation.emit({
									type: 'tabPress',
									target: route.key,
									canPreventDefault: true,
								}); // Generating the 'tabPress' event (for subscriptions and preventing navigation)

								if (!isActive && !event.defaultPrevented) {
									navigation.navigate(route.name, route.params);
								} // We proceed only if the tab is not active and the event has not been canceled.
								setContainerIsActive(false);
							}}
							style={[styles.navigationItem, isActive && styles.navigationItemIsActive]} // Tab style
						>
							{/* We display the icon if it is set */}
							{Icon && <Icon focused={isActive} color={''} size={24} />}
						</Pressable>
					);
				})}
			</View>
		</TouchableOpacity>
	);
}

const styles = StyleSheet.create({
	container: {
		position: 'absolute',
		zIndex: 999,
		right: -49,
		top: 0,
		bottom: 0,
		width: 64,
		backgroundColor: Colors.itemBackground,
		justifyContent: 'flex-end',
		alignItems: 'center',
		gap: 10,
		paddingTop: 160,
		paddingRight: 6,
		paddingBottom: 160,
		paddingLeft: 6,
	},
	containerIsActive: {
		position: 'absolute',
		zIndex: 999,
		right: 0,
		top: 0,
		bottom: 0,
		width: 64,
		backgroundColor: Colors.itemBackground,
		justifyContent: 'flex-end',
		alignItems: 'center',
		gap: 10,
		paddingTop: 160,
		paddingRight: 6,
		paddingBottom: 160,
		paddingLeft: 6,
	},
	navigation: {
		padding: 6,
		gap: 10,
		backgroundColor: Colors.itemBackground,
		borderRadius: 15,
	},
	navigationItem: {
		width: 40,
		height: 40,
		justifyContent: 'center',
		alignItems: 'center',
		borderRadius: 10,
	},
	navigationItemIsActive: {
		backgroundColor: Colors.title,
	},
});
