import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  decrement,
  increment,
  incrementByAmount,
  fetchIncrement,
} from "../features/counter/counterSlice";

export default function Counter2() {
  const counter = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  return (
    <div>
      <div>
        <button
          onClick={() => {
            dispatch(increment());
          }}
        >
          Increment{" "}
        </button>
        <button
          onClick={() => {
            dispatch(fetchIncrement(counter));
          }}
        >
          fetchIncrement + 2
        </button>
        <span>{counter}</span>
        <button
          onClick={() => {
            dispatch(decrement());
          }}
        >
          Decrement{" "}
        </button>
        <button
          onClick={() => {
            dispatch(incrementByAmount(5));
          }}
        >
          IncrementAmount + 5{" "}
        </button>
      </div>
    </div>
  );
}
