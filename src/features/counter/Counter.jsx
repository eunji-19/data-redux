import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { decrement, increment, incrementByAmount } from "./counterSlice";

export default function Counter() {
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
