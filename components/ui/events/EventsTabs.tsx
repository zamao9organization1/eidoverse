import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import React from 'react';
import { IconCalendar, IconCompetition } from '../Icons';
import TabsOnPage from '../TabsOnPage';
import AllEvents from './AllEvents';
import Leaderboard from './Leaderboard';

const Tab = createMaterialTopTabNavigator();

export default function EventsTabs() {
	return (
		<Tab.Navigator
			tabBar={(props) => <TabsOnPage {...props} />}
			screenOptions={{
				animationEnabled: false, // Animation swipes off
				swipeEnabled: false, // Swipes Off
			}}
		>
			<Tab.Screen
				name='AllEvents'
				component={AllEvents}
				options={{ tabBarLabel: 'AllEvents', tabBarIcon: IconCalendar }}
			/>
			<Tab.Screen
				name='Leaderboard'
				component={Leaderboard}
				options={{ tabBarLabel: 'Leaderboard', tabBarIcon: IconCompetition }}
			/>
		</Tab.Navigator>
	);
}
