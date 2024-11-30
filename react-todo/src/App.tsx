import "./App.css";
import TodoForm from "./features/todo/TodoForm";
import TodoList from "./features/todo/TodoList";

function App() {
  return (
    <div className="App">
      <TodoForm></TodoForm>
      <TodoList></TodoList>
    </div>
  );
}

export default App;
