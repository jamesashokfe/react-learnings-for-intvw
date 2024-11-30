import { FormEvent, useState } from "react";
import { addTodo } from "./todoSlice";
import { useAppDispatch } from "../../app/hooks";

const TodoForm = () => {
  const dispatch = useAppDispatch();
  const [newTodo, setNewTodo] = useState("");

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(addTodo(newTodo));
    setNewTodo("");
  };
  const handleInput = (e: FormEvent<HTMLInputElement>) => {
    setNewTodo((e.target as HTMLInputElement).value);
  };

  return (
    <form className="todo__form" onSubmit={handleSubmit}>
      <input
        type="text"
        name="todo-add"
        className="todo__txt-new"
        value={newTodo}
        onInput={handleInput}
      />
      <button type="submit" className="todo__btn-add">
        Add
      </button>
    </form>
  );
};

export default TodoForm;
