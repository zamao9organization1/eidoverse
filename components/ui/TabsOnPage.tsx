import { Colors } from '@/constants/colors';
import { stylesGLobal } from '@/constants/styles';
import { typographyGlobal } from '@/constants/typography';
import { MaterialTopTabBarProps } from '@react-navigation/material-top-tabs';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function TabsOnPage(props: MaterialTopTabBarProps) {
	// Destructuring of state, methods, and screen navigation description
	const { state, navigation, descriptors } = props;

	// Handle tab press: navigate to the screen at the given index
	const onPress = (index: number) => {
		navigation.navigate(state.routes[index].name);
	};

	return (
		// Tabs Wrapper
		<View style={[styles.container]}>
			<View style={[stylesGLobal.tabsWrapper]}>
				{/* Tabs */}
				<View style={[stylesGLobal.tabs]}>
					{state.routes.map((route, index) => {
						// Check if this tab is currently active
						const isActive = state.index === index;
						// Get screen options (icon, label, etc.)
						const { options } = descriptors[route.key];

						// Extract tabBarIcon as a component (if provided)
						const Icon = options.tabBarIcon as React.ComponentType<any> | undefined;

						// Use tabBarLabel if it's a string; otherwise fall back to route name
						const label =
							typeof options.tabBarLabel === 'string' ? options.tabBarLabel : route.name;

						return (
							// Tab
							<TouchableOpacity
								key={route.key}
								style={[stylesGLobal.tabsItem, isActive && stylesGLobal.tabsItemIsActive]}
								onPress={() => onPress(index)}
							>
								{Icon ? (
									// Render icon if defined, with active/inactive colors
									<Icon
										focused={isActive}
										stroke={isActive ? Colors.mainBackground : Colors.text}
										fill={isActive ? Colors.mainBackground : Colors.text}
										size={24}
									/>
								) : (
									// Otherwise, render text label
									<Text
										style={[
											typographyGlobal.titleH3Tight,
											isActive && stylesGLobal.tabsItemActiveText,
										]}
									>
										{label}
									</Text>
								)}
							</TouchableOpacity>
						);
					})}
				</View>
			</View>
		</View>
	);
}

export const styles = StyleSheet.create({
	container: {
		paddingLeft: 15,
		paddingRight: 30,
	},
});
