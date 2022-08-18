import React, { useEffect } from 'react';
import TodoItem from '../../components/Todo';
import { useStore } from '../../store/todoStore';


const TodoIndexPage: React.FC = () => {

  const { getTodos, todos } = useStore();
  useEffect(() => {
    getTodos();
  }, [])

  return (
    <div>
      {todos &&
              todos.map((todo) => (
                <TodoItem
                  key={Math.random()}
                  id={todo.id}
                  body={todo.body}
                  completed={todo.completed}
                />
              ))}
    </div>
  );
}

export default TodoIndexPage;