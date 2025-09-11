// hooks/useTasks.ts
import { TasksInterface } from '@/types/tasks';
import { useEffect, useState } from 'react';

export const useTasks = (filterDone: boolean | null = null) => {
	// State: array of tasks
	const [tasks, setTasks] = useState<TasksInterface[]>([]);
	// State: loading indicator
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		const fetchTasks = async () => {
			try {
				setLoading(true);
				const response = await fetch('http://10.0.2.2:3001/tasks');
				if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);

				let data: TasksInterface[] = await response.json();

				// Filtering: if filter is set, keep only matching tasks
				if (filterDone !== null) {
					data = data.filter((task) => task.isDone === filterDone);
				}

				// Sort by date — newest first (descending)
				data.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

				// Sort for "All tasks" (when filterDone === null):
				// First: incomplete tasks (isDone: false), then completed (isDone: true)
				// Within each group: sort by date (newest first)
				if (filterDone === null) {
					data.sort((a, b) => {
						if (a.isDone !== b.isDone) {
							return a.isDone ? 1 : -1; // false → 0 (earlier), true → 1 (later)
						}
						return new Date(b.date).getTime() - new Date(a.date).getTime(); // by date
					});
				}

				// Save processed tasks to state
				setTasks(data);
			} catch (error) {
				// Log error if something goes wrong
				console.error('Ошибка при загрузке задач:', error);
			} finally {
				// Always turn off loading state, even if error occurred
				setLoading(false);
			}
		};

		fetchTasks();
		// Re-run effect when `filterDone` changes
	}, [filterDone]);

	// Return tasks array and loading state to component
	return { tasks, loading };
};
