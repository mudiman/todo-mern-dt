import create from "zustand";
import { v4 as uuidv4 } from "uuid";
import { Todo } from "../model/Todo";
import { toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';


interface TodoState {
    todos: Todo[];
    getTodos: any;
    addTodo: (body: string) => void;
    removeTodo: (id: string) => void;
    updateTodo: (id: string, body: String, completed: boolean) => void;
  }

  export const useStore = create<TodoState>((set) => ({
    // initial state
    todos: [],
    // methods for manipulating state
    getTodos: async () => {
        const response = await fetch('/api/todos')
        const latestTodos = await response.json();
        set({ todos: latestTodos.todos })
        return latestTodos;
    },
    addTodo: (body: String) => {
        const newTodo = {
            id: uuidv4(),
            body,
            completed: false,
          } as Todo;

      set((state) => ({
        todos: [
          ...state.todos,
          newTodo
        ],
      }));
      fetch('/api/todos', {
        method: 'POST',
        body: JSON.stringify(newTodo),
      })
    },
    removeTodo: (id) => {
      set((state) => ({
        todos: state.todos.filter((todo) => todo.id !== id),
      }));
      fetch(`/api/todos/${id}`, { method: 'DELETE' })
      .then((res) => {
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
      fetch(`/api/todos/${id}`, {
        method: 'PATCH',
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