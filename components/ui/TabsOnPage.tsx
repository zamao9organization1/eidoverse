import { stylesGLobal } from '@/constants/styles';
import { typographyGlobal } from '@/constants/typography';
import { MaterialTopTabBarProps } from '@react-navigation/material-top-tabs';
import { Text, TouchableOpacity, View } from 'react-native';

export default function TabsOnPage(props: MaterialTopTabBarProps) {
	const { state, navigation, descriptors } = props;

	const onPress = (index: number) => {
		navigation.navigate(state.routes[index].name);
	};

	return (
		// Tabs Wrapper
		<View style={[stylesGLobal.tabsWrapper]}>
			{/* Tabs */}
			<View style={[stylesGLobal.tabs]}>
				{state.routes.map((route, index) => {
					const isActive = state.index === index;
					const { options } = descriptors[route.key];
					const label = typeof options.tabBarLabel === 'string' ? options.tabBarLabel : route.name;

					return (
						// Tab
						<TouchableOpacity
							key={route.key}
							style={[stylesGLobal.tabsItem, isActive && stylesGLobal.tabsItemIsActive]}
							onPress={() => onPress(index)}
						>
							<Text
								style={[typographyGlobal.titleH3Tight, isActive && stylesGLobal.tabsItemActiveText]}
							>
								{label}
							</Text>
						</TouchableOpacity>
					);
				})}
			</View>
		</View>
	);
}
