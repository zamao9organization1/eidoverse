import { createContext, ReactNode, useCallback, useContext, useState } from 'react';

// The menu state
interface ProfileContextMenuInterface {
	visible: boolean;
	showMenu: () => void;
	hideMenu: () => void;
	toggleMenu: () => void;
}

const ProfileContextMenuContext = createContext<ProfileContextMenuInterface | undefined>(undefined);

// Custom hook to manage profile context menu state
export const ProfileContextMenuProvider = ({ children }: { children: ReactNode }) => {
	// State of visibility
	const [visible, setVisible] = useState(false);

	// Shows the menu (visible = true)
	const showMenu = useCallback(() => setVisible(true), []);
	// Hides the menu (hide = false)
	const hideMenu = useCallback(() => setVisible(false), []);
	// Toggles menu visibility (hide/open)
	const toggleMenu = useCallback(() => setVisible((prev) => !prev), []);

	return (
		<ProfileContextMenuContext.Provider value={{ visible, showMenu, hideMenu, toggleMenu }}>
			{children}
		</ProfileContextMenuContext.Provider>
	);
};

export const useProfileContextMenu = () => {
	const context = useContext(ProfileContextMenuContext);
	if (!context) {
		throw new Error('useProfileContextMenu must be used within ProfileContextMenuProvider');
	}
	return context;
};
