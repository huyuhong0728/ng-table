import { createReducer, on, ActionReducer, MetaReducer } from "@ngrx/store";
import { ADD, DEL, Reset, ADDDATA, DELDATA, GETDATA } from "./counter.actions";

export const initCount = 0;

const _countReducer = createReducer(
  initCount,
  on(ADD, (state) => state + 1),
  on(DEL, (state) => state - 1),
  on(Reset, (state) => 0)
);

export function countReducer(state, action) {
  return _countReducer(state, action);
}

export const initData = [
  {
    a: 1,
    b: 2,
  },
];

const _changeData = createReducer(
  initData,
  on(ADDDATA, (state) => [...state, { a: 3, b: 3 }]),
  on(DELDATA, (state) => state.filter((item) => item.a == 3)),
  on(GETDATA, (state, index) => {
    // console.log(state);
    // console.log(index);
    return state;
  })
);

export function changeData(state, action) {
  return _changeData(state, action);
}

// console.log all actions
export function debug(reducer: ActionReducer<any>): ActionReducer<any> {
  return function (state, action) {
    // console.log("state", state);
    // console.log("action", action);

    return reducer(state, action);
  };
}

export const metaReducers: MetaReducer<any>[] = [debug];
