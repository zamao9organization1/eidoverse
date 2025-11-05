// hooks/useEvents.ts
import { useEffect, useState } from 'react';
import { Alert } from 'react-native';

// Event status types
export type EventsStatus = 'upcoming' | 'active' | 'joined';
// Event difficulty types
export type EventsDifficulty = 'easy' | 'medium' | 'hard';

// Data interface of a single event
export interface EventsInterface {
	id: number;
	title: string;
	description: string;
	status: EventsStatus;
	difficulty: EventsDifficulty;
	addedDate: string;
	participants: string;
	daysUntilStart: string;
	daysRemaining: string;
	price: string;
}

export function useEvents() {
	// State: array of events
	const [events, setEvents] = useState<EventsInterface[]>([]);
	// Status: whether loading is in progress
	const [loading, setLoading] = useState<boolean>(true);
	// Status: loading error (null — no error)
	const [error, setError] = useState<string | null>(null);

	useEffect(() => {
		const fetchEvents = async () => {
			// Turn on the loading indicator
			setLoading(true);
			// Reset the previous error
			setError(null);

			try {
				const response = await fetch('http://10.0.2.2:3001/events');
				if (!response.ok) {
					throw new Error(`HTTP error! status: ${response.status}`);
				}

				const data: EventsInterface[] = await response.json();
				setEvents(data);
			} catch (err) {
				const errorMessage = err instanceof Error ? err.message : 'Unknown error';
				console.error('Error loading events:', errorMessage);
				setError(errorMessage);
			} finally {
				// In any case, turn off the download
				setLoading(false);
			}
		};

		fetchEvents();
	}, []);

	const registerForEvent = async (eventId: number) => {
		setLoading(true);
		try {
			const response = await fetch(`http://10.0.2.2:3001/events/${eventId}/register`, {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
				},
			});

			if (!response.ok) {
				const errorText = await response.text();
				throw new Error(errorText || 'Failed to register');
			}

			// Предполагаем, что сервер возвращает обновлённое событие
			const updatedEvent: EventsInterface = await response.json();

			// Обновляем локальный список событий
			setEvents((prev) => prev.map((event) => (event.id === eventId ? updatedEvent : event)));

			// Успешно — можно показать уведомление или ничего не делать
			// Alert.alert('Success', 'You are now registered for this event!');
		} catch (err) {
			const errorMessage = err instanceof Error ? err.message : 'Unknown error';
			console.error('Registration error:', errorMessage);
			Alert.alert('Registration failed', errorMessage);
		} finally {
			setLoading(false);
		}
	};

	return { events, loading, error, registerForEvent };
}
