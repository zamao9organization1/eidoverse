import { useCallback, useState } from 'react';

// The menu state
interface ProfileContextMenuState {
	visible: boolean;
}

// Custom hook to manage profile context menu state
export const useProfileContextMenu = () => {
	// State of visibility
	const [visible, setVisible] = useState(false);

	// Shows the menu (visible = true)
	const showMenu = useCallback(() => {
		setVisible(true);
	}, []);

	// Hides the menu (hide = false)
	const hideMenu = useCallback(() => {
		setVisible(false);
	}, []);

	// Toggles menu visibility (hide/open)
	const toggleMenu = useCallback(() => {
		setVisible((prev) => !prev);
	}, []);

	return {
		visible,
		showMenu,
		hideMenu,
		toggleMenu,
	};
};
