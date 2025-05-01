export type TodoStatus = 'todo' | 'in-progress' | 'done';

export interface Todo {
  id: string;
  name: string;
  description: string;
  status: TodoStatus;
  createdAt: Date;
  updatedAt: Date;
}

export interface CreateTodoInput {
  name: string;
  description: string;
  status: TodoStatus;
}

export interface UpdateTodoInput {
  id: string;
  name?: string;
  description?: string;
  status?: TodoStatus;
}

export const TodoStatusOptions = [
  { value: 'todo', label: 'To Do' },
  { value: 'in-progress', label: 'In Progress' },
  { value: 'done', label: 'Done' },
];