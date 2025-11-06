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
	participants: number;
	daysUntilStart: string;
	daysRemaining: string;
	price: number;
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

				const rawData: any[] = await response.json();

				const cleanedData = rawData.map((event) => {
					let cleanParticipants = 0;
					if (typeof event.participants === 'string') {
						cleanParticipants = Number(event.participants.replace(/\s/g, ''));
					} else if (typeof event.participants === 'number') {
						cleanParticipants = event.participants;
					}

					let cleanPrice = 0;
					if (typeof event.price === 'string') {
						cleanPrice = Number(event.price.replace(/\s/g, ''));
					} else if (typeof event.price === 'number') {
						cleanPrice = event.price;
					}

					const cleanAddedDate = typeof event.addedDate === 'string' ? event.addedDate : '—';

					return {
						...event,
						addedDate: cleanAddedDate,
						participants: isNaN(cleanParticipants) ? 0 : cleanParticipants,
						price: isNaN(cleanPrice) ? 0 : cleanPrice,
					};
				});

				setEvents(cleanedData as EventsInterface[]);
			} catch (err) {
				const errorMessage = err instanceof Error ? err.message : 'Unknown error';
				console.error('Error loading events:', errorMessage);
				setError(errorMessage);
			} finally {
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

			const rawUpdatedEvent: any = await response.json();

			const cleanUpdatedEvent = {
				...rawUpdatedEvent,
				addedDate: typeof rawUpdatedEvent.addedDate === 'string' ? rawUpdatedEvent.addedDate : '—',
				participants: isNaN(Number(String(rawUpdatedEvent.participants).replace(/\s/g, '')))
					? 0
					: Number(String(rawUpdatedEvent.participants).replace(/\s/g, '')),
				price: isNaN(Number(String(rawUpdatedEvent.price).replace(/\s/g, '')))
					? 0
					: Number(String(rawUpdatedEvent.price).replace(/\s/g, '')),
			};

			setEvents((prev) => prev.map((event) => (event.id === eventId ? cleanUpdatedEvent : event)));
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
