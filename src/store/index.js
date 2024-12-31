import { createStore } from "redux";
const INITIAL = {
  count: 0,
};

const CountReducer = (store = INITIAL, action) => {
  let newVal = store;
  if (action.type === "INCREMENT") {
    newVal = { count: newVal.count + 1 };
  } else if (action.type === "DECREMENT" && !newVal.count <= 0) {
    newVal = { count: newVal.count - 1 };
  } else if (action.type === "ADD") {
    if (!isNaN(parseInt(action.payload.value))) {
      newVal = { count: newVal.count + parseInt(action.payload.value) };
    }
  } else if (action.type === "SUBTRACT") {
    if (!isNaN(parseInt(action.payload.value))) {
      newVal = { count: newVal.count - parseInt(action.payload.value) };
    }
  }
  return newVal;
};

const store = createStore(CountReducer);
export default store;
