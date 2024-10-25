export type Task = {
	id: number;
	name: string;
	description: string | null;
	status: 'pending' | 'complete';
}