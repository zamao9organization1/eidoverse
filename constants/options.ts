import { EventsStatus } from '@/hooks/useEvents';

type EventsFilterOption = {
	label: string;
	value: 'all' | EventsStatus;
};

export const tasksRemindersOptions = [
	{
		label: 'daily',
		value: 'daily',
	},
	{
		label: 'weekly',
		value: 'weekly',
	},
	{
		label: 'off',
		value: 'off',
	},
];

export const sessionTimeoutOptions = [
	{
		label: '15 min',
		value: '15 min',
	},
	{
		label: '1 hour',
		value: '1 hour',
	},
	{
		label: '4 hours',
		value: '4 hours',
	},
	{
		label: 'never',
		value: 'never',
	},
];

export const eventsFilterOptions: EventsFilterOption[] = [
	{
		label: 'All',
		value: 'all',
	},
	{
		label: 'Active',
		value: 'active',
	},
	{
		label: 'Joined',
		value: 'joined',
	},
	{
		label: 'Upcoming',
		value: 'upcoming',
	},
];
