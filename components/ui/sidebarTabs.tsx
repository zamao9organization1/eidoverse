import { Colors } from '@/constants/colors';
import { usePathname, useRouter } from 'expo-router';
import React, { useState } from 'react';
import { StyleSheet, TouchableOpacity, View } from 'react-native';
import { IconHome, IconWallet } from './Icons';

// Available routes — strict typing for safety
type TabRoute = '/' | '/wallet' | '/tasks';

// One tab types
type TabItem = {
	name: string;
	icon: React.ComponentType<{ size?: number; fill?: string; stroke?: string }>;
	route: TabRoute;
};

// The tab list is the central navigation structure.
const navigationTabs: readonly TabItem[] = [
	{ name: 'Home', icon: IconHome, route: '/' },
	{ name: 'Wallet', icon: IconWallet, route: '/wallet' },
] as const;

export default function SidebarTabs() {
	const router = useRouter();
	const pathname = usePathname(); // Current route
	const [isOpen, setIsOpen] = useState<boolean>(false); // State navigation tabs

	// click to switch to tab
	const handleTabPress = (tab: TabItem) => {
		if (pathname === tab.route) {
			setIsOpen(false);
			return;
		}

		router.push({ pathname: tab.route });
		setIsOpen(false);
	};

	return (
		<TouchableOpacity
			style={isOpen === true ? styles.tabsNavigationIsOpen : styles.tabsNavigation}
			onPress={() => setIsOpen(true)}
		>
			<View style={styles.tabsContainer}>
				{navigationTabs.map((element) => (
					<TouchableOpacity
						key={element.name}
						style={[styles.tab, pathname === element.route ? styles.tabIsActive : null]}
						onPress={() => handleTabPress(element)}
					>
						<element.icon
							size={24}
							fill={pathname === element.route ? Colors.title : Colors.text}
							stroke={pathname === element.route ? Colors.title : Colors.text}
						/>
					</TouchableOpacity>
				))}
			</View>
		</TouchableOpacity>
	);
}

const styles = StyleSheet.create({
	tabsNavigation: {
		position: 'absolute',
		right: -49,
		top: 0,
		bottom: 0,
		width: 64,
		zIndex: 999,
		justifyContent: 'flex-end',
		paddingTop: 160,
		paddingRight: 6,
		paddingBottom: 160,
		paddingLeft: 6,
		backgroundColor: Colors.itemBackground,
	},
	tabsNavigationIsOpen: {
		position: 'absolute',
		right: 0,
		top: 0,
		bottom: 0,
		width: 64,
		zIndex: 999,
		justifyContent: 'flex-end',
		paddingTop: 160,
		paddingRight: 6,
		paddingBottom: 160,
		paddingLeft: 6,
		backgroundColor: Colors.itemBackground,
	},
	tabsContainer: {
		justifyContent: 'center',
		alignItems: 'center',
		gap: 10,
		padding: 6,
		borderRadius: 15,
		backgroundColor: Colors.itemBackground,
	},
	tab: {
		width: 40,
		height: 40,
		justifyContent: 'center',
		alignItems: 'center',
		borderRadius: 10,
		backgroundColor: 'transparent',
	},
	tabIsActive: {
		backgroundColor: 'rgba(255,255,255,0.2)',
	},
});
