import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { listenerMiddleware } from '../modules/Words/state/Words.effects';
import { wordSlice } from '../modules/Words/state/Words.reducer';
import { WordState } from '../modules/Words/state/Words.state';

export interface IState {
  word: WordState;
}
const rootReducer = combineReducers<IState>({ word: wordSlice.reducer });
export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().prepend(listenerMiddleware.middleware),
});

export type AppDispatch = typeof store.dispatch;
