import { ViewStyle } from 'react-native';

export const paddings = {
	// Одинаковые отступы
	s6: { padding: 6 } as ViewStyle,
	s14: { padding: 14 } as ViewStyle,

	// Вертикальные и горизонтальные
	v4h8: { paddingVertical: 4, paddingHorizontal: 8 } as ViewStyle,

	// Только одно направление
	pb60: { paddingBottom: 60 } as ViewStyle,

	// Только вертикальные / горизонтальные (если нужно)
	// v16: { paddingVertical: 16 } as ViewStyle,
	// h24: { paddingHorizontal: 24 } as ViewStyle,
} as const;

// Экспортируем тип для TypeScript
export type PaddingKeys = keyof typeof paddings;
