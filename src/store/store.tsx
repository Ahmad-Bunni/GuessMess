import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { homeSlice } from '../modules/Home/state/Home.reducer';
import { HomeState } from '../modules/Home/state/Home.state';
import { listenerMiddleware } from '../modules/Words/state/Words.effects';
import { wordSlice } from '../modules/Words/state/Words.reducer';
import { WordState } from '../modules/Words/state/Words.state';

export interface IState {
  word: WordState;
  home: HomeState;
}
const rootReducer = combineReducers<IState>({
  word: wordSlice.reducer,
  home: homeSlice.reducer,
});
export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().prepend(listenerMiddleware.middleware),
});

export type AppDispatch = typeof store.dispatch;
