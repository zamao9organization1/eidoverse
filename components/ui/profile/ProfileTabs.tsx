import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import React from 'react';
import TabsOnPage from '../TabsOnPage';
import ProfileAchievements from './ProfileAchievements';
import ProfileInformation from './ProfileInformation';

const Tab = createMaterialTopTabNavigator();

export default function ProfileTabs() {
	return (
		<Tab.Navigator
			tabBar={(props) => <TabsOnPage {...props} />}
			screenOptions={{
				animationEnabled: false, // Animation swipes off
				swipeEnabled: false, // Swipes Off
			}}
		>
			<Tab.Screen
				name='Profile'
				component={ProfileInformation}
				options={{ tabBarLabel: 'Information' }}
			/>
			<Tab.Screen
				name='ProfileAchievements'
				component={ProfileAchievements}
				options={{ tabBarLabel: 'Achievements' }}
			/>
		</Tab.Navigator>
	);
}
