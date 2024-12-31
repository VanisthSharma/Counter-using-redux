import { useDispatch } from "react-redux";
import css from "./control.module.css";
import { useRef } from "react";
export default function Control() {
  const valueAdd = useRef("");
  const valueSubtract = useRef("");

  const dispatchElements = useDispatch();

  const incrementFunc = () => {
    dispatchElements({
      type: "INCREMENT",
    });
  };

  const decrementFunc = () => {
    dispatchElements({
      type: "DECREMENT",
    });
  };
  const addFunc = () => {
    dispatchElements({
      type: "ADD",
      payload: {
        value: valueAdd.current.value,
      },
    });
    valueAdd.current.value = "";
  };
  const delFunc = () => {
    dispatchElements({
      type: "SUBTRACT",
      payload: {
        value: valueSubtract.current.value,
      },
    });
    valueSubtract.current.value = "";
  };

  return (
    <div className={css.container}>
      <div>
        <button onClick={incrementFunc}>Increment</button>
        <button onClick={decrementFunc}>Decrement</button>
      </div>
      <div>
        <div className={css.small}>
          <input
            type="number"
            ref={valueAdd}
            placeholder="Enter Number"
            maxLength={20}
          />
          <button onClick={addFunc}>Add</button>
        </div>
        <div className={css.small}>
          <input
            type="number"
            ref={valueSubtract}
            placeholder="Enter Number"
            maxLength={20}
          />
          <button onClick={delFunc}>Subtract</button>
        </div>
      </div>
    </div>
  );
}
