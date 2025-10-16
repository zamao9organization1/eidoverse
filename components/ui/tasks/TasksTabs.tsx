import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import React from 'react';
import TabsOnPage from '../TabsOnPage';
import AllTasks from './AllTasks';
import DoneTasks from './DoneTasks';

const Tab = createMaterialTopTabNavigator();

export default function TasksTabs() {
	return (
		<Tab.Navigator
			tabBar={(props) => <TabsOnPage {...props} />}
			screenOptions={{
				animationEnabled: false, // Animation swipes off
				swipeEnabled: false, // Swipes Off
			}}
		>
			<Tab.Screen name='All' component={AllTasks} options={{ tabBarLabel: 'All' }} />
			<Tab.Screen name='Done' component={DoneTasks} options={{ tabBarLabel: 'Done' }} />
		</Tab.Navigator>
	);
}
