import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { CreateTodoInput, Todo, TodoStatus, UpdateTodoInput } from '@/types/todo';
import { generateId } from '@/lib/utils';

interface TodoState {
  todos: Todo[];
  filteredStatus: TodoStatus | 'all';
  addTodo: (todo: CreateTodoInput) => void;
  updateTodo: (todo: UpdateTodoInput) => void;
  deleteTodo: (id: string) => void;
  setFilteredStatus: (status: TodoStatus | 'all') => void;
  getFilteredTodos: () => Todo[];
}

export const useTodoStore = create<TodoState>()(
  persist(
    (set, get) => ({
      todos: [],
      filteredStatus: 'all',
      
      addTodo: (todoInput: CreateTodoInput) => {
        const now = new Date();
        const newTodo: Todo = {
          id: generateId(),
          ...todoInput,
          createdAt: now,
          updatedAt: now,
        };
        
        set((state) => ({
          todos: [...state.todos, newTodo],
        }));
      },
      
      updateTodo: (todoUpdate: UpdateTodoInput) => {
        set((state) => ({
          todos: state.todos.map((todo) => {
            if (todo.id === todoUpdate.id) {
              return {
                ...todo,
                ...todoUpdate,
                updatedAt: new Date(),
              };
            }
            return todo;
          }),
        }));
      },
      
      deleteTodo: (id: string) => {
        set((state) => ({
          todos: state.todos.filter((todo) => todo.id !== id),
        }));
      },
      
      setFilteredStatus: (status: TodoStatus | 'all') => {
        set({ filteredStatus: status });
      },
      
      getFilteredTodos: () => {
        const { todos, filteredStatus } = get();
        if (filteredStatus === 'all') {
          return todos;
        }
        return todos.filter((todo) => todo.status === filteredStatus);
      },
    }),
    {
      name: 'todo-storage',
    }
  )
);