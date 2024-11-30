import { TodoItem } from "./todo.type";
import { deleteTodo } from "./todoSlice";
import { useAppDispatch, useAppSelector } from "../../app/hooks";

const TodoList = () => {
  const dispatch = useAppDispatch();
  const todoItems: TodoItem[] = useAppSelector((state) => state.todo.value);

  const handleDelete = (todo: TodoItem) => {
    dispatch(deleteTodo(todo));
  };
  return (
    <div className="todo__list">
      {todoItems.map((todo) => {
        return (
          <div key={todo.text} className="todo__item">
            <span className="todo__text">{todo.text}</span>
            <button
              className="todo__btn-delete"
              onClick={() => {
                handleDelete(todo);
              }}
            >
              Delete
            </button>
          </div>
        );
      })}
    </div>
  );
};

export default TodoList;
