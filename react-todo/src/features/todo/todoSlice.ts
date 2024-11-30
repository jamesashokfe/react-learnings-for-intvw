import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { TodoItem } from "./todo.type";
import { RootState } from "../../app/store";

export type TodosState = {
  value: TodoItem[];
};
const initialState: TodosState = {
  value: [],
};

export const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addTodo: (state, action: PayloadAction<string>) => {
      state.value.push({
        text: action.payload,
      });
    },
    deleteTodo: (state, action: PayloadAction<TodoItem>) => {
      state.value = state.value.filter(
        (todo) => todo.text !== action.payload.text
      );
    },
  },
});

export const { addTodo, deleteTodo } = todoSlice.actions;
export const selectTodos = (state: RootState) => state.todo.value;
export default todoSlice.reducer;
