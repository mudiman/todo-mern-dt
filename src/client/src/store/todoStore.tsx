import create from "zustand";
import { v4 as uuidv4 } from "uuid";
import { Todo } from "../model/Todo";
import { toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import appConfig from "../config/app";


interface TodoState {
  todos: Todo[];
  getTodos: any;
  addTodo: (body: string) => void;
  removeTodo: (id: string) => void;
  updateTodo: (id: string, body: String, completed: boolean) => void;
}

const token = sessionStorage.getItem('token');

export const useStore = create<TodoState>((set) => ({
  // initial state
  todos: [],
  // methods for manipulating state
  getTodos: async () => {
    const response = await fetch(`${appConfig.apiHost}/api/todos`, {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      },
    })
    const latestTodos = await response.json();
    set({ todos: latestTodos })
    return latestTodos;
  },
  addTodo: async (body: String) => {
    const response: any = await fetch(`${appConfig.apiHost}/api/todos`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      },
      body: JSON.stringify({
        body: body,
        completed: false,
      })
    })
    const newTodo = await response.json();
    if (response.status == 201) {
      toast.success('todo registered successfully');
      set((state) => ({
        todos: [
          ...state.todos,
          newTodo
        ],
      }));
    } else {
      toast.success('Failed to register new todo');
    }
  },
  removeTodo: (id) => {
    set((state) => ({
      todos: state.todos.filter((todo) => todo.id !== id),
    }));
    fetch(`${appConfig.apiHost}/api/todos/${id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      },
    }).then((res) => {
      toast.success('Note deleted successfully');
    })
      .catch((error) => {
        console.log('Note not found', error);
        toast.error('Error deleting note.');
      });
  },
  updateTodo: (id, body, completed) => {
    set((state) => ({
      todos: state.todos.map((todo) =>
        todo.id === id
          ? ({ ...todo, completed: completed, body: body } as Todo)
          : todo
      ),
    }));
    fetch(`${appConfig.apiHost}/api/todos/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      },
      body: JSON.stringify({
        completed: completed,
        body: body,
      }),
    })
      .then((res) => {
        toast.success('Note updated successfully.');
      })
      .catch((error) => {
        console.log('Note not found', error);
        toast.error('Error updating note.');
      });
  },
}));