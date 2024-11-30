import { decrement, increment } from "./counterSlice";
import { useAppDispatch, useAppSelector } from "../../app/hooks";

export function Counter() {
  const counter = useAppSelector((state) => state.counter.value);
  const dispatch = useAppDispatch();

  return (
    <div>
      <button onClick={() => dispatch(increment())}>Increment</button>
      <span>{counter}</span>
      <button onClick={() => dispatch(decrement())}>Decrement</button>
    </div>
  );
}
