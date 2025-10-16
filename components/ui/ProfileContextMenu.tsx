import {
	IconCoin,
	IconHelp,
	IconLogOut,
	IconLvl,
	IconProfile,
	IconTheme,
} from '@/components/ui/Icons';
import { Colors } from '@/constants/colors';
import { stylesGLobal } from '@/constants/styles';
import { typographyGlobal } from '@/constants/typography';
import { useRouter } from 'expo-router';
import React from 'react';
import { Pressable, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

// Props interface: defines contract for parent components
interface ProfileContextMenuProps {
	visible: boolean; // controls whether menu is rendered or hidden
	onClose: () => void; // callback to close menu (called on outside press or item select)
}

export const ProfileContextMenu: React.FC<ProfileContextMenuProps> = ({ visible, onClose }) => {
	const router = useRouter();

	// Get safe area insets to avoid notches/status bar
	const insets = useSafeAreaInsets();

	// Local state: manages dark theme toggle
	const [checked, setChecked] = React.useState<boolean>(true);

	// Early return: don't render anything if menu is hidden
	if (!visible) return null;

	// Handler: executes action and auto-closes menu (except for toggle switch)
	const handleMenuItemPress = (action: () => void) => {
		action();
		onClose();
	};

	const balance = 3000;
	const cloneLvl = 25;

	return (
		<GestureHandlerRootView style={StyleSheet.absoluteFill}>
			{/* Overlay background: captures taps outside the menu to close it */}
			<Pressable
				style={[StyleSheet.absoluteFill]} // fills entire screen
				onPress={onClose} // triggers menu close on outside tap
			/>

			{/* Pofile context menu */}
			<View
				style={[styles.popupWrapper, { top: insets.top + 90 }]}
				// Prevents touch events from bubbling up to the background Pressable (which would close the menu)
				onStartShouldSetResponder={() => true}
			>
				<View style={styles.popup}>
					{/* User */}
					<TouchableOpacity
						style={styles.userWrapper}
						onPress={() => {
							onClose();
							router.navigate('/profile');
						}}
					>
						{/* Profile icon */}
						<IconProfile stroke={Colors.text} fill={Colors.text} size={40} />

						{/* User name/email */}
						<View style={styles.user}>
							<Text style={typographyGlobal.titleH3Tight}>Jimmi Winchester</Text>
							<Text style={[typographyGlobal.titleCaption, styles.mail]}>blabla@gmail.com</Text>
						</View>
					</TouchableOpacity>

					{/* Balance */}
					<View style={styles.item}>
						{/* Balance icon */}
						<IconCoin stroke={Colors.text} fill={Colors.text} size={24} />

						<View style={styles.balanceWrapper}>
							<Text style={typographyGlobal.titleH3Tight}>Balance:</Text>

							<Text style={[typographyGlobal.titleH3Tight, styles.balance]}>{balance} TON</Text>
						</View>
					</View>

					{/* Dividing line */}
					<View style={stylesGLobal.dividingLine} />

					{/* Clone lvl */}
					<View style={styles.item}>
						{/* Clone lvl icon */}
						<IconLvl stroke={Colors.text} fill={Colors.text} size={24} />

						<View style={styles.lvlWrapper}>
							<Text style={typographyGlobal.titleH3Tight}>Clone lvl:</Text>
							<Text style={[typographyGlobal.titleH3Tight, styles.lvl]}>{cloneLvl}</Text>
						</View>
					</View>

					{/* Theme */}
					<View style={styles.item}>
						{/* Theme icon */}
						<IconTheme stroke={Colors.text} fill={Colors.text} size={24} />

						<Text style={typographyGlobal.titleH3Tight}>Dark theme</Text>

						{/* Theme switcher */}
						<Pressable
							style={[styles.track, checked ? styles.trackOn : styles.trackOff, { flexShrink: 0 }]}
							onPress={() => setChecked(!checked)} // переключатель не закрывает меню
							accessibilityRole='switch'
							accessibilityState={{ checked }}
							accessibilityLabel='Переключить темную тему'
						>
							<View style={styles.thumb} />
						</Pressable>
					</View>

					{/* Help center */}
					<TouchableOpacity
						style={[styles.item]}
						onPress={() => {
							onClose();
							router.navigate('/helpCenter');
						}}
					>
						{/* Help center icon */}
						<IconHelp stroke={Colors.text} fill={Colors.text} size={24} />

						<Text style={typographyGlobal.titleH3Tight}>Help center</Text>
					</TouchableOpacity>

					{/* Dividing line */}
					<View style={stylesGLobal.dividingLine} />

					{/* Log out */}
					<TouchableOpacity
						style={styles.item}
						onPress={() => handleMenuItemPress(() => console.log('Log out'))}
					>
						{/* Log out icon */}
						<IconLogOut stroke={Colors.text} fill={Colors.text} size={24} />

						<Text style={typographyGlobal.titleH3Tight}>Log out</Text>
					</TouchableOpacity>
				</View>
			</View>
		</GestureHandlerRootView>
	);
};

export const styles = StyleSheet.create({
	popupWrapper: {
		position: 'absolute',
		zIndex: 80,
		right: 30,
		width: 272,
		padding: 6,
		borderRadius: 15,
		backgroundColor: Colors.itemBackground,
	},
	popup: {
		paddingTop: 20,
		paddingRight: 14,
		paddingBottom: 20,
		paddingLeft: 14,
		gap: 14,
		backgroundColor: Colors.itemBackground,
		borderRadius: 10,
	},
	userWrapper: {
		flexDirection: 'row',
		alignItems: 'center',
		gap: 10,
	},
	user: {
		gap: 4,
		flex: 1,
	},
	mail: {
		color: Colors.textDisabled,
	},
	item: {
		flex: 1,
		flexDirection: 'row',
		alignItems: 'center',
		gap: 8,
		paddingTop: 6,
		paddingRight: 4,
		paddingBottom: 6,
		paddingLeft: 4,
		borderRadius: 10,
	},
	itemActive: {
		backgroundColor: Colors.title,
	},
	balanceWrapper: {
		flexDirection: 'row',
		alignItems: 'center',
		flex: 1,
		gap: 8,
	},
	balance: {
		flexShrink: 0,
		color: Colors.green,
	},
	lvlWrapper: {
		flexDirection: 'row',
		alignItems: 'center',
		flex: 1,
		gap: 8,
	},
	lvl: {
		flexShrink: 0,
		color: Colors.red,
	},

	// Switcher
	track: {
		flexDirection: 'row',
		justifyContent: 'flex-start',
		width: 44,
		height: 24,
		borderRadius: 15,
		padding: 2,
		marginLeft: 'auto',
	},
	trackOn: {
		backgroundColor: Colors.blue,
		justifyContent: 'flex-end',
	},
	trackOff: {
		backgroundColor: Colors.itemBackground,
	},
	thumb: {
		width: 20,
		height: 20,
		borderRadius: 50,
		backgroundColor: Colors.title,
	},
});
