import {
  createAction,
  props,
  createFeatureSelector,
  createSelector,
} from "@ngrx/store";

export const ADD = createAction(`ADD COUNT`);
export const DEL = createAction(`DEL COUNT`);
export const Reset = createAction(`RESET COUNT`);

export const GETDATA = createAction(
  "GETDATA",
  props<{ name: string; sex: string }>()
);
export const ADDDATA = createAction("ADDDATA");
export const DELDATA = createAction("DELDATA");

export interface FeatureState {
  counter: number;
}

export interface AppState {
  feature: FeatureState;
}

export const featureSelect = (state: AppState) => state.feature;

export const featureSelectCounter = createSelector(
  featureSelect,
  (state: FeatureState) => state.counter
);
