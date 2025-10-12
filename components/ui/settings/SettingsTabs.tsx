import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import React from 'react';
import { IconAdvanced, IconDataAndPrivacy, IconNotifications, IconSecurity } from '../Icons';
import TabsOnPage from '../TabsOnPage';
import SettingsAdvanced from './SettingsAdvanced';
import SettingsDataAndPrivacy from './SettingsDataAndPrivacy';
import SettingsNotifications from './SettingsNotifications';
import SettingsSecurity from './SettingsSecurity';

const Tab = createMaterialTopTabNavigator();

export default function SettingsTabs() {
	return (
		<Tab.Navigator
			tabBar={(props) => <TabsOnPage {...props} />}
			screenOptions={{
				animationEnabled: false, // Animation swipes off
				swipeEnabled: false, // Swipes Off
			}}
		>
			<Tab.Screen
				name='Notifications'
				component={SettingsNotifications}
				options={{ tabBarLabel: 'Notifications', tabBarIcon: IconNotifications }}
			/>
			<Tab.Screen
				name='Security'
				component={SettingsSecurity}
				options={{ tabBarLabel: 'Security', tabBarIcon: IconSecurity }}
			/>
			<Tab.Screen
				name='Data & privacy'
				component={SettingsDataAndPrivacy}
				options={{ tabBarLabel: 'Data & privacy', tabBarIcon: IconDataAndPrivacy }}
			/>
			<Tab.Screen
				name='Advanced'
				component={SettingsAdvanced}
				options={{ tabBarLabel: 'Advanced', tabBarIcon: IconAdvanced }}
			/>
		</Tab.Navigator>
	);
}
